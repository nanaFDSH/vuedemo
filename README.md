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
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
