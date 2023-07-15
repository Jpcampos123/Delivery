<template>
  <div style="height: 100vh">
    <div class="q-pt-md">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack">
      </q-btn>
    </div>
    <div class="flex justify-center" style="">
      <h5>Detalhes do Perfil</h5>
      <div></div>
    </div>
    <div class="text-center">
      <div
        style="
          width: 330px;
          height: 197px;
          left: 42px;
          top: 241px;
          margin: 0 auto;
          background: #ffffff;
          box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
          border-radius: 10px;
        "
      >
        <q-icon
          class="q-pt-sm"
          style="background: white"
          name="account_circle"
          size="90px"
          color="deep-orange-7"
        ></q-icon>
        <span v-if="store" class="card">{{ store.user.name }}</span>
        <span v-if="store" class="card1">{{ store.user.email }}</span>
        <span v-if="store" class="card1">+55{{ store.user.phone }}</span>
        <span v-if="store" class="card1">{{ store.user.photo }}</span>
      </div>
    </div>
    <div
      @click.prevent="confirm = true"
      style="
        margin: 10% auto;
        cursor: pointer;
        text-align: center;
        display: flex;
        align-items: center;

        width: 315px;
        height: 60px;
        background: #ffffff;
        box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
        border-radius: 10px;
      "
    >
      <span
        class="text-center"
        style="
          background: #ffffff;
          margin: 0 auto;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          color: #000000;
        "
      >
        Logout
        <q-icon
          style="background: white; cursor: pointer; margin-bottom: 5px"
          name="logout"
          size="24px"
          color="deep-orange-7"
        ></q-icon>
      </span>
    </div>
  </div>
  <PopupLogout v-if="confirm" @close="confirm = false" @accept="handleLogout" />
</template>

<script setup lang="ts">
import ButtonPay from '../components/ButtonPay.vue';
import PopupLogout from '../components/PopupLogout.vue';
import { UserStore } from 'src/stores/User';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';

// CONSTS

const router = useRouter();
const confirm = ref(false);
const store = UserStore();
const $q = useQuasar();
// FUNCTIONS

// onMounted(() => {
//   console.log(tabs.value);
// });

function handleBack() {
  router.back();
}

async function handleLogout() {
  $q.loading.show();
  await localStorage.removeItem('User');

  store.user = {};

  // store.user.email = '';
  // store.user.id = '';
  // store.user.name = '';
  // store.user.phone = '';
  // store.user.photo = '';
  // store.user.token = '';

  router.push({ name: 'Login' });
  $q.loading.hide();
  location.reload();
}
</script>

<style scoped>
* {
  background: #ededed;
}
.card {
  background: #ffffff;
  display: block;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;

  color: #000000;
}

.card1 {
  background: #ffffff;
  display: block;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;

  /* identical to box height */

  color: #000000;

  opacity: 0.5;
}
</style>
