<template>
  <div>
    <div>
      <div class="flex justify-center items-center" style="margin-bottom: 31px">
        <h3
          style="
            color: white;
            margin: 0;
            text-align: center;
            text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            font-family: Roboto;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          "
        >
          Pedidos
        </h3>
        <q-icon
          name="add"
          color="green"
          size="30px"
          class="cursor-pointer"
          @click.prevent="handleAdd"
        />
      </div>

    </div>
  </div>

  <PedidosModal
    v-if="confirmAdd"
    @close="confirmAdd = false"

  />
</template>

<script setup lang="ts">
import axios from 'axios';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import CategoryModalAdd from 'src/components/CategoryModalAdd.vue';
import CategoryModalEdit from 'src/components/CategoryModalEdit.vue';
import { UserStore } from 'src/stores/User';
import { inject, onBeforeMount, onMounted, ref } from 'vue';
import { Socket } from 'socket.io-client';
import PedidosModal from 'src/components/PedidosModal.vue';

// CONST
const socket = inject('socket') as Socket;
const confirm = ref(false);
const confirmAdd = ref(false);
const categories = <any>ref(null);
const store = UserStore();
const token = <any>store.user.token;
const $q = useQuasar();
const modal = <any>ref(null);

// FUNCTIONS

// onBeforeMount(() => {
//   return getCategorias();
// });




socket.emit('socketTest', (data:any) => {
  console.log(data) // {msg1: 'test 1', msg2: 'test 2'}
});
onMounted(() => {
  socket.connect(); //Connect to socket server
});


function handleAdd() {
  $q.loading.show();
  confirmAdd.value = true;
  $q.loading.hide();
}

</script>

<style scoped></style>
