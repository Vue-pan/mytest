# mytest
vue的第一个学习demo

# 一、vue项目创建配置：

1.安装vue-cli（cmd中npm install —global vue-cli）：是vue.js的脚手架，用于自动生成vue.js+webpack的项目模板

    $npm install -g vue-cil
    
2.webpack构建项目(gitbash中vue init webpack文件夹)

    $vue init webpack  xxx(xxx表示项目名)
    
3.$npm run dev 表示在前端起个服务器命令

4.代码初始化（meta配置：移动项目需配置meta ；引入borde/reset.css：borde为了解决移动设备1像素的问题，reset为了解决厂商不同的问题；fastclick：解决移动端300毫秒的延迟；stylus-loader：书写样式的工具）：

    $npm install fastclick

    $npm install stylus stylus-loader -D
    如果报错则执行：$cnpm install stylus stylus-loader -D
    
# 二、联调测试上线：

1.联调（删除mock假数据）

    1.1更改config/index.js
    
    1.2后端开启php的apache服务器
    
2.测试

    2.1在package.json的scripts中修改 --host 0.0.0.0
        
3.打包

    3.1修改目录tour
    
    3.2npm run build
    
    3.3dist文件放在后端

