(function(e){function t(t){for(var s,r,u=t[0],c=t[1],l=t[2],p=0,d=[];p<u.length;p++)r=u[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);o&&o(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,u=1;u<i.length;u++){var c=i[u];0!==n[c]&&(s=!1)}s&&(a.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},n={app:0},a=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var o=c;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},1:function(e,t){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Calculator",{on:{clickedEqualTo:e.updateList}}),i("List",{ref:"list"})],1)},a=[],r=(i("96cf"),i("1da1")),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"calcWrapper"}},[i("Display",{attrs:{displayValue:e.dispValue,subDisplayValue:e.subDispValue}}),e._l(e.buttons,(function(t){return i("Button",{key:t.id,style:1===t.id?e.bStyleObjectLarge:e.bStyleObjectRegular,attrs:{bValues:t},on:{"handle-press":e.handlePress},nativeOn:{click:function(t){return e.callApp(t)}}})}))],2)},c=[],l=(i("c975"),i("a9e3"),i("b680"),i("d3b7"),i("acd8"),i("25f0"),i("498a"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"display"}},[i("div",{attrs:{id:"displayText"}},[i("div",{attrs:{id:"leftOf"}},[e._v(e._s(e.displayValue))]),i("div",{attrs:{id:"blinker"}},[i("Blinker")],1)]),i("div",{attrs:{id:"subText"}},[i("p",[e._v(e._s(e.subDisplayValue))])])])}),o=[],p=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"cursory"}})},d=[],h={name:"blinker"},f=h,m=(i("ccb7"),i("2877")),v=Object(m["a"])(f,p,d,!1,null,null,null),b=v.exports,O=i("589d"),g=i.n(O),V={name:"display",props:{displayValue:String,subDisplayValue:String},components:{Blinker:b},mounted:function(){this.onLoady()},methods:{onLoady:function(){g()(document.getElementById("blinker"),{opacity:0},{loop:!0})}}},y=V,k=(i("9bad"),Object(m["a"])(y,l,o,!1,null,null,null)),R=k.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"vuebutton"}},[i("button",{staticClass:"calc-button",class:{opButton:e.bValues.isOp,regButton:e.bValues.isReg},on:{click:e.buttonPressed}},[e._v(" "+e._s(e.bValues.name)+" ")])])},w=[],_={name:"vuebutton",props:{bValues:Object},methods:{buttonPressed:function(e){this.$emit("handle-press",e.target);var t=e.target;g()(t,{"font-size":"40px",opacity:.7},{duration:100,easing:"bounceIn",complete:function(){g()(t,{"font-size":"30px",opacity:1},{duration:100,easing:"bounceOut"})}})}}},j=_,E=(i("8274"),Object(m["a"])(j,x,w,!1,null,null,null)),P=E.exports,D={data:function(){return{dispValue:"0",subDispValue:"",prevValue:"0",prevOp:"=",listval:"",op1:"",op2:"",opInEffect:!1,bStyleObjectRegular:{width:"25%"},bStyleObjectLarge:{width:"49.9%"},buttons:[{id:1,name:"AC",isReg:!0,isOp:!1},{id:2,name:"C",isReg:!0,isOp:!1},{id:3,name:"/",isReg:!1,isOp:!0},{id:4,name:"7",isReg:!0,isOp:!1},{id:5,name:"8",isReg:!0,isOp:!1},{id:6,name:"9",isReg:!0,isOp:!1},{id:7,name:"x",isReg:!1,isOp:!0},{id:8,name:"4",isReg:!0,isOp:!1},{id:9,name:"5",isReg:!0,isOp:!1},{id:10,name:"6",isReg:!0,isOp:!1},{id:11,name:"+",isReg:!1,isOp:!0},{id:12,name:"1",isReg:!0,isOp:!1},{id:13,name:"2",isReg:!0,isOp:!1},{id:14,name:"3",isReg:!0,isOp:!1},{id:15,name:"-",isReg:!1,isOp:!0},{id:16,name:"0",isReg:!0,isOp:!1},{id:17,name:".",isReg:!0,isOp:!1},{id:18,name:"±",isReg:!0,isOp:!1},{id:19,name:"=",isReg:!1,isOp:!0}]}},components:{Display:R,Button:P},methods:{handlePress:function(e){var t=e.textContent.trim();switch(t){case"AC":this.clearAll();break;case"C":this.clearDisplay();break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":this.numberPressed(t);break;case"+":this.computeOp("+");break;case"-":this.computeOp("-");break;case"/":this.computeOp("/");break;case"x":this.computeOp("x");break;case"=":this.equalPressed();break;case".":this.addPoint();break;case"±":this.negateValue();break;default:alert("KEY ERROR: in default")}},negateValue:function(){"0"!=this.dispValue&&(this.dispValue.indexOf("-")<0?this.dispValue="-"+this.dispValue:this.dispValue=this.dispValue.substring(1))},addPoint:function(){this.dispValue.indexOf(".")<0&&(this.dispValue+=".")},equalPressed:function(){try{this.computeEqual(this.prevValue,this.dispValue,this.prevOp),this.subDispValue=""}catch(e){alert(e)}},numberPressed:function(e){this.opInEffect=!1,"0"===this.dispValue?this.dispValue=e:this.dispValue.length>=15?alert("KEY ERROR: Display limit reached"):this.dispValue+=e},computePlus:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"+")},computeSub:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"-")},computeDiv:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"/")},computeMult:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"x")},computeOp:function(e){if(!this.opInEffect)try{this.computeEqual(this.prevValue,this.dispValue,this.prevOp),this.prevValue=this.dispValue,this.dispValue="0",this.prevOp=e,this.subDispValue=this.prevValue.toString()+" "+this.prevOp+"    ",this.opInEffect=!0}catch(t){alert(t)}},computeEqual:function(e,t,i){this.listval="";var s=parseFloat(e);this.listval=s,this.listval+=i;var n=parseFloat(t);this.listval+=n;var a=0;if(this.op1=s,this.op2=n,"+"===i)a=s+n;else if("-"===i)a=s-n;else if("x"===i)a=s*n;else if("/"===i){if(0==n)throw"MATH ERROR: Cannot divide by 0";a=s/n}else a=n;var r=a.toString();r.length>15&&(a=Number(r).toFixed(4),r=a),this.listval+="=",this.listval+=a.toString(),this.dispValue=r,this.prevValue="0",this.prevOp="="},clearDisplay:function(){this.dispValue="0"},clearAll:function(){this.clearDisplay(),this.prevValue="0",this.prevOp="=",this.subDispValue="",this.opInEffect=!1},callApp:function(){var e=this.listval;this.listval="",""!=this.op1&&""!=this.op2&&(this.op1="",this.op2="",console.log(e),this.$emit("clickedEqualTo",e))}}},S=D,$=(i("9041"),Object(m["a"])(S,u,c,!1,null,null,null)),C=$.exports,L=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e._m(0),i("div",[i("ul",e._l(e.items,(function(t){return i("li",{key:t.index,attrs:{id:"listWrapper"}},[e._v(e._s(t.expression))])})),0)])])},T=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("p",[e._v("Recent 10 Calculations")])])}],q=i("8055"),A=i.n(q),B={data:function(){return{items:[],socket:A()("https://still-river-21571.herokuapp.com",{transport:["websocket"]})}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=this,this.socket.on("newupdatedlist",Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.axios.get("https://still-river-21571.herokuapp.com/calculations").then(function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(i){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.items=i.data;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))));case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},I=B,M=(i("f62b"),Object(m["a"])(I,L,T,!1,null,null,null)),F=M.exports,z={name:"app",components:{Calculator:C,List:F},data:function(){return{socket:A()("https://still-river-21571.herokuapp.com",{transport:["websocket"]})}},created:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.socket.emit("updatelist");case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),methods:{updateList:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=[],s=this,console.log("updateList"),console.log(t),""==t){e.next=10;break}return e.next=7,this.axios.post("https://still-river-21571.herokuapp.com/calculations",{expression:t}).then((function(e){})).catch((function(e){console.log(e)}));case 7:return e.next=9,this.socket.emit("updatelist");case 9:this.socket.on("newupdatedlist",Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.axios.get("https://still-river-21571.herokuapp.com/calculations").then((function(e){i=e.data})).catch((function(e){console.log(e)}));case 2:s.$refs.list.items=i;case 3:case"end":return e.stop()}}),e)}))));case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()}},J=z,K=(i("034f"),Object(m["a"])(J,n,a,!1,null,null,null)),W=K.exports,Y=i("2106"),H=i.n(Y),N=i("bc3a"),G=i.n(N);s["a"].config.productionTip=!1,s["a"].use(H.a,G.a),new s["a"]({render:function(e){return e(W)}}).$mount("#app")},"65da":function(e,t,i){},8274:function(e,t,i){"use strict";i("d277")},"85ec":function(e,t,i){},"8a9c":function(e,t,i){},9041:function(e,t,i){"use strict";i("8a9c")},"9bad":function(e,t,i){"use strict";i("ce3f")},"9cf9":function(e,t,i){},ccb7:function(e,t,i){"use strict";i("9cf9")},ce3f:function(e,t,i){},d277:function(e,t,i){},f62b:function(e,t,i){"use strict";i("65da")}});
//# sourceMappingURL=app.82970813.js.map