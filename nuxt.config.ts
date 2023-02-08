// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        baseURL: '/fse-rennes/',
        head: {      
            charset: 'utf-8',      
            viewport: 'width=500, initial-scale=1',      
            title: 'fse web site',      
            link: [
                {
                    rel:"apple-touch-icon", 
                    sizes:"180x180", 
                    href: 'apple-touch-icon.png'
                },
                {
                    rel:"image/png", 
                    sizes:"32x32", 
                    href: 'favicon-32x32.png'
                },
                {
                    rel:"image/png", 
                    sizes:"16x16", 
                    href: 'favicon-16x16.png'
                },
                {
                    rel:"manifest", 
                    href: 'site.webmanifest'
                },

            ],
            meta: [ 
                { name: 'description', content: 'Site web de la Féderation Syncale Etudiante (FSE) de Rennes.' },
            ],    
        }  
    },

    modules: [
        '@nuxt/content',
        '@nuxtjs/device',
        '@nuxtjs/color-mode'
    ],
    nitro:{
        preset: 'node-cluster'
    }
})
