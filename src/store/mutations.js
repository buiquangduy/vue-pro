// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.

import * as types from './mutation-types';

export default {

  [types.COUNT_INCREMENT](state) {
    state.count++;
  },

  [types.COUNT_DECREMENT](state) {
    state.count--;
  },

  [types.ISLOADING_CHANGE](state, loading) {
    state.isLoading = loading;
  }
};
