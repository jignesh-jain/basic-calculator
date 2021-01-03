(function(e){function t(t){for(var n,r,u=t[0],o=t[1],l=t[2],p=0,d=[];p<u.length;p++)r=u[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&d.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,u=1;u<i.length;u++){var o=i[u];0!==s[o]&&(n=!1)}n&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},s={app:0},a=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var c=o;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},1:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Calculator",{on:{clickedEqualTo:e.updateList}}),i("List",{ref:"list"})],1)},a=[],r=(i("96cf"),i("1da1")),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"calcWrapper"}},[i("Display",{attrs:{displayValue:e.dispValue,subDisplayValue:e.subDispValue}}),e._l(e.buttons,(function(t){return i("Button",{key:t.id,style:1===t.id?e.bStyleObjectLarge:e.bStyleObjectRegular,attrs:{bValues:t},on:{"handle-press":e.handlePress},nativeOn:{click:function(t){return e.callApp(t)}}})}))],2)},o=[],l=(i("c975"),i("d3b7"),i("acd8"),i("25f0"),i("498a"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"display"}},[i("div",{attrs:{id:"displayText"}},[i("div",{attrs:{id:"leftOf"}},[e._v(e._s(e.displayValue))]),i("div",{attrs:{id:"blinker"}},[i("Blinker")],1)]),i("div",{attrs:{id:"subText"}},[i("p",[e._v(e._s(e.subDisplayValue))])])])}),c=[],p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"cursory"}})},d=[],h={name:"blinker"},f=h,m=(i("ccb7"),i("2877")),v=Object(m["a"])(f,p,d,!1,null,null,null),b=v.exports,g=i("589d"),O=i.n(g),V={name:"display",props:{displayValue:String,subDisplayValue:String},components:{Blinker:b},mounted:function(){this.onLoady()},methods:{onLoady:function(){O()(document.getElementById("blinker"),{opacity:0},{loop:!0})}}},y=V,R=(i("9bad"),Object(m["a"])(y,l,c,!1,null,null,null)),k=R.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"vuebutton"}},[i("button",{staticClass:"calc-button",class:{opButton:e.bValues.isOp,regButton:e.bValues.isReg},on:{click:e.buttonPressed}},[e._v(" "+e._s(e.bValues.name)+" ")])])},w=[],_={name:"vuebutton",props:{bValues:Object},methods:{buttonPressed:function(e){this.$emit("handle-press",e.target);var t=e.target;O()(t,{"font-size":"40px",opacity:.7},{duration:100,easing:"bounceIn",complete:function(){O()(t,{"font-size":"30px",opacity:1},{duration:100,easing:"bounceOut"})}})}}},j=_,E=(i("8274"),Object(m["a"])(j,x,w,!1,null,null,null)),P=E.exports,D={data:function(){return{dispValue:"0",subDispValue:"",prevValue:"0",prevOp:"=",listval:"",opInEffect:!1,bStyleObjectRegular:{width:"25%"},bStyleObjectLarge:{width:"49.9%"},buttons:[{id:1,name:"AC",isReg:!0,isOp:!1},{id:2,name:"C",isReg:!0,isOp:!1},{id:3,name:"/",isReg:!1,isOp:!0},{id:4,name:"7",isReg:!0,isOp:!1},{id:5,name:"8",isReg:!0,isOp:!1},{id:6,name:"9",isReg:!0,isOp:!1},{id:7,name:"x",isReg:!1,isOp:!0},{id:8,name:"4",isReg:!0,isOp:!1},{id:9,name:"5",isReg:!0,isOp:!1},{id:10,name:"6",isReg:!0,isOp:!1},{id:11,name:"+",isReg:!1,isOp:!0},{id:12,name:"1",isReg:!0,isOp:!1},{id:13,name:"2",isReg:!0,isOp:!1},{id:14,name:"3",isReg:!0,isOp:!1},{id:15,name:"-",isReg:!1,isOp:!0},{id:16,name:"0",isReg:!0,isOp:!1},{id:17,name:".",isReg:!0,isOp:!1},{id:18,name:"±",isReg:!0,isOp:!1},{id:19,name:"=",isReg:!1,isOp:!0}]}},components:{Display:k,Button:P},methods:{handlePress:function(e){var t=e.textContent.trim();switch(t){case"AC":this.clearAll();break;case"C":this.clearDisplay();break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":this.numberPressed(t);break;case"+":this.computeOp("+");break;case"-":this.computeOp("-");break;case"/":this.computeOp("/");break;case"x":this.computeOp("x");break;case"=":this.equalPressed();break;case".":this.addPoint();break;case"±":this.negateValue();break;default:alert("KEY ERROR: in default")}},negateValue:function(){"0"!=this.dispValue&&(this.dispValue.indexOf("-")<0?this.dispValue="-"+this.dispValue:this.dispValue=this.dispValue.substring(1))},addPoint:function(){this.dispValue.indexOf(".")<0&&(this.dispValue+=".")},equalPressed:function(){try{this.computeEqual(this.prevValue,this.dispValue,this.prevOp),this.subDispValue=""}catch(e){alert(e)}},numberPressed:function(e){this.opInEffect=!1,"0"===this.dispValue?this.dispValue=e:this.dispValue.length>=15?alert("KEY ERROR: Display limit reached"):this.dispValue+=e},computePlus:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"+")},computeSub:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"-")},computeDiv:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"/")},computeMult:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"x")},computeOp:function(e){if(!this.opInEffect)try{this.computeEqual(this.prevValue,this.dispValue,this.prevOp),this.prevValue=this.dispValue,this.dispValue="0",this.prevOp=e,this.subDispValue=this.prevValue.toString()+" "+this.prevOp+"    ",this.opInEffect=!0}catch(t){alert(t)}},computeEqual:function(e,t,i){this.listval="";var n=parseFloat(e);this.listval=n,this.listval+=i;var s=parseFloat(t);this.listval+=s;var a=0;if("+"===i)a=n+s;else if("-"===i)a=n-s;else if("x"===i)a=n*s;else if("/"===i){if(0==s)throw"MATH ERROR: Cannot divide by 0";a=n/s}else a=s;var r=a.toString();if(r.length>=15)throw"DISPLAY ERROR: Computation result will not fit on display. Use C or AC to perform a simpler computation.";this.listval+="=",this.listval+=a,this.dispValue=r,this.prevValue="0",this.prevOp="="},clearDisplay:function(){this.dispValue="0"},clearAll:function(){this.clearDisplay(),this.prevValue="0",this.prevOp="=",this.subDispValue="",this.opInEffect=!1},callApp:function(){var e=this.listval;this.listval="","="===this.prevOp&&this.$emit("clickedEqualTo",e)}}},S=D,C=(i("9041"),Object(m["a"])(S,u,o,!1,null,null,null)),$=C.exports,A=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ul",e._l(e.items,(function(t){return i("li",{key:t.index,attrs:{id:"listWrapper"}},[e._v(" "+e._s(t.expression)+" ")])})),0)])},L=[],I=i("8055"),T=i.n(I),q={data:function(){return{items:[],socket:T()("https://still-river-21571.herokuapp.com",{transport:["websocket"]})}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this,this.socket.on("newupdatedlist",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(i),e.next=3,t.axios.get("https://still-river-21571.herokuapp.com/calculations").then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(i),t.items=i.data;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},B=q,M=(i("f62b"),Object(m["a"])(B,A,L,!1,null,null,null)),H=M.exports,Y={name:"app",components:{Calculator:$,List:H},data:function(){return{socket:T()("https://still-river-21571.herokuapp.com",{transport:["websocket"]})}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="Hello from created",e.next=3,this.socket.emit("updatelist",t);case 3:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{updateList:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var i,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=[],n=this,""==t){e.next=9;break}return e.next=5,this.axios.post("https://still-river-21571.herokuapp.com/calculations",{expression:t}).then((function(e){console.log("Post"),console.log(e)})).catch((function(e){console.log(e)}));case 5:return s="Hello from client",e.next=8,this.socket.emit("updatelist",s);case 8:this.socket.on("newupdatedlist",function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log("Reached client"),console.log(t),e.next=4,n.axios.get("https://still-river-21571.herokuapp.com/calculations").then((function(e){console.log("Get"),console.log(e.data),i=e.data})).catch((function(e){console.log(e)}));case 4:n.$refs.list.items=i;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},z=Y,F=(i("034f"),Object(m["a"])(z,s,a,!1,null,null,null)),J=F.exports,K=i("2106"),W=i.n(K),G=i("bc3a"),U=i.n(G);n["a"].config.productionTip=!1,n["a"].use(W.a,U.a),new n["a"]({render:function(e){return e(J)}}).$mount("#app")},"65da":function(e,t,i){},8274:function(e,t,i){"use strict";i("d277")},"85ec":function(e,t,i){},"8a9c":function(e,t,i){},9041:function(e,t,i){"use strict";i("8a9c")},"9bad":function(e,t,i){"use strict";i("ce3f")},"9cf9":function(e,t,i){},ccb7:function(e,t,i){"use strict";i("9cf9")},ce3f:function(e,t,i){},d277:function(e,t,i){},f62b:function(e,t,i){"use strict";i("65da")}});
//# sourceMappingURL=app.1ffdfb4e.js.map