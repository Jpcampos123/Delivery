<template>
  <div style="background: #ededed">
    <!-- <img src="../assets/chapeu.svg" alt="" style="background: white" /> -->
    <div class="cozinha q-mx-xs">
      <q-tabs
        v-model="tab"
        class="text-black bg-white"
        active-color="black"
        indicator-color="deep-orange-7"
        style="top: 88%; width: 300px; margin: 0 auto"
      >
        <q-tab name="Login" label="Login" />
        <q-tab name="Registrar" label="Registrar" />
      </q-tabs>
    </div>
  </div>
  <div style="background: #ededed; height: 100vh" class="text-center">
    <q-input
      v-model="email"
      label="Email"
      stack-label
      :dense="dense"
      class="input-q"
    />

    <q-input
      v-model="password"
      label="Password"
      stack-label
      :dense="dense"
      class="input-q"
    />

    <div
      class="text-deep-orange-7 text-left q-mt-md"
      style="width: 314px; margin: 34px auto 0 auto"
    >
      Esqueceu sua senha?
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

// CONSTS
const tab = ref(null);
const dense = ref(false);
const email = ref(null);
const password = ref(null);

// FUNCTIONS
</script>
<style scoped>
.input-q {
  padding-top: 24px;
  width: 314px;
  height: 59px;
  margin: 0 auto 46px auto;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;

  /* identical to box height */

  color: #000000;

  opacity: 0.4;
}
.cozinha {
  height: 400px;
  left: 0px;
  top: -15px;

  background: #ffffff;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
}
</style>
