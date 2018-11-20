module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        loader: [
            {test: /\.css$/, loader: "style-loader!css-loader"}
        ]
    }
}