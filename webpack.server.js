const path = require('path')
const nodeExternals = require('webpack-node-externals')
//服务端的webpack
module.exports = {
    target: 'node',
    mode: 'development',
    //服务端入口
    entry: './server/index.js',
    //node层面规避一些node_modules和代码
    externals:[nodeExternals()],
    //node需要编译
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    //支持babel
    module:{
        rules:[
            {
                test:/\.js$/,
                //使用babel-loader 支持import/jsx
                loader:'babel-loader',
                exclude:/node_modules/,
                //babel的配置
                options:{
                    //编译的级别
                    //preset-react：支持jsx;preset-env:支持js最新语法
                    presets:['@babel/preset-react',['@babel/preset-env']]
                }
            }
        ]
    }
}