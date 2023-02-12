<template>
<main>
    <nav class="nav">
        <img src="/fseRennes.png" alt="logo de la fse de Rennes" class="nav__icon">
        <navButton to="/">Rennes</navButton>
        <navButton to="/adhesion">adhésion</navButton>
        <navButton to="/cas">Fac beaulieu</navButton>
        <navButton to="/csr">CSR</navButton>

        <div class="nav__color">
            <select v-model="$colorMode.preference">
                <option value="system">system</option>
                <option value="light">lumineux</option>
                <option value="dark">sombre</option>
            </select>
        </div>
    </nav>
    <div class="content">
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
</main>
</template>

//script

<script setup>

    const colorMode = useColorMode()

</script>

//style of the main page

<style lang="scss" scoped>


main {
    @include screen('+xl') {
        padding-top:100px;
    }
}


.nav{ 
    background: #fff;
    @include dark{
            color: #fff;
            background: $backcolor__dark;
    }

    width: 100vw;

    &__icon{
        width: 100px;
    }
    @include screen('+xl') {
        height: 100px;
        position: fixed;
        top:0;
        left:0;

    }

    @include flexbox('', 'center');

    @include screen('-xl') {
        padding: 5px 0;
        flex-direction: column;
    }

    border-bottom: #d60001 solid 4px;

    &__color{ ///input color mode
        position: relative;
        margin: 0 20px 0 auto;
        @include screen('-xl'){
            margin: 20px auto;
        }
        &::before {
            border-radius: 15px;
            content: "\f13a";
            font-family: FontAwesome;
            position: absolute;
            top: 0;
            right: 0%;
            width: 20%;
            height: 100%;
            text-align: center;
            font-size: 28px;
            line-height: 45px;
            color: rgba(255, 255, 255, 0.5);
            background-color: rgba(255, 255, 255, 0.1);
            pointer-events: none;
        }

        &:hover::before {
            color: rgba(255, 255, 255, 0.6);
            background-color: rgba(255, 255, 255, 0.2);
        }
        select {
            border-radius: 15px;
            background-color: #c21d04;
            color: white;
            padding: 12px;
            width: 250px;
            border: none;
            font-size: 20px;
            box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
            appearance: button;
            outline: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            text-indent: 1px;
            text-overflow: '';
            option{
                border-radius: 15px;
            }
            
        }

        

    }

}

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