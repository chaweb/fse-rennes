module.exports = {  
    apps: [{
    name: 'test.chaweb.fr/fse-rennes',
    port: '1080',
    exec_mode: 'cluster',
    instances: 'max',
    script: './server/index.mjs',
}]
}