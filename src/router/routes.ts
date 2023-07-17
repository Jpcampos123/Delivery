import { UserStore } from 'src/stores/User';
import { RouteRecordRaw, useRouter } from 'vue-router';

const requireAuth = (_to: any, from: any, next: any) => {
  const store = UserStore();
  if (!store.isAuth) {
    next('/login');
  } else {
    next();
  }
};

const routes: RouteRecordRaw[] = [
  {
    path: '/main',
    name: 'Main',
    component: () => import('layouts/MainLayout.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('pages/IndexPage.vue'),
        beforeEnter: requireAuth,
      },
    ],
  },

  {
    path: '/admin/categorias',
    name: 'Admin',
    component: () => import('layouts/AdminLayout.vue'),
    beforeEnter: requireAuth,
    children: [
      {
        path: '/admin/categorias',
        name: 'Categorias',
        component: () => import('pages/CategoriaPage.vue'),
        beforeEnter: requireAuth,
      },

      {
        path: '/admin/produtos',
        name: 'Produtos',
        component: () => import('pages/ProdutoPage.vue'),
        beforeEnter: requireAuth,
      },

      {
        path: '/admin/pedidos',
        name: 'Pedidos',
        component: () => import('pages/PedidosPage.vue'),
        beforeEnter: requireAuth,
      },

      {
        path: '/admin/pagamentos',
        name: 'Pagamentos',
        component: () => import('pages/PagamentosPage.vue'),
        beforeEnter: requireAuth,
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
    beforeEnter: requireAuth,
  },

  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import('src/pages/PerfilPage.vue'),
    beforeEnter: requireAuth,
  },

  {
    path: '/order',
    name: 'Order',
    component: () => import('src/pages/OrderPage.vue'),
    beforeEnter: requireAuth,
  },

  {
    path: '/orderDetail',
    name: 'OrderDetail',
    component: () => import('src/pages/OrderDetail.vue'),
    beforeEnter: requireAuth,
  },

  // {
  //   path: '/mercadopago',
  //   name: 'Mercadopago',
  //   component: () => import('src/components/MercadoPago.vue'),
  //   beforeEnter: requireAuth,
  // },

  {
    path: '/cart',
    name: 'Cart',
    component: () => import('src/pages/CartPage.vue'),
    beforeEnter: requireAuth,
  },
  {
    path: '/payPage',
    name: 'payPage',
    component: () => import('src/pages/PayPage.vue'),
    beforeEnter: requireAuth,
  },

  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('src/pages/DeliveryPage.vue'),
    beforeEnter: requireAuth,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },

  {
    path: '/recuperar',
    component: () => import('pages/PasswordRecovery.vue'),
  },
];

export default routes;
