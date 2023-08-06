<template>
<div>
    <article class="content__article" >
        <ContentDoc>
            <template #not-found>
                <h1>error 404</h1>
                <p>la page que vous cherchez n'existe pas.</p>
                <p>veillez contacter un.e responsables de la FSE si cela n'est pas normal</p>
                <nuxtLink to="/">pour revenir à l'accueil</nuxtLink>
            </template>
        </ContentDoc>
    </article>
</div>
</template>

//script

<script setup>
    definePageMeta({ layout: 'custom' })
    const colorMode = useColorMode()

</script>

//style of the main page

<style lang="scss">



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
        font-family: 'Kollektif', sans-serif;
    }
    h1{
        font-size: 3rem;
    }
    h2{
        font-size: 2rem;
    }

    strong{
        font-weight: bolder;
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