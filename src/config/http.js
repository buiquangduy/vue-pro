import store from 'src/store';
import { postsResource } from 'src/util/resources';

// Request interceptor
postsResource.interceptors.request.use((config) => {
  store.dispatch('setLoading', true);
  return config;
}, (error) => {
  store.dispatch('setLoading', false);
  console.log('RequestError: ', error);
  // Do something with request error
  return Promise.reject(error);
});

// Response interceptor
postsResource.interceptors.response.use((response) => {
  store.dispatch('setLoading', false);
  return response;
}, (error) => {
  store.dispatch('setLoading', false);
  console.log('ResponseError: ', error);
  // Do something with response error
  return Promise.reject(error);
});
