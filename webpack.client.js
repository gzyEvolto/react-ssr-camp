const path = require('path')
//服务端的webpack
module.exports = {
    mode: 'development',
    //客户端入口
    entry: './client/index.js',
    //客户端输出
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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