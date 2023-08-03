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
      <div>
        <q-list
          v-for="order in orders"
          :key="order.index"
          style="align-items: center"
        >
          <q-item
            @click.prevent="handleDetails(order)"
            clickable
            v-ripple
            class="justify-between"
            style="
              max-width: 831px;
              margin: 13px auto;
              border-radius: 6px;
              border: 1px solid #000;
              background: #101026;
            "
          >
            <div style="margin: 0 auto">
              <q-item-label
                class="text-white"
                style="
                  text-align: center;
                  font-family: Roboto;
                  font-size: 22px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                "
                >{{ order.name }}</q-item-label
              >
              <q-item-label
                class="text-white"
                style="
                  text-align: center;
                  font-family: Roboto;
                  font-size: 22px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                "
                >{{ order.created_at }}</q-item-label
              >
            </div>

            <q-icon name="delete" color="red" size="27px" />
          </q-item>
        </q-list>
      </div>
    </div>
  </div>

  <PedidosModal v-if="confirmAdd" @close="confirmAdd = false" />
  <PedidosModalDetail
    v-if="detail"
    @close="detail = false"
    :itemDetails="itemDetails"
  />
</template>

<script setup>
import axios from 'axios';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import CategoryModalAdd from 'src/components/CategoryModalAdd.vue';
import CategoryModalEdit from 'src/components/CategoryModalEdit.vue';
import { UserStore } from 'src/stores/User';
import { inject, onBeforeMount, onMounted, ref } from 'vue';
import { Socket } from 'socket.io-client';
import PedidosModal from 'src/components/PedidosModal.vue';
import PedidosModalDetail from 'src/components/PedidosModalDetail.vue';

// CONST

const confirm = ref(false);
const detail = ref(false);
const confirmAdd = ref(false);
const orders = ref(null);
const itemDetails = ref(null);
const store = UserStore();
const token = store.user.token;
const $q = useQuasar();
const modal = ref(null);
const pusher = new Pusher('5ef404ae72fb9d641074', {
  cluster: 'sa1',
});

// FUNCTIONS

onMounted(() => {
  getAttOrders();
  getOrders();
});

Pusher.logToConsole = true;

async function getAttOrders() {
  $q.loading.show(); // console.log('1111111111111111111111111111111');
  const channel = pusher.subscribe('my-channel');
  channel.bind('my-event', function (data) {
    if (data.message) {
      getOrders();
    }
  });
  $q.loading.hide();
}

// onBeforeMount(() => {
//   return getCategorias();
// });

// onMounted(() => {
//   return getOrders();
// });

async function getOrders() {
  $q.loading.show();
  await api
    .get('/order/findAllOrders', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then((res) => {
      orders.value = res.data;
      // console.log(orders.value);
      $q.loading.hide();
    })
    .catch((err) => {
      console.log(err);
      $q.loading.hide();
    });
}

// socket.emit('socketTest', (data:any) => {
//   console.log(data) // {msg1: 'test 1', msg2: 'test 2'}
// });
// onMounted(() => {
//   socket.connect(); //Connect to socket server
// });

function handleAdd() {
  $q.loading.show();
  confirmAdd.value = true;
  $q.loading.hide();
}

async function handleDetails(item) {
  // console.log(item);
  $q.loading.show();
  detail.value = true;
  itemDetails.value = item;
  $q.loading.hide();
}
</script>

<style scoped></style>
