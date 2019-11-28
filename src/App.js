import React, { Component } from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './pages/login/login.js'
import Admin from './pages/admin/admin.js'
//import { Button, message } from 'antd' //只是加载引入组件的样式


export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        //this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     message.success("success")
    // }


    render() {
        return (
            <BrowserRouter>{/**路由必须放在路由器中*/}
                <Switch>{/**只匹配一个页面 ,这个文件就是的*/}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}

//一个路由是一个映射关系
//一级路由，二级路由