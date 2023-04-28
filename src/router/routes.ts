import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('src/layouts/MainLogin.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('src/layouts/MainLogin.vue'),
  },

  {
    path: '/history',
    name: 'History',
    component: () => import('src/pages/HistoryPage.vue'),
  },

  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('src/pages/PerfilPage.vue'),
  },

  {
    path: '/order',
    name: 'Order',
    component: () => import('src/pages/OrderPage.vue'),
  },

  {
    path: '/createOrder',
    name: 'CreateOrder',
    component: () => import('src/pages/CreateOrder.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
