module.exports = {
    mode: 'development',
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /\.js$/,
                use:[
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ],
                exclude: /node_modules/,
                
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader" // compiles Sass to CSS
                  }
                ]
              }
        ]
    }
}

