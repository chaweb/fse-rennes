<template>
<div>
    <div id="paypal-button-container"></div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: ['montant'],
  mounted: function(){
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=Acm_7wjqghIbsHtkLka7iLWvNspbG38wGM7q1au5S10HALquJNJH7ZW7QxTGc5fX30Vi6EJB5kkLf3Lx&currency=EUR`;
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
  },
  method:{
    openPaymentAmountModal() {
      this.isPaymentAmountModalVisible = true;
    },
    closePaymentAmountModal() {
      this.isPaymentAmountModalVisible = false;
    },
    setLoaded: function () {
        const { createItems } = useDirectusItems();
        var montant = (this.montant)
        window.paypal.Buttons({
          createOrder: function (data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: montant,
                }
              }]
            });
          },
          onApprove: function (data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function (details) {
              // This function shows a transaction success message to your buyer.
              const purchase = details.purchase_units[0]
              const payer = details.payer
              var detail = `${details.id} : ${details.create_time} (name : ${payer.name.surname} ; email : ${payer.email_address} ; payer_id : ${payer.payer_id}) ${purchase.amount.value} ${purchase.amount.currency_code}`
              console.log(details);
              console.log(detail)
            });
          },
          onCancel : function (data) {
            alert("Transaction annulée !");
          }
        }).render("#paypal-button-container");
      }
  }
})
</script>
