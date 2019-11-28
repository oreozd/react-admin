
var Mock = require('mockjs')
var productdata = Mock.mock({
  'list|10': [{
		'id|+1': 1,
        'name|1': ['电视','玩具','食品'],
        'desc|1': ['一个优等商品','一个中等商品'],
        "price|1":[3.00, 4.00, 1.00],
        "status|1": [0,1] //状态字段在0，1中任选一个
  	}]
})
export default productdata