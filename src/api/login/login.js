import request from "@/api/origin/request";
// 手机登录
export const loginByPhoneAPI = (data) => {
    return request({
        url: '/abc/jz/ph/sin',//接口地址
        method: 'POST',//请求方法
        data//请求接口需要的参数
    })
}

//获取验证码的图（该图用于发送手机号）
export const getVerificationCodeImgAPI = (data) => {
    return request({
        url: '/cmm/png/codeshow',//接口地址
        method: 'GET',//请求方法
        data,//请求接口需要的参数
        // 用于解决后端传过来的图形乱码
        responseType: 'arraybuffer'
    })
}

// 发送手机验证码
export const sendPhoneVerificationCodeAPI = (data) => {
    return request({
        url: '/cmm/phone/codesend',//接口地址
        method: 'POST',//请求方法
        data//请求接口需要的参数
    })
}

