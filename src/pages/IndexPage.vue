<template>
  <q-page class="">
    <div>
      <div
        class="full-width q-pt-lg"
        style="
          margin-left: 50px;
          width: 185px;
          height: 82px;
          font-family: 'Roboto';
          font-style: normal;
          line-height: 41px;

          color: #000000;
        "
      >
        <h4 class="text-center text-h5">Deliciosos pratos para você.</h4>
      </div>
      <div style="margin-top: 1.5rem">
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
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="pratos">
          <section
            style="
              overflow-x: scroll;
              display: inline-flex;
              margin-top: 100px;
              margin-bottom: 100px;
            "
            class=""
          >
            <div v-for="item in MyProduct" :key="item.id">
              <div
                v-if="
                  item.category_id == '40df5fba-05f4-46e7-862c-f7f6fb83c21c'
                "
                class="cursor-pointer little-card"
                @click.prevent="handleOrderDetail(item)"
              >
                <!-- <img src="../../../backend-delivery/client/" alt="" />
                `../../public/produto/${item.banner}` -->
                <img
                  :src="`http://localhost:3000/${item.banner}`"
                  alt=""
                  style="
                    position: relative;
                    object-fit: cover;
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
                  {{ item.name }}
                </h5>

                <h5
                  class="text-center text-deep-orange-7"
                  style="background-color: white; margin: 15px 0 0 0"
                >
                  {{ item.price }} R$
                </h5>
              </div>
            </div>
          </section>
          <!-- <div style="margin-top: 100px; margin-bottom: 100px">
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
          </div> -->
        </q-tab-panel>
        <q-tab-panel name="bebidas">
          <section
            style="
              overflow-x: scroll;
              display: inline-flex;
              margin-top: 100px;
              margin-bottom: 100px;
            "
            class=""
          >
            <div v-for="item in MyProduct" :key="item.id">
              <div
                class="cursor-pointer little-card"
                v-if="
                  item.category_id == '6cb37543-79b1-4bea-ac45-a846557f9c74'
                "
                @click.prevent="handleOrderDetail(item)"
              >
                <img
                  :src="`http://localhost:3000/${item.banner}`"
                  alt=""
                  style="
                    position: relative;
                    object-fit: cover;
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
                  {{ item.name }}
                </h5>

                <h5
                  class="text-center text-deep-orange-7"
                  style="background-color: white; margin: 15px 0 0 0"
                >
                  {{ item.price }} R$
                </h5>
              </div>
            </div>
          </section>
        </q-tab-panel>
        <q-tab-panel name="sobremesas">
          <section
            style="
              overflow-x: scroll;
              display: inline-flex;
              margin-top: 100px;
              margin-bottom: 100px;
            "
            class=""
          >
            <div v-for="item in MyProduct" :key="item.id">
              <div
                class="cursor-pointer little-card"
                v-if="
                  item.category_id == 'b6f7964f-dfc7-444e-b3e1-753ef92f1e25'
                "
                @click.prevent="handleOrderDetail(item)"
              >
                <img
                  :src="`http://localhost:3000/${item.banner}`"
                  alt=""
                  style="
                    position: relative;
                    object-fit: cover;
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
                  {{ item.name }}
                </h5>

                <h5
                  class="text-center text-deep-orange-7"
                  style="background-color: white; margin: 15px 0 0 0"
                >
                  {{ item.price }} R$
                </h5>
              </div>
            </div>
          </section>
        </q-tab-panel>
      </q-tab-panels>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
// import db from '../../db.json';
import { api } from 'src/boot/axios';
import { UserStore } from 'src/stores/User';

// CONSTS
const text = ref(null);
const tab = ref('pratos');
const router = useRouter();
// const Mydb = reactive({ db });
const MyProduct = <any>ref(null);
const store = UserStore();
const token = <any>store.user.token;

onMounted(() => {
  return api
    .get('/product', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then((res) => {
      MyProduct.value = res.data;
    })
    .catch((err) => console.log(err));
});

// FUNCTIONS

function handleOrderDetail(item: any) {
  router.push({ name: 'OrderDetail', query: item });
}
</script>

<style scoped>
.cards {
  scroll-snap-type: x mandatory;
}

.card {
  display: flex;

  flex-direction: column;
  margin: 0 10px;
  flex: 0 0 68%;
  padding: 17px;
  background: var(--white);
  border-radius: 12px;

  scroll-snap-align: start;
  transition: all 0.2s;
}
h4 {
  margin-top: 0;
}
/* .little-card {
  margin: 0 34px 56px 50px;
  width: 220px;
  height: 270px;

  background: #ffffff;
  box-shadow: 0px 30px 60px rgba(57, 57, 57, 0.1);
  border-radius: 30px;
} */

.little-card {
  margin: 50px 34px 56px 10px;
  width: 220px;
  height: 300px;

  background: #ffffff;

  border-radius: 30px;
}

* {
  background: #ededed;
}
</style>
