<template>
  <q-dialog
    v-model="confirmAdd"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card
      style="
        min-width: 350px;
        border-radius: 30px;
        border-radius: 4px;
        background: #1d1d2e;
      "
    >
      <q-card-section>
        <div class="text-h6 text-white">Adicionar Pedidos</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          color="green"
          input-style="color: white;"
          dense
          v-model="pedidos"
          autofocus
          @keyup.enter="confirmAdd = false"
        />
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
          @click.prevent="handlePedidosEdit"
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
const confirmAdd = ref(true);
const store = UserStore();
const token = <any>store.user.token;
const $q = useQuasar();
const socket = inject('socket') as Socket;

// interface Modal {
//   id: string | undefined;
// }
// FUNCTIONS
// const props = defineProps<{
//   modal: Modal;
// }>();

const emit = defineEmits(['close']);

onMounted(() => {
  socket.connect(); //Connect to socket server
});

// onMounted(() => {
//   return console.log(props.modal.id);
// });

async function handlePedidosEdit() {
  $q.loading.show();

  const data = {
    name: pedidos.value,
  };

  socket.emit('send_message', data);
  emit('close');

  $q.loading.hide();
  //
}
</script>
