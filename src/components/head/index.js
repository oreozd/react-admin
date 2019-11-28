import React, { Component } from 'react'
import './index.less'
import Wheater from '../../assets/images/wheater.png'
import dateFormate from '../../utils/dateUtils'
import { withRouter, Redirect, Switch} from 'react-router-dom'
import sideBarData from '../../assets/SidebarData'
import { Modal } from 'antd'
import LinkButton from '../../components/link-button/LinkButton'

class Head extends Component {
    state = {
        currentTime: ''
    }

    logOut = () => {
        Modal.confirm({
            title: '退出登录',
            okText: '确认',
            cancelText: '取消',
            //点击确认按钮
            onOk() {
               return  <Switch>
               <Redirect to='/login' />
           </Switch>
            },
            //点击取消按钮
            onCancel() {
                console.log('Cancel');
            },
        });
    }
    getTime = () => {
        setInterval(() => {
            const currentTime = dateFormate(Date.now())
            this.setState({currentTime})
        }, 1000);
    }

    getTitle = () => {
        //得到当前请求路径
        let title
        const path = this.props.location.pathname //获取当前请求的路径
        sideBarData.forEach(item => {
            if(item.key === path) {
                title = item.text

            } else if(item.children){
                const citem = item.children.find(citem => citem.key === path)
                if(citem){
                    title = citem.text
                }
            }
        })
        return title
    }
    //第一次执行完render之后，一般执行异步操作， 发ajax请求，启动定时器
    componentDidMount() {
        //获取当前时间
        this.getTime()
    }
    
    componentWillUnmount() {

    }

    render() {
        const title = this.getTitle()
        return (
            <div className="header">
                <div className="header-top">
                    <span>欢迎，admin</span>
                    <LinkButton onClick={this.logOut}>退出</LinkButton>
                </div>
                <div className="header-bottom">
                    <div className="header-bottom-left">{title}</div>
                    <div className="header-bottom-right">
                        <span>{this.state.currentTime}</span>
                        <img src={Wheater}/>
                        <span>晴</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Head)