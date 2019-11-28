/**
 * 能够发送ajax请求的函数模块
 * 封装aoixs
 * 函数返回值是一个promise对象
 * 在外层报一层自己创建的promise对象，在请求出错时不去reject,调用自己的错误提示流程
 */
import axios from 'axios'
import { message } from 'antd'

//写上默认值。
export default function ajax (url, data={}, type='GET'){
    return new Promise((resolve, reject) => {
        let promise
        //执行异步请求
        if(type==='GET'){
            promise = axios.get(url, {
                params: data
            })
        } else {
            promise = axios.post(url, data)
        }
        //成功调用resole
        promise.then(response => {
            resolve(response.data)
        }).catch(error => {
            //失败提示异常信息
            message.error('请求出错了', error.message)
        })
    })
    
}
