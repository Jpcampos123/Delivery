<template>
  <div style="height: 100vh">
    <div class="row no-wrap justify-between" style="">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack">
      </q-btn>
      <h5 style="margin-right: 10%">Pedidos</h5>
      <div></div>
    </div>
    <div style="text-align: center; margin-top: 20%">
      <img src="../assets/carrinho.svg" alt="carrinho" />
      <h4 class="text-h5">Sem Pedidos Ainda</h4>
      <div style="height: 40px; text-align: center">
        <span
          style="
            width: 220px;
            height: 40px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 17px;
            line-height: 20px;
            text-align: center;

            color: #000000;

            opacity: 0.57;
          "
          >Clique no botão "Fazer Pedido" para fazer o primeiro pedido</span
        >
      </div>
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
