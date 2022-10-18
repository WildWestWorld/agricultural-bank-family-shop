const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,　　//关闭语法检查
    publicPath: "/abc/abc_zj_jzpt/agricultural-bank-family-shop/",

    devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
        port: 8080,
        proxy: {                 //设置代理，必须填
            '/api/abc/abc_zj_jzpt': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
                target: 'https://bank.cardwinner.com/abc/abc_zj_jzpt',     //代理的目标地址
                changeOrigin: true,              //是否设置同源，输入是的
                pathRewrite: {                   //路径重写
                    '^/api/abc/abc_zj_jzpt': ''                     //选择忽略拦截器里面的内容
                }
            }
        }
    }

})
