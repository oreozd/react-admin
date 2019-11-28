export default [
    {
        key: '/home',
        icon: 'dashboard',
        text: '首页',
        path: '/home'
    },
    {
        key: '/products',
        icon: 'play-circle',
        text: '商品',
        children: [
            {
                key: '/product',
                text: '商品管理',
                path: '/product'
            },
            {
                key: '/category',
                text: '品类管理',
                path: '/category'
            }
        ]
    },
    {
        key: '/user',
        icon: 'dashboard',
        text: '用户管理',
        path: '/user'
    },
    {
        key: '/role',
        icon: 'dashboard',
        text: '角色管理',
        path: '/role'
    },
    {
        key: '/charts',
        icon: 'play-circle',
        text: '图形图标',
        children: [
            {
                key: '/bar',
                text: '柱状图',
                path: '/bar'
            },
            {
                key: '/line',
                text: '折线图',
                path: '/line'
            },
            {
                key: '/pie',
                text: '饼状图',
                path: '/pie'
            }
        ]
    }
];

