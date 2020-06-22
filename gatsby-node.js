const path = require(`path`);
const { slash } = require(`gatsby-core-utils`);

const getTemplate = (phpFile) => {
    const dirPath = './src/templates'

    const templates = {
        about: 'sobre.js',
        home: 'home.js',
    }

    path = templates[phpFile.split('.')[0]]
    return slash(path.resolve(`${dirPath}/${path}`))
}