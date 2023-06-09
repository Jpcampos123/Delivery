<template>
  <div id="wallet_container"></div>
</template>

<script src="https://sdk.mercadopago.com/js/v2">
const mp = new MercadoPago('TEST-e015aa09-448a-4b01-9e61-a151177efa80');

mp.bricks().create('wallet', 'wallet_container', {
   initialization: {
       preferenceId: '<PREFERENCE_ID>',
   },
});
</script>
