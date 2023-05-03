<template>
  <div style="height: 100vh">
    <div class="row no-wrap justify-between q-pt-md" style="">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent=""> </q-btn>
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

          color: #f47b0a;
        "
        >Trocar</span
      >
    </div>
    <div class="card">
      <div class="text-left q-mx-lg q-gutter-md">
        <q-input v-model="cep" label=" CEP" color="deep-orange-7" />
        <q-input v-model="rua" label="Rua" color="deep-orange-7" />
        <q-input v-model="bairro" label="Bairro" color="deep-orange-7" />
        <q-input v-model="cidade" label="Cidade" color="deep-orange-7" />
        <q-input
          v-model="complemento"
          label="Complemento"
          color="deep-orange-7"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// CONSTS
const cep = ref(null);
const rua = ref(null);
const bairro = ref(null);
const complemento = ref(null);
const cidade = ref(null);
// FUNCTIONS
</script>

<style scoped>
.card {
  margin: 25px auto 42px auto;
  width: 315px;
  height: 370px;
  left: 50px;
  top: 250px;

  background: #ededed;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
  border-radius: 20px;
}
</style>
