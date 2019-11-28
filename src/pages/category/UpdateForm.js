import React, { Component } from 'react'
import Proptypes from 'prop-types'
import {Form, Input} from 'antd'



class UpdateForm extends Component {
    render() {
        const {categoryName} = this.props
        console.log(categoryName)
        const { getFieldDecorator } = this.props.form
        return (
           <Form>
           <Form.Item>
           {
               getFieldDecorator('categoryName', {
                   initialValue: categoryName
               }) (
                   <Input placeholder="请输入分类名称" />
               )
           }
           </Form.Item>
           </Form>
        )
    }
}

UpdateForm.prototypes = {
    categoryName: Proptypes.string.isRequired
}

export default Form.create()(UpdateForm)