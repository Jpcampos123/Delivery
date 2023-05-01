<template>
  <div style="height: 100vh">
    <div class="row no-wrap justify-between q-pt-md" style="">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack">
      </q-btn>
      <q-btn flat @click.prevent="" icon="favorite_border"></q-btn>
    </div>
    <div class="flex justify-center q-pt-xl">
      <h5>Detalhes do pedido</h5>
    </div>
    <div class="full-width justify-center">
      <div class="text-center q-mt-xl">
        <img
          src="../assets/kb2kspprfktxf6xive7zbjoeujkchq0ox03jnyy6.jpeg"
          alt=""
          style="
            object-fit: cover;
            width: 350px;
            height: 242px;
            border-radius: 100px;
            box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
          "
        />
        <h5 class="text-center" style="">Taça de Sorvete</h5>
        <h5
          class="text-center text-deep-orange-7"
          style="background-color: white; margin-top: 0"
        >
          12,00 R$
        </h5>
      </div>
      <div class="text-left" style="margin: 0 60px">
        <div class="q-mt-xl">
          <h6>Informações</h6>
          <div style="width: 297px; height: 77px">
            <span
              >Delivered between monday aug and thursday 20 from 8pm to 91:32
              pm</span
            >
          </div>
        </div>
      </div>
      <div class="text-center">
        <q-btn
          text-color="white"
          label="Adicionar ao Carrinho"
          rounded
          style="
            width: 314px;
            height: 70px;
            background: #fa4a0c;
            margin: 25% 0 20% 0;
          "
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';

//CONSTS
const router = useRouter();
//FUNCTIONS
function handleBack() {
  router.back();
}
</script>

<style scoped>
h6 {
  margin: 10px 0;
}
h5 {
  margin: 10px 0;
}

span {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 138.84%;

  /* or 21px */
  letter-spacing: 0.02em;

  color: #000000;

  opacity: 0.5;
}
</style>
