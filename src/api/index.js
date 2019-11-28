//包含应用中所有接口请求函数的模块
import jsonp from 'jsonp'
import ajax from './ajax'


const BASE = ""

// export function reqlogin (username, password) {
//     ajax('/login', {username, password}, 'POST')
// }

export const reqlogin = (username, password) => ajax(BASE+'/login', {username, password}, 'POST')
export const reqAddUser = (User) => ajax(BASE+'/manage/user/add', User, 'POST')
export const testajax = () => ajax(BASE+'/test', {}, 'GET')


/**json接口请求函数 */
export const reqWheater = (city, ) => {
    const url = ''
    //发送请求有可能成功，也可能失败
    jsonp(url, {}, (err, data) => {
        if(!err && data.status === 200)
        data.result[0].wheater.
        console.log("jsonp()", data)
    })
}