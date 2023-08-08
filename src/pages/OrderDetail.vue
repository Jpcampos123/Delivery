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
          class=""
          :src="`https://backend-delivery-ruby.vercel.app/${items.banner}`"
          alt=""
          style="
            margin: 0 auto;
            object-fit: cover;
            width: 350px;
            height: 242px;
            border-radius: 100px;
            box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);


          "
        />
        <h5 class="text-center" style="">{{ items.name }}</h5>
        <h5
          class="text-center text-deep-orange-7"
          style="background-color: white; margin-top: 0"
        >
          {{ items.price }} R$
        </h5>
      </div>
      <div class="text-left" style="margin: 0 60px">
        <div class="q-mt-xl">
          <h6>Informações;</h6>
          <div style="width: 297px; height: 77px">
            <span>{{ items.description }}</span>
          </div>
        </div>
      </div>
      <div class="text-center">
        <q-btn
          square
          color="deep-orange"
          size="13px"
          :loading="loading"
          text-color="white"
          label="Adicionar ao Carrinho"
          rounded
          style="width: 314px; height: 50px; margin: 25% 0 20% 0"
          @click.prevent="handleAddToCart(items)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import { useAddStoreCart } from 'src/stores/AddCart';
import { ref } from 'vue';
import { useQuasar } from 'quasar';
//CONSTS
const route = useRoute();
const AddCart = useAddStoreCart();
const loading = ref(false);
const items = <any>route.query;
const router = useRouter();
const $q = useQuasar();
//FUNCTIONS
function handleBack() {
  router.back();
}

function handleAddToCart(item: any) {
  loading.value = true;
  item.qtd = 1;
  AddCart.Add(item);
  AddCart.ItemQtd(item);
  router.push({ name: 'Cart' });
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
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  /* or 21px */

  color: #000000;

  opacity: 0.5;
}
</style>
