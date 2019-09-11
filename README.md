# 基本配置
## 原型图
+ 参考关系 https://lanhuapp.com/url/U7ZqW  密码:xGAE  无法查看标注,但可以查看关系
+ 参考功能  http://59.110.138.169/site/movie/index.html#/home
+ 参考标注 https://lanhuapp.com/url/IaMrj-TIE1f  没有关系图,但可以查看标注
  
## rem配置
+ 安装
  ```   
    1.  npm install postcss-pxtorem --save-dev  用于把页面的px=>rem
    2.  npm install lib-flexible --save   用于根据设备宽度计算html的font-size
    3.  postcss.config.js 添加插件
        "postcss-pxtorem": {
            "rootValue": 37.5, // 设计稿宽度的1/10,（JSON文件中不加注释，此行注释及下行注释均删除）
            "propList":["*"] // 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
        }
    4. main.js 引入 lib-flexible

  ```
## 基本布局
+ BaseLayer
+ Header
+ Footer

## better-scroller
+ github仓库 https://github.com/ustbhuangyi/better-scroll/blob/master/README_zh-CN.md
+ vue使用better-scroll  https://zhuanlan.zhihu.com/p/27407024
+ better-scroll文档 https://better-scroll.github.io/docs/zh-CN/
  
## 地理定位


## swiper
+ https://github.com/surmon-china/vue-awesome-swiper
+ npm install vue-awesome-swiper --save
