<template>
  <div style="height: 100vh">
    <div class="row no-wrap justify-between" style="">
      <q-btn icon="keyboard_arrow_left" flat @click.prevent="handleBack">
      </q-btn>
      <h5 style="margin-right: 10%">Perfil</h5>
      <div></div>
    </div>
    <div class="text-center">
      <h5 style="margin-bottom: 4%">Detalhes do Perfil</h5>
      <div
        style="
          width: 315px;
          height: 197px;
          left: 42px;
          top: 241px;
          margin: 0 auto;
          background: #ffffff;
          box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
          border-radius: 20px;
        "
      >
        <q-icon
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
        border-radius: 20px;
      "
    >
      <span
        class="text-center"
        style="
          background: #ffffff;
          font-family: 'SF Pro Text';
          margin: 0 auto;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 21px;

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
import PopupLogout from '../components/PopupLogout.vue';
import { UserStore } from 'src/stores/User';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// CONSTS
const router = useRouter();
const confirm = ref(false);
const store = UserStore();
// FUNCTIONS

function handleBack() {
  router.back();
}

function handleLogout() {
  localStorage.removeItem('User');

  // store.user.email = '';
  // store.user.id = '';
  // store.user.name = '';
  // store.user.phone = '';
  // store.user.photo = '';
  // store.user.token = '';

  router.push({ name: 'Login' });
}
</script>

<style scoped>
* {
  background: #ededed;
}
.card {
  background: #ffffff;
  display: block;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
}

.card1 {
  background: #ffffff;
  display: block;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  /* identical to box height */

  color: #000000;

  opacity: 0.5;
}
</style>
