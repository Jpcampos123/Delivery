<template>
  <div>
    <div class="row no-wrap justify-between q-pt-md" style="">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack">
      </q-btn>
      <q-btn flat @click.prevent="" icon="favorite_border"></q-btn>
    </div>
    <div class="flex justify-center q-pt-xl">
      <h5>Carrinho</h5>
    </div>
    <div class="" style="margin-bottom: 140px">
      <transition-group name="fade">
        <div
          class="full-width text-center q-mb-md"
          v-for="item in AddCart.pratos"
          :key="item.id"
        >
          <div
            style="
              width: 315px;
              height: 102px;
              display: flex;

              align-items: center;
              background: #ededed;
              box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
              border-radius: 20px;
              margin: 0 auto;
            "
          >
            <img
              :src="` http://192.168.18.28:3000/${item.banner}`"
              alt=""
              style="
                position: relative;
                object-fit: cover;
                width: 69.21px;
                height: 69.21px;
                left: 17px;
                top: 0px;
                margin-right: 16px;
                border-radius: 100%;
                display: block;
                box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
              "
            />
            <div class="text-left full-width">
              <span class="block title-meal">{{ item.name }}</span>
              <div class="justify-between row no-wrap" style="width: 100%">
                <span class="text-deep-orange-7 q-ml-md">
                  {{ item.price }} R$</span
                >
                <div
                  class="flex no-wrap"
                  style="
                    width: 70px;
                    height: 25px;
                    margin-right: 20px;
                    background: #fa4a0c;
                    border-radius: 30px;
                  "
                >
                  <q-icon
                    color="white"
                    name="remove"
                    size="22px"
                    style="margin-top: 2px"
                    @click.prevent="RemoveItem(item)"
                  />
                  <span
                    style="
                      border: none;
                      outline: 0;
                      width: 100%;
                      background: #fa4a0c;
                      color: white;
                      text-align: center;
                      margin: auto 0;
                    "
                    >{{ item.qtd }}</span
                  >
                  <q-icon
                    color="white"
                    name="add"
                    size="22px"
                    style="margin-top: 2px"
                    @click.prevent="AddItem(item)"
                  />
                  <ModalConfirm
                    v-if="confirm"
                    @close="confirm = false"
                    @accept="DeleteItem(item)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="text-center full-width"
          style="
            margin-bottom: 15%;
            margin-top: 10%;

            position: fixed;
            bottom: 0;
          "
        >
          <q-btn
            v-if="AddCart.pratos.length"
            @click.prevent="handleDelivery"
            :loading="loading"
            text-color="white"
            label="Completar Pedido"
            rounded
            style="width: 314px; height: 70px; background: #fa4a0c"
          />
        </div>
        <div
          v-if="!AddCart.pratos.length"
          style="text-align: center; margin-top: 5%"
        >
          <img
            src="../assets/carrinho.svg"
            alt="carrinho"
            style="height: 72px; width: 90px"
          />
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
        </div>
      </transition-group>
    </div>
    /
  </div>
</template>

<script lang="ts" setup>
import ButtonPay from '../components/ButtonPay.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAddStoreCart } from 'src/stores/AddCart';
import ModalConfirm from 'src/components/ModalConfirm.vue';
import { api } from 'src/boot/axios';
import axios from 'axios';

// CONSTS
const AddCart = useAddStoreCart();
const router = useRouter();
const loading = ref(false);
const confirm = ref(false);
const preferenceId = ref('');
const soma = ref(0);
// FUNCTIONS
//  => {
//   console.log(AddCart.pratos.length);
// });

onMounted(() => {
  return console.log(Number(AddCart.pratos[0].price));
});

function handleBack() {
  router.back();
}

function AddItem(item: any) {
  AddCart.AddItem(item);
  AddCart.ItemQtd(item);
}

function DeleteItem(item: any) {
  AddCart.deleteItem(item);
  confirm.value = false;
}

function RemoveItem(item: any) {
  if (item.qtd == 1) {
    confirm.value = true;
    // AddCart.deleteItem(item);
  } else {
    AddCart.RemoveItem(item);
    AddCart.ItemQtd(item);
  }
}

async function handleDelivery() {
  AddCart.pratos.forEach((item) => (soma.value += item.total));
  AddCart.totalItemsPrice = soma.value.toFixed(2);

  // const data = [{
  //   title: AddCart.pratos[0].name,
  //   unit_price: Number(AddCart.pratos[0].price),
  //   quantity: AddCart.pratos[0].qtd,
  // }];

  const data = <any>[];

  AddCart.pratos.forEach((item) =>
    data.push({
      title: item.name,
      unit_price: Number(item.price),
      quantity: item.qtd,
    })
  );
  console.log(data);

  // AddCart.pratos.forEach((item) => {

  // item.name,
  // item.price,
  // item.qtd,

  // })

  await api
    .post('/create_preference', data)
    .then((res) => {
      console.log(res.data);

      router.push({ name: 'Delivery', hash: res.data.id });
    })
    .catch((e) => {
      console.log(e);
    });
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.q-icon {
  cursor: pointer;
}
.title-meal {
  margin-left: 16px;
  margin-bottom: 11px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;

  color: #000000;
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type='number']:disabled {
  opacity: 0;
  color: white;
}

input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
