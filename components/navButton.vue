<template>
<nuxtLink :to="to" class="button">  
    <slot/>
</nuxtLink>
</template>

<script>
export default {
    props: ['to'],
}
</script>

<style lang="scss" scoped>

.button{
    .dark-mode &{
        color: #fff;
    }
    font-weight: bolder;

    text-decoration: none;
    color: black;
    font-size: 1.5em;

    transition: .3s scale;

    @media (min-width: 769px) {
        
        margin: 10px 25px;

        //animation seulement sur desktop ou +
        position: relative;
        &:after{
            content: '';
            display: block;

            position: absolute;
            background: #d60001;

            width: 0px;
            height: 3px;

            border-radius:5px;

            transition: .3s width
        }

        &:hover{
            scale: 1.2;

            &:after{
                width: 100%;
            }
        }
    }

    @media (max-width: 769px) {
        width: 100%;
        height: 40px;

        
        display: flex;
        align-items: center;
        justify-content: center;

        
        padding: 4px 0;

        &:nth-child(2n){
            background: #BBB;
        }

    }
}

</style>