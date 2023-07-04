import { boot } from 'quasar/wrappers';
import axios, { AxiosInstance } from 'axios';
import { UserStore } from 'src/stores/User';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
// const authToken =
//   'TEST-6201173609883364-112115-27ddfb7c2931c859bed9d4c1d05ed265-262243059';

const api = axios.create({
  baseURL: 'https://backend-delivery-ge3l3ayo7-jpcamposgda.vercel.app',
  headers: {
    'Content-Type': 'application/json',
    Content: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
    } else {
      return Promise.reject(error);
    }
  }
);

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { api };
