import React, { Component } from 'react'
import {Card, Select, Input, Button, Icon, Table, Modal } from 'antd'
import LinkButton from '../../components/link-button/LinkButton'
import products from '../../assets/productData'


const Option = Select.Option
export default class Product extends Component {
   
    state = {
        showStatus: 0
    }

    componentWillMount() {
        this.initColumns()
    }

    addProduct = () => {
        this.setState({
            showStatus: 1
        })
    }

    initProducts = () => {
        this.products = products
        
    }
    //初始化表格的列数据
    initColumns = () => {
        this.columns = [
			{
				title: '商品名称',
				dataIndex: 'name'
            },
            {
				title: '商品描述',
				dataIndex: 'desc'
            },
            {
				title: '价格',
				dataIndex: 'price',
				render: (price) => '￥'+price
            },
            {
				title: '状态',
                dataIndex: 'status',
                render: (status) => {
                    return status ? (
                        <span>
                            <Button type="primary">上架</Button>
                            <span style={{color: 'red'}}>售空</span>
                        </span>
                    ):
                    (
                        <span>
                            <Button type="primary">下架</Button>
                            <span>在售</span>
                        </span>
                    )
                }
            },
            {
                title: '操作',
                render: (products) => {
                    return(
                        <span>
                            <LinkButton onClick={this.showDetail}>详情</LinkButton>
                            <LinkButton onClick={this.handlemodify}>修改</LinkButton>
                        </span>
                    )
                }
            }
		]
    }

    showDetail = () => {

    }

    handlemodify = () => {

    }

    handleCancel = () => {
        this.setState({
            showStatus: 0
        })
    }
    render() {
        let dataSource = []
        for(var i in products){
            dataSource.push(products[i]);
        }
        console.log(products.list)
        const title = (
            <span>
                <Select value='1' style={{width: 120}}>
                    <Option value="1" >按名称搜索</Option>
                    <Option value="2" >按描述搜索</Option>
                </Select>
                <Input placeholder="关键字" style={{width:150,margin:'0 10px'}}/>
                <Button type="primary">搜索</Button>
            </span>
        )

        const extra = (
            <Button type="primary" onClick={this.addProduct}>
                <Icon type="plus"/>
                添加商品
            </Button>
        )

        const {showStatus} = this.state
        return (
            <Card title={title} extra={extra}>
                <Table
                    dataSource={products.list}
                    columns={this.columns}
                    rowKey='id'
                    bordered
                >
                
                    <Modal
                        title="添加商品"
                        visible={showStatus === 1}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                        
                    </Modal>

                    <Modal
                        title="修改"
                        visible={showStatus === 2}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                        
                    </Modal>
                </Table>
            </Card>
        )
    }
}
