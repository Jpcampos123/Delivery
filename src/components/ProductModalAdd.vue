<template>
  <q-dialog
    v-model="confirmAdd"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card
      style="
        min-width: 350px;
        border-radius: 30px;
        border-radius: 4px;
        background: #1d1d2e;
      "
    >
      <q-card-section>
        <div class="text-h6 text-white">Adicionar Produtos</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <!-- <q-input
          outlined
          color="green"
          input-style="color: white;"
          v-model="name"
          autofocus
          label="Name"
          label-color="white"
          @keyup.enter="confirmAdd = false"
          style="margin-bottom: 10px"
        /> -->
        <!-- <q-input outlined v-model="text" label="Outlined" /> -->
        <q-input
          outlined
          color="green"
          input-style="color: white;"
          dense
          v-model="name"
          autofocus
          label="Nome do Produto"
          label-color="white"
          @keyup.enter="confirmAdd = false"
          style="margin-bottom: 10px"
        />
        <q-input
          outlined
          color="green"
          input-style="color: white;"
          dense
          v-model="price"
          autofocus
          label="Preço do Produto"
          label-color="white"
          @keyup.enter="confirmAdd = false"
          style="margin-bottom: 10px"
        />

        <q-input
          outlined
          color="green"
          input-style="color: white;"
          dense
          v-model="description"
          autofocus
          label="Descrição"
          label-color="white"
          @keyup.enter="confirmAdd = false"
          style="margin-bottom: 10px"
        />

        <q-input
          outlined
          color="green"
          input-style="color: white;"
          dense
          v-model="category_id"
          autofocus
          label="ID categoria"
          label-color="white"
          @keyup.enter="confirmAdd = false"
          style="margin-bottom: 10px"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn
          color="green"
          flat
          label="Cancelar"
          @click.prevent="$emit('close')"
          v-close-popup
        />
        <q-btn
          flat
          label="Confirmar"
          color="green"
          v-close-popup
          @click.prevent="handleCategoryEdit"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar';
import { api } from 'src/boot/axios';
import { UserStore } from 'src/stores/User';
import { onMounted, ref } from 'vue';

// CONSTS
const name = ref('');
const price = ref('');
const description = ref('');
const category_id = ref('');
const photo = ref('');
const serve = ref('');
const confirmAdd = ref(true);
const store = UserStore();
const token = <any>store.user.token;
const $q = useQuasar();

// interface Modal {
//   id: string | undefined;
// }
// FUNCTIONS
// const props = defineProps<{
//   modal: Modal;
// }>();

const emit = defineEmits(['get', 'close']);

// onMounted(() => {
//   return console.log(props.modal.id);
// });

async function handleCategoryEdit() {
  $q.loading.show();

  const data = {
    name: name.value,
  };

  await api
    .post('/produtos', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      emit('get');
      emit('close');
      $q.notify({
        type: 'positive',

        caption: 'Success',
        message: 'Adicionado com  Sucesso',
        color: 'positive',
      });
      $q.loading.hide();
    })
    .catch((err) => {
      $q.notify({
        type: 'negative',
        message: 'Algo deu Errado',
        color: 'negative',
      });
      $q.loading.hide();
    });
}
</script>
