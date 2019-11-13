import React, { Component } from "react";
import "./login.less";
import Logo from "./images/logo.png";

import { Form, Icon, Input, Button} from "antd";

/**
 * 登录的路由组件
 */
class Login extends Component {
   constructor(props){
       super(props)
       this.validatePwd = this.validatePwd.bind(this)
   } 
  handleSubmit = e => {
    e.preventDefault(); //阻止事件冒泡
    //进行统一验证，对所有的字段都进行验证
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      } else {
          //调用登录的ajax请求
          console.log("提交登录请求", values)
      }
    });
  };

  //声明式验证
  validatePwd = (rule, value, callback) => {
      if(!value){
          callback("密码不能为空")
      } else if(value.length <4){
          callback("密码长度不小于4")
      } else if(value.length >12 ){
          callback("密码长度不大于12")
      } else if(!/^[a-zA-Z0-9_-]+$/.test(value)){
          callback("密码必须由字母数字下划线组成")
      } else {
          callback() //验证通过 //必须要有这个分支
      }
  }

  render() {
    const { getFieldDecorator } = this.props.form; //获取到form的方法名
    return (
      <div className="login">
        <header className="login-header">
          <img src={Logo} alt="logo" />
          <h1>React后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('username', {
                    //这种方式叫做声明式验证，还有一种验证方式叫自定义验证
                    rules: [
                        { required: true, whitespace:true, message: '请输入你的用户名' },
                        { min: 4, message: '用户名至少4位' },
                        { max: 12, message: '用户名最多12位' },
                        { pattern: /^[a-zA-Z0-9-_]+$/, message: '用户名必须由字母数字下划线组成' },
                    ],
                })(
                    <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {
                    getFieldDecorator('password', {
                        rules: [{validator: this.validatePwd}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} 
                        type="password" placeholder="密码"/>,
                    )
                }
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    );
  }
}

const WrapLogin = Form.create()(Login) //为什么要这样写
export default WrapLogin

//包装Form组件生成一个新的组件：Form(Login)，新组件会向子组件传递一个对象，在子组件中就可以调用这个对象的方法。似乎之前的项目中也用到了这个组件
/**
 * 前台表单验证，
 * 收集表单输入数据
 */


 /**
  * 高阶函数：create()函数是一个高阶函数，因为它的返回值为一个函数
  * 高阶组件
  */