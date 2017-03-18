module.exports = {
    entry: './src/index.js',
    output: {
        path: './bin',
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }, {
            test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'url-loader?limit=10000',
        }, {
            test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
            use: 'file-loader',
        }, {
            test: /bootstrap\/dist\/js\/umd\//,
            use: 'imports-loader?jQuery=jquery'
        }, {
            test: require.resolve('./node_modules/blockly/blockly_compressed.js'),
            use: ['imports-loader?this=>window','exports-loader?Blockly']
        },
                {
            test: require.resolve('./node_modules/blockly/blocks_compressed.js'),
            use: 'imports-loader?Blockly=./blockly_compressed.js'
                },
                // {
            // test: require.resolve('./node_modules/blockly/msg/json/en.json'),
            // use: 'imports-loader?Blockly=../../blockly_compressed.js'
                //},
                {
            test: require.resolve('./node_modules/blockly/bash_compressed.js'),
            use: 'imports-loader?Blockly=../blockly/blockly_compressed.js'
        },{
            test: require.resolve('./node_modules/blockly-smash/smash_compressed.js'),
            use: 'imports-loader?Blockly=../blockly/blockly_compressed.js'
        },{
            test: require.resolve('./node_modules/blockly/demos/prettify.js'),
            use: 'exports-loader?prettyPrint'
        }

               ],
    }
};
