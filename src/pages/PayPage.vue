<template>
  <div class="row no-wrap justify-between q-pt-md">
    <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack"> </q-btn>
    <q-btn flat @click.prevent="" icon="favorite_border"></q-btn>
  </div>
  <div class="flex justify-center q-pt-xl">
    <h5>Pagamentos</h5>
  </div>
  <div class="card">
    <div v-for="item in items" :key="item.id">
      <span>{{ item.quantity }}</span> <span>{{ item.title }}</span>
    </div>
    <div class="full-width text-center">
      <h5 v-if="route.query.status == 'pending'">
        <q-icon name="hourglass_top" color="deep-orange-7" /> Pagamento Pendente
      </h5>
      <h5 v-if="route.query.status == 'approved'">
        <q-icon name="thumb_up" color="green" /> Pagamento Aprovado
      </h5>
      <h5 v-if="route.query.status == 'authorized'">
        Pagamento Aprovado, mas não Débitado ainda.
      </h5>
      <h5 v-if="route.query.status == 'in_process'">Pagamento em analise</h5>
      <h5 v-if="route.query.status == 'in_mediation'">
        The user started a dispute
      </h5>

      <h5 v-if="route.query.status == 'rejected'">Pagamento Rejeitado</h5>
      <h5 v-if="route.query.status == 'cancelled'">Pagamento Cancelado</h5>
      <h5 v-if="route.query.status == 'refunded'">
        O Pagamento foi retornado ao usuário
      </h5>
      <h5 v-if="route.query.status == 'charged_back'">Estornado ao usuário</h5>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { useAddStoreCart } from 'src/stores/AddCart';
import { UserStore } from 'src/stores/User';

//CONSTS
const $q = useQuasar();
const dataPrerence = ref('');
const count = ref(false);
const route = useRoute();
const router = useRouter();
const store = UserStore();
const items = ref();
const AddCart = useAddStoreCart();
const token = <any>store.user.token;
// const authToken =
//   'TEST-6201173609883364-112115-27ddfb7c2931c859bed9d4c1d05ed265-262243059';
// FUNCTIONS

function handleBack() {
  router.back();
}

onMounted(() => {
  callApiWithDelay(0);



  findItems();

  callApiWithDelay(10000);

  callApiWithDelay(60000);

  callApiWithDelay(120000);
});

async function payDatabase(pay: any) {
  const data = {
    id: route.query.collection_id,
    status_payment: pay.status,
    name_payer: pay.payer.first_name,
    payment_method: pay.payment_method.type,
    total_paid_amount: pay.transaction_amount,
    order_id: AddCart.PaymentId,
  };

  console.log(data);

  await api
    .post('database-payments', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => console.log(data))
    .catch((e) => console.log(data));
}

async function apiMercado() {
  if (!count.value) {
    const id = route.query.collection_id;

    await api
      .get(`/payment-mercado-pago/${id}`)
      .then((response) => {
        if (response.data.status == 'approved') {
          $q.notify({
            type: 'positive',
            caption: 'Pagamento Aprovado',
            color: 'positive',
          });
          count.value = true;
          payDatabase(response.data);
          // console.log(count.value);
        }

        if (response.data.status == 'pending') {
          $q.notify({
            type: 'warning',
            caption: 'Pagamento Pendente',
            color: 'warning',
          });
          console.log(response.data);
          payDatabase(response.data);
        }
        if (response.data.status == 'authorized') {
          $q.notify({
            type: 'warning',
            caption: 'Pagamento Aprovado, mas não Débitado ainda',
            color: 'positive',
          });
          payDatabase(response.data);
        }

        if (response.data.status == 'in_process') {
          $q.notify({
            type: 'warning',
            caption: 'Pagamento em analise',
            color: 'warning',
          });
          payDatabase(response.data);
        }

        if (response.data.status == 'in_mediation') {
          $q.notify({
            type: 'warning',
            caption: 'The user started a dispute',
            color: 'warning',
          });
          payDatabase(response.data);
        }

        if (response.data.status == 'rejected') {
          $q.notify({
            type: 'negative',
            caption: 'Pagamento Rejeitado',
            color: 'negative',
          });
          payDatabase(response.data);
        }

        if (response.data.status == 'cancelled') {
          $q.notify({
            type: 'negative',
            caption: 'Pagamento Cancelado',
            color: 'negative',
          });
          payDatabase(response.data);
        }

        if (response.data.status == 'refunded') {
          $q.notify({
            type: 'negative',
            caption: 'Pagamento Cancelado',
            color: 'negative',
          });
          payDatabase(response.data);
        }

        if (response.data.status == 'charged_back') {
          $q.notify({
            type: 'negative',
            caption: 'Estornado ao usuário',
            color: 'negative',
          });
          payDatabase(response.data);
        }

        //
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

async function findItems() {
  if (route.query.preference_id) {
    const id = String(route.query.preference_id);

    await api
      .get(`/listpreference/${id}`)
      .then((response) => {
        items.value = response.data.items;
      })
      .catch((e) => console.log(e));
  }
}

// async function getPayment() {

//   await
// }

function callApiWithDelay(timeout: number) {
  setTimeout(() => {
    apiMercado();
  }, timeout); // Defina o tempo em milissegundos (neste exemplo, 5000ms = 5 segundos)
}
</script>

<style scoped>
.card {
  text-align: center;
  /* display: flex; */
  align-items: center;
  margin: 25px auto 42px auto;
  width: 315px;
  height: 360px;
  left: 50px;
  top: 250px;

  background: #ededed;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
}
</style>
