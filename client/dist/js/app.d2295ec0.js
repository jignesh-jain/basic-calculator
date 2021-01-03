(function(e){function t(t){for(var s,l,u=t[0],r=t[1],o=t[2],p=0,d=[];p<u.length;p++)l=u[p],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&d.push(n[l][0]),n[l]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);c&&c(t);while(d.length)d.shift()();return a.push.apply(a,o||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],s=!0,u=1;u<i.length;u++){var r=i[u];0!==n[r]&&(s=!1)}s&&(a.splice(t--,1),e=l(l.s=i[0]))}return e}var s={},n={app:0},a=[];function l(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,l),i.l=!0,i.exports}l.m=e,l.c=s,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(i,s,function(t){return e[t]}.bind(null,s));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],r=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var c=r;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";var s=i("85ec"),n=i.n(s);n.a},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("Calculator",{on:{clickedEqualTo:e.updateList}}),i("List",{ref:"list"})],1)},a=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"calcWrapper"}},[i("Display",{attrs:{displayValue:e.dispValue,subDisplayValue:e.subDispValue}}),e._l(e.buttons,(function(t){return i("Button",{key:t.id,style:1===t.id?e.bStyleObjectLarge:e.bStyleObjectRegular,attrs:{bValues:t},on:{"handle-press":e.handlePress},nativeOn:{click:function(t){return e.callApp(t)}}})}))],2)},u=[],r=(i("c975"),i("d3b7"),i("acd8"),i("25f0"),i("498a"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"display"}},[i("div",{attrs:{id:"displayText"}},[i("div",{attrs:{id:"leftOf"}},[e._v(e._s(e.displayValue))]),i("div",{attrs:{id:"blinker"}},[i("Blinker")],1)]),i("div",{attrs:{id:"subText"}},[i("p",[e._v(e._s(e.subDisplayValue))])])])}),o=[],c=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"cursory"}})},p=[],d={name:"blinker"},h=d,f=(i("ccb7"),i("2877")),b=Object(f["a"])(h,c,p,!1,null,null,null),v=b.exports,m=i("589d"),O=i.n(m),V={name:"display",props:{displayValue:String,subDisplayValue:String},components:{Blinker:v},mounted:function(){this.onLoady()},methods:{onLoady:function(){O()(document.getElementById("blinker"),{opacity:0},{loop:!0})}}},g=V,y=(i("9bad"),Object(f["a"])(g,r,o,!1,null,null,null)),R=y.exports,x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"vuebutton"}},[i("button",{staticClass:"calc-button",class:{opButton:e.bValues.isOp,regButton:e.bValues.isReg},on:{click:e.buttonPressed}},[e._v(" "+e._s(e.bValues.name)+" ")])])},_=[],k={name:"vuebutton",props:{bValues:Object},methods:{buttonPressed:function(e){this.$emit("handle-press",e.target);var t=e.target;O()(t,{"font-size":"40px",opacity:.7},{duration:100,easing:"bounceIn",complete:function(){O()(t,{"font-size":"30px",opacity:1},{duration:100,easing:"bounceOut"})}})}}},E=k,j=(i("8274"),Object(f["a"])(E,x,_,!1,null,null,null)),P=j.exports,w={data:function(){return{dispValue:"0",subDispValue:"",prevValue:"0",prevOp:"=",listval:"",opInEffect:!1,bStyleObjectRegular:{width:"25%"},bStyleObjectLarge:{width:"49.9%"},buttons:[{id:1,name:"AC",isReg:!0,isOp:!1},{id:2,name:"C",isReg:!0,isOp:!1},{id:3,name:"/",isReg:!1,isOp:!0},{id:4,name:"7",isReg:!0,isOp:!1},{id:5,name:"8",isReg:!0,isOp:!1},{id:6,name:"9",isReg:!0,isOp:!1},{id:7,name:"x",isReg:!1,isOp:!0},{id:8,name:"4",isReg:!0,isOp:!1},{id:9,name:"5",isReg:!0,isOp:!1},{id:10,name:"6",isReg:!0,isOp:!1},{id:11,name:"+",isReg:!1,isOp:!0},{id:12,name:"1",isReg:!0,isOp:!1},{id:13,name:"2",isReg:!0,isOp:!1},{id:14,name:"3",isReg:!0,isOp:!1},{id:15,name:"-",isReg:!1,isOp:!0},{id:16,name:"0",isReg:!0,isOp:!1},{id:17,name:".",isReg:!0,isOp:!1},{id:18,name:"±",isReg:!0,isOp:!1},{id:19,name:"=",isReg:!1,isOp:!0}]}},components:{Display:R,Button:P},methods:{handlePress:function(e){var t=e.textContent.trim();switch(t){case"AC":this.clearAll();break;case"C":this.clearDisplay();break;case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":this.numberPressed(t);break;case"+":this.computeOp("+");break;case"-":this.computeOp("-");break;case"/":this.computeOp("/");break;case"x":this.computeOp("x");break;case"=":this.equalPressed();break;case".":this.addPoint();break;case"±":this.negateValue();break;default:alert("KEY ERROR: in default")}},negateValue:function(){"0"!=this.dispValue&&(this.dispValue.indexOf("-")<0?this.dispValue="-"+this.dispValue:this.dispValue=this.dispValue.substring(1))},addPoint:function(){this.dispValue.indexOf(".")<0&&(this.dispValue+=".")},equalPressed:function(){try{this.computeEqual(this.prevValue,this.dispValue,this.prevOp),this.subDispValue=""}catch(e){alert(e)}},numberPressed:function(e){this.opInEffect=!1,"0"===this.dispValue?this.dispValue=e:this.dispValue.length>=15?alert("KEY ERROR: Display limit reached"):this.dispValue+=e},computePlus:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"+")},computeSub:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"-")},computeDiv:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"/")},computeMult:function(){this.dispValue=this.computeOps(this.prevValue,this.dispValue,"x")},computeOp:function(e){if(!this.opInEffect)try{this.computeEqual(this.prevValue,this.dispValue,this.prevOp),this.prevValue=this.dispValue,this.dispValue="0",this.prevOp=e,this.subDispValue=this.prevValue.toString()+" "+this.prevOp+"    ",this.opInEffect=!0}catch(t){alert(t)}},computeEqual:function(e,t,i){this.listval="";var s=parseFloat(e);this.listval=s,this.listval+=i;var n=parseFloat(t);this.listval+=n;var a=0;if("+"===i)a=s+n;else if("-"===i)a=s-n;else if("x"===i)a=s*n;else if("/"===i){if(0==n)throw"MATH ERROR: Cannot divide by 0";a=s/n}else a=n;var l=a.toString();if(l.length>=15)throw"DISPLAY ERROR: Computation result will not fit on display. Use C or AC to perform a simpler computation.";this.listval+="=",this.listval+=a,this.dispValue=l,this.prevValue="0",this.prevOp="="},clearDisplay:function(){this.dispValue="0"},clearAll:function(){this.clearDisplay(),this.prevValue="0",this.prevOp="=",this.subDispValue="",this.opInEffect=!1},callApp:function(){var e=this.listval;this.listval="","="===this.prevOp&&this.$emit("clickedEqualTo",e)}}},D=w,S=(i("9041"),Object(f["a"])(D,l,u,!1,null,null,null)),C=S.exports,$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("ul",e._l(e.items,(function(t){return i("li",{key:t.index,attrs:{id:"listWrapper"}},[e._v(" "+e._s(t.expression)+" ")])})),0)])},A=[],L={data:function(){return{items:[]}},methods:{}},I=L,T=(i("f62b"),Object(f["a"])(I,$,A,!1,null,null,null)),q=T.exports,B={name:"app",components:{Calculator:C,List:q},methods:{updateList:function(e){""!=e&&this.axios.post("http://localhost:5000/calculations",{expression:e}).then((function(e){console.log(e),this.axios.get("http://localhost:5000/calculations").then((function(e){this.$refs.list.items=e})),this.$refs.list.$forceUpdate()})).catch((function(e){console.log(e)}))}}},M=B,Y=(i("034f"),Object(f["a"])(M,n,a,!1,null,null,null)),z=Y.exports,F=i("2106"),J=i.n(F),K=i("bc3a"),U=i.n(K);s["a"].config.productionTip=!1,s["a"].use(J.a,U.a),new s["a"]({render:function(e){return e(z)}}).$mount("#app")},"65da":function(e,t,i){},8274:function(e,t,i){"use strict";var s=i("d277"),n=i.n(s);n.a},"85ec":function(e,t,i){},"8a9c":function(e,t,i){},9041:function(e,t,i){"use strict";var s=i("8a9c"),n=i.n(s);n.a},"9bad":function(e,t,i){"use strict";var s=i("ce3f"),n=i.n(s);n.a},"9cf9":function(e,t,i){},ccb7:function(e,t,i){"use strict";var s=i("9cf9"),n=i.n(s);n.a},ce3f:function(e,t,i){},d277:function(e,t,i){},f62b:function(e,t,i){"use strict";var s=i("65da"),n=i.n(s);n.a}});
//# sourceMappingURL=app.d2295ec0.js.map