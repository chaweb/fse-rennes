<template lang="pug">.
.content
    main
        img(src="/fseRennes.png" width="200")
        h1 Rennes
        h2 Nos reseaux en une page ! Un syndicat fait par des étudiant.es pour les étudiant.es
        .grid
            h4 Fse Rennes 1
                a(href="mailto:rennes.fse@gmail.com")
                    icon(name="mdi:email" size="36")
                a(href="https://www.instagram.com/fse_rennes/")
                    icon(name="mdi:instagram" size="36")
                a(href="https://twitter.com/fse_rennes/")
                    icon(name="mdi:twitter" size="36")
                a(href="https://www.facebook.com/FSE.Rennes")
                    icon(name="mdi:facebook" size="36")
            h4 CSR Beaulieu/mirabeau
                a(href="https://www.instagram.com/csr_rennes/")
                    icon(name="mdi:instagram" size="36")
                a(href="https://twitter.com/csr_rennes/")
                    icon(name="mdi:twitter" size="36")
                nuxtLink(to="/whatsapp")
                    icon(name="mdi:whatsapp" size="36")
                a(href="https://discord.com/invite/ja2xhaXGN8")
                    icon(name="mdi:discord" size="36")
            h4 FSE national
                a(href="https://fse-national.fr/")
                    icon(name="mdi:link" size="36")
                a(href="https://www.instagram.com/fse_natio/")
                    icon(name="mdi:instagram" size="36")
                a(href="https://twitter.com/fse_natio/")
                    icon(name="mdi:twitter" size="36")
                a(href="https://www.facebook.com/FSE.natio/")
                    icon(name="mdi:facebook" size="36")
                a(href="https://discord.gg/rdbjyKYSdg")
                    icon(name="mdi:discord" size="36")
            


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
        color: #333
        font-weight: 600
        padding: 0 50px
    .grid
        display: flex
        flex-direction: column
    a
        color: black
        text-decoration: none
        padding: 8px
        transition: .3s
        margin: 0 0 0 15px
        svg
            padding: 5px
            transition: .3s
            scale: 1
        &:hover
            color: #c70001 !important
            svg
                scale: 1.3
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px , rgba(0, 0, 0, 0.15) 0px -10px 15px
            
</style>