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
            font-family: Roboto;
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          "
        >
          Categorias
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
          v-for="category in categories"
          :key="category.index"
          style="align-items: center"
        >
          <q-item
            @click.prevent="handleEditModal(category)"
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
                font-family: Roboto;
                font-size: 22px;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
              "
              >{{ category.name }}</q-item-label
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
    @get="getCategorias"
  />
  <CategoryModalAdd
    v-if="confirmAdd"
    @close="confirmAdd = false"
    @get="getCategorias"
  />
</template>

<script setup lang="ts">
import axios from 'axios';
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import CategoryModalAdd from 'src/components/CategoryModalAdd.vue';
import CategoryModalEdit from 'src/components/CategoryModalEdit.vue';
import { UserStore } from 'src/stores/User';
import { inject, onBeforeMount, onMounted, ref } from 'vue';
import { Socket } from 'socket.io-client';

// CONST
const socket = inject('socket') as Socket;
const confirm = ref(false);
const confirmAdd = ref(false);
const categories = <any>ref(null);
const store = UserStore();
const token = <any>store.user.token;
const $q = useQuasar();
const modal = <any>ref(null);

// FUNCTIONS

// onBeforeMount(() => {
//   return getCategorias();
// });

onMounted(() => {
  // socket.connect(); //Connect to socket server
  getCategorias();
  // updateCategorias();
});

async function getCategorias() {
  await api
    .get('/category', {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    })
    .then((res) => {
      categories.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// async function getCategorias() {
//   await socket.emit('findAllSocketTest', (data: any) => {
//     categories.value = data;
//     console.log(data);
//   });
// }

// async function updateCategorias() {
//   await socket.on('receive_message', (data) => {
//     categories.value = data;
//   });
// }

function handleAdd() {
  $q.loading.show();
  confirmAdd.value = true;
  $q.loading.hide();
}
// async function getCategorias() {
//   $q.loading.show();
//   await axios
//     .post('http://localhost:3000/webhooks/order', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//     .then((res) => {
//       categories.value = res.data;
//       $q.loading.hide();
//     })
//     .catch((err) => {
//       console.log(err);
//       $q.loading.hide();
//     });
// }

function handleEditModal(category: string) {
  $q.loading.show();
  confirm.value = true;
  $q.loading.hide();
  modal.value = category;
  // console.log(confirm.value);
}
</script>

<style scoped></style>
