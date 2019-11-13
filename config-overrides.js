//修改默认配置文件

const { override, fixBabelImports, addLessLoader } = require('customize-cra')

// module.exports = function override(config, env) {

//     return config
// };

module.exports = override(
    //按需打包，针对antd库。根据import来打包，只引入引入的文件（babel-plugin-import）
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true //自动打包相关样式
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {'@primary-color': '#16A085'} //主体颜色
    })
)