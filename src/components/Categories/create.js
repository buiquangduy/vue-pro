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
      categoryType: constantsConfig.CATEGORY_TYPE,
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
  methods: {
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
      let apiResult = categoryApi.createCategory(this.category);
      if (apiResult.status) {
        this.category = apiResult.data;
        this.addCategory(this.category);
        console.log(store.getters.categories);

        this.showMessage({
          type: 'success',
          text: 'Category created!'
        });

        // We need to reset the fields after successfull request
        this.fields.reset();
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
      'addCategory'
    ])
  }
});
