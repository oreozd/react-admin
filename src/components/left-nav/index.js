import React, { Component } from 'react'
import './index.less'

import Logo from '../../assets/images/logo.png'
import { Link, withRouter } from 'react-router-dom'

import { Menu, Icon } from 'antd'

import SidebarData from '../../assets/SidebarData'

const { SubMenu } = Menu


class LeftNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            openkey: ''
        }
    }

    //为第一次render()做准备
    componentWillMount() {
        this.menuNodes = this.getMenuNodes(SidebarData)
    }

    getMenuNodes = (SidebarData) => {
        const path = this.props.location.pathname;
        return SidebarData.map(item => {
            if(!item.children) {
                return (
                    <Menu.Item key={item.key}>
                        <Link to={item.path}>
                            <Icon type="pie-chart" />
                            <span>{item.text}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                let citem = item.children.find((item) => item.key === path) //大括号和小括号啊啊啊啊
                if(citem) {
                    this.setState({
                        openkey: item.key
                    })
                    console.log(this.state.openkey)
                }
                
                return (
                    
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.text}</span>
                            </span>
                        }>
                            {this.getMenuNodes(item.children)}
                    </SubMenu> 
                )
            }
        })
    }

    
    render() {
        //得到当前路由路径
        const path = this.props.location.pathname;
        const openkey = this.state.openkey
        return (
            <div className="leftNav">
                <Link to="/" className="leftNav-header">
                    <img src={Logo} alt="logo"/>
                    <h1>后台管理</h1>
                </Link>

                <Menu
                    //defaultSelectedKeys={[path]} //默认选中的菜单项，第一次匹配的
                    selectedKeys={[path]} //动态变化的，
                    mode="inline"
                    theme="dark"
                    defaultOpenKeys={[openkey]}
                >
                    {this.menuNodes}
                </Menu>
            </div>
        )
    }
}

//withRouter()
//包装非路由组件，返回新组件，新组件向被包装组件传递3个属性 history,location,match
//让一个非路由组件变成一个路由组件

export default withRouter(LeftNav)