import Vue from 'vue';
import VueRouter from 'vue-router';

import Navigation from 'components/Navigation/navigation';
import Loader from 'components/Loader/Loader';
import store from 'src/store';

Vue.use(VueRouter);

import 'src/config/http';
import routes from 'src/routes';
import 'src/style.scss';

export const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

new Vue({
  router,
  components: {
    Navigation,
    Loader
  },

  store,

  created(){
    store.dispatch('countIncrement');
    store.dispatch('categoryNumberChange', 12);
  }
}).$mount('#app');
