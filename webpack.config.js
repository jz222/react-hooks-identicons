const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
        library: 'react-hooks-identicons',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        alias: {
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom')
        }
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'React',
            root: 'React'
        },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'ReactDOM',
            root: 'ReactDOM'
        }
    },
    mode: 'production'
};
