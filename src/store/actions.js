// actions are functions that causes side effects and can involve
// asynchronous operations.
import * as types from './mutation-types';

export const countIncrement = ({ commit }) => {commit(types.COUNT_INCREMENT);};

export const countDecrement = ({ commit }) => {commit(types.COUNT_DECREMENT);};

export const setLoading = ({ commit }, value) => {
  commit(types.ISLOADING_CHANGE, value);
};
export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit(types.COUNT_INCREMENT);
  }
};

export const incrementAsync = ({ commit }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      commit(types.COUNT_INCREMENT);
      resolve();
    }, 1000);
  });
};
