import request from "../utils/request"

/**
 * 
 * @returns 登录接口
 * @data {name, password, code} 账号、密码、验证码
 */
export function login() {
    return request({
        url: '/login',
        method: 'post'
    })
}


/**
 * 
 * @returns 注册接口
 * @data {name, password} 账号和密码
 */
export function register() {
    return request({
        url: '/register',
        method: 'post'
    })
}

/**
 * 
 * @function getcode() 获取验证码
 */

export function getcode() {
    return request({
        url: ``,
        method: 'get'
    })
}