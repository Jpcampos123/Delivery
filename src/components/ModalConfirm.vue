<template>
  <q-dialog
    v-model="confirm"
    persistent
    transition-show="scale"
    transition-hide="scale"
  >
    <q-card style="border-radius: 30px; width: 315px; height: 122px">
      <q-card-section class="row items-center text-center">
        <span style="margin: 0 auto">Deseja Retirar este item da sacola?</span>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          square
          flat
          label="Não"
          color="deep-orange-7"
          @click.prevent="$emit('close')"
          v-close-popup
        />
        <q-btn
          size="13px"
          square
          rounded
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
