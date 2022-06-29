const Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('./public/static')
    .setPublicPath('/static')
    .addEntry('app', './src/app.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk();

module.exports = Encore.getWebpackConfig();