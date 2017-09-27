import * as types from '../mutation-types';

// initial state
const state = {
  categoryNumber: 10,
  categoriesFilter: '',
  categories: []
};

// getters
const getters = {
  categoryNumber: state => state.categoryNumber,
  categoriesFilter: state => state.categoriesFilter,
  categories: state => state.categories
};

// actions
const actions = {
  categoryNumberChange({ commit }, number: number) {
    commit(types.CATEGORY_NUMBER_CHANGE, number);
  },
  addCategory({ commit }, category) {
    commit(types.CATEGORY_CATEGORIES_ADD, category);
  },
  setCategory({ commit }, categories) {
    commit(types.CATEGORY_CATEGORIES_SET, categories);
  },
  updateCategory({ commit }, category) {
    commit(types.CATEGORY_CATEGORIES_CHANGE, category);
  },
  deleteCategory({ commit }, category) {
    commit(types.CATEGORY_CATEGORIES_DELETE, category);
  }
};

// mutations
const mutations = {
  [types.CATEGORY_NUMBER_CHANGE](state, number: number) {
    state.categoryNumber = number;
  },
  [types.CATEGORY_CATEGORIES_ADD](state, category) {
    state.categories.push(category);
  },
  [types.CATEGORY_CATEGORIES_SET](state, categories) {
    state.categories = categories;
  },
  [types.CATEGORY_CATEGORIES_CHANGE](state, category) {
    for (let i = 0; i < state.categories.length; i++) {
      if (parseInt(state.categories[i].id) === category.id) {
        state.categories[i] = category;
        return true;
      }
    }
    return false;
  },
  [types.CATEGORY_CATEGORIES_DELETE](state, category) {
    state.categories.splice(state.categories.indexOf(category), 1);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
