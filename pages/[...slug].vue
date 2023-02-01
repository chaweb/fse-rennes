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
                <option value="system">System</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
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

<script setup>

    const colorMode = useColorMode()

</script>

<style lang="scss" scoped>


main {
    @media (min-width: 769px) {
        padding-top:100px;
    }
}


.nav{
    background: #fff;
    .dark-mode &{
            color: #fff;
            background: #420606;
    }

    width: 100vw;

    &__icon{
        width: 100px;
    }
    @media (min-width: 769px) {
        height: 100px;
        position: fixed;

    }

    align-items: center;

    @media (max-width: 768px) {
        padding: 5px 0;
        flex-direction: column;
    }
    top:0;
    left:0;

    display: flex;

    border-bottom: #d60001 solid 4px;

    &__color{
        padding: 0 50px;
        margin-left: auto;

        select {
            padding: 10px;
            border: 0;

            margin: 0 10px;
            font-weight: bold;
            font-size: 1em;
        }
    }

}

.content{
    width: 100vw;
    height: auto;


    display: flex;

    flex-direction: column;

    align-items: center;


    &__article{
        width: 100vw;
        max-width: 980px;
        margin: 2em auto 0 auto;

        background-color: #fff;

        .dark-mode &{
            color: #fff;
            background: #420606;
        }
    }

    @media (min-width: 1500px) {
        &__network{
            width: 125px;
            position: fixed;
            right: 5px;

            flex-direction: column ;

        }
    }

    &__network{
        display: flex;
        margin: 100px 0;
        align-items: center;
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


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,600;0,700;0,900;1,500&display=swap');
@import url('https://fonts.cdnfonts.com/css/kollektif');
main{
    font-family: 'Montserrat', sans-serif;
}

html, body {
    padding: 0;
    margin: 0;

    .dark-mode &{
        color: #fff;
        background: #420606;
    }
}

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
    color: #000;


    .dark-mode &{
        color: #fff
    }
}
</style>