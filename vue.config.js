const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,　　//关闭语法检查
    publicPath: "/abc/abc_zj_jzpt/agricultural-bank-family-shop/",//重新设置打包路径
    devServer: {
        historyApiFallback: true,//处理内网穿透 invaluable header token
        allowedHosts: 'all',//处理内网穿透 invaluable header token
    }
})


