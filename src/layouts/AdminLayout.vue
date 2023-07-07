<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-deep-orange-7">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> JJR Delivery </q-toolbar-title>



      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list  bordered separator>
        <q-item-label header> Menu </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import { useRouter } from 'vue-router';
import { useAddStoreCart } from 'src/stores/AddCart';

const AddCart = useAddStoreCart();
const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Categorias',
    // caption: 'quasar.dev',
    // icon: 'school',
    // link: 'https://quasar.dev',
  },
  {
    title: 'Produtos',
    // caption: 'quasar.dev',
    // icon: 'school',
    // link: 'https://quasar.dev',
  },
  {
    title: 'Categorias',
    // caption: 'quasar.dev',
    // icon: 'school',
    // link: 'https://quasar.dev',
  },

  {
    title: 'Pedidos',
    // caption: 'quasar.dev',
    // icon: 'school',
    // link: 'https://quasar.dev',
  },
  {
    title: 'Pagamentos',
    // caption: 'quasar.dev',
    // icon: 'school',
    // link: 'https://quasar.dev',
  },

];

const leftDrawerOpen = ref(false);
const router = useRouter();

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
