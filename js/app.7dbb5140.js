(function(t){function e(e){for(var n,l,i=e[0],r=e[1],c=e[2],d=0,u=[];d<i.length;d++)l=i[d],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&u.push(s[l][0]),s[l]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,i=1;i<a.length;i++){var r=a[i];0!==s[r]&&(n=!1)}n&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var n={},s={app:0},o=[];function l(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=n,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)l.d(a,n,function(e){return t[e]}.bind(null,n));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var p=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},1837:function(t,e,a){},"1a8a":function(t,e,a){"use strict";var n=a("b5e8"),s=a.n(n);s.a},"45db":function(t,e,a){"use strict";var n=a("1837"),s=a.n(n);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("5c96"),o=a.n(s),l=(a("0fae"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[t.isMobile?a("h1",[t._v("请用电脑访问哦")]):a("index")],1)}),i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index",staticStyle:{height:"100%",width:"100%"}},[a("el-backtop"),a("navbar"),a("el-col",{attrs:{span:5}},[a("sidebar")],1),a("el-col",{attrs:{span:14}},[a("core")],1),a("el-col",{attrs:{span:5}},[a("timeline")],1)],1)},c=[],p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"navbar",staticStyle:{margin:"-10px"}},[a("el-card",{attrs:{shadow:"hover",id:"head"}},[a("br"),a("i",{class:{"el-icon-sunny":t.check1,"el-icon-moon":t.check2},staticStyle:{"font-size":"30px",display:"inline",margin:"30px"}}),a("h3",{staticStyle:{display:"inline","font-size":"30px"},attrs:{id:"mes"}})])],1)},d=[],u={name:"navbar",data:function(){return{check1:!0,check2:!1,time:new Date,mesnight:["久坐伤身，身下懒腰吧。","忙碌了一天，放松下吧。","今天的努力就是明天的底气。","任何值得而拥有的都是值得等待的。","拂尘晚归，得空闲坐。","今天离小目标又近了一步。","百草处黄消热暑，篱边瓜果缀枝头。","前路浩浩荡荡，万物皆可期待。","勤者读书夜达旦，青藤绕屋花连云。"],mesmor:["人生最美的风景在前方","你认真的模样真好看","心有多大，世界就有多大","既然选择了远方，便只顾风雨兼程。","元气满满的一天开始啦。","又是元气满满的一天。","今天也要加油哦。","常应常静常清净矣。","听首音乐，读本好书。","小池残暑退，高树早凉归。","离离暑云散，习习凉风起。"],output:"",activities:[{content:"QA测试版上线",timestamp:"2020-08-27"},{content:"QA正式版上线",timestamp:"2020-09-01"},{content:"QA正式2.0版上线",timestamp:"2020-09-12",color:"#0bbd87"}]}},mounted:function(){if(this.time.getHours()>=5&&this.time.getHours()<11){var t=Math.floor(Math.random()*this.mesmor.length);this.output="早上好，"+this.mesmor[t]}else if(this.time.getHours()>=11&&this.time.getHours()<13){var e=Math.floor(Math.random()*this.mesmor.length);this.output="中午好，"+this.mesmor[e]}else if(this.time.getHours()>=13&&this.time.getHours()<17){var a=Math.floor(Math.random()*this.mesnight.length);this.output="下午好，"+this.mesnight[a]}else if(this.time.getHours()>=17&&this.time.getHours()<22){var n=Math.floor(Math.random()*this.mesnight.length);this.output="晚上好，"+this.mesnight[n],this.check1=!1,this.check2=!0}else this.output="很晚了，要好好休息哦",this.check1=!1,this.check2=!0;document.getElementById("mes").innerHTML=this.output}},b=u,h=(a("1a8a"),a("2877")),m=Object(h["a"])(b,p,d,!1,null,null,null),f=m.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar",staticStyle:{"margin-top":"20px"}},[a("el-radio-group",{staticStyle:{"margin-bottom":"20px",display:"inline-block"},model:{value:t.isCollapse,callback:function(e){t.isCollapse=e},expression:"isCollapse"}},[a("el-radio-button",{attrs:{label:!1}},[t._v("展开")]),a("el-radio-button",{attrs:{label:!0}},[t._v("收起")])],1),a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1-4-1",collapse:t.isCollapse}},[a("el-submenu",{attrs:{index:"1"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-school"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("校园区")])]),a("el-menu-item-group",[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("校园链接")]),a("el-menu-item",{on:{click:t.zyzy}},[t._v("重要主页")])],1)],2),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[a("i",{staticClass:"el-icon-menu"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("工具区")])]),a("el-menu-item-group",[a("span",{attrs:{slot:"title"},slot:"title"},[t._v("工具链接")]),a("el-menu-item",{on:{click:t.xzgj}},[t._v("写作工具")]),a("el-menu-item",{on:{click:t.sjgj}},[t._v("设计工具")]),a("el-menu-item",{on:{click:t.bcgj}},[t._v("编程工具")])],1)],2),a("el-menu-item",{on:{click:function(e){t.drawer=!0}}},[a("i",{staticClass:"el-icon-document"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("使用说明")])]),a("el-menu-item",{on:{click:function(e){t.drawer1=!0}}},[a("i",{staticClass:"el-icon-setting"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("版本更新")])]),a("el-menu-item",{on:{click:function(e){t.drawer2=!0}}},[a("i",{staticClass:"el-icon-lollipop"}),a("span",{attrs:{slot:"title"},slot:"title"},[t._v("支持一下")])])],1),a("el-drawer",{attrs:{title:"使用说明",visible:t.drawer,"with-header":!0},on:{"update:visible":function(e){t.drawer=e}}},[a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("点击所需链接可直接跳转")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("鼠标悬浮在按钮上可获得简介")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("快捷按键实现页面跳转")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("--键盘按键【B】对应百度")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("--键盘按键【F】对应翻译")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("--键盘按键【R】对应runoob")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("--键盘按键【G】对应Github")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("--键盘按键【W】对应w3school")])]),a("el-drawer",{attrs:{title:"版本更新",visible:t.drawer1,"with-header":!0},on:{"update:visible":function(e){t.drawer1=e}}},[a("el-timeline",t._l(t.activities,(function(e,n){return a("el-timeline-item",{key:n,attrs:{timestamp:e.timestamp,color:e.color}},[t._v(" "+t._s(e.content)+" ")])})),1),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("最近一次更新内容：")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("新增部分链接")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("新增小猫装饰")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("屏蔽了移动端用户")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("新增临时屏蔽链接描述按钮")]),a("hr")],1),a("el-drawer",{attrs:{title:"支持一下",visible:t.drawer2,"with-header":!0},on:{"update:visible":function(e){t.drawer2=e}}},[a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("感谢您的支持")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("欢迎关注微信公众号：Monash攻略")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("内有许多实用信息和攻略")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("有任何建议或BUG反馈请在公众号内留言")]),a("hr"),a("span",{staticStyle:{"margin-left":"2rem"}},[t._v("也欢迎投稿和推荐好用的网站哦")]),a("hr")])],1)},y=[],_={data:function(){return{isCollapse:!1,drawer:!1,drawer1:!1,drawer2:!1,activities:[{content:"QA测试版上线",timestamp:"2020-08-27"},{content:"QA正式版上线",timestamp:"2020-09-01"},{content:"QA正式2.0版上线",timestamp:"2020-09-12"},{content:"QA正式2.1版上线",timestamp:"2020-10-12",color:"#0bbd87"}]}},methods:{zyzy:function(){window.location="#zyzy"},xzgj:function(){window.location="#xzgj"},sjgj:function(){window.location="#sjgj"},bcgj:function(){window.location="#bcgj"}}},v=_,w=(a("eebf"),Object(h["a"])(v,g,y,!1,null,null,null)),k=w.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body",staticStyle:{"margin-top":"20px"}},[a("el-card",{staticClass:"box-card",staticStyle:{height:"650px","background-image":"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header",id:"zyzy"},slot:"header"},[a("h2",[t._v("校园链接")]),a("el-button",{staticStyle:{float:"right"},on:{click:function(e){t.disabled=!t.disabled}}})],1),a("h3",[t._v("重要主页")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"Mymonash学生登入界面，可转入moodle, timetable, email, library等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://my.monash.edu.au/",target:"_blank"}},[a("el-button",{attrs:{type:"danger",plain:""}},[t._v("My Monash")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"Monash官网，可查询任何关于学校的信息，能找到最新推送的公告活动等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://monash.edu/",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("Monash官网")])],1)]),a("h3",[t._v("注册选课")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"Web enrolment system,用于注册学科，交学费，提交个人信息，延期等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://my.monash.edu.au/wes/",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("WES")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"Handbook,用于查看各科目详细内容，教授联系方式，分数线，学习内容等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www3.monash.edu/pubs/2019handbooks/index.html",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("Handbook")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"Course map，用于查看专业内所有需要学的科目，此course map链接可能不包含所有专业，需在handbook内寻找。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www3.monash.edu/pubs/2019handbooks/maps/",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("Course map")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"工程专业的Course map",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/engineering/current-students/enrolment-and-re-enrolment/course-information/course-maps",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("工程Course map")])],1)]),a("h3",[t._v("其它信息")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"Okta登入界面，可用于更改登入密码和更改okta绑定设备。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://monashuni.okta.com/",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("Okta登入")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"有任何关于学习，生活，校内的任何问题都可以在这里寻求帮助。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/connect/contact-us",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("MonashConnect")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"工程学生需要完成的CPD，有详细的介绍和解答。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/engineering/current-students/professional-development/continuous-professional-development",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("工程CPD")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"学校提供的可靠校外租房中介合集，可用于租校外的房子或公寓。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/accommodation/accommodation/off-campus-options/private-rental",target:"_blank"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("学校认可的靠谱中介合集")])],1)]),a("br"),a("h3",[t._v("校内设施")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"校内打印机使用，上传打印文件。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/esolutions/print/students",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("校内打印")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"学生卡充值，用于打印时扣费。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/esolutions/accounts-passwords/credit-your-account",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("学生卡充值")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"用于浏览不同种类的打印价格。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/esolutions/print/students-costs",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("打印价格")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"Computer lab的开放时间以及课后进入的权限申请。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://locate-a-lab.apps.monash.edu/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("计算机房")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"学习区域位置及开放时间查询。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/students/study-resources/study-spaces",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"primary",plain:""}},[t._v("学习区域")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"学校提供的免费下载安装或在线使用需要付费的软件如Microsoft office，matlab等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/esolutions/software/catalogue",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("软件下载")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"可申请学校宿舍，并且有详细的价格和种类说明。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.monash.edu/accommodation/home",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("学校宿舍")])],1)]),a("hr"),a("footer",[t._v("注意：校园区内的链接在国内使用时加载缓慢，有需要的可挂VPN后浏览。")])],1),a("el-card",{staticClass:"box-card",staticStyle:{height:"520px","background-image":"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header",id:"xzgj"},slot:"header"},[a("h2",[t._v("写作工具")])]),a("h3",[t._v("翻译词典")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"翻译，需要时推荐点进有道词典更为精确。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://fanyi.youdao.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("有道翻译")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"国内可用的谷歌翻译。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://translate.google.cn/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("谷歌翻译（CN）")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"谷歌翻译,国内无法使用。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://translate.google.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("谷歌翻译")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"可自主选择词汇的翻译神器，能直接翻译word文件并用专业写作的词语替换。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.deepl.com/home",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Deepl")])],1)]),a("h3",[t._v("语法检查")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"用于检测拼写和语法等，可点击LOGO进入主页下载软件版，可在不同场合自动检查拼写和语法。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.grammarly.com/grammar-check",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Grammarly")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"用于替换同义词，并能检查文章语法。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.thesaurus.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("*Thesaraus")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"可用来检测文章词汇和语句的学术性，也可查询单个单词在学术写作中使用的比例。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.wordandphrase.info/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("*wordandphrase")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"提供各种专业短语及句型用于替换，并且有相关写作教学。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://www.phrasebank.manchester.ac.uk/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("*Acdemic phrasebank")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"很详细的专业写作教学，细分至各种文体，文章的各个部分，语法，修辞等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://uefap.net/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("*UEfAP")])],1)]),a("h3",[t._v("文献搜索")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"集合了各大常用的文献搜索网址，可用来搜索文献、参考等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://scholar.chongbuluo.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("*虫部落学术搜索")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"庞大的电子书店，可查询书记或文章，常用于搜索文献。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://z-lib.org/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("*Z-library")])],1)]),a("hr"),a("footer",[t._v("注意：灵活搭配使用效果更加，使用时注意辨别。")])],1),a("el-card",{staticClass:"box-card",staticStyle:{height:"420px","background-image":"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header",id:"sjgj"},slot:"header"},[a("h2",[t._v("设计工具")])]),a("h3",[t._v("设计绘图")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"拥有海量精美模板与资源，部分资源需要付费或VIP，同时提供免费的在线photoshop和一件抠图功能。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.gaoding.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("稿定设计")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"极简的设计工具，并且有许多办公用的模板等资源和素材。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.chuangkit.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("创客贴")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"免费在线创作思维导图，流程图，并可进行背景透明保存。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.processon.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("ProcessOn在线绘图")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"制作动态图的工具，有动态条形图，柱状图，网格图等大量素材，全都以短视频的方式呈现。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://hanabi.data-viz.cn/templates?lang=zh-CN",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("火花hanabi")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"图片处理工具，可加水印，处理格式，裁剪等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.iloveimg.com/zh-cn",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("iLoveImage")])],1)]),a("h3",[t._v("素材模板")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"拥有两千多款高品质字体，部分可免费商用。大多数功能需要下载客户端，在线使用效率较低。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.hellofont.cn/home",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("字由")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"拥有许多免费且可上映的高清图片资源库。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://pixabay.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("*Pixabay")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"阿里巴巴矢量图标库，有许多免费的插画和图标资源，并且有SVG格式（矢量图标格式：更改图片尺寸不会影响图片效果。）",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.iconfont.cn/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Iconfont")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"拥有许多关于设计类的资源库以及教程，包含免费和付费板块。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.doyoudo.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Doyoudo")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"微软旗下的office模板大全，涵盖word,ppt,excel并提供相关教学课程。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://www.officeplus.cn/Template/Home.shtml",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Officeplus")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"针对设计，艺术，影视等行业的教学，包括如何使用相关软件，学习相关理论和技巧等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://zihua.com.cn/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("自化网")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"好看的CSS渐变模板代码",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://color.oulu.me/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("color.oulu")])],1)]),a("hr"),a("footer",[t._v("注意：使用时注意版权问题，尊重作者。")])],1),a("el-card",{staticClass:"box-card",staticStyle:{height:"520px","background-image":"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header",id:"bcgj"},slot:"header"},[a("h2",[t._v("编程工具")])]),a("h3",[t._v("编程教程")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"全球最大的中文web技术教程，包含web技术以及一些主流编程语言的教程。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.w3school.com.cn/index.html",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("w3school")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"提供许多编程语言的详细基础教程。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.runoob.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Runoob菜鸟教程")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"互联网IT技术学习平台，拥有许多大学提供的专业课程，分付费和免费区。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.imooc.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("IMOOC慕课网")])],1)]),a("h3",[t._v("论坛平台")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"世界最大的代码分享，项目开源平台，还可用于团队合作进行版本控制，搭建个人博客等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://github.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Github")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"IT问答网站，任何IT类的问题都能在这里搜索到答案，也可以发出提问等待着大佬上门解答。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://stackoverflow.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("stackoverflow")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"开发者社区、论坛。会有很多人在这里写一些心得和攻略，也可以找到一些问题的解决方案。但是内容较杂，准确率未知，需要辨别。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.csdn.net/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("CSDN")])],1)]),a("h3",[t._v("刷题导航")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"收集了许多大厂的真题和编程训练，同时也有许多有用的教程，也可以在这里求职从而找到实习或就业机会。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.nowcoder.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("牛客网")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"涵盖了许多算法测试题和面试真题，也可以找到许多相关教程。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://leetcode-cn.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("leetcode力扣")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"针对编程的超齐全导航网站，含有博客，社区，教程，工具，框架，库等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://www.frontendjs.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("前站导航")])],1)]),a("hr"),a("footer",[t._v("注意：前站导航包含了齐全的教程，库，论坛等合集，如有需要可自行查找。")])],1),a("el-card",{staticClass:"box-card",staticStyle:{height:"420px","background-image":"linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header",id:"zhgj"},slot:"header"},[a("h2",[t._v("综合工具")])]),a("h3",[t._v("格式处理")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"超强大的在线格式转换工具，几乎涵盖所有类型格式。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://convertio.co/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Convertio")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"简洁实用的PDF格式转换器，也包括其它少许格式的转换。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://smallpdf.com/cn",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Smallpdf")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"超多工具可在线使用，如图片，视频，gif编辑，文件格式转换，公式计算，文件压缩，邮箱生成，编码工具等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.tooleyes.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("tooleyes在线工具大全")])],1)]),a("h3",[t._v("其他工具")]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"视频学习网站，保函ted talk，精品课，公开课等，拥有广泛的内容学习。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.yxgapp.com/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("译学馆")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"功能超强大的知识搜索引擎兼计算器，可以用来解决复杂的问题，涵盖但不仅限于数学，物理，化学，科学，工程，商科，文学\n                  ， 生活。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://locate-a-lab.apps.monash.edu/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("Wolframalpha智能计算器")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"免费的图片，pdf，excel文字识别，提取，可网页在线或下载使用。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://baimiao.uzero.cn/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("白描")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"可找到常用付费软件的替代版，或类似功能的免费软件。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://alternativeto.net/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("alternativeto")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"有一些工具的合集如代码处理，设计，生成二维码等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://oulu.me/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("oulu")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"有超多无版权软件和游戏等资源(非正版)，有设计类软件，插件，游戏等。主要用于设计。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"http://www.qijishow.com/down/index.html",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("奇迹秀工具箱")])],1)]),a("el-tooltip",{attrs:{disabled:t.disabled,transition:"none",content:"可用来下载网页上无法下载的视频，网页，磁力链接等。",placement:"top",effect:"light"}},[a("a",{attrs:{href:"https://www.hotbox.fun/",target:"_blank",type:"button"}},[a("el-button",{attrs:{type:"success",plain:""}},[t._v("HOTBOX")])],1)]),a("hr"),a("footer",[t._v("注意：到底了！！！")])],1)],1)},S=[],C={data:function(){return{disabled:!1}},methods:{submit1:function(){window.open("http://www.baidu.com")},submit2:function(){window.open("https://www.runoob.com/")},submit3:function(){window.open("https://translate.google.cn/")},submit4:function(){window.open("https://github.com/")},submit5:function(){window.open("https://www.w3school.com.cn/index.html")}},created:function(){var t=this;document.onkeydown=function(){var e=window.event.keyCode;66==e?t.submit1():82==e?t.submit2():70==e?t.submit3():71==e?t.submit4():87==e&&t.submit5()}}},j=C,z=(a("840f"),Object(h["a"])(j,x,S,!1,null,null,null)),O=z.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"timeline",staticStyle:{"margin-top":"20px","background-image":"linear-gradient(to top, #dfe9f3 0%, white 100%)"}},[a("el-tag",{staticStyle:{"margin-left":"80px"},attrs:{type:"warning"}},[t._v("校历时间线")]),a("el-tooltip",{staticClass:"item",attrs:{effect:"light",content:"日期格式为年月日，详细时间线请到myMonash主页的important dates查看。",placement:"top-start"}},[a("i",{staticClass:"el-icon-info",staticStyle:{color:"#409EFF","margin-left":"30px"}})]),a("br"),a("br"),a("el-timeline",t._l(t.activities,(function(e,n){return a("el-timeline-item",{key:n,attrs:{icon:e.icon,type:e.type,color:e.color,size:e.size,timestamp:e.timestamp}},[t._v(" "+t._s(e.content)+" ")])})),1)],1)},P=[],H={data:function(){return{activities:[{content:"夏令时开始(比国内早3小时)",timestamp:"2020-10-04",size:"large",type:"primary",icon:"el-icon-alarm-clock"},{content:"2021年re-enrolment开始",timestamp:"2020-10-12",size:"large",color:"#0bbd87"},{content:"2021年re-enrolment结束",timestamp:"2020-12-11",type:"danger",size:"large"},{content:"2021年re-enrolment(超时罚款)开始",timestamp:"2020-12-12",size:"large",type:"danger",icon:"el-icon-warning"},{content:"2021年re-enrolment(超时罚款)结束",timestamp:"2020-12-21",size:"large",type:"danger",icon:"el-icon-warning"},{content:"大学关闭，假期开始",timestamp:"2020-12-23",size:"large",type:"primary",icon:"el-icon-s-home"}]}}},A=H,E=(a("b3f7"),Object(h["a"])(A,M,P,!1,null,null,null)),T=E.exports,I={name:"index",components:{navbar:f,sidebar:k,core:O,timeline:T}},D=I,G=(a("45db"),Object(h["a"])(D,r,c,!1,null,null,null)),Q=G.exports,$={name:"App",components:{index:Q},computed:{isMobile:function(){return document.body.clientWidth<500}}},W=$,B=Object(h["a"])(W,l,i,!1,null,null,null),F=B.exports;n["default"].use(o.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(F)}}).$mount("#app")},"840f":function(t,e,a){"use strict";var n=a("9462"),s=a.n(n);s.a},9462:function(t,e,a){},"9b6a":function(t,e,a){},b0e2:function(t,e,a){},b3f7:function(t,e,a){"use strict";var n=a("9b6a"),s=a.n(n);s.a},b5e8:function(t,e,a){},eebf:function(t,e,a){"use strict";var n=a("b0e2"),s=a.n(n);s.a}});
//# sourceMappingURL=app.7dbb5140.js.map