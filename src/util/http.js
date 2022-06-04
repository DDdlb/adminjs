/**
 * 封装fetch
 */
import { storage } from "./storage"
import { useNavigate } from "react-router"
import axios from "axios"
import { message } from "antd"

const baseUrl = 'https://0c588f96-2ea4-4d76-b7ee-daa7ed9d3573.mock.pstmn.io'

// 请求实例
const service = axios.create({
    baseURL: baseUrl,
    timeout: 16000
})

// 请求拦截
service.interceptors.request.use((req) => {
    // TO-DO
    const headers = req.headers
    const userInfo = storage.getItem('userInfo');
    if(userInfo){
        if(!headers.Authorization) headers.Authorization = 'Bearer ' + userInfo.token
    }
    
    return req
})

// 响应拦截
service.interceptors.response.use((res) => {
    // console.log(res);
    let rx = res.data
    if(typeof(res.data) === 'string'){
        console.log(res.data)
        // json键值未加引号，JSON.parse会报错，抛出异常
        rx = JSON.parse(res.data)
    }
    const {
        code,
        data,
    } = rx;
    // console.log(typeof(res.data))
    // 200 表示成功，自己设置的状态码，不是http状态码
    if (code === 200) {
        return data;
    } else if (code === 401) {
        message.error('TOKEN overdue, Please login again')
        const navigate = useNavigate()
        setTimeout(() => {
            navigate('/')
        }, 1500);
        return Promise.reject('TOKEN 无效');
    } else {
        return Promise.reject('网络错误');
    }
})

/**
 * 请求函数
 * @param {*} options 请求配置
 */
export const http = (options)=> {
    options.method = options.method || 'get'
    if(options.method.toLowerCase() === 'get'){
        options.params = options.data;
    }

    return service(options)
}


['get', 'post', 'put', 'delete', 'patch'].forEach((item)=>{
    http[item] = (url, data, options) => {
        return http({
            url,
            data,
            method: item,
            ...options
        })
    }
})
