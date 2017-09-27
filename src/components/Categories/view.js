import Vue from 'vue';

import template from './view.html';

export default Vue.extend({
  template,

  data() {
    return {
      category: { }
    };
  },

  created(){
    this.fetchCategory();
  },

  methods: {
    fetchCategory(){
    }
  }
});
