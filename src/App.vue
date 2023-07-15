<template>
  <router-view />
  <TabsNav
    v-if="
      route.name !== 'Delivery' &&
      route.name !== 'Admin' &&
      route.name !== 'Categorias' &&
      route.name !== 'Produtos' &&
      route.name !== 'Pedidos' &&
      route.name !== 'Pagamentos'
    "
  />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import TabsNav from './components/TabsNav.vue';

const routes = {};

// import { useRouter } from 'vue-router';
// import { UserStore } from '../src/stores/User';
// // CONSTS

const route = useRoute();

// const router = useRouter();
// const store = UserStore();
// // FUNCTIONS
// function handleMain() {
//   router.push({ name: 'Dashboard' });
// }

// function handleOrder() {
//   router.push({ name: 'Order' });
// }

// function handleProfile() {
//   router.push({ name: 'Perfil' });
// }

// function handleHistory() {
//   router.push({ name: 'History' });
// }
//
</script>

//
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap');

html,
body {
  font-family: 'Nunito', sans-serif;
}

#app {
  font-family: 'Nunito', sans-serif;
}
</style>
