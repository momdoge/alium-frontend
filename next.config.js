const webpack = require('webpack')
const isDev = process.env.NODE_ENV === "development"
const { parsed: myEnv } = isDev ? require('dotenv').config({
    path:'./.env.development'
}) : require('dotenv').config({
    path:'./.env.production'
})
console.log('APP was started with MODE', isDev ? "DEV" : "PRODUCTION");

module.exports = {
    webpack(config) {
        config.plugins.push(new webpack.EnvironmentPlugin(myEnv))
        return config
    }
}