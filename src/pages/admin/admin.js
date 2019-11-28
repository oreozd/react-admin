import React, { Component } from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'

import storgeUtils from '../../utils/storgeUtils'

import LeftNav from '../../components/left-nav'
import Head from '../../components/head'

import Home from '../home/Home'
import Category from '../category/Category'
import User from '../user/User'
import Role from '../role/Role'
import Bar from '../charts/Bar'
import Line from '../charts/Line'
import Pie from '../charts/Pie'


import { Layout } from 'antd'
import Product from '../product/Product'
const { Footer, Sider, Content } = Layout


export default class Admin extends Component {
    render() {
        const user = storgeUtils.getUser()
        if(!user.username) { 
            return <Redirect to="/login" />
        } 
        return (
            <Layout style={{height: '100%'}}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Head/>
                    <Content style={{backgroundColor: '#fff', margin: 20}}>
                        <Switch>
                            <Route path='/home' component={Home} />/
                            <Route path='/product' component={Product} />
                            <Route path='/category' component={Category} />
                            <Route path='/user' component={User} />
                            <Route path='/role' component={Role} />
                            <Route path='/bar' component={Bar} />
                            <Route path='/line' component={Line} />
                            <Route path='/pie' component={Pie} />
                            <Redirect to='/home' />
                        </Switch>
                    </Content>
                    <Footer style={{textAlign: "center"}}>推荐使用谷歌浏览器，浏览效果更佳</Footer>
                </Layout>
            </Layout>
        )
    }
}
