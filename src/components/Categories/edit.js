import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import template from './edit.html';
import { mapState, mapActions } from 'vuex';
import store from '../../store';
import categoryApi from '../../api/category';
import * as constantsConfig from 'src/config/constants';

export default Vue.extend({
  template,
  data() {
    return {
      category: {},
      message: null,
      listStatus: constantsConfig.LIST_STATUS,
      categoryType: constantsConfig.CATEGORY_TYPE
    };
  },
  computed: {
    localNumber() {
      return 100;
    },
    ...mapState({
      categoryNumber: (state) => {
        return state.category.categoryNumber;
      }
    })
  },
  created(){
    this.fetchCategory();
  },
  methods: {
    fetchCategory(){
      let category = categoryApi.getCategory(this.$route.params.id);
      if (category === undefined) {
        category = {};
      }
      this.category = category;
    },
    handleSubmit(){
      this.$validator.validateAll().then((success) => {
        if (success) {
          return this.saveCategory();
        }

        return this;
      });
    },

    showMessage(message = {}, timeout = 2000){
      this.message = message;
      setTimeout(() => {
        this.message = null;
      }, timeout);
    },

    saveCategory(){
      let apiResult = categoryApi.updateCategory(this.$route.params.id, this.category);
      if (apiResult.status) {
        this.category = apiResult.data;
        this.updateCategory(this.category);
        console.log(store.getters.categories);

        this.showMessage({
          type: 'success',
          text: 'Category Updated!'
        });
      } else {
      
        // Handle error...
        this.showMessage({
          type: 'danger',
          text: apiResult.message
        });
      }
    },
    ...mapActions([
      'categoryNumberChange',
      'addCategory',
      'updateCategory'
    ])
  }
});
