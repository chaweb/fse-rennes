<template>
<div class="content">
    <article class="content__article" >
        not available
    </article>
    <div class="content__network">
        <p>FSE
            <br><a href="https://www.instagram.com/fse_rennes/" id="insta">instagram</a>
            <br><a href="https://twitter.com/fse_rennes/" id="twitter">twitter</a>
            <br><a href="https://www.facebook.com/FSE.Rennes" id="facebook">facebook</a>
        </p>
        <p>CSR
            <br><a href="https://www.instagram.com/csr_rennes/" id="insta">instagram</a>
            <br><a href="https://twitter.com/csr_rennes/" id="twitter">twitter</a>
        </p>
        <p>national
            <br><a href="https://fse-national.fr" id="web">site official</a>
            <br><a href="https://www.instagram.com/fse_natio/" id="insta">insta</a>
            <br><a href="https://twitter.com/fse_natio/" id="twitter">twitter</a>
            <br><a href="https://www.facebook.com/FSE.natio/" id="facebook">facebook</a>
            <br><a href="https://discord.gg/rdbjyKYSdg" id="discord">discord</a>
        </p>
    </div>
</div>
</template>

//script

<script setup>
    definePageMeta({ layout: 'custom' })
    const colorMode = useColorMode()

</script>

//style of the main page

<style lang="scss" scoped>

.content{
    width: 100vw;
    height: auto;


    @include flexbox('', 'center');

    flex-direction: column;


    &__article{
        width: 100vw;
        max-width: 980px;
        margin: 2em auto 0 auto;

        background-color: #fff;

        @include dark{
            color: #fff;
            background: $backcolor__dark;
        }
    }

    @include screen('+2xl') {
        &__network{
            width: 125px;
            position: fixed;
            right: 5px;

            flex-direction: column ;

        }
    }

    &__network{
        @include flexbox('', 'center');

        margin: 100px 0;
        p {
            margin: 6px 20px;
            
            font-weight: bold;

            a {
                font-weight: initial;
                text-decoration: none;

                transition: .3s scale;
                &:hover{
                    scale: 1.2;
                }
            }
        }
    }
}

</style>


//global style of pages

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,600;0,700;0,900;1,500&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'); //icon font awesome
@import url('https://fonts.cdnfonts.com/css/kollektif');

html, body {
    font-family: 'Montserrat', sans-serif;
    padding: 0;
    margin: 0;

    @include dark{
        color: #fff;
        background: $backcolor__dark;
    }
}


</style>

//global style no-scoped of contents

<style lang="scss">
.content{
    h1, h2 {
        text-align: center;
        font-family: 'Kollektif', sans-serif;
    }
    h1{
        font-size: 2.5rem;
    }
    h2{
        font-size: 2rem;
    }

    a{
        

        font-weight: bold;

        @include dark{
            color: #fff;
        }
        
        @include light{
            color: #000;
        }
    }
}

</style>