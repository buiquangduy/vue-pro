import Vue from 'vue';

import template from './index.html';

import store from '../../store';
import categoryApi from '../../api/category';
import * as constantsConfig from 'src/config/constants';
import { mapActions } from 'vuex';

const animation = 'flipInX';
const animationDelay = 25; // in ms

export default Vue.extend({
  template,

  data() {
    return {
      categories: [],
      categoriesFilter: '',
      checkCategories: [],
      isCheckAll: false,
      message: null
    };
  },

  computed: {
    filteredCategories() {
      return store.getters.categories.filter((category) => category.name.toLowerCase().indexOf(this.categoriesFilter.toLowerCase()) !== -1);
    },
    listStatus() {return constantsConfig.LIST_STATUS;},
    categoryType() {return constantsConfig.CATEGORY_TYPE;},
  },

  created(){
    this.fetchCategories();
    this.categories = store.getters.categories;
  },

  methods: {
    fetchCategories(){
      let listCategories = categoryApi.getCategories();
      store.dispatch('setCategory', listCategories);
      return listCategories;
    },

    // Methods for transitions
    handleBeforeEnter(el) {
      el.style.opacity = 0;
      el.classList.add('animated');
    },

    showMessage(message = {}, timeout = 2000){
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, timeout);
    },

    handleEnter(el) {
      const delay = el.dataset.index * animationDelay;
      setTimeout(() => {
        el.style.opacity = 1;
        el.classList.add(animation);
      }, delay);
    },

    delCategory(category){
      if (window.confirm('Are you sure?')) {
        let apiResult = categoryApi.deleteCategory(this.$route.params.id);
        if (apiResult.status) {
          this.category = apiResult.data;
          this.deleteCategory(category);
          console.log(store.getters.categories);

          this.showMessage({
            type: 'success',
            text: 'Category Deleted!'
          });
        } else {

          // Handle error...
          this.showMessage({
            type: 'danger',
            text: apiResult.message
          });
        }
      }
      return false;
    },

    checkCategory() {
      if (store.getters.categories.length === this.checkCategories.length) {
        this.isCheckAll = true;
      } else {
        this.isCheckAll = false;
      }
    },
    checkAll() {
      if (this.isCheckAll) {
        let listCategories = store.getters.categories;
        this.checkCategories = listCategories.map(function(category) {
          return category.id;
        });
      } else {
        this.checkCategories = [];
      }
    },
    delCheckboxCategory() {
      if (this.checkCategories.length === 0) {
        window.alert('No category selected!');
        return false;
      }
      if (window.confirm('Are you sure?')) {
        let apiResult = categoryApi.deleteListCategory(this.checkCategories);
        if (apiResult.status) {
          for (let i = 0; i < this.checkCategories.length; i++) {
            let id = this.checkCategories[i];
            let category = categoryApi.getCategory(id);
            this.deleteCategory(category);
          }

          this.showMessage({
            type: 'success',
            text: 'Category Deleted!'
          });
        } else {

          // Handle error...
          this.showMessage({
            type: 'danger',
            text: apiResult.message
          });
        }
      }
      return true;
    },

    ...mapActions([
      'deleteCategory'
    ])
  }
});
