来源学习博客 
http://blog.csdn.net/column/details/17076.html

webpack 打包

首先 node npm webpack 环境已经装好

    node -v
    npm -v

能够得到如上图的版本号信息，则说明你的 nodejs 环境已经安装完成了。

安装 vue-cli VUE的脚手架工具

      npm install -g vue-cli

在E盘www文件夹下创建基于webpack的vue项目

    E:
    cd www
    vue init webpack vuedemo 


终端 ? Project name (vue-demo-cnodejs)  **回车**

项目名称是不是 vue-demo-cnodejs ，我们按回车，表示，是。当然，你也可以重写一个，然后回车。

终端 ? Project description (A Vue.js project) **回车**

项目藐视，一个 vue.js 的项目。同样，我们可以填写内容，或者直接回车。

终端 ? Author (fungleo <web@fengcms.com>) **回车**

作者，直接回车。

终端 ? Vue build (Use arrow keys)
    ❯ Runtime + Compiler: recommended for most users
      Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files -
    render functions are required elsewhere **回车**

这里是问你，需要不需要安装编译器，我们选择需要安装，也就是第一个，也就是直接回车就OK了。

终端 ? Install vue-router? (Y/n) **回车**

问是不是需要安装 vue-router ，需要安装，这个是管理路由的。我们直接回车。

在 mac 或者 linux 系统中，出现这样的选项，默认选项一般会是大写，如上 (Y/n) 就表示直接回车，将代表同意，如果你看到了 (y/N) 这样的，就表示，默认选择的是否，这时候，就需要输入 y 然后回车。当然，前提是你决定要这样做。
然后

终端 ? Use ESLint to lint your code? (Y/n) **回车**

是否需要使用 ESLint 来检查你的代码。需要！所以同上，我们直接回车。

终端 ? Pick an ESLint preset (Use arrow keys)
    ❯ Standard (https://github.com/feross/standard)
      Airbnb (https://github.com/airbnb/javascript)
      none (configure it yourself)

然后问你需要使用哪种风格来检查你的代码。我们选择第一个 Standard 来检查代码。所以，直接回车。

然后问你

终端 ? Setup unit tests with Karma + Mocha? (Y/n) **n 回车**

是否需要安装测试功能。不要。我们输入 n 然后回车。

终端 ? Setup e2e tests with Nightwatch? (Y/n)  **n 回车**

还是关于测试的内容，我们还是输出 n 然后回车。


   创建好 安装依赖包

     cd vuedemo
     npm install  
     npm run dev 
     
# vuedemo

> A Vue.js project

## Build Setup

``` bash

首先，clone项目源码
git clone https://github.com/nanaFDSH/vuedemo.git

安装依赖
cd vuedemo
npm install 

# 执行打开本地服务器
npm run dev

# 进行打包文件在docs/demo下
npm run build

# build for production and view the bundle analyzer report
npm run build --report

学习博客 http://blog.csdn.net/FungLeo/article/details/77601270

ajax请求增加
src/api/index.js 

```
// 配置API接口地址
var root = 'https://cnodejs.org/api/v1'
// 引用axios
var axios = require('axios')
// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
  for (var key in o) {
    if (o[key] === null) {
      delete o[key]
    }
    if (toType(o[key]) === 'string') {
      o[key] = o[key].trim()
    } else if (toType(o[key]) === 'object') {
      o[key] = filterNull(o[key])
    } else if (toType(o[key]) === 'array') {
      o[key] = filterNull(o[key])
    }
  }
  return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios (method, url, params, success, failure) {
  if (params) {
    params = filterNull(params)
  }
  axios({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: root,
    withCredentials: false
  })
  .then(function (res) {
    if (res.data.success === true) {
      if (success) {
        success(res.data)
      }
    } else {
      if (failure) {
        failure(res.data)
      } else {
        window.alert('error: ' + JSON.stringify(res.data))
      }
    }
  })
  .catch(function (err) {
    let res = err.response
    if (err) {
      window.alert('api error, HTTP CODE: ' + res.status)
      return
    }
  })
}

// 返回在vue模板中的调用接口
export default {
  get: function (url, params, success, failure) {
    return apiAxios('GET', url, params, success, failure)
  },
  post: function (url, params, success, failure) {
    return apiAxios('POST', url, params, success, failure)
  },
  put: function (url, params, success, failure) {
    return apiAxios('PUT', url, params, success, failure)
  },
  delete: function (url, params, success, failure) {
    return apiAxios('DELETE', url, params, success, failure)
  }
}

```
npm install axios -D

调整 main.js 绑定 api/index.js 文件
增加


```
// 引用API文件
import api from './api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

```

博客2 http://blog.csdn.net/FungLeo/article/details/77601761
