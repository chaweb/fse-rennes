const fs = require('fs');
const fse = require('fs-extra');

const copyOutputDir = `deploy/output/`
const outputDir = `.output/`;
                                 
fs.readdirSync(copyOutputDir).forEach(file => {
    console.log(copyOutputDir+file)

    try {
        fse.copySync(copyOutputDir+file, outputDir+file, { overwrite: true })
        console.log('success!')
    } catch (err) {
        console.error(err)
    }
});