(function(t){function e(e){for(var r,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-0b5c587f":"2b79e488","chunk-1b9d707c":"a315e845","chunk-26e2e5f4":"5d820c13","chunk-3c365ea6":"e0d8e334","chunk-676e8f9a":"5658cb6a","chunk-7cb249a9":"ac2fae53"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-0b5c587f":1,"chunk-1b9d707c":1,"chunk-26e2e5f4":1,"chunk-3c365ea6":1,"chunk-676e8f9a":1,"chunk-7cb249a9":1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-0b5c587f":"2a6135ea","chunk-1b9d707c":"b8a02323","chunk-26e2e5f4":"211dbd9e","chunk-3c365ea6":"16d17fc7","chunk-676e8f9a":"d7f66413","chunk-7cb249a9":"8da95a5f"}[t]+".css",a=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){u=f[s],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t),u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:l})},12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"017c":function(t,e,n){var r={"./category.js":"ec85","./global.js":"1a43","./index.js":"7af2","./login.js":"c668","./notification.js":"fe80","./question.js":"7972","./reply.js":"b001","./toolbar.js":"fcf7"};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id="017c"},1:function(t,e){},"1a43":function(t,e,n){"use strict";n.r(e),e["default"]={state:{slug:null},getters:{},mutations:{SET_SLUG:function(t,e){t.slug=e}},actions:{}}},"20c9":function(t,e,n){},"22d6":function(t,e,n){"use strict";var r=n("d225"),o=n("b0b4"),a=function(){function t(){Object(r["a"])(this,t)}return Object(o["a"])(t,[{key:"storeToken",value:function(t){return localStorage.setItem("token",t)}},{key:"store",value:function(t){this.storeToken(t)}},{key:"clear",value:function(){localStorage.removeItem("token")}},{key:"getToken",value:function(){return localStorage.getItem("token")}}]),t}();a=new a},"52d9":function(t,e,n){"use strict";var r=n("aab9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("f309"),a=n("2992"),i=n.n(a);r["default"].use(o["a"]);var s=new o["a"]({icons:{theme:{dark:!0,themes:{light:{primary:"#42a5f5"},dark:{primary:"#2196F3"}}},options:{customProperties:!0},iconfont:"mdi"},lang:{locales:{ru:i.a},current:"ru"}}),c=(n("456d"),n("ac6a"),n("5df3"),n("1c4c"),n("7514"),n("96cf"),n("3b8d")),u=n("8c4f"),l=n("eb02");r["default"].use(u["a"]);var f=[{name:"main",meta:{title:"Главная страница форума",metaTags:[{name:"description of main page",content:"The main page of our example app."},{property:"og:description",content:"The content sections of main page of our forum app."}]},path:"/",component:function(){return n.e("chunk-676e8f9a").then(n.bind(null,"405f"))}},{name:"forum",meta:{title:"Форум",metaTags:[{name:"Описание форума",content:"Тестовый форум на VUE.js 2.6 и LARAVEL 5.8"},{property:"og:description",content:"Текстовая секция странички"}]},path:"/forum",component:function(){return n.e("chunk-26e2e5f4").then(n.bind(null,"d10c"))},props:!0},{name:"CategoryQuestions",meta:{title:"Вопросы по категориям",metaTags:[{name:"Вопросы по категориям",content:"Тестовый форум на VUE.js 2.6 и LARAVEL 5.8 / Вопросы по категориям"},{property:"og:description",content:"Текстовая секция странички / Вопросы по категориям"}]},path:"/category/:slug",component:function(){return n.e("chunk-26e2e5f4").then(n.bind(null,"d10c"))}},{name:"ask",meta:{title:"Создать вопрос"},path:"/ask",component:function(){return n.e("chunk-3c365ea6").then(n.bind(null,"4a37"))}},{name:"edit-categories",meta:{title:"Редактор категорий"},path:"/edit-categories",component:function(){return n.e("chunk-7cb249a9").then(n.bind(null,"b761"))}},{name:"signup",meta:{title:"Регистрация"},path:"/signup",component:function(){return Promise.resolve().then(n.bind(null,"fccd"))}},{name:"login",meta:{title:"Вход"},path:"/login",component:function(){return Promise.resolve().then(n.bind(null,"b461"))}},{name:"read",meta:{title:"Статья"},path:"/question/:slug",component:function(){return n.e("chunk-0b5c587f").then(n.bind(null,"3a83"))}},{path:"*",meta:{title:"Страница не найдена!"},component:function(){return n.e("chunk-1b9d707c").then(n.bind(null,"be4d"))}}],d=new u["a"]({routes:f,hashbang:!1,mode:"history"});d.beforeEach(function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,n,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return l["a"].state.global.slug=e.params&&e.params.slug,t.next=3,l["a"]._actions["login/checkPermitionsOnCurrentPath"][0](e.path);case 3:if(!t.sent){t.next=8;break}console.warn("ROUTER: есть права"),r(),t.next=10;break;case 8:console.warn("ROUTER: нет прав"),r({name:"forum"});case 10:r();case 11:case"end":return t.stop()}},t)}));return function(e,n,r){return t.apply(this,arguments)}}()),d.afterEach(function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(e,n){var r,o,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(r=l["a"].state.global.slug,o=e.matched.slice().reverse().find(function(t){return t.meta&&t.meta.title}),a=e.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags}),n.matched.slice().reverse().find(function(t){return t.meta&&t.meta.metaTags}),o&&(document.title=o.meta.title+" ".concat(r?" - "+r:"")),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function(t){return t.parentNode.removeChild(t)}),a){t.next=8;break}return t.abrupt("return");case 8:a.meta.metaTags.map(function(t){var e=document.createElement("meta");return Object.keys(t).forEach(function(n){return e.setAttribute(n,t[n])}),e.setAttribute("data-vue-router-controlled",""),e}).forEach(function(t){return document.head.appendChild(t)});case 9:case"end":return t.stop()}},t)}));return function(e,n){return t.apply(this,arguments)}}());var p=d,m=n("9483");Object(m["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var g=n("ce5b"),h=n.n(g),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app"},[n("toolbar"),n("keep-alive",{attrs:{max:"1"}},[n("transition",{attrs:{name:"fade"}},[n("router-view",{key:t.$route.fullPath})],1)],1),n("snack"),n("v-spacer"),n("foot-app")],1)},v=[],_=n("cebc"),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-toolbar",{attrs:{color:"indigo",dark:"","z-index":"2","data-app":""}},[n("div",{staticClass:"hidden-md-and-up"},[n("v-menu",{attrs:{bottom:"",left:"","z-index":"223"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{dark:"",icon:""}},r),[n("v-app-bar-nav-icon")],1)]}}])},[n("v-list",t._l(t.items,function(e,r){return n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],key:r,on:{click:function(n){return t.manuClickHandler(e)}}},[n("v-list-item-title",[n("v-btn",{attrs:{text:""}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v(t._s(e.icon))])],1),t._v("\n                          "+t._s(e.title)+"\n                      ")],1)],1)],1)}),1)],1)],1),n("v-toolbar-title",{staticClass:"white--text"},[n("v-icon",[t._v("nature_people")]),t._v(" Форум\n  ")],1),n("v-spacer"),t.loggedIn?n("app-notification"):t._e(),n("div",{staticClass:"hidden-sm-and-down"},t._l(t.items,function(e){return n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"item.show"}],key:e.title,attrs:{ripple:!1,text:""},on:{click:function(n){return t.manuClickHandler(e)}}},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n          "+t._s(e.title)+"\n      ")],1)}),1),n("div",{staticClass:"text-xs-center"},[n("v-dialog",{attrs:{width:"500"},model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[n("v-card",[n("v-card-title",{staticClass:"headline grey lighten-2",attrs:{"primary-title":""}},[n("v-icon",[t._v(t._s(t.regMode?"assignment":"person"))]),t._v("\n        "+t._s(t.regMode?"Форма регистрации":"Форма входа")+"\n      ")],1),t.modal?n("v-card-text",[t.regMode?n("SignupVue",{on:{toLoginMode:function(e){t.regMode=!1}}}):n("LoginVue",{on:{toRegMode:function(e){t.regMode=!0}}})],1):t._e()],1)],1)],1)],1)},E=[],w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{clsas:"text-xs-center"}},[n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-btn",t._g({attrs:{slot:"activator",icon:""},slot:"activator"},r),[n("v-icon",{attrs:{color:t.unreadCount?"red":"red lighten-4"}},[t._v("add_alert")]),t._v("\n                "+t._s(t.unreadCount)+"\n            ")],1)]}}])},[n("v-list",{class:t.noAlerts?"ma-0 pa-0":"pb-0"},[t._l(t.unread,function(e){return n("v-list-item",{key:e.id},[n("router-link",{attrs:{to:e.path}},[n("v-list-item-title",{on:{click:function(n){return t.markAsRead(e)}}},[t._v(t._s(e.question))])],1)],1)}),t.unreadCount?n("v-divider"):t._e(),t._l(t.read,function(e){return n("v-list-item",{key:e.id},[n("router-link",{attrs:{to:e.path}},[n("v-list-item-title",[t._v(t._s(e.question))])],1)],1)}),!t.noAlerts&&t.noNews?n("v-alert",{staticClass:" mb-0",attrs:{value:!0,color:"primary"}},[t._v(" Нету новостей ")]):t._e(),t.noAlerts?n("v-alert",{staticClass:" mb-0",attrs:{type:"info"}},[t._v(" Нету оповещений ")]):t._e()],2)],1)],1)},k=[],T=n("2f62"),y={name:"notifics",data:function(){return{inited:!1,sound:"https://www.soundsnap.com/streamers/play.php?id=1554465771.2719:f58b2a1ec50f5a5b79ed74d836d2eaf5a2bb11bf:f25ca3cbbbabc600c18619f588ee0dcca822172413031b9a056fd1630e73ba2c2679ee348c5b56583ca59d4991f14127b8864d3e2470b3f99886768a7d15eec51084495434374d0349db5c4692805249960df3d70666eaeaa184aafadbd04757a4817a0bbe20252aad7a46d82f7af97614d23353e3632e798535b8ccf6e381d8eb2f51bed6cda2c33c7d111a8750e4a031ec38acbd4b8c99a0fb212930aa07b40458547b8fb80d1e020fa595b7fd75bb8f93a0aa1b0a23d595344668f7084bc65d5c3d2941a2afc7e3ed0c18f9bc1cd606a9b8934f8be11fbbf5e42b7c3313d7"}},created:function(){this.getNotifications(),this.initLiveNotifications()},computed:Object(_["a"])({},Object(T["c"])(["login/loggedIn","login/id","notification/read","notification/unread"]),{loggedIn:function(){return this["login/loggedIn"]},noAlerts:function(){return!this.unreadCount&&!this.readCount},noNews:function(){return!this.unreadCount},read:function(){return this["notification/read"]},unread:function(){return this["notification/unread"]},readCount:function(){var t=this.read;return t&&t instanceof Array&&t.length},unreadCount:function(){var t=this.unread;return t&&t instanceof Array&&t.length}}),watch:{loggedIn:function(t,e){alert(""),this.getNotifications(),this.initLiveNotifications()}},methods:Object(_["a"])({},Object(T["b"])(["notification/getNotifications","notification/markAsRead"]),{getNotifications:function(){var t=Object(c["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!this["login/loggedIn"]){t.next=5;break}return t.next=3,this["notification/getNotifications"]();case 3:e=t.sent,e?console.log("GET NOTIF: success"):console.warn("GET NOTIF: failed");case 5:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),initLiveNotifications:function(){var t=this;this["login/loggedIn"]&&!this.inited&&(window.playSound=this.playSound,Echo.private("App.User."+this["login/id"]).notification(function(e){console.log("app notif.vue ->",e,e.type),t.playSound(),t.getNotifications(),t.inited=!0}))},playSound:function(){var t=new Audio(this.sound);t.play()},markAsRead:function(t){this["notification/markAsRead"](t)}})},x=y,S=(n("52d9"),n("2877")),j=n("6544"),N=n.n(j),A=n("0798"),R=n("8336"),C=n("ce7e6"),I=n("132d"),L=n("8860"),D=n("da13"),P=n("5d23"),M=n("e449"),F=Object(S["a"])(x,w,k,!1,null,null,null),V=F.exports;N()(F,{VAlert:A["a"],VBtn:R["a"],VDivider:C["a"],VIcon:I["a"],VList:L["a"],VListItem:D["a"],VListItemTitle:P["b"],VMenu:M["a"]});var q=n("b461"),G=n("fccd"),$={name:"TOOLbar",components:{AppNotification:V,LoginVue:q["default"],SignupVue:G["default"]},data:function(){return{regMode:!1}},computed:Object(_["a"])({},Object(T["e"])([]),Object(T["c"])(["login/loggedIn","toolbar/items"]),{modal:{get:function(){return this.$store.state.toolbar.modalMode},set:function(t){t?this["toolbar/SET_MODAL_MODE_ON"]():this["toolbar/SET_MODAL_MODE_OFF"]()}},items:function(){return this["toolbar/items"]},loggedIn:function(){return this["login/loggedIn"]}}),methods:Object(_["a"])({},Object(T["d"])(["toolbar/SET_MODAL_MODE_ON","toolbar/SET_MODAL_MODE_OFF"]),Object(T["b"])(["login/logout"]),{manuClickHandler:function(t){"Выйти"==t.title?this.logout():"Войти"==t.title?this["toolbar/SET_MODAL_MODE_ON"]():this.$router.push({name:t.slug})},logout:function(){console.log("login/logout"),this["login/logout"]()}})},K=$,U=n("5bc1"),B=n("b0af"),H=n("e99f"),Q=n("99d9"),z=n("169a"),J=n("9910"),Y=n("71d9"),W=n("2a7f"),X=Object(S["a"])(K,O,E,!1,null,null,null),Z=X.exports;N()(X,{VAppBarNavIcon:U["a"],VBtn:R["a"],VCard:B["a"],VCardText:H["a"],VCardTitle:Q["b"],VDialog:z["a"],VIcon:I["a"],VList:L["a"],VListItem:D["a"],VListItemTitle:P["b"],VMenu:M["a"],VSpacer:J["a"],VToolbar:Y["a"],VToolbarTitle:W["b"]});var tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{bottom:"bottom"===t.y,left:"left"===t.x,"multi-line":"multi-line"===t.mode,right:"right"===t.x,timeout:t.timeout,top:"top"===t.y,vertical:"vertical"===t.mode,color:t.color},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v(" "+t._s(t.text)+"\n  "),n("v-btn",{attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},[t._v(" Закрыть\n  ")])],1)},et=[],nt={data:function(){return{snackbar:!1,y:"top",x:null,mode:"",timeout:6e3,text:"Hello, I'm a snackbar",color:"info"}},mounted:function(){var t=this;window.snack=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Attention",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";t.text=e,t.color=n,t.snackbar=!0}}},rt=nt,ot=n("2db4"),at=Object(S["a"])(rt,tt,et,!1,null,null,null),it=at.exports;N()(at,{VBtn:R["a"],VSnackbar:ot["a"]});var st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"justify-center"},[n("v-card-actions",{staticClass:"justify-center"},[n("v-flex",{attrs:{"lighten-1":"","py-1":"","text-xs-center":"","grey--text":"",xs12:""}},[n("strong",[t._v("ФОРУМ")]),t._v("    ©     "+t._s((new Date).getFullYear())+"\n      ")])],1)],1)},ct=[],ut={name:"app-footer",data:function(){return{}}},lt=ut,ft=n("0e8f"),dt=n("553a"),pt=Object(S["a"])(lt,st,ct,!1,null,null,null),mt=pt.exports;N()(pt,{VCardActions:Q["a"],VFlex:ft["a"],VFooter:dt["a"]});var gt={name:"APP__HOME",components:{toolbar:Z,"foot-app":mt,snack:it},computed:Object(_["a"])({},Object(T["c"])(["login/TOKEN__isOK"])),mounted:function(){window.app=this,this["login/TOKEN__isOK"]||this["login/logout"]()},methods:Object(_["a"])({},Object(T["b"])(["login/logout"]))},ht=gt,bt=(n("9993"),n("7496")),vt=Object(S["a"])(ht,b,v,!1,null,null,null),_t=vt.exports;N()(vt,{VApp:bt["a"],VSpacer:J["a"]});var Ot=n("0493"),Et=n.n(Ot);n("20c9"),n("d5e8"),n("5363");window.router=p,window.store=l["a"],r["default"].use(h.a,{theme:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}),n("ba6a"),r["default"].use(Et.a),window.md=n("0e54"),window.EventBus=new r["default"],r["default"].config.productionTip=!1,r["default"].config.performance=!0,r["default"].config.devtools=!0,new r["default"]({router:p,store:l["a"],vuetify:s,render:function(t){return t(_t)}}).$mount("#app")},7972:function(t,e,n){"use strict";n.r(e);var r=n("6ee6"),o=n("2b0e");e["default"]={state:{questions:[],loading:!1,meta:{}},getters:{questions:function(t,e){return t.questions},loading:function(t,e){return t.loading},GETTER_meta:function(t){return t.meta}},mutations:{changeProp:function(t,e){var n=e.prop,r=e.val;t[n]=r},changeObj:function(t,e){var n=e.obj,r=e.prop,o=e.val;t[n][r]=o},SET_LOADING_ON:function(t){t.loading=!0},SET_LOADING_OFF:function(t){t.loading=!1},SET_QUESTIONS:function(t,e){o["default"].set(t,"questions",e)},SET_META:function(t,e){o["default"].set(t,"meta",e)}},actions:{getQuestions:function(t,e){t.state;var n=t.commit,r=(t.dispatch,e.page),o=void 0===r?1:r;return n("SET_LOADING_ON"),axios.get("question?page=".concat(o)).then(function(t){return n("SET_QUESTIONS",t.data.data),n("SET_META",t.data.meta),t.data}).catch(function(t){return console.warn("ERR in getQuestions => ",t),!1}).finally(function(t){return n("SET_LOADING_OFF"),t})},getQuestionByCategorySlug:function(t,e){t.state;var n=t.commit,r=(t.dispatch,e.slug),o=e.page;return n("SET_LOADING_ON"),axios.get("category/".concat(r,"/questions?page=").concat(o)).then(function(t){return n("SET_QUESTIONS",t.data.data),n("SET_META",t.data.meta||{}),t.data}).catch(function(t){return console.warn("ERR in getQuestions => ",t),!1}).finally(function(t){return n("SET_LOADING_OFF"),t})},createQuestion:function(t,e){return Object(r["a"])(t),axios.post("question",e)},questionUpdate:function(t,e){return Object(r["a"])(t),axios.patch("question/".concat(e.slug),e)},questionDelete:function(t,e){return Object(r["a"])(t),axios.delete("question/".concat(e)).then(function(t){return t}).catch(function(t){return console.warn("catch =>",t.response.data),!1})}}}},"7af2":function(t,e,n){"use strict";n.r(e);var r=n("cebc"),o=(n("a481"),n("ac6a"),n("bba4")),a=n.n(o),i=n("017c"),s={};i.keys().forEach(function(t){if("./index.js"!==t){var e=a()(t.replace(/(\.\/|\.js)/g,""));s[e]=Object(r["a"])({namespaced:!0},i(t).default)}}),e["default"]=s},9993:function(t,e,n){"use strict";var r=n("d533"),o=n.n(r);o.a},aab9:function(t,e,n){},b001:function(t,e,n){"use strict";n.r(e);var r=n("6ee6"),o=n("2b0e");e["default"]={state:{replies:{},loading:!1,draft:{},slug:null},getters:{GETTER_TOPIC_REPLIES_ARR:function(t,e){return t.replies},GETTER_TOPIC_DRAFT:function(t,e){return t.slug in t.draft?t.draft[t.slug]:""},loading:function(t){return t.loading}},mutations:{appendObj:function(t,e){var n=e.obj,r=e.prop,o=e.val;!(r in t[n])&&(t[n][r]=[]),t[n][r].push(o)},SET_LOADING_ON:function(t){t.loading=!0},SET_LOADING_OFF:function(t){t.loading=!1},SET_TOPIC_REPLIES:function(t,e){var n=e.slug,r=e.replies;o["default"].set(t.replies,n,r)},APPEND_TOPIC_REPLY:function(t,e){var n=e.slug,r=e.obj;t.replies[n].push(r)},SET_TOPIC_DRAFT:function(t,e){t.draft[t.slug]=e},CLEAR_TOPIC_DRAFT:function(t,e){t.draft[e]=null}},actions:{GET_TOPIC_REPLIES:function(t){var e=t.state,n=this.state.global.slug;return n in e.replies&&e.replies[n]},newReply:function(t,e){t.state;var n=t.commit,r=(t.dispatch,e.body),o=this.state.global.slug;return axios.post("question/".concat(o,"/reply"),{body:r}).then(function(t){return n("APPEND_TOPIC_REPLY",{slug:o,obj:t.data.Reply}),n("CLEAR_TOPIC_DRAFT",o),{state:1,msg:"Успешно",data:t.data.Reply}}).catch(function(t){return console.warn("[STORE] [catch] newReply => ",t),{state:0,msg:t.message}})},getReplies:function(t){t.state;var e=t.commit,n=(t.dispatch,t.getters,this.state.global.slug);return n?(e("SET_LOADING_ON"),axios.get("question/".concat(n,"/reply")).then(function(t){return e("SET_TOPIC_REPLIES",{slug:n,replies:t.data.data}),{stat:!0,msg:"Комментарии успешно получены",replies:t.data.data}}).catch(function(t){return console.warn("ERR in getReplies => ",t),{stat:!1,msg:t}}).finally(function(t){return e("SET_LOADING_OFF"),t})):{stat:!1,msg:"Неверные параметры для отображения комментариев"}},deleteReply:function(t,e){Object(r["a"])(t);var n=this.state.global.slug;return axios.delete("question/".concat(n,"/reply/").concat(e)).then(function(t){return{stat:1,msg:"Успешно удалено",res:t}}).catch(function(t){return console.warn(t),{stat:0,msg:t.message}})}}}},b461:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("v-text-field",{attrs:{label:"E-mail",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email","string"===typeof e?e.trim():e)},expression:"form.email"}}),n("v-text-field",{attrs:{label:"Password",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password","string"===typeof e?e.trim():e)},expression:"form.password"}}),n("v-btn",{attrs:{color:"green",disabled:t.disabled,type:"submit"}},[t.loading?n("v-progress-circular",{attrs:{width:7,color:"purple",indeterminate:""}}):t.disabled?n("v-icon",[t._v("cancel")]):n("v-icon",[t._v("done_outline")]),t._v("\n             \n            Войти\n        ")],1),n("v-btn",{staticClass:"ml-2",attrs:{color:"blue"},on:{click:t.toRegHandler}},[n("v-icon",[t._v("assignment")]),t._v(" Зарегистрироваться")],1)],1)],1)},o=[],a=(n("96cf"),n("3b8d")),i=n("cebc"),s=n("2f62"),c={data:function(){return{form:{email:null,password:null},loading:!1}},mounted:function(){this["login/loggedIn"]&&this.$router.push({name:"forum"})},computed:Object(i["a"])({},Object(s["c"])(["login/loggedIn"]),{modalMode:function(){return this.$store.state.toolbar.modalMode},disabled:function(){return!this.form.email||!this.form.password}}),methods:Object(i["a"])({},Object(s["d"])(["toolbar/SET_MODAL_MODE_OFF"]),Object(s["b"])(["login/login"]),{handleSubmit:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.next=3,this["login/login"](this.form);case 3:e=t.sent,e?(n=this.modalMode,n||this.$router.push({name:"forum"}),this["toolbar/SET_MODAL_MODE_OFF"](),snack("Вы успешно вошли","success")):snack("Неверный пароль","error"),this.loading=!1;case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toRegHandler:function(){this.modalMode||this.$router.push({name:"signup"}),this.$emit("toRegMode")}})},u=c,l=n("2877"),f=n("6544"),d=n.n(f),p=n("8336"),m=n("a523"),g=n("4bd4"),h=n("132d"),b=n("490a"),v=n("8654"),_=Object(l["a"])(u,r,o,!1,null,null,null);e["default"]=_.exports;d()(_,{VBtn:p["a"],VContainer:m["a"],VForm:g["a"],VIcon:h["a"],VProgressCircular:b["a"],VTextField:v["a"]})},ba6a:function(t,e,n){"use strict";n.r(e);var r=n("5638"),o=n("bc3a");window.axios=o.create({baseURL:"/api",headers:{}}),axios.interceptors.request.use(function(t){var e=store.state.login.token;return e?t.headers.Authorization="Bearer ".concat(e):"Authorization"in t.headers&&delete t.headers.Authorization,t},function(t){return Promise.reject(t)}),window.Pusher=n("782e"),window.Echo=new r["a"]({broadcaster:"pusher",key:"7b08572e181a32553e9a",cluster:"eu",encrypted:!0,auth:{headers:{Authorization:store.state.login.token}}}),Pusher.logToConsole=!0},c668:function(t,e,n){"use strict";n.r(e);n("6762"),n("2fdb"),n("96cf");var r=n("3b8d"),o=(n("7f7f"),n("673e"),n("cebc"));n("28a5"),n("a481");e["default"]={state:{token:null,tokenValidation:{iss:"http://localhost/api/auth/login"},user:{role:null,name:null},loading:!1},getters:{TOKEN__isValid:function(t,e){var n=function(t){try{return btoa(atob(t)).replace(/=/g,"")==t}catch(e){return!1}},r=function(t){return!!n(t)&&JSON.parse(atob(t))},o=t.token,a="string"==typeof o&&r(o.split(".")[1]);return!!a},TOKEN__isExpired:function(t,e){if(e.TOKEN__parse)return new Date>1e3*e.TOKEN__parse.exp},TOKEN__parse:function(t,e){if(e.TOKEN__isValid){var n=t.token.split(".");return Object(o["a"])({},JSON.parse(atob(n[0])),JSON.parse(atob(n[1])))}},TOKEN__isOK:function(t,e){return!e.TOKEN__isExpired&&e.TOKEN__isValid},id:function(t,e){if(e.TOKEN__parse)return e.TOKEN__parse.sub},isAdmin:function(t,e){return e.TOKEN__isOK},isUser:function(t,e){return e.TOKEN__isOK},username:function(t,e){return t.user.name},loggedIn:function(t,e){return e.isUser||e.isAdmin}},mutations:{toggle:function(t,e){var n=e.prop;t[n]=!t[n]},changeProp:function(t,e){var n=e.prop,r=e.val;t[n]=r},changeObj:function(t,e){var n=e.obj,r=e.prop,o=e.val;t[n][r]=o},SET_LOADING_ON:function(t){t.loading=!0},SET_LOADING_OFF:function(t){t.loading=!1},SET_TOKEN:function(t,e){t.token=e,t.user.role="admin"},DROP_TOKEN:function(t){t.token=null,t.user.role=null}},actions:{login:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.state,r=e.commit,o=e.dispatch,r("SET_LOADING_ON"),t.abrupt("return",axios.post("auth/login",n).then(function(t){return r("SET_TOKEN",t.data.access_token),!0}).catch(function(){return!1}).finally(function(){r("SET_LOADING_OFF"),o("checkPermitionsOnCurrentPath")}));case 3:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),register:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,n){var r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,o=e.dispatch,r("SET_LOADING_ON"),t.abrupt("return",axios.post("auth/signup",n).then(function(t){return r("SET_TOKEN",t.data.access_token),!0}).catch(function(t){return t.response&&t.response.data&&t.response.data.errors}).finally(function(){r("SET_LOADING_OFF"),o("checkPermitionsOnCurrentPath")}));case 3:case"end":return t.stop()}},t)}));function e(e,n){return t.apply(this,arguments)}return e}(),logout:function(t){var e=t.commit,n=t.dispatch;e("DROP_TOKEN"),n("checkPermitionsOnCurrentPath")},checkPermitionsOnCurrentPath:function(t){t.state;var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:router.history.current.path,n=store.state.login.user.role,r=store.getters["toolbar/items"].filter(function(t){return t["to"]==e});return!r.length||(r[0].roles.includes(n)||r[0].roles.includes("*")?(console.warn("есть права"),!0):(console.warn("нет прав!!"),router.push({name:"forum"}),!1))}}}},d533:function(t,e,n){},eb02:function(t,e,n){"use strict";var r=n("2b0e"),o=n("2f62"),a=n("7af2"),i=n("bfa9"),s=new i["a"]({storage:window.localStorage,key:"vuex",reducer:function(t){return{login:t.login}}});r["default"].use(o["a"]);var c=window.store=new o["a"].Store({plugins:[s.plugin],modules:a["default"]});e["a"]=c},ec85:function(t,e,n){"use strict";n.r(e);var r=n("6ee6"),o=(n("96cf"),n("3b8d"));n("22d6");e["default"]={state:{categories:[],loading:!1},getters:{categories:function(t,e,n,r){t.state,t.getters;return n.category.categories},loading:function(t,e,n,r){t.state,t.getters;return n.category.loading},GET_CATEGORIES:function(t){return t.categories}},mutations:{changeProp:function(t,e){var n=e.prop,r=e.val;t[n]=r},SET_LOADING_ON:function(t){t.loading=!0},SET_LOADING_OFF:function(t){t.loading=!1}},actions:{getCategories:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,n("SET_LOADING_ON"),t.abrupt("return",axios.get("category").then(function(t){return n("changeProp",{prop:"categories",val:t.data.data})}).catch(function(t){console.warn("ERR in getCategories => ",t)}).finally(function(t){return n("SET_LOADING_OFF")}));case 3:case"end":return t.stop()}},t)}));function e(e){return t.apply(this,arguments)}return e}(),createCategory:function(t,e){t.dispatch;return axios.post("category",e)},deleteCategory:function(t,e){return Object(r["a"])(t),axios.delete("category/".concat(e))},updateCategory:function(t,e){t.rootState;var n=e.slug,r=e.form;return axios.patch("category/".concat(n),r)}}}},fccd:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.signup(e)}}},[n("v-text-field",{attrs:{label:"Имя",type:"text",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t.errors.name?n("span",{staticClass:"red--text"},[t._v(t._s(t.errors.name[0]))]):t._e(),n("v-text-field",{attrs:{label:"E-mail",type:"email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t.errors.email?n("span",{staticClass:"red--text"}):t._e(),t.errors.email?n("span",{staticClass:"red--text"},[t._v(t._s(t.errors.email[0]))]):t._e(),n("v-text-field",{attrs:{label:"Пароль",type:"password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t.errors.password?n("span",{staticClass:"red--text"},[t._v(t._s(t.errors.password[0]))]):t._e(),n("v-text-field",{attrs:{label:"Подтверждение пароля",type:"password",required:""},model:{value:t.form.password_confirmation,callback:function(e){t.$set(t.form,"password_confirmation",e)},expression:"form.password_confirmation"}}),n("v-btn",{attrs:{disabled:!t.isFormValid,color:"green",type:"submit"}},[n("v-icon",[t._v("done_outline")]),t._v("\n             Зарегистрироваться\n        ")],1),n("v-btn",{staticClass:"ml-2",attrs:{color:"blue"},on:{click:t.toLoginHandler}},[n("v-icon",[t._v("person")]),t._v("Войти")],1)],1)],1)},o=[],a=(n("96cf"),n("3b8d")),i=(n("7f7f"),n("cebc")),s=n("2f62"),c={name:"sign-up",data:function(){return{form:{name:null,email:null,password:null,password_confirmation:null},errors:{}}},mounted:function(){this["login/loggedIn"]&&this.goHome()},computed:Object(i["a"])({},Object(s["e"])(["toolbar/modalMode"]),Object(s["c"])(["login/loggedIn"]),{modalMode:function(){return this.$store.state.toolbar.modalMode},isFormValid:function(){var t=this.form.name,e=this.form.email,n=this.form.password,r=this.form.password_confirmation;return t&&e&&n&&r}}),destroyed:function(){this.$emit("toLoginMode")},methods:Object(i["a"])({},Object(s["d"])(["toolbar/SET_MODAL_MODE_OFF"]),Object(s["b"])(["login/register"]),{goHome:function(){this.$router.push("/forum")},signup:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e,n,r,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.form.password,n=this.form.password_confirmation,e==n){t.next=4;break}return t.abrupt("return",snack("Пароли не совпадают!","error"));case 4:return t.next=6,this["login/register"](this.form);case 6:r=t.sent,1==r?(o=this.modalMode,o||this.goHome(),this["toolbar/SET_MODAL_MODE_OFF"]()):r?(this.errors=r,snack("Возникли ошибки во время регистрации","error")):snack("Возникла сетевая ошибка во время регистрации","error");case 8:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),toLoginHandler:function(){this.modalMode||this.$router.push({name:"login"}),this.$emit("toLoginMode")}})},u=c,l=n("2877"),f=n("6544"),d=n.n(f),p=n("8336"),m=n("a523"),g=n("4bd4"),h=n("132d"),b=n("8654"),v=Object(l["a"])(u,r,o,!1,null,null,null);e["default"]=v.exports;d()(v,{VBtn:p["a"],VContainer:m["a"],VForm:g["a"],VIcon:h["a"],VTextField:b["a"]})},fcf7:function(t,e,n){"use strict";n.r(e),e["default"]={state:{modalMode:!1},mutations:{SET_MODAL_MODE_ON:function(t){t.modalMode=!0},SET_MODAL_MODE_OFF:function(t){t.modalMode=!1}},getters:{items:function(t,e,n,r){t.state,t.getters;var o=r["login/isAdmin"],a=r["login/isUser"],i=o||a;return[{title:"Форум",to:"/forum",slug:"forum",icon:"question_answer",show:!0,roles:["*"]},{title:"Создать тему",to:"/ask",slug:"ask",icon:"plus_one",show:i,roles:["admin","user"]},{title:"Редактор категорий",to:"/edit-categories",slug:"edit-categories",icon:"bookmarks",show:i,roles:["admin"]},{title:"Войти",icon:"person",show:!i,roles:["guest"]},{title:"Выйти",icon:"exit_to_app",show:i,roles:["admin","user"]}]}}}},fe80:function(t,e,n){"use strict";n.r(e);n("22d6"),n("eb02");e["default"]={state:{notifications:{}},getters:{read:function(t,e){var n=t.notifications;return n&&n&&n.read},unread:function(t,e){var n=t.notifications;return n&&n&&n.unread}},mutations:{toggle:function(t,e){var n=e.prop;t[n]=!t[n]},changeProp:function(t,e){var n=e.prop,r=e.val;t[n]=r},changeObj:function(t,e){var n=e.obj,r=e.prop,o=e.val;t[n][r]=o},spliceObj:function(t,e){var n=e.notification;t.notifications.unread.splice(n,1)}},actions:{getNotifications:function(t,e){t.state;var n=t.commit;t.dispatch;return axios.post("notifications").then(function(t){return n("changeProp",{prop:"notifications",val:{read:t.data.read,unread:t.data.unread}}),!0}).catch(function(t){return console.warn("[STORE][getNotifications] err =>",t),!1})},markAsRead:function(t,e){t.state;var n=t.commit;t.dispatch;return axios.post("markAsRead",{id:e.id}).then(function(t){return n("changeObj",{obj:"notifications",prop:"read",val:e}),n("spliceObj",{notification:e}),!0}).catch(function(t){console.warn("[STORE][markAsRead] err =>",t)})}}}}});
//# sourceMappingURL=app.e9c5dae5.js.map