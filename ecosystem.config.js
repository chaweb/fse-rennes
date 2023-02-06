module.exports = {  
        apps: [{
        name: 'test.chaweb.fr',
        port: '1080',
        exec_mode: 'cluster',
        instances: 'max',
        script: './.output/server/index.mjs'
    }]
}