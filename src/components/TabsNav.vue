<!-- eslint-disable vue/no-mutating-props -->
<template>
  <div
    class="full-width text-center"
    style="position: fixed; bottom: 0"
    v-if="store.isAuth"
  >
    <q-tabs
      v-model="tabs"
      indicator-color="deep-orange-7"
      active-color="deep-orange-7"
      class="text-grey"
      style="width: 100%; margin: 0 auto; display: flex; background: white"
    >
      <q-tab title="Home" name="home" icon="home" @click.prevent="handleRoute('Dashboard')" />
      <q-tab
        title="Pedidos"
        name="order"
        icon="list_alt"
        @click.prevent="handleRoute('Order')"
      />
      <q-tab
        title="Perfil"
        name="profile"
        icon="person"
        @click.prevent="handleRoute('Perfil')"
      />
      <q-tab
        title="History"
        name="history"
        icon="history"
        @click.prevent="handleRoute('History')"
      />
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { UserStore } from '../stores/User';
import { title } from 'process';

// CONSTS
// const props = defineProps({
//   tabs: String,
// });

const tabs = ref('home');
const router = useRouter();
const route = useRoute();
const store = UserStore();

// onMounted(() => {
//   console.log(route.name);
// });
// FUNCTIONS

function handleRoute(item:any) {
  // console.log(route.name);

  router.push({ name: item });
}
// function handleMain(e) {
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
</script>

<style></style>
