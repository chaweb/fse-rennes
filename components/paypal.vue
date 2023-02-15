<template>
<div>
    <div id="paypal-button-container"></div>
</div>
</template>

<script>

export default {
    props: ['montant'],
    mounted: function () {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=Acm_7wjqghIbsHtkLka7iLWvNspbG38wGM7q1au5S10HALquJNJH7ZW7QxTGc5fX30Vi6EJB5kkLf3Lx`;
      script.addEventListener("load", this.setLoaded);
      document.body.appendChild(script);
    },

    methods: {
      openPaymentAmountModal() {
        this.isPaymentAmountModalVisible = true;
      },
      closePaymentAmountModal() {
        this.isPaymentAmountModalVisible = false;
      },
      setLoaded: function () {
        var montant = (this.montant)
        window.paypal.Buttons({
          createOrder: function (data, actions) {
            // This function sets up the details of the transaction, including the amount and line item details.
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: montant
                }
              }]
            });
          },
          onApprove: function (data, actions) {
            // This function captures the funds from the transaction.
            return actions.order.capture().then(function (details) {
              // This function shows a transaction success message to your buyer.
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }
        }).render("#paypal-button-container");
      }
    },
}
</script>
