<template>
  <div style="margin-bottom: 10%" id="wallet_container"></div>
</template>

<script setup>
const props = defineProps({
  preferenceId: String,
});
const mp = new MercadoPago('TEST-e015aa09-448a-4b01-9e61-a151177efa80', {
  locale: 'pt-BR',
});

mp.bricks().create('wallet', 'wallet_container', {
  initialization: {
    preferenceId: props.preferenceId,
    redirectMode: 'modal',
  },
});
</script>
