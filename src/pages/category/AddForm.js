import React, { Component } from 'react'
import {Form, Select, Input} from 'antd'

const { Option } = Select


class AddForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form

        return (
           <Form>
                <Form.Item>
                选择分类
                {
                    getFieldDecorator('parentId', {
                        initialValue: '0'
                    }) (
                        <Select>
                            <Option value='0'>一级分类</Option>
                            <Option value='1'>一级分类</Option>
                            <Option value='2'>一级分类</Option>
                            <Option value='3'>一级分类</Option>
                            <Option value='4'>一级分类</Option>
                        </Select>
                    )
                }
                    
                </Form.Item>
                     
                <Form.Item>
                分类名字
                {
                    getFieldDecorator('categoryName', {
                        initialValue: ''
                    }) (
                        <Input placeholder="请输入分类名称"/>
                    )
                }
                </Form.Item>
           </Form>
        )
    }
}

export default Form.create()(AddForm)