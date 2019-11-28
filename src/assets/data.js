var Mock = require('mockjs')
let parentId = "pid"
var data = Mock.mock({
  'list|10': [{
		"parentId|1": {
			"310000": "食品类",
			"320000": "玩具类",
			"330000": "科技类",
			"340000": "其他"
	  	},
		'id|+1': 1,
		'name': '电视',
		'version': 0
  	}]
})
export default data