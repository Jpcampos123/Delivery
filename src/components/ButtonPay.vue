<template>
  <div id="wallet_container"></div>
</template>

<script setup>
const props = defineProps({
  preferenceId: String,
});
// produção
// const mp = new MercadoPago('APP_USR-f1d023e3-359b-4f80-bb8e-924a8d528bdb', {
//   locale: 'pt-BR',
// });

// dev
const mp = new MercadoPago('TEST-e015aa09-448a-4b01-9e61-a151177efa80', {
  locale: 'pt-BR',
});

mp.bricks().create('wallet', 'wallet_container', {
  initialization: {
    preferenceId: props.preferenceId,
    // redirectMode: 'modal',
  },
  customization: {
    texts: {
      action: 'pay',
    },
  },
});

// f4511e
</script>
