<template>
  <q-dialog
    v-model="confirm"
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
        <div class="text-h6 text-white">Editar categoria</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-input
          color="green"
          input-style="color: white;"
          dense
          v-model="categoria"
          autofocus
          @keyup.enter="confirm = false"
        />
      </q-card-section>

      <q-card-actions align="right" class="text-primary">
        <q-btn
          color="green"
          flat
          label="Cancel"
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
const categoria = ref('');
const confirm = ref(true);
const store = UserStore();
const token = <any>store.user.token;
const $q = useQuasar();

interface Modal {
  id: string | undefined;
}
// FUNCTIONS
const props = defineProps<{
  modal: Modal;
}>();

const emit = defineEmits(['get', 'close']);

// onMounted(() => {
//   return console.log(props.modal.id);
// });

async function handleCategoryEdit() {
  $q.loading.show();

  const data = {
    name: categoria.value,
  };

  await api
    .patch(`/category/${props.modal.id}`, data, {
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
        message: 'Alterado com  Sucesso',
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
