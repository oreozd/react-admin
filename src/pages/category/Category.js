import React, { Component } from 'react'
import { Card, Table, Button, Icon, Modal } from 'antd'
import data from '../../assets/data'
import LinkButton from '../../components/link-button/LinkButton'
import AddForm from './AddForm'
import UpdateForm from './UpdateForm'


export default class Category extends Component {
	state={
		showStatus: 0 //0代表都不显示，1代表显示添加，2代表显示修改
	}
	//添加框显示
	showAdd = () => {
		this.setState({
			showStatus: 1
		})
	}
	//修改框显示
	showUpdate = (category) => {

		this.category = category//保存分类状态
		console.log("categroy", category)
		this.setState({
			showStatus:2
		})
	}
	//点击取消
	handleCancel = () => {
		this.setState({
			showStatus: 0
		})
	}
	handleOk = () => {
		//进行操作
	}
	//添加
	addCategory = () => {
		this.showAdd()
	}
	render() {
		
		const title = '一级分类列表'
		const extra = (
			<Button type="primary" onClick={this.showAdd}>
					<Icon type='plus'/>添加
			</Button>
		)
		
		const dataSource = [
			{
				"parentId": {
					"330000": "科技类"
				},
				"id": 1,
				"name": "家电",
				"version": 0
			},
			{
				"parentId": {
					"320000": "玩具类"
				},
				"id": 2,
				"name": "玩具",
				"version": 0
			},
			{
				"parentId": {
					"320000": "玩具类"
				},
				"id": 3,
				"name": "食品",
				"version": 0
			}
		]
			
		const columns = [
			{
				title: '分类的名称',
				dataIndex: 'name'
			},
			{
				title: '操作',
				width: 400,
				render: (category) => (<span>
				<LinkButton onClick={() => this.showUpdate(category)}>修改分类</LinkButton> {/**为什么再套了一层函数 */}
				<LinkButton onClick={this.getChildCategory}>查看子分类</LinkButton>
			</span>)
			}
		]
		
		const {showStatus} = this.state
		const category = this.category || {}	
		return (
			<Card title={title} extra={extra} style={{ width: '100%'}} >
				<Table dataSource={dataSource} columns={columns} bordered rowKey='id'/>
				<Modal
					title="添加分类"
					visible={showStatus === 1}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<AddForm/>
				</Modal>

				<Modal
					title="修改分类"
					visible={showStatus === 2}
					onOk={this.handleOk}
					onCancel={this.handleCancel}
				>
					<UpdateForm categoryName={category.name}/>
				</Modal>
			</Card>
		)
	}
}
