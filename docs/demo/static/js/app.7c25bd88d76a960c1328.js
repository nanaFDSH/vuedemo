webpackJsonp([1],{"+zcy":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("我是被引入的hello组件")])])},a=[],u={render:r,staticRenderFns:a};e.a=u},"0xDb":function(t,e,n){"use strict";e.a={goodTime:function(t){return"hello word"+t}}},"2Gqq":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("h1",[t._v("我是header vue")])])}],u={render:r,staticRenderFns:a};e.a=u},"3VSJ":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;return(t._self._c||e)("content",[t._v("content page")])},a=[],u={render:r,staticRenderFns:a};e.a=u},"4R+P":function(t,e,n){"use strict";var r=n("ldL5"),a=n("teIl"),u=n("TVmP"),s=n("qSdX");e.a={components:{vContent:r.a,Hello:s.a,vHeader:a.a,vFooter:u.a},data:function(){return{list:[{name:"张三"},{name:"李四"}]}},created:function(){this.getData()},methods:{getData:function(){}}}},"5KWQ":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("vHeader"),t._v(" "),n("div",[t._v("我是 index.vue")]),t._v(" "),n("vContent"),t._v(" "),n("div",{staticClass:"article_list"},[n("Hello"),t._v(" "),n("ul",t._l(t.list,function(e){return n("li",[t._v("\n        我是"+t._s(e.name)+"\n        "),n("span",{domProps:{textContent:t._s(t.$utils.goodTime(e.name))}})])}))],1),t._v(" "),n("vFooter")],1)},a=[],u={render:r,staticRenderFns:a};e.a=u},"6IbB":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],u={render:r,staticRenderFns:a};e.a=u},A3Wa:function(t,e,n){"use strict";var r=n("4R+P"),a=n("5KWQ"),u=n("J0+h"),s=u(r.a,a.a,null,null,null);e.a=s.exports},M93x:function(t,e,n){"use strict";function r(t){n("Q7OV")}var a=n("h8+N"),u=n("6IbB"),s=n("J0+h"),i=r,o=s(a.a,u.a,i,null,null);e.a=o.exports},MOyB:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("7+uW"),a=n("M93x"),u=n("YaEn"),s=n("gyMJ"),i=n("0xDb");r.a.prototype.$api=s.a,r.a.prototype.$utils=i.a,r.a.config.productionTip=!1,new r.a({el:"#app",router:u.a,template:"<App/>",components:{App:a.a}})},Q7OV:function(t,e){},TVmP:function(t,e,n){"use strict";var r=n("oBJs"),a=n("J0+h"),u=a(null,r.a,null,null,null);e.a=u.exports},YaEn:function(t,e,n){"use strict";var r=n("7+uW"),a=n("/ocq"),u=n("A3Wa");r.a.use(a.a),e.a=new a.a({routes:[{path:"/",component:u.a}]})},gyMJ:function(t,e,n){"use strict";function r(t){return{}.toString.call(t).match(/\s([a-zA-Z]+)/)[1].toLowerCase()}function a(t){for(var e in t)null===t[e]&&delete t[e],"string"===r(t[e])?t[e]=t[e].trim():"object"===r(t[e])?t[e]=a(t[e]):"array"===r(t[e])&&(t[e]=a(t[e]));return t}function u(t,e,n,r,u){n&&(n=a(n)),c({method:t,url:e,data:"POST"===t||"PUT"===t?n:null,params:"GET"===t||"DELETE"===t?n:null,baseURL:o,withCredentials:!1}).then(function(t){!0===t.data.success?r&&r(t.data):u?u(t.data):window.alert("error: "+i()(t.data))}).catch(function(t){var e=t.response;if(t)return void window.alert("api error, HTTP CODE: "+e.status)})}var s=n("mvHQ"),i=n.n(s),o="/api/v1",c=n("mtWM");e.a={get:function(t,e,n,r){return u("GET",t,e,n,r)},post:function(t,e,n,r){return u("POST",t,e,n,r)},put:function(t,e,n,r){return u("PUT",t,e,n,r)},delete:function(t,e,n,r){return u("DELETE",t,e,n,r)}}},"h8+N":function(t,e,n){"use strict";e.a={name:"app"}},ldL5:function(t,e,n){"use strict";var r=n("3VSJ"),a=n("J0+h"),u=a(null,r.a,null,null,null);e.a=u.exports},oBJs:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("h1",[t._v("我是footer vue")])])}],u={render:r,staticRenderFns:a};e.a=u},qSdX:function(t,e,n){"use strict";function r(t){n("MOyB")}var a=n("sy2p"),u=n("+zcy"),s=n("J0+h"),i=r,o=s(a.a,u.a,i,"data-v-5b18bdd6",null);e.a=o.exports},sy2p:function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{msg:"hello vue"}}}},teIl:function(t,e,n){"use strict";var r=n("2Gqq"),a=n("J0+h"),u=a(null,r.a,null,null,null);e.a=u.exports}},["NHnr"]);