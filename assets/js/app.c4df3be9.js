(function(e){function t(t){for(var a,i,c=t[0],o=t[1],l=t[2],d=0,f=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},s=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},2880:function(e,t,n){"use strict";var a=n("c18c"),r=n.n(a);r.a},4678:function(e,t,n){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=s(e);return n(t)}function s(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id="4678"},7086:function(e,t,n){"use strict";var a=n("b81b"),r=n.n(a);r.a},"78a7":function(e,t,n){},a0f3:function(e,t,n){},b81b:function(e,t,n){},bb89:function(e,t,n){"use strict";var a=n("f656"),r=n.n(a);r.a},c18c:function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("2f62"),s=n("c1df"),i=n.n(s),c=i()().format("YYYY-MM-DD"),o={start_day:c,pass_code:"",user1:{name:"Lover 1",avatar:new Blob,gender:1,birthday:"",color:"#F06292"},user2:{name:"Lover 2",avatar:new Blob,gender:2,birthday:"",color:"#F06292"}},l=o,u=(n("b0c0"),{SET_AVATAR:function(e,t){"user1"==t.name&&(e.user1.avatar=t.file),"user2"==t.name&&(e.user2.avatar=t.file)},SET_NAME:function(e,t){"user1"==t.name&&(e.user1.name=t.value),"user2"==t.name&&(e.user2.name=t.value)},SET_COLOR:function(e,t){"user1"==t.name&&(e.user1.color=t.value),"user2"==t.name&&(e.user2.color=t.value)},SET_DATE:function(e,t){e.start_day=t},SET_PASS_CODE:function(e,t){4===t.length&&(e.pass_code=t)},SET_USER_GENDER:function(e,t){"user1"==t.name&&(e.user1.gender=t.value),"user2"==t.name&&(e.user2.gender=t.value)},SET_BIRTHDAY:function(e,t){"user1"==t.name&&(e.user1.birthday=t.value),"user2"==t.name&&(e.user2.birthday=t.value)}}),d=u,f=n("bfa9"),v=n("a002"),m=n.n(v),b=m.a.createInstance({name:"been-together",storeName:"store"}),h=b,p=new f["a"]({storage:h,asyncStorage:!0}),j=p;a["a"].use(r["a"]);var g=new r["a"].Store({state:l,mutations:d,plugins:[j.plugin]}),y=n("f309");a["a"].use(y["a"]);var k=new y["a"]({icons:{iconfont:"mdi"}}),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n(e.screenName,{tag:"component"})],1)},w=[],x=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("96cf"),n("1da1")),C=n("ade3");function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){Object(C["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={data:function(){return{startTime:Date.now(),screen:"splash"}},computed:S({},Object(r["b"])({hasPassCode:function(e){return Boolean(e.pass_code)}}),{screenName:function(){return this.screen+"-screen"}}),methods:{setNextScreen:function(){this.hasPassCode?this.screen="locked":this.screen="welcome"}},mounted:function(){var e=Object(x["a"])(regeneratorRuntime.mark((function e(){var t=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.startTime=Date.now(),e.next=3,this.$store.restored;case 3:setTimeout((function(){t.setNextScreen()}),Math.max(0,Date.now()-this.startTime+1e3));case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},D=E,N=n("2877"),P=n("6544"),T=n.n(P),z=n("7496"),B=Object(N["a"])(D,_,w,!1,null,null,null),V=B.exports;T()(B,{VApp:z["a"]});n("78a7");var $=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen",staticStyle:{"background-image":"url(https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?w=668)"}})},M=[],A={name:"SplashScreen"},R=A,I=Object(N["a"])(R,$,M,!1,null,null,null),L=I.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen screen-locked"},[e._m(0),n("div",{staticClass:"text"},[e._v("Input Pass Code")]),n("pin-display",{attrs:{value:e.pin}}),n("pin-keyboard",{attrs:{max:4},model:{value:e.pin,callback:function(t){e.pin=t},expression:"pin"}})],1)},Y=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"logo"},[a("img",{attrs:{src:n("e347"),alt:"Been Together logo"}})])}],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pin-display"},e._l(e.icons,(function(t,a){return n("v-icon",{key:a,attrs:{color:"#00a2ff"}},[e._v(e._s(t))])})),1)},q=[],G=(n("d81d"),n("ac1f"),n("843c"),n("1276"),{name:"PinDisplay",props:{value:{type:String}},computed:{icons:function(){return this.value.padEnd(4,"*").split("").map((function(e){return"*"==e?"mdi-checkbox-blank-circle-outline":"mdi-checkbox-blank-circle"}))}}}),H=G,K=(n("e12f"),n("132d")),J=Object(N["a"])(H,F,q,!1,null,null,null),Z=J.exports;T()(J,{VIcon:K["a"]});var W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pin-keyboard"},[n("div",{staticClass:"kb-row"},[n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("1")}}},[n("v-icon",[e._v("mdi-numeric-1")])],1)],1),n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("2")}}},[n("v-icon",[e._v("mdi-numeric-2")])],1)],1),n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("3")}}},[n("v-icon",[e._v("mdi-numeric-3")])],1)],1)]),n("div",{staticClass:"kb-row"},[n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("4")}}},[n("v-icon",[e._v("mdi-numeric-4")])],1)],1),n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("5")}}},[n("v-icon",[e._v("mdi-numeric-5")])],1)],1),n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("6")}}},[n("v-icon",[e._v("mdi-numeric-6")])],1)],1)]),n("div",{staticClass:"kb-row"},[n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("7")}}},[n("v-icon",[e._v("mdi-numeric-7")])],1)],1),n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("8")}}},[n("v-icon",[e._v("mdi-numeric-8")])],1)],1),n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("9")}}},[n("v-icon",[e._v("mdi-numeric-9")])],1)],1)]),n("div",{staticClass:"kb-row"},[n("div",{staticClass:"num"}),n("div",{staticClass:"num"},[n("v-btn",{attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:function(t){return e.input("0")}}},[n("v-icon",[e._v("mdi-numeric-0")])],1)],1),n("div",{staticClass:"num"},[n("v-fade-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.value.length,expression:"value.length"}],attrs:{icon:"","x-large":"",color:"#008ee0"},on:{click:e.backspace}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-backspace")])],1)],1)],1)])])},Q=[],X=(n("fb6a"),n("a9e3"),{name:"PinKeyboard",props:{value:{type:String,default:""},max:{type:Number,default:4}},methods:{input:function(e){this.value.length<this.max&&this.$emit("input",this.value+e)},backspace:function(){this.value.length&&this.$emit("input",this.value.slice(0,this.value.length-1))}}}),ee=X,te=(n("2880"),n("8336")),ne=n("0789"),ae=Object(N["a"])(ee,W,Q,!1,null,null,null),re=ae.exports;T()(ae,{VBtn:te["a"],VFadeTransition:ne["b"],VIcon:K["a"]});var se={name:"LockedScreen",components:{PinKeyboard:re,PinDisplay:Z},data:function(){return{pin:""}},methods:{checkPin:function(){var e=this;setTimeout((function(){e.pin=""}),400)}},watch:{pin:function(e){4==e.length&&this.checkPin(e)}}},ie=se,ce=Object(N["a"])(ie,U,Y,!1,null,null,null),oe=ce.exports,le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"screen screen-welcome",style:e.objStyles},[n("div",{staticStyle:{margin:"50px 0"}},[n("count-circle",{attrs:{days:e.days},on:{click:function(t){e.modal=!0}}}),n("v-dialog",{ref:"dialog",attrs:{persistent:"",width:"290px"},model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-date-picker",{attrs:{scrollable:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.setDate(e.date)}}},[e._v("OK")])],1)],1)],1),n("div",{staticClass:"text-center"},[n("user-circle",{attrs:{user:e.user1,name:"user1"}}),n("user-circle",{attrs:{user:e.user2,name:"user2"}})],1)])},ue=[],de=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"water-jar",on:{click:function(t){return e.$emit("click")}}},[n("div",{staticClass:"water-filling"},[n("div",[e._v("In love")]),n("div",{staticClass:"days"},[e._v(e._s(e.days))]),n("div",[e._v("Days")])]),n("div",{staticClass:"water",style:e.styleObj,attrs:{id:"water"}},[n("svg",{staticClass:"water_wave water_wave_back",attrs:{viewBox:"0 0 560 20"}},[n("use",{attrs:{"xlink:href":"#wave"}})]),n("svg",{staticClass:"water_wave water_wave_front",attrs:{viewBox:"0 0 560 20"}},[n("use",{attrs:{"xlink:href":"#wave"}})])]),n("svg",{staticStyle:{display:"none"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px"}},[n("symbol",{attrs:{id:"wave"}},[n("path",{attrs:{d:"M420,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C514,6.5,518,4.7,528.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H420z"}}),n("path",{attrs:{d:"M420,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C326,6.5,322,4.7,311.5,2.7C304.3,1.4,293.6-0.1,280,0c0,0,0,0,0,0v20H420z"}}),n("path",{attrs:{d:"M140,20c21.5-0.4,38.8-2.5,51.1-4.5c13.4-2.2,26.5-5.2,27.3-5.4C234,6.5,238,4.7,248.5,2.7c7.1-1.3,17.9-2.8,31.5-2.7c0,0,0,0,0,0v20H140z"}}),n("path",{attrs:{d:"M140,20c-21.5-0.4-38.8-2.5-51.1-4.5c-13.4-2.2-26.5-5.2-27.3-5.4C46,6.5,42,4.7,31.5,2.7C24.3,1.4,13.6-0.1,0,0c0,0,0,0,0,0l0,20H140z"}})])])])},fe=[],ve={props:{days:{type:Number,default:0}},computed:{styleObj:function(){var e=Math.max(10,100-Math.floor(this.days/365));return{transform:"translate(0, "+e+"%)"}}}},me=ve,be=(n("bb89"),Object(N["a"])(me,de,fe,!1,null,null,null)),he=be.exports,pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user-circle",on:{click:function(t){e.menu=!0}}},[n("div",{staticClass:"avatar",style:e.objStyles},[n("input",{ref:"input",staticStyle:{display:"hidden"},attrs:{type:"file",accept:"image/*"},on:{change:e.onFileChange}}),e.user.birthday?n("div",{staticClass:"zodiac-icon",style:{borderColor:e.user.color}},[n("v-icon",{attrs:{small:""}},[e._v("mdi-zodiac-"+e._s(e.getZodiacName(e.user.birthday)))])],1):e._e()]),n("div",[n("span",{staticClass:"name"},[e._v(e._s(e.user.name||"Lover"))])]),n("div",{staticClass:"gender"},[1==e.user.gender?n("v-icon",{attrs:{small:"",color:"#00b4d2"}},[e._v("mdi-gender-male")]):e._e(),2==e.user.gender?n("v-icon",{attrs:{small:"",color:"#ff48ac"}},[e._v("mdi-gender-female")]):e._e(),n("span",[e._v(e._s(e.user.birthday))])],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogName,callback:function(t){e.dialogName=t},expression:"dialogName"}},[n("v-card",[n("v-card-title",[e._v("Edit name")]),n("v-card-text",[n("v-text-field",{model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialogName=!1}}},[e._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveName}},[e._v("Save")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogColor,callback:function(t){e.dialogColor=t},expression:"dialogColor"}},[n("v-card",[n("v-card-title",[e._v("Select Color")]),n("v-card-text",[n("v-color-picker",{attrs:{flat:"",showSwatches:"","hide-inputs":"","hide-mode-switch":"","hide-canvas":"",mode:"hex"},model:{value:e.userColor,callback:function(t){e.userColor=t},expression:"userColor"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialogColor=!1}}},[e._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveColor}},[e._v("Save")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"290"},model:{value:e.dialogBirthday,callback:function(t){e.dialogBirthday=t},expression:"dialogBirthday"}},[n("v-date-picker",{model:{value:e.userBirthday,callback:function(t){e.userBirthday=t},expression:"userBirthday"}},[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialogBirthday=!1}}},[e._v("Close")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.saveBirthday}},[e._v("Save")])],1)],1),n("v-bottom-sheet",{model:{value:e.menu,callback:function(t){e.menu=t},expression:"menu"}},[n("v-list",{attrs:{dense:""}},[n("v-list-item",{attrs:{link:""},on:{click:e.selectImage}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-account-circle-outline")])],1),n("v-list-item-content",[e._v("Select avatar")])],1),n("v-list-item",{attrs:{link:""},on:{click:e.showDialogName}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-textbox")])],1),n("v-list-item-content",[e._v("Edit nick name")])],1),n("v-list-item",{attrs:{link:""},on:{click:e.showDialogColor}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-eyedropper-variant")])],1),n("v-list-item-content",[e._v("Select border color")])],1),n("v-list-item",{attrs:{link:""},on:{click:e.showDialogBirthday}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-cake")])],1),n("v-list-item-content",[e._v("Select birthday")])],1),n("v-list-item",{attrs:{link:""},on:{click:e.changeUserGender}},[n("v-list-item-icon",[n("v-icon",[e._v("mdi-gender-male-female")])],1),n("v-list-item-content",[e._v("Change gender")])],1)],1)],1)],1)},je=[];n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");function ge(e){"string"==typeof e&&(e=new Date(e));var t=e.getMonth()+1,n=e.getDate();return 1==t&&n<=20||12==t&&n>=22?"capricorn":1==t&&n>=21||2==t&&n<=18?"aquarius":2==t&&n>=19||3==t&&n<=20?"pisces":3==t&&n>=21||4==t&&n<=20?"aries":4==t&&n>=21||5==t&&n<=20?"taurus":5==t&&n>=21||6==t&&n<=20?"gemini":6==t&&n>=22||7==t&&n<=22?"cancer":7==t&&n>=23||8==t&&n<=23?"leo":8==t&&n>=24||9==t&&n<=23?"virgo":9==t&&n>=24||10==t&&n<=23?"libra":10==t&&n>=24||11==t&&n<=22?"scorpio":11==t&&n>=23||12==t&&n<=21?"sagittarius":void 0}var ye={props:{user:{type:Object,required:!0},name:{type:String,required:!0}},data:function(){return{menu:!1,dialogName:!1,dialogColor:!1,dialogBirthday:!1,avatar:"https://c7.uihere.com/files/981/1001/235/q-version-cartoon-avatar-comics-significant-other-hand-painted-cartoon-cute-boy.jpg",userName:"",userColor:"",userBirthday:null}},computed:{objStyles:function(){var e={};return e.backgroundImage="url("+this.avatar+")",e.borderColor=this.user.color,e}},mounted:function(){this.user.avatar.size&&(this.avatar=URL.createObjectURL(this.user.avatar))},methods:{getZodiacName:ge,selectImage:function(){this.$refs.input.click()},onFileChange:function(){this.$refs.input.files.length&&(this.$store.commit("SET_AVATAR",{name:this.name,file:this.$refs.input.files[0]}),this.menu=!1)},showDialogName:function(){this.userName=this.user.name,this.dialogName=!0,this.menu=!1},showDialogColor:function(){this.userColor=this.user.color,this.dialogColor=!0,this.menu=!1},showDialogBirthday:function(){this.dialogBirthday=!0,this.userBirthday=this.user.birthday,this.menu=!1},changeUserGender:function(){1==this.user.gender?this.$store.commit("SET_USER_GENDER",{name:this.name,value:2}):2==this.user.gender&&this.$store.commit("SET_USER_GENDER",{name:this.name,value:1}),this.menu=!1},saveName:function(){this.$store.commit("SET_NAME",{value:this.userName,name:this.name}),this.dialogName=!1},saveColor:function(){this.$store.commit("SET_COLOR",{value:this.userColor,name:this.name}),this.dialogColor=!1},saveBirthday:function(){this.$store.commit("SET_BIRTHDAY",{name:this.name,value:this.userBirthday}),this.dialogBirthday=!1}},watch:{"user.avatar":function(e){e.size&&(this.avatar=URL.createObjectURL(e))}}},ke=ye,_e=(n("7086"),n("288c")),we=n("b0af"),xe=n("99d9"),Ce=n("03a4"),Oe=n("2e4b"),Se=n("169a"),Ee=n("8860"),De=n("da13"),Ne=n("5d23"),Pe=n("34c3"),Te=n("2fa4"),ze=n("8654"),Be=Object(N["a"])(ke,pe,je,!1,null,null,null),Ve=Be.exports;function $e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$e(Object(n),!0).forEach((function(t){Object(C["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$e(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}T()(Be,{VBottomSheet:_e["a"],VBtn:te["a"],VCard:we["a"],VCardActions:xe["a"],VCardText:xe["b"],VCardTitle:xe["c"],VColorPicker:Ce["a"],VDatePicker:Oe["a"],VDialog:Se["a"],VIcon:K["a"],VList:Ee["a"],VListItem:De["a"],VListItemContent:Ne["a"],VListItemIcon:Pe["a"],VSpacer:Te["a"],VTextField:ze["a"]});var Ae={name:"WelcomeScreen",components:{CountCircle:he,UserCircle:Ve},data:function(){return{modal:!1,date:""}},created:function(){this.date=i()(this.start_day).format("YYYY-MM-DD")},computed:Me({},Object(r["b"])({start_day:function(e){return e.start_day},user1:function(e){return e.user1},user2:function(e){return e.user2}}),{days:function(){return i()().diff(i()(this.start_day),"days")+1},objStyles:function(){var e={backgroundImage:"url(https://images.unsplash.com/photo-1517030330234-94c4fb948ebc?w=668)"};return e}}),methods:{setDate:function(e){this.$store.commit("SET_DATE",e),this.modal=!1}}},Re=Ae,Ie=Object(N["a"])(Re,le,ue,!1,null,null,null),Le=Ie.exports;T()(Ie,{VBtn:te["a"],VDatePicker:Oe["a"],VDialog:Se["a"],VSpacer:Te["a"]}),a["a"].component(oe.name,oe),a["a"].component(L.name,L),a["a"].component(Le.name,Le);var Ue=n("9483");Object(Ue["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,new a["a"]({store:g,vuetify:k,render:function(e){return e(V)}}).$mount("#app")},e12f:function(e,t,n){"use strict";var a=n("a0f3"),r=n.n(a);r.a},e347:function(e,t,n){e.exports=n.p+"assets/img/logo.c084caf6.svg"},f656:function(e,t,n){}});
//# sourceMappingURL=app.c4df3be9.js.map