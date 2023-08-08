<template>
  <div style="height: 100vh">
    <div class="q-pt-md">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack">
      </q-btn>
    </div>
    <div class="flex justify-center" style="">
      <h5>Histórico de pedidos</h5>
      <div></div>
    </div>
    <div class="q-pt-xl" style="text-align: center" v-if="!orders">
      <img src="../assets/Vector.svg" alt="" style="margin: 0 auto" />
      <h4 class="text-h5">Sem Pedidos Anteriores</h4>
      <div style="text-align: center">
        <span
          style="
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            text-align: center;
            color: #000000;
            opacity: 0.57;
          "
          >Clique no botão "Fazer Pedido" para fazer o primeiro pedido.</span
        >
      </div>
      <div class="q-pt-xl">
        <q-btn
          size="13px"
          square
          color="deep-orange"
          text-color="white"
          label="Fazer Pedido"
          @click.prevent="handleOrder"
          rounded
          style="width: 314px; height: 50px; margin: 25% 0 20% 0"
        />
      </div>
    </div>
    <div v-if="orders">
      <q-list
        v-for="order in orders"
        :key="order.index"
        class="q-mx-md"
        style="align-items: center"
      >
        <!-- <div>{{ order }}</div> -->
        <q-item
          @click.prevent="handleDetails(order)"
          clickable
          v-ripple
          class="justify-between bg-white"
          style="
            max-width: 831px;
            margin: 13px auto;
            border-radius: 6px;
            border: 1px solid #000;
            background: #ededed;
          "
        >
          <div style="margin: 0 auto">
            <q-item-label
              class="text-black"
              style="
                text-align: center;
                font-family: Roboto;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              "
              >{{ order.id.slice(0, 8) }}</q-item-label
            >
            <q-item-label
              class="text-black"
              style="
                text-align: center;
                font-family: Roboto;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              "
              >{{ order.status }}</q-item-label
            >
            <q-item-label
              class="text-black"
              style="
                text-align: center;
                font-family: Roboto;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              "
              >{{ order.created_at.slice(0, 10) }}</q-item-label
            >
          </div>

          <q-icon name="delete" color="red" size="27px" />
        </q-item>
      </q-list>
    </div>
  </div>
  <PedidosModalDetail
    v-if="detail"
    @close="detail = false"
    :itemDetails="itemDetails"
  />
</template>

<script setup>
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import PedidosModalDetail from 'src/components/PedidosModalDetail.vue';
import { UserStore } from 'src/stores/User';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

onMounted(() => {
  getOrders();
});

// CONSTS
const itemDetails = ref(null);
const detail = ref(false);
const orders = ref(null);
const router = useRouter();
const $q = useQuasar();
const store = UserStore();
const token = store.user.token;


// FUNCTIONS

function handleBack() {
  router.back();
}
function handleOrder() {
  router.push({ name: 'Dashboard' });
}

async function getOrders() {
  $q.loading.show();
  await api
    .get('/order', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then((res) => {
      orders.value = res.data.orders;
      // console.log(orders.value);
      $q.loading.hide();
    })
    .catch((err) => {
      console.log(err);
      $q.loading.hide();
    });
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
