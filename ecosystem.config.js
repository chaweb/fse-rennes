module.exports = {  
        apps: [{
        name: 'test.chaweb.fr',
        exec_mode: 'cluster',
        instances: '1',
        script: './.output/server/index.mjs'
    }]
}