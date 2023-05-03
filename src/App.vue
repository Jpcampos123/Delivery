<template>
  <router-view />
  <div class="full-width text-center" style="position: fixed; bottom: 0">
    <q-tabs
      v-model="tab"
      indicator-color="deep-orange-7"
      active-color="deep-orange-7"
      class="text-grey"
      style="width: 100%; margin: 0 auto; display: flex; background: white"
    >
      <q-tab title="Home" name="home" icon="home" @click.prevent="handleMain" />
      <q-tab
        title="Pedidos"
        name="order"
        icon="list_alt"
        @click.prevent="handleOrder"
      />
      <q-tab
        title="Perfil"
        name="profile"
        icon="person"
        @click.prevent="handleProfile"
      />
      <q-tab
        title="History"
        name="history"
        icon="history"
        @click.prevent="handleHistory"
      />
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// CONSTS
const tab = ref('home');
const router = useRouter();

// FUNCTIONS
function handleMain() {
  router.push({ name: 'Dashboard' });
}

function handleOrder() {
  router.push({ name: 'Order' });
}

function handleProfile() {
  router.push({ name: 'Perfil' });
}

function handleHistory() {
  router.push({ name: 'History' });
}
</script>

<style></style>
