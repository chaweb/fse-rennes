<template>
<main>
    
    <form action="" class="pay_form">
        <input required type="text" id="name" class="pay_form-name" v-model="form.name">
        <label for="name">prénom*</label>
        <br/>
        <input required type="text" id="lastname" class="pay_form-name" v-model="form.lastname">
        <label for="lastname">nom de famille*</label>
        <br/>
        <input type="text" id="address" class="pay_form-address" v-model="form.address" placeholder="Cité U Beaulieu, Rennes" >
        <label for="address" >adresse (ville ou cité universitaire)</label>
        <br/>
        <input type="email" pattern=".+@globex\.com" id="email" class="pay_form-email" v-model="form.email" placeholder="default@example.com" >
        <label for="email">email</label>
        <br/>
        <input type="phone" pattern=".+@globex\.com" id="phone" class="pay_form-phone" v-model="form.phone" placeholder="0687****57" >
        <label for="phone">telephone</label>
        <br/>
        <input type="checkbox" id="adh" class="pay_form-adhession" v-model="form.adhesion">
        <label for="adh">adhérer</label>
        <br/>
        <input type="number" id="don" class="pay_form-don" v-model="form.don">
        <label for="don">faire un don</label>
    </form>
    <div class="pay" v-if="pay_accept">
        <p class="pay_montant">montant: {{montant}}€</p>
        <paypal class="pay_paypal" :montant="montant" :key="montant"></paypal>
    </div>
    <div class="nopay" v-else>
        <button>donner seulement mon contact</button>
    </div>
</main>
</template>

<script setup>
    definePageMeta({ layout: 'custom' })
    const colorMode = useColorMode()
</script>

<script>
export default {
    data () {
        return {
            form: {
                name : "",
                lastname : "",
                address : "",
                adhesion : false,
                don : 0,
                email : ""
            }
        }
    },
    computed : {
        montant(){
            return this.form.don + (this.form.adhesion ? 5 : 0) 
        },
        pay_accept(){
            
            if(this.form.name == ""){
                return false
            }
            if(this.form.lastname == ""){
                return false
            }

            if(this.montant <= 0){
                return false
            }
            return true
        }
    },
    setup() {
        
    },
}
</script>