<template lang="pug">.
.content
    main
        img(src="/fseRennes.png" width="200")
        h1 Beaulieu Mirabeau
        h2 choisissez votre bâtiment
        .grid
            a(href="https://chat.whatsapp.com/G0lNy89dkpwCxDvJPVBJL8")
                img(src="/waimg/A.png" width="100")
                div bâtiment A 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/K94GaNxr9SK8LzJhdV3i2H")
                img(src="/waimg/B.png" width="100")
                div bâtiment B 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/JXlsQgAXGRF007SXieUXhj")
                img(src="/waimg/C.png" width="100")
                div bâtiment C 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/G3lYMNMSTSEBHgNe4xNH9x")
                img(src="/waimg/D.png" width="100")
                div bâtiment D 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/BAricS9uJrh9haMLj7jltv")
                img(src="/waimg/E.png" width="100")
                div bâtiment E 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/Bna8g342TchKZ3xrMGH51r")
                img(src="/waimg/F.png" width="100")
                div bâtiment F 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/K94GaNxr9SK8LzJhdV3i2H")
                img(src="/waimg/G.png" width="100")
                div bâtiment G 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/BAqan27VWbKD3OIGHzhhOS")
                img(src="/waimg/H.png" width="100")
                div bâtiment H 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/Ed8UtIjZJk7L3r6hDoXvLc")
                img(src="/waimg/I.png" width="100")
                div bâtiment I 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/DNt7h2Zz4JWJRrBmHFx7aC")
                img(src="/waimg/J.png" width="100")
                div bâtiment J 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/GKmaOAXFtaBJhWGD8dqMXV")
                img(src="/waimg/K.png" width="100")
                div bâtiment K 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/FHx7gQPEzXA5lvb1Pvn1hB")
                img(src="/waimg/L.png" width="100")
                div bâtiment L 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            a(href="https://chat.whatsapp.com/LnzuET63QNwEqXxC7Zg4vC")
                img(src="/waimg/V.png" width="100")
                div bâtiment V 
                    span
                        icon(name="mdi:whatsapp" size="30").whatsapp
            
        nuxtLink(to="links" style="text-align: center").return
            icon(name="icon-park:return" size="24")
            span Retour aux liens



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
        margin-bottom: 40px
    a
        border: lighten(#c70001, 15%) inset 5px
        border-radius: 50%
        @media (hover: hover)
            box-shadow: #333333aa 0 0 15px inset
        font-weight: 800 
        color: black
        text-decoration: none
        padding: 8px
        position: relative
        display: flex
        justify-content: center
        margin: 20px 15px
        img
            transition: .15s
            scale: 1
            border-radius: 50%

        div
            position: absolute
            width: max-content
            text-align: center
            transition: .15s
            color: #000
            z-index: -1
            
            span
                display: inline-block
                padding: 4px
                border-radius: 50%
                background-color: #25D366
            
            @media (hover: hover)
                top: 18px
                transform: scale(0)
            @media (hover: none)
                top: 100%
        
        @media (hover: hover)
            &:hover
                img
                    transition: .3s
                    scale: 1.3
                    box-shadow: #000000aa 0px 5px 15px , rgba(0, 0, 0, 0.15) 0px -10px 15px

                div
                    transition: .3s
                    transform: scale(1.2)
                    color: #000
                    top: 110%

.return
    border: #C70001 solid 2px
    border-radius: 10px
    display: flex
    align-items: center
    column-gap: 10px
    transition: .15s
    &:hover
        transform: scale(1.2)
        transition: .3s
</style>