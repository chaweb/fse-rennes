<template lang="pug">.
.content
    main
        img(src="/fseRennes.png" width="200")
        h1 Beaulieu Mirabeau
        h2 choisissez votre batiment
        .grid
            a(href="https://chat.whatsapp.com/G0lNy89dkpwCxDvJPVBJL8")
                img(src="/waimg/A.png" width="100")
            a(href="https://chat.whatsapp.com/K94GaNxr9SK8LzJhdV3i2H")
                img(src="/waimg/B.png" width="100")
            a(href="https://chat.whatsapp.com/JXlsQgAXGRF007SXieUXhj")
                img(src="/waimg/C.png" width="100")
            a(href="https://chat.whatsapp.com/G3lYMNMSTSEBHgNe4xNH9x")
                img(src="/waimg/D.png" width="100")
            a(href="https://chat.whatsapp.com/BAricS9uJrh9haMLj7jltv")
                img(src="/waimg/E.png" width="100")
            a(href="https://chat.whatsapp.com/Bna8g342TchKZ3xrMGH51r")
                img(src="/waimg/F.png" width="100")
            a(href="https://chat.whatsapp.com/K94GaNxr9SK8LzJhdV3i2H")
                img(src="/waimg/G.png" width="100")
            a(href="https://chat.whatsapp.com/BAqan27VWbKD3OIGHzhhOS")
                img(src="/waimg/H.png" width="100")
            a(href="https://chat.whatsapp.com/Ed8UtIjZJk7L3r6hDoXvLc")
                img(src="/waimg/I.png" width="100")
            a(href="https://chat.whatsapp.com/DNt7h2Zz4JWJRrBmHFx7aC")
                img(src="/waimg/J.png" width="100")
            a(href="https://chat.whatsapp.com/GKmaOAXFtaBJhWGD8dqMXV")
                img(src="/waimg/K.png" width="100")
            a(href="https://chat.whatsapp.com/FHx7gQPEzXA5lvb1Pvn1hB")
                img(src="/waimg/L.png" width="100")
            a(href="https://chat.whatsapp.com/LnzuET63QNwEqXxC7Zg4vC")
                img(src="/waimg/V.png" width="100")
            
        nuxtLink(to="links" style="text-align: center")
            icon(name="icon-park:return" size="24")
            br
            | Retour au lien



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
        text-decoration: underline
    .grid
        display: flex
        max-width: 550px
        justify-content: center
        flex-wrap: wrap
    a
        color: black
        text-decoration: none
        padding: 8px
        img
            transition: .3s
            scale: 1
        &:hover
            img
                scale: 1.3
</style>