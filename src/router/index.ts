import { route } from 'quasar/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';
// import { UserStore } from 'src/stores/User';

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // Router.beforeEach((to, from, next) => {
  //   // ✅ This will work because the router starts its navigation after
  //   // the router is installed and pinia will be installed too
  //   const store = UserStore();
  //   const isAuthenticated = store.isAuth;
  //   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  //   if (to.meta.requiresAuth && !isAuthenticated) {
  //     next('/login'); // Redirect to login page if authentication is required but user is not authenticated
  //   } else {
  //     next(); // Allow access to the route
  //   }
  // });

  return Router;
});
