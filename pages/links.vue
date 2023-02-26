<template lang="pug">.
.content
    main
        img(src="/fseRennes.png" width="200")
        h1 FSE de Rennes
        h2 Nos réseaux en une page! <br> Un syndicat fait par des étudiant.es pour les étudiant.es.
        .grid
            h4 
                span FSE Rennes
                div
                    a(href="mailto:rennes.fse@gmail.com")
                        icon(name="mdi:email" size="36").mail
                        div mail
                    a(href="https://www.instagram.com/fse_rennes/")
                        icon(name="mdi:instagram" size="36").instagram
                        div instagram
                    a(href="https://twitter.com/fse_rennes/")
                        icon(name="mdi:twitter" size="36").twitter
                        div twitter
                    a(href="https://www.facebook.com/FSE.Rennes")
                        icon(name="mdi:facebook" size="36").facebook
                        div facebook
            h4 
                span CSR Beaulieu/Mirabeau
                div
                    a(href="https://www.instagram.com/csr_rennes/")
                        icon(name="mdi:instagram" size="36").instagram
                        div instagram
                    a(href="https://twitter.com/csr_rennes/")
                        icon(name="mdi:twitter" size="36").twitter
                        div twitter
                    nuxtLink(to="/whatsapp")
                        icon(name="mdi:whatsapp" size="36").whatsapp
                        div whatsapp
                    a(href="https://discord.com/invite/ja2xhaXGN8")
                        icon(name="mdi:discord" size="36").discord
                        div discord
            h4 
                span FSE national
                div
                    a(href="https://fse-national.fr/")
                        icon(name="ph:link-fill" size="36").lien
                        div fse-national.fr
                    a(href="https://www.instagram.com/fse_natio/")
                        icon(name="mdi:instagram" size="36").instagram
                        div instagram
                    a(href="https://twitter.com/fse_natio/")
                        icon(name="mdi:twitter" size="36").twitter
                        div twitter
                    a(href="https://www.facebook.com/FSE.natio/")
                        icon(name="mdi:facebook" size="36").facebook
                        div facebook
                    a(href="https://discord.gg/rdbjyKYSdg")
                        icon(name="mdi:discord" size="36").discord
                        div discord
            


</template>

<script>
definePageMeta({
      colorMode: 'light',
})
</script>

<style lang="sass" scoped>

.content
    display: flex
    flex-direction: column
    align-items: center

main
    display: flex
    flex-direction: column
    align-items: center
    max-width: 1250px
    h2
        color: #252525
        font-weight: 600
        padding: 0 50px
    .grid
        display: flex
        flex-direction: column
        padding: 10px
    h4 
        background-color: #c7c7c7
        padding: 30px 25px
        border-radius: 5px
        position: relative
        display: flex
        align-items: center
        justify-content: space-between
        border: solid #00000055 5px
        box-shadow: #00000055 inset 0 0 15px
        div
            display: flex
            flex-wrap: wrap
            row-gap: 20px
        span
            
            margin-right: 30px
            white-space: nowrap
        
    a
        color: black
        text-decoration: none
        padding: 8px
        transition: .3s
        margin: 0 0 0 15px
        position: relative
        display: flex
        justify-content: center
        div
            position: absolute
            top: 18px
            width: max-content
            text-align: center
            transform: scale(0)
            transition: .3s
            color: #000
        svg
            z-index: 1
            background-color: #a7a7a7
            border-radius: 10px
            padding: 5px
            transition: .3s
            scale: 1
            &.instagram
                background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)
            &.twitter
                background: #00ACEE
            &.facebook
                background: #3B5998
            &.discord
                background: #7289DA
            &.whatsapp
                background: #25D366
            &.lien
                background: #0cc
            &.mail
                background: #2f8
        @media (hover: hover)
            &:hover
                color: #c70001 !important
                svg
                    scale: 1.3
                    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px , rgba(0, 0, 0, 0.15) 0px -10px 15px, inset #ffffffaa 0 0 15px
                div
                    transform: scale(1.2)
                    color: #000
                    top: 100%
            
</style>