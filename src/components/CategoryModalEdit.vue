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
        <q-btn flat label="Confirmar" color="green" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { api } from 'src/boot/axios';
import { UserStore } from 'src/stores/User';
import { onMounted, ref } from 'vue';

// CONSTS
const categoria = ref('');
const confirm = ref(true);
const store = UserStore();
const token = <any>store.user.token;
// FUNCTIONS
const props = defineProps({
  modal: {
      type: String as () => string | undefined,
      default: undefined,
    },
});

// onMounted(()=>{
//   return console.log(props.modal)
// })

async function handleCategoryEdit(){

  const data = categoria.value;


  api.patch('/category', data, {
    headers:{
      Authorization: `Bearer ${token}`,
    }
  } )
}
</script>
