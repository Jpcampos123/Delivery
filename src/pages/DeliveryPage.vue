<template>
  <div style="height: 100vh">
    <div class="row no-wrap justify-between q-pt-md" style="">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack">
      </q-btn>
      <q-btn flat @click.prevent="" icon="favorite_border"></q-btn>
    </div>
    <div class="flex justify-center q-pt-xl">
      <h5>Delivery</h5>
    </div>
    <div class="row no-wrap justify-between q-mx-xl">
      <span
        style="
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 600;
          font-size: 17px;
          line-height: 20px;

          color: #000000;
        "
        >Detalhes do Endereço</span
      >
      <span
        style="
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;

          /* identical to box height */
          cursor: pointer;
          color: #f47b0a;
        "
        @click.prevent="disable = !disable"
        >Trocar</span
      >
    </div>
    <div class="card">
      <div class="text-left q-mx-lg q-gutter-xs">
        <q-input
          v-model.lazy="cep"
          label=" CEP"
          :loading="loading"
          @blur="getAdress"
          color="deep-orange-7"
          :rules="[
            (val) => val.length >= 8 || 'Por Favor digite o CEP corretamente',
          ]"
        />

        <q-input
          v-model="rua"
          label="Rua"
          :loading="loading"
          color="deep-orange-7"
        />
        <q-input
          v-model="bairro"
          label="Bairro"
          :loading="loading"
          color="deep-orange-7"
        />
        <q-input
          v-model="cidade"
          label="Cidade"
          :loading="loading"
          color="deep-orange-7"
        />
        <q-input
          v-model="complemento"
          label="Complemento"
          :loading="loading"
          color="deep-orange-7"
        />
      </div>
    </div>
    <div class="q-mx-xl">
      <span
        style="
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 600;
          font-size: 17px;
          line-height: 20px;

          color: #000000;
        "
        >Entrega</span
      >
    </div>

    <div class="card-two">
      <div class="q-pa-md">
        <div class="q-gutter-md">
          <q-radio v-model="delivery" val="" label="Delivery" class="q-my-md" />
          <q-separator />
          <q-radio
            v-model="delivery"
            val="rectangle"
            label="Retirar no local"
            class="q-my-md"
          />
        </div>
      </div>
    </div>
    <div class="text-center q-mx-xl" style="margin-bottom: 70px">
      <div class="row no-wrap justify-between full-width">
        <span
          style="
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;

            color: #000000;
          "
          >Total</span
        ><span
          style="
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 600;
            font-size: 22px;
            line-height: 26px;

            color: #000000;
          "
        >
          {{ AddCart.totalItemsPrice }} R$
        </span>
      </div>
    </div>

    <div class="text-center full-width">
      <!-- <q-btn
        :loading="loading"
        text-color="white"
        label="Completar Pedido"
        rounded
        style="
          width: 314px;
          height: 70px;
          background: #fa4a0c;
          margin-bottom: 17%;
        "
      /> -->

      <ButtonPay :preferenceId="route.hash" />
    </div>

    <!-- <MercadoPago /> -->
  </div>
</template>

<script lang="ts" setup>
import axios from 'axios';
import MercadoPago from '../components/MercadoPago.vue';
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRoute, useRouter } from 'vue-router';
import { useAddStoreCart } from 'src/stores/AddCart';
import ButtonPay from 'src/components/ButtonPay.vue';
import { api } from 'src/boot/axios';
import { UserStore } from 'src/stores/User';

// CONSTS
const delivery = ref('line');
const cep = ref(null);
const rua = ref(null);
const bairro = ref(null);
const complemento = ref(null);
const cidade = ref(null);
const $q = useQuasar();
const loading = ref(false);
const disable = ref(false);
const router = useRouter();
const route = useRoute();
const AddCart = useAddStoreCart();
const store = UserStore();
// FUNCTIONS

// async function handlePayment() {
//   console.log(AddCart);
// }

async function handleBack() {
  router.back();
}
async function getAdress() {
  loading.value = true;
  let baseUrl = 'https://viacep.com.br/ws/';
  const url = `${baseUrl}${cep.value}/json/`;

  await axios
    .get(url)
    .then((resp) => {
      const data = resp.data;
      if (!data.erro) {
        cep.value = data.cep;
        rua.value = data.logradouro;
        bairro.value = data.bairro;
        complemento.value = data.complemento;
        cidade.value = data.localidade;
        loading.value = false;
      } else {
        $q.notify({
          type: 'negative',
          caption: 'Cep não encontrado',
          message: 'Link copiado com sucesso',
          color: 'negative',
        });
        loading.value = false;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>

<style scoped>
.q-field__bottom {
  padding-top: 0;
}
.card {
  margin: 25px auto 42px auto;
  width: 315px;
  height: 360px;
  left: 50px;
  top: 250px;

  background: #ededed;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
}

.card-two {
  margin: 25px auto 50px auto;
  width: 315px;
  height: 166px;
  left: 53px;
  top: 488px;

  background: #ededed;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
}
</style>
