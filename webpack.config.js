module.exports = {
    // webpack folder's entry js - excluded from jekll's build process.
    entry: "./webpack/app.js",
    output: {
        // we're going to put the generated file in the assets folder so jekyll will grab it.
        path: 'src/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader', // 'babel-loader' is also a legal name to reference
                query: {
                    presets: ['es2015']
                }
            }
        ]
    }
};
