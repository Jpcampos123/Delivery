<template>
  <q-dialog
    v-model="confirm"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="border-radius: 10px; width: 315px; height: 122px">
      <q-card-section class="row items-center text-center">
        <span style="margin: 0 auto">Deseja sair da Conta?</span>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          flat
          label="Não"
          color="deep-orange-7"
          @click.prevent="$emit('close')"
          v-close-popup
        />
        <q-btn
          label="Sim"
          color="deep-orange-7"
          v-close-popup
          @click.prevent="$emit('accept')"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// CONSTS
const confirm = ref(true);
// FUNCTIONS
</script>
