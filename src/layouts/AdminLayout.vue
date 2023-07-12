<template>
  <q-layout
    view="lHh Lpr lFf"
    style="background: #1d1d2e; width: 100%; height: 100%"
  >
    <q-header style="background: #1d1d2e">
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

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="background: #1d1d2e"
    >
      <q-list bordered separator>
        <q-item-label header style="color: white"> Menu </q-item-label>

        <div v-for="link in essentialLinks" :key="link.title">



          <q-item
            clickable
            v-ripple
            @click.prevent="handleRouter(link.link)"
            style="
              color: white;
              border-radius: 6px;
              background: #101026;
              margin: 7px 0;


            "

            >{{ link.title }}
            <!-- {{ link.caption }} -->
          </q-item>

        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import { useRouter } from 'vue-router';
import { useAddStoreCart } from 'src/stores/AddCart';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { UserStore } from 'src/stores/User';

const AddCart = useAddStoreCart();
const $q = useQuasar();
const leftDrawerOpen = ref(false);
const router = useRouter();
const store = UserStore();
const token = <any>store.user.token;
const categories = <any>ref(null);
const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Categorias',
    // caption: 'quasar.dev',

    link: 'Categorias',
    caption: '1'
  },
  {
    title: 'Produtos',
    // caption: 'quasar.dev',
    // icon: 'school',
    link: 'Produtos',
  },

  {
    title: 'Pedidos',
    // caption: 'quasar.dev',
    // icon: 'school',
    link: 'Pedidos',
  },
  {
    title: 'Pagamentos',
    // caption: 'quasar.dev',
    // icon: 'school',
    link: 'Pagamentos',
  },
];





function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function handleRouter(route: any) {
  $q.loading.show();
  router.push({ name: route });
  $q.loading.hide();
}
</script>

<style scoped>






</style>
