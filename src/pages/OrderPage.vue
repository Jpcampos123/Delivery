<template>
  <div style="height: 100vh">
    <div class="q-pt-md">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack">
      </q-btn>
    </div>
    <div class="flex justify-center" style="">
      <h5>Pedidos</h5>
      <div></div>
    </div>
    <div class="q-pt-xl" style="text-align: center">
      <img src="../assets/carrinho.svg" alt="carrinho" />
      <h4 class="text-h5">Sem Pedidos Ainda</h4>
      <div style="text-align: center">
        <span
          style="
            width: 220px;
            height: 40px;

            font-family: 'Roboto';
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
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

// CONSTS
const router = useRouter();

// FUNCTIONS
function handleOrder() {
  router.push({ name: 'Dashboard' });
}

function handleBack() {
  router.back();
}
</script>

<style scoped>
* {
  background: #ededed;
}
</style>
