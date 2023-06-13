<template>
  <router-view />
  <TabsNav />
</template>

<script setup lang="ts">
import TabsNav from './components/TabsNav.vue';

import { ref } from 'vue';
// import { useRouter } from 'vue-router';
// import { UserStore } from '../src/stores/User';
// // CONSTS
const tabs = ref('home');
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
<style></style>
