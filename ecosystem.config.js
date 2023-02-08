module.exports = {  
        apps: [{
        name: 'test.chaweb.fr',
        port: '3000',
        exec_mode: 'cluster',
        instances: '1',
        script: './.output/server/index.mjs',
        arg:"preview"
    }]
}