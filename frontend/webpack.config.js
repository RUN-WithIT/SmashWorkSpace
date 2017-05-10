let webpack = require('webpack');

let input = __dirname + '/src/index.js';
let output = __dirname + '/bin';

console.log("output: " + output);
module.exports = {
    entry: input,
    output: {
        path: output,
        filename: 'app.js'
    },
    module: {
        rules: [{
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=application/octet-stream'
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                use: 'file'
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url?limit=10000&mimetype=image/svg+xml'
            },
            {
                test: require.resolve('./node_modules/blockly/blockly_compressed.js'),
                use: ['imports-loader?this=>window', 'exports-loader?Blockly']
            },
            {
                test: require.resolve('./node_modules/blockly/blocks_compressed.js'),
                use: 'imports-loader?Blockly=./blockly_compressed.js'
            },
            {
                test: require.resolve('./node_modules/blockly/bash_compressed.js'),
                use: 'imports-loader?Blockly=../blockly/blockly_compressed.js'
            }, {
                test: require.resolve('./node_modules/blockly-smash/smash_compressed.js'),
                use: 'imports-loader?Blockly=../blockly/blockly_compressed.js'
            }, {
                test: require.resolve('./node_modules/blockly/demos/prettify.js'),
                use: 'exports-loader?prettyPrint'
            },
            {
                test: /\.\/style\/.*\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }

        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether",
            Alert: "exports-loader?Alert!bootstrap/js/dist/alert",
            Button: "exports-loader?Button!bootstrap/js/dist/button",
            Carousel: "exports-loader?Carousel!bootstrap/js/dist/carousel",
            Collapse: "exports-loader?Collapse!bootstrap/js/dist/collapse",
            Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            Modal: "exports-loader?Modal!bootstrap/js/dist/modal",
            Popover: "exports-loader?Popover!bootstrap/js/dist/popover",
            Scrollspy: "exports-loader?Scrollspy!bootstrap/js/dist/scrollspy",
            Tab: "exports-loader?Tab!bootstrap/js/dist/tab",
            Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
            Util: "exports-loader?Util!bootstrap/js/dist/util",
        })
    ]
};
