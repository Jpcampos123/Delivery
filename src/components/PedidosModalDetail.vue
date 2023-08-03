<template>
  <q-dialog
    v-model="detail"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card
      style="
        min-width: 500px;
        border-radius: 30px;
        border-radius: 4px;
        background: #1d1d2e;
      "
    >
      <q-card-section class="justify-between flex">
        <div class="text-h6 text-white">Detalhes do Pedido</div>
        <q-icon
          name="close"
          color="red"
          size="27px"
          class="cursor-pointer"
          @click.prevent="$emit('close')"
        />
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h6" style="color: #3fffa3">
          Cliente: {{ props.itemDetails.name }}
        </div>

        <div v-for="item in items" :key="item.id">
          <div class="text-h4 text-green flex items-center">
            <h6 style="color: #3fffa3">{{ item.amount }}</h6>
            <span> - </span>
            <h6 class="text-white">{{ item.product.name }}</h6>
          </div>
        </div>
        <!-- <q-input
          color="green"
          input-style="color: white;"
          dense
          v-model="pedidos"
          autofocus
          @keyup.enter="detail = false"
        /> -->
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn
          color="green"
          flat
          label="Cancel"
          @click.prevent="$emit('close')"
          v-close-popup
        />
        <q-btn
          flat
          label="Confirmar"
          color="green"
          v-close-popup
          @click.prevent=""
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { UserStore } from 'src/stores/User';
import { inject, onMounted, ref } from 'vue';
import { Socket } from 'socket.io-client';
// CONSTS
const pedidos = ref('');
const items = <any>ref(null);
const detail = ref(true);
const store = UserStore();
const token = <any>store.user.token;
const $q = useQuasar();
const socket = inject('socket') as Socket;

interface Modal {
  id: string | undefined;
  created_at: string | undefined;
  draft: boolean | undefined;
  name: string | undefined;
  status: string | undefined;
  updated_at: string | undefined;
  user_id: string | undefined;
}
// FUNCTIONS
const props = defineProps<{
  itemDetails: Modal;
}>();

const emit = defineEmits(['close']);

onMounted(() => {
  getItems();
});

async function getItems() {
  $q.loading.show();
  await api
    .get('/items/order/item', {
      headers: {
        authorization: 'Bearer ' + token,
      },
      params: {
        order_id: props.itemDetails.id,
      },
    })
    .then((res) => {
      items.value = res.data.items;
      $q.loading.hide();
      // console.log(items.value);
    })
    .catch((err) => {
      console.log(err);
      $q.loading.hide();
    });
}
</script>
