<template>
<main>
    <!-- step -->
    <adh-0 v-if="adh.stateOf == 0"/> <!-- cordonée -->
    <adh-1 v-if="adh.stateOf == 1"/> <!-- verif mail -->
    <adh-2 v-if="adh.stateOf == 2"/> <!-- adh -->
    <adh-3 v-if="adh.stateOf == 3"/> <!-- don + paye -->
    <!-- end -->

    <div class="progress">
	    <span :style="`width: ${adh.stateOf*100/3}%`">
            {{adh.stateOf}}
        </span>
    </div>
    <button v-on:click="adh.next()">suivant</button>
</main>
</template>

<script setup lang="ts">
    import adh0 from "~/components/adh/adh-0.vue"

    definePageMeta({ layout: 'custom' })
    
    const adh = useAdh()
</script>

<style lang="scss" scoped>
main{
    min-width: 45vw;
    padding-top: 20px;
}
.progress{
    position: relative;
    width: 100px;
    height: 20px;
    background-color: #101001;
    border-radius: 7px;
    span{
        position: absolute;
        left: 0;
        top: 0;
        height: 15px;
        background-color: $fse;
        transition: .3s width;
    }    
}
</style>