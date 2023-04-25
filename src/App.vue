<template>
  <router-view />
  <div class="full-width text-center" style="position: static; bottom: 0">
    <q-tabs
      v-model="tab"
      indicator-color="deep-orange-7"
      active-color="deep-orange-7"
      class="text-grey"
      style="width: 100%; margin: 0 auto"
    >
      <q-tab name="home" icon="home" />
      <q-tab name="like" icon="favorite" />
      <q-tab name="profile" icon="person" />
    </q-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// CONSTS
const tab = ref('home');
</script>

<style></style>
