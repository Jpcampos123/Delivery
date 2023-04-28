<template>
  <q-page class="">
    <div>
      <div
        style="
          margin-left: 50px;
          width: 185px;
          height: 82px;
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 700;
          font-size: 34px;
          line-height: 41px;

          color: #000000;
        "
      >
        <h4>Deliciosos pratos para você</h4>
      </div>
      <div style="margin-top: 80px">
        <q-input
          rounded
          outlined
          color="deep-orange-7"
          v-model="text"
          placeholder="Pesquisar"
          style="width: 314px; height: 60px; margin: 0 auto"
        >
          <template v-slot:prepend>
            <q-icon name="search" />
          </template>
        </q-input>
      </div>
      <div class="full-width q-mt-md">
        <q-tabs
          v-model="tab"
          no-caps
          class="text-black"
          active-color="deep-orange-7"
          indicator-color="deep-orange-7"
          style="top: 2%; width: 100%; margin: 0 auto"
        >
          <q-tab name="pratos" label="Pratos" />
          <q-tab name="bebidas" label="Bebidas" />
          <q-tab name="sobremesas" label="Sobremesas" />
        </q-tabs>
      </div>
      <q-tab-panels v-model="tab" animated style="height: 100vh">
        <q-tab-panel name="pratos">
          <div style="margin-top: 100px; margin-bottom: 100px">
            <div
              class="little-card cursor-pointer"
              @click.prevent="handleOrderDetail"
            >
              <img
                src="../assets/kb2kspprfktxf6xive7zbjoeujkchq0ox03jnyy6.jpeg"
                alt=""
                style="
                  position: relative;
                  object-fit: cover;
                  width: 164.16px;
                  height: 164.16px;
                  left: 30px;
                  top: -50px;
                  border-radius: 100%;
                  display: block;
                  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
                "
              />
              <h5
                class="text-center"
                style="background-color: white; margin: 0"
              >
                Bife Acebolado
              </h5>

              <h5
                class="text-center text-deep-orange-7"
                style="background-color: white; margin: 15px 0 0 0"
              >
                50$
              </h5>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="bebidas">
          <div style="margin-top: 100px; margin-bottom: 100px">
            <div class="little-card">
              <img
                src="../assets/6333b7002c0260f1972f5cdcf6b85e5a-coca2L.png"
                alt="coca2L"
                style="
                  position: relative;
                  object-fit: cover;
                  width: 164.16px;
                  height: 164.16px;
                  left: 30px;
                  top: -50px;
                  border-radius: 100%;
                  display: block;
                  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
                "
              />
              <h5
                class="text-center"
                style="background-color: white; margin: 0"
              >
                Cola Cola 2L
              </h5>

              <h5
                class="text-center text-deep-orange-7"
                style="background-color: white; margin: 15px 0 0 0"
              >
                12$
              </h5>
            </div>
          </div>
        </q-tab-panel>
        <q-tab-panel name="sobremesas">
          <div style="margin-top: 100px; margin-bottom: 100px">
            <div class="little-card">
              <img
                src="../assets/4678e05dc2d35b34ba794e54338dadcc-taÃ§a.jpg"
                alt="taça de sorvete"
                style="
                  position: relative;
                  object-fit: cover;
                  width: 164.16px;
                  height: 164.16px;
                  left: 30px;
                  top: -50px;
                  border-radius: 100%;
                  display: block;
                  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
                "
              />
              <h5
                class="text-center"
                style="background-color: white; margin: 0"
              >
                Taça de Sorvete
              </h5>

              <h5
                class="text-center text-deep-orange-7"
                style="background-color: white; margin: 15px 0 0 0"
              >
                12$
              </h5>
            </div>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// CONSTS
const text = ref(null);
const tab = ref('pratos');
const router = useRouter();
// FUNCTIONS

function handleOrderDetail() {
  router.push({ name: 'OrderDetail' });
}
</script>

<style scoped>
h4 {
  margin-top: 0;
}
.little-card {
  position: absolute;
  margin: 0 34px 56px 50px;
  width: 220px;
  height: 270px;

  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
}

* {
  background: #ededed;
}
</style>
