'use strict';
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');

module.exports = {
    modify( config, { target, dev }, webpack ) {

        /**
         * Allow markdown loading
         */
        const markdownLoader = {
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                }
            ]
        };

        const additionalLoader = [


        ]

        const fileLoaderIndex = config.module.rules.findIndex(
            rule => rule.exclude
        );

        config.module.rules[fileLoaderIndex].exclude.push(/\.md$/)
        config.module.rules.push(markdownLoader)
        additionalLoader.map(loader => {
            config.module.rules.push(loader)

        })
        /**/
        /**
         * Allow for `__filename` and `__dirname` in
         * modules
         */

        // insert modernizr
        var modernizr_config = dev ? {} : {
            minify: {
                output: {
                    comments: true,
                    beautify: true
                }
            }
        }

        config.plugins.push(new ModernizrWebpackPlugin(modernizr_config))

        config.context = __dirname
        const node_conf ={ __filename: true,
            __dirname: true
        }

        config.node = {...config.node, ...node_conf}

        return config;
    },
};