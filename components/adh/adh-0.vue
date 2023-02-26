<template>
    <form action="" class="pay_form">
        <input required type="text" id="name" class="pay_form-name" v-model="form.name">
        <label for="name">prénom*</label>
        <br/>
        <input required type="text" id="lastname" class="pay_form-name" v-model="form.lastname">
        <label for="lastname">nom de famille*</label>
        <br/>
        <input required type="text" id="address" class="pay_form-address" v-model="form.address" placeholder="Cité U Beaulieu, Rennes" >
        <label for="address" >adresse* (ville ou cité universitaire)</label>
        <br/>
        <input required type="email" pattern=".+@globex\.com" id="email" class="pay_form-email" v-model="form.email" placeholder="default@example.com" >
        <label for="email">email*</label>
        <br/>
        <input required type="phone" pattern=".+@globex\.com" id="phone" class="pay_form-phone" v-model="form.phone" placeholder="0687****57" >
        <label for="phone">telephone*</label>
        <br/>
        <input required type="checkbox" id="condition" class="pay_form-phone" v-model="form.phone" placeholder="0687****57" >
        <label for="condition">accepter les <nuxtLink to="condition">condition d'utilisation</nuxtLink></label>
        <br/>
    </form>
</template>

<script setup lang="ts">
    const adh = useAdh()
</script>

<script lang="ts">
export default defineComponent({
    data () {
        return {
            form: {
                name : "",
                lastname : "",
                address : "",
                email : ""
            }
        }
    },
})
</script>
