import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';
import categoryModule from './modules/category';

Vue.use(Vuex);

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0,
  isLoading: false
};

// getters are functions
const getters = {
  isNotLoading: (state) => {
    return !state.isLoading;
  }
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules: {
    category: categoryModule
  }
});
