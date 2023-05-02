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
    <div class="full-width text-center">
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
          src="https://www.sabornamesa.com.br/media/k2/items/cache/8a7eacb7a228abdc187ecece4128652b_XL.jpg"
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
        <div class="text-left">
          <span class="block title-meal">Costela Assada</span>
          <span class="text-deep-orange-7 q-ml-md"> 20$</span>
        </div>
        <div
          class="flex no-wrap"
          style="
            width: 70px;
            height: 25px;
            margin-top: 15%;
            background: #fa4a0c;
            border-radius: 30px;
          "
        >
          <q-icon
            color="white"
            name="remove"
            size="22px"
            style="margin-top: 2px"
            @click.prevent="number--"
          /><input
            type="number"
            v-model="number"
            style="
              border: none;
              outline: 0;
              width: 100%;
              background: #fa4a0c;
              color: white;
              text-align: center;
            "
          /><q-icon
            color="white"
            name="add"
            size="22px"
            style="margin-top: 2px"
            @click.prevent="number++"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// CONSTS
const router = useRouter();
const number = ref(1);
// FUNCTIONS

function handleBack() {
  router.back();
}
</script>

<style scoped>
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
  text-align: center;

  color: #000000;
}

input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
input[type='number'] {
  -moz-appearance: textfield;
  appearance: textfield;
}
</style>
