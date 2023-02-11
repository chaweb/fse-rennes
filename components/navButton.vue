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
    white-space: nowrap;
    .dark-mode &{
        color: #fff;
    }
    font-weight: bolder;

    text-decoration: none;
    color: black;
    font-size: 1.5em;

    transition: .3s scale, .3s box-shadow;

    @media (min-width: 1200px) {
        
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

    @media (min-width: 767px) {
        &:hover{
            scale: 1.2;

            &:after{
                width: 100%;
            }
        }
    }
    @media (max-width: 1200px) {
        width: 100%;
        height: 40px;

        
        display: flex;
        align-items: center;
        justify-content: center;

        
        padding: 4px 0;

        &:nth-child(2n){
            background: #BBB;
            .dark-mode &{
                background: invert($color: #bbb);
            }
        }
        &:nth-child(2n+1){
            background: #fff;
            .dark-mode{
                background: #280404;
            }
        }
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset; 
        &:hover{
            z-index: 10;
            box-shadow: none;
        }
    }
}

</style>