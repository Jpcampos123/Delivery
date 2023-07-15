<template>
  <div>
    <div>
      <div class="flex justify-center items-center" style="margin-bottom: 31px">
        <h3
          style="
            color: white;
            margin: 0;
            text-align: center;
            text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
          "
        >
          Produtos
        </h3>
        <q-icon
          name="add"
          color="green"
          size="30px"
          class="cursor-pointer"
          @click.prevent="handleAdd"
        />
      </div>
      <div>
        <q-list
          v-for="product in products"
          :key="product.index"
          style="align-items: center"
        >
          <q-item
            @click.prevent="handleEditModal(product)"
            clickable
            v-ripple
            class="justify-between"
            style="
              max-width: 831px;
              margin: 13px auto;
              border-radius: 6px;
              border: 1px solid #000;
              background: #101026;
            "
          >
            <q-item-label
              class="text-white"
              style="
                text-align: center;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
              "
              >{{ product.name }}</q-item-label
            >
            <q-icon name="delete" color="red" size="27px" />
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
  <CategoryModalEdit
    v-if="confirm"
    @close="confirm = false"
    :modal="modal"
    @get="getProducts"
  />
  <ProductModalAdd
    v-if="confirmAdd"
    @close="confirmAdd = false"
    @get="getProducts"
  />
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';

import CategoryModalEdit from 'src/components/CategoryModalEdit.vue';
import ProductModalAdd from 'src/components/ProductModalAdd.vue';
import { UserStore } from 'src/stores/User';
import { onBeforeMount, onMounted, ref } from 'vue';

// CONST
const confirm = ref(false);
const confirmAdd = ref(false);
const products = <any>ref(null);
const store = UserStore();
const token = <any>store.user.token;
const $q = useQuasar();
const modal = <any>ref(null);

// FUNCTIONS

onBeforeMount(() => {
  return getProducts();
});

// onMounted(() => {
//   return getProducts();
// });

function handleAdd() {
  $q.loading.show();
  confirmAdd.value = true;
  $q.loading.hide();
}
async function getProducts() {
  $q.loading.show();
  await api
    .get('/product', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      products.value = res.data;
      $q.loading.hide();
    })
    .catch((err) => {
      console.log(err);
      $q.loading.hide();
    });
}

function handleEditModal(category: string) {
  $q.loading.show();
  confirm.value = true;
  $q.loading.hide();
  modal.value = category;
  // console.log(confirm.value);
}
</script>

<style scoped></style>
