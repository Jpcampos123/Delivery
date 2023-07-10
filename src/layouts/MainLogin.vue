<template>
  <div style="background: #ededed">
    <div class="cozinha q-mx-xs text-center">
      <img
        src="../assets/chapeu.svg"
        alt=""
        style="
          background: white;
          object-fit: cover;
          width: 263px;
          height: 190.38px;
          margin-top: 15%;
        "
      />
      <h4>JJR</h4>
      <q-tabs
        v-model="tab"
        no-caps
        class="text-black bg-white"
        active-color="black"
        indicator-color="deep-orange-7"
        style="top: 2%; width: 300px; margin: 0 auto"
      >
        <q-tab name="login" label="Login" />
        <q-tab name="register" label="Registrar" />
      </q-tabs>
    </div>
  </div>
  <q-tab-panels
    v-model="tab"
    animated
    style="background: #ededed; height: 100vh"
    class="text-center"
  >
    <!-- LOGIN -->

    <q-tab-panel name="login">
      <div>
        <q-input
          v-model="email"
          label="Email"
          color="deep-orange-7"
          stack-label
          :dense="dense"
          class="input-q"
        />

        <q-input
          :type="isPwd ? 'password' : 'text'"
          v-model="password"
          label="Password"
          color="deep-orange-7"
          stack-label
          :dense="dense"
          class="input-q"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <div
          class="text-deep-orange-7 text-left q-mt-md"
          style="width: 314px; margin: 34px auto 0 auto"
        >
          Esqueceu sua senha?
        </div>
        <div style="margin-top: 130px">
          <q-btn
            :loading="loading"
            text-color="white"
            label="Login"
            @click.prevent="handleLogin"
            rounded
            style="width: 314px; height: 70px; background: #fa4a0c"
          />
        </div>
      </div>
    </q-tab-panel>
    >
    <!-- REGISTRAR -->

    <q-tab-panel name="register">
      <div>
        <q-form @submit="handleRegister" class="q-gutter-md">
          <q-input
            v-model="name"
            label="Name"
            color="deep-orange-7"
            stack-label
            :dense="dense"
            class="input-q"
          />
          <q-input
            v-model="email"
            label="Email"
            color="deep-orange-7"
            stack-label
            :dense="dense"
            class="input-q"
          />


          <div class="input-q">


          <q-input
            :type="isPwd ? 'password' : 'text'"
            v-model="password"
            label="Password"
            lazy-rules

            :rules="[
              (val) => val.length > 1 || 'Por favor digite uma senha que contenha mais de 3 letras',
              (value) => (value && /[A-Z]{1}/.test(value)) || 'Por favor digite uma letra maiúscula',
              (value) => (value && /[^A-Za-z0-9]/.test(value)) || 'Por favor digite um caractere especial',
            ]"
            color="deep-orange-7"
            stack-label
            :dense="dense"

          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
        </div>


          <q-input
            stack-label
            v-model="phone"
            label="Phone"
            color="deep-orange-7"
            mask="(##) ##### - ####"
            :dense="dense"
            class="input-q"
          />
        </q-form>
        <div
          class="text-deep-orange-7 text-left q-mt-md"
          style="width: 314px; margin: 34px auto 0 auto; cursor: pointer"
          @click.prevent="tab = 'login'"
        >
          Já possui conta? Faça o login
        </div>
        <div style="margin-top: 30px">
          <q-btn
            @click.prevent="handleRegister"
            :loading="loading"
            text-color="white"
            label="Registrar"
            rounded
            style="width: 314px; height: 70px; background: #fa4a0c"
          />
        </div>
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
import { UserStore } from 'src/stores/User';

// CONSTS
const tab = ref('login');
const isPwd = ref(true);
const dense = ref(false);
const name = ref(null);
const email = ref(null);
const phone = <any>ref(null);
const password = ref(null);
const loading = ref(false);
const router = useRouter();
const $q = useQuasar();
const user = UserStore();

// FUNCTIONS




async function handleLogin() {
  $q.loading.show();

  const data = {
    email: email.value,
    password: password.value,
  };

  // await axios
  //   .post(
  //     'https://backend-delivery-n6o6recbv-jpcamposgda.vercel.app/auth/session',
  //     data,
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     }
  //   )
  //   .then((res) => console.log(res))
  //   .catch((err) => console.log(err));

  try {
    await api
      .post('/auth/session', data, {
        headers: {
          Accept: 'application/json',
        },
      })

      .then((res) => {
        user.user = res.data;

        router.push({ name: 'Dashboard' });

        $q.loading.hide();

        $q.notify({
          type: 'positive',

          caption: 'Success',
          message: 'Login Feito com  Sucesso',
          color: 'positive',
        });
      })
      .catch((err) => {
        loading.value = false;
        $q.notify({
          type: 'negative',
          caption: 'E-mail/Senha incorretos',
          color: 'negative',
        });
      });
  } catch (e) {
    console.log(e);
    loading.value = false;
  }
}

async function handleRegister() {
  $q.loading.show();

  const data = {
    name: name.value,
    email: email.value,
    password: password.value,
    phone: phone.value.replace(/[^0-9]/g, ''),
  };

  try {
    await api
      .post('/auth', data, {
        headers: {
          Accept: 'application/json',
        },
      })
      .then((res) => {
        $q.loading.hide();
        $q.notify({
          type: 'positive',

          caption: 'Success',
          message: 'Conta criada com  sucesso',
          color: 'positive',
        });
        tab.value = 'login';
      })
      .catch((e) => {
        $q.loading.hide();

        $q.notify({
          type: 'negative',
          caption: 'E-mail/Senha incorretos',
          color: 'negative',
        });
      });
  } catch (e) {
    $q.loading.hide();
    console.log(e);
  }
}

//   $q.notify({
//     type: 'positive',
//     caption: 'Success',
//     message: 'Success',
//     color: 'positive',
//   });

// loading.value = true;
// if (!session) {
//   $q.notify({
//     type: 'negative',
//     caption: 'E-mail/Senha incorretos',
//     message: 'E-mail/Senha incorretos',
//     color: 'negative',
//   });
//   loading.value = false;
// }

// if (session) {
//   router.push({ name: 'Main' });
//   $q.notify({
//     type: 'positive',
//     caption: 'Success',
//     message: 'Success',
//     color: 'positive',
//   });
//   loading.value = false;
// }
</script>
<style scoped>
h4 {
  margin-top: 0;
  color: #ff8421;
}
.input-q {
  padding-top: 24px;
  width: 314px;
  height: 59px;
  margin: 0 auto 46px auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;

  /* identical to box height */

  color: #000000;
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
