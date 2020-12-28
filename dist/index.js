/*! For license information please see index.js.LICENSE.txt */
/*!
 * banner:
 * logrock: 3.0.0
 * Aleksandrov Sergey <gooddev.sergey@gmail.com> (https://github.com/AlexSergey/rockpack)
 * This module can help you build error tracking & crash reporting system for your React application.
 * MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define(["react","react-dom"],e):"object"==typeof exports?exports.RockLogger=e(require("react"),require("react-dom")):t.RockLogger=e(t.react,t["react-dom"])}(this,(function(t,e){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=4)}([function(t,e,n){
/*!
 * banner:
 * valid-types: 2.0.3
 * A small JS type checker
 * ISC
 */
t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e),n.d(e,"isArray",(function(){return o})),n.d(e,"isNan",(function(){return i})),n.d(e,"isString",(function(){return s})),n.d(e,"isNumber",(function(){return u})),n.d(e,"isBoolean",(function(){return c})),n.d(e,"isUndefined",(function(){return a})),n.d(e,"isDefined",(function(){return l})),n.d(e,"isEmpty",(function(){return d})),n.d(e,"isClass",(function(){return f})),n.d(e,"isFunction",(function(){return p})),n.d(e,"isObject",(function(){return h})),n.d(e,"isNull",(function(){return b})),n.d(e,"isDOM",(function(){return g})),n.d(e,"isArguments",(function(){return y})),n.d(e,"isDate",(function(){return m})),n.d(e,"isAsync",(function(){return v})),n.d(e,"isUrl",(function(){return k})),n.d(e,"isBase64",(function(){return j})),n.d(e,"isEmptyObject",(function(){return O})),n.d(e,"isEmptyArray",(function(){return S}));var r=function(t){var e=typeof t;return"object"==typeof t?null===t?e="null":"undefined"!=typeof window&&t instanceof HTMLElement||"[object HTMLDocument]"===t.toString()?e="[object HTMLDocument]"===t.toString()?"document":"dom":Array.isArray(t)?e="array":t instanceof Date?e="date":"number"==typeof t.length&&"object"==typeof t&&!1===Array.isArray(t)&&(e="arguments"):"number"==typeof t?(e="number",isNaN(t)&&(e="NaN")):"function"==typeof t&&(e="function",t.toString&&0===t.toString().indexOf("class")&&(e="class")),e},o=function(t){return Array.isArray(t)},i=function(t){return isNaN(t)},s=function(t){return"string"===r(t)},u=function(t){return"number"===r(t)&&!1===isNaN(t)},c=function(t){return"boolean"===r(t)},a=function(t){return"undefined"===r(t)},l=function(t){return void 0!==t},d=function(t){return""===t||0===t||"0"===t||null===t||!1===t||!t},f=function(t){return"class"===r(t)},p=function(t){return"function"===r(t)},h=function(t){return"object"===r(t)},b=function(t){return"null"===r(t)},g=function(t){return"dom"===r(t)},y=function(t){return"arguments"===r(t)},m=function(t){return"date"===r(t)},v=function(t){return t instanceof Promise},k=function(t){return"string"===r(t)&&/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(t)},j=function(t){return s(t)&&t.indexOf("base64")>=0&&0===t.indexOf("data:")},O=function(t){return!!h(t)&&0===Object.keys(t).length},S=function(t){return!!o(t)&&0===t.length}}])},function(e,n){e.exports=t},function(t,n){t.exports=e},function(t,e,n){
/*!
 * banner:
 * limited-array: 2.0.2
 * Aleksandrov Sergey <gooddev.sergey@gmail.com> (https://github.com/AlexSergey/limited-array)
 * Array with a limit to size. It's very similar to the queue
 * ISC
 */
t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var r=10,o=function(){function t(t){this.data=[],this.limit=0,this.limit=t&&"number"==typeof t.limit?Math.abs(t.limit):r}return t.prototype.setLimit=function(t){return this.limit=t&&"number"==typeof t?Math.abs(t):this.limit,this.checkLimit()},t.prototype.checkLimit=function(){var t=this,e=this.data.length-this.limit;return!(e<=0||(Array(e).fill(0).forEach((function(){t.data.shift()})),0))},t.prototype.add=function(t){return this.data.push(t),this.checkLimit()},t.prototype.splice=function(t,e){this.data.splice(t,e)},t.prototype.getData=function(){return this.data.map((function(t){return t}))},t.prototype.at=function(t){return this.data[t]},t.prototype.getLength=function(){return this.data.length},t.prototype.reset=function(){this.data=[]},t}();e.default=o}])},function(t,e,n){"use strict";n.r(e),n.d(e,"LoggerContainer",(function(){return P})),n.d(e,"useLoggerApi",(function(){return w})),n.d(e,"LoggerInterface",(function(){}));var r=n(1),o=n(0),i=n(2);let s;!function(t){t.log="log",t.info="info",t.warn="warn",t.error="error",t.debug="debug",t.critical="critical"}(s||(s={}));const u=t=>{const e=globalThis&&globalThis.location&&globalThis.location.href?globalThis.location.href:"";return Object.assign({},""!==e?{url:e}:{},t)},c="critical",a=(t,e)=>{const n=((t,e)=>{const n={stack:[],message:"",line:e};return Object.getOwnPropertyNames(t).forEach((e=>{n[e]="stack"===e?t[e].split("\n"):t[e]}),t),n})(t,e);return{[c]:u(n)}};var l;function d(t,e,n,r){l||(l="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=r;else if(i>1){for(var s=new Array(i),u=0;u<i;u++)s[u]=arguments[u+3];e.children=s}if(e&&o)for(var c in o)void 0===e[c]&&(e[c]=o[c]);else e||(e=o||{});return{$$typeof:l,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}var f=d("h4",{},void 0,"Actions:"),p=d("div",{},void 0,"Nothing actions");var h=t=>{const e=t.stackData.actions,n=e[e.length-1].critical;return Object(i.createPortal)(d("div",{style:{width:"100%",height:"100%",position:"fixed",zIndex:1e4,background:"#00a",color:"#b3b3b3",fontSize:"14px",fontFamily:"courier",top:0,left:0}},void 0,d("div",{style:{width:"100%",height:"100%",position:"relative"}},void 0,Object(o.isFunction)(t.onClose)&&d("button",{type:"button",onClick:t.onClose,style:{border:0,background:"#eee",cursor:"pointer",width:"30px",height:"30px",textAlign:"center",WebkitAppearance:"none",position:"absolute",top:"25px",right:"25px",fontSize:"24px",lineHeight:"25px",zIndex:1e3}},void 0,"X"),n&&d("h2",{style:{display:"inline-block",padding:"0.25em 0.5em",margin:"0 auto",fontSize:"18px",fontWeight:"bold",background:"#b3b3b3",color:"#00a",fontFamily:"courier"}},void 0,n.stack[0]||n.message||""),d("div",{style:{fontSize:"1rem",textAlign:"left",margin:"2em"}},void 0,n&&Object(o.isArray)(n.stack)&&d("pre",{style:{margin:"0 0 10px",font:"10px/13px Lucida Console, Monaco, monospace",color:"rgb(179, 179, 179)",background:"none",border:0}},void 0,"$",n.stack.join("\n")),f,e.length>0?d("ol",{reversed:!0,style:{listStyle:"list-item",fontSize:"13px"},start:t.count||e.length-1},void 0,e.filter((t=>{if(!Object(o.isObject)(t))return!1;const e=Object.keys(t)[0];return!!e&&!(t=>c===t)(e)})).map((t=>{if(!Object(o.isObject)(t))return!1;const e=Object.keys(t)[0];return!!e&&{actionMessage:t[e],type:e}})).filter(Boolean).reverse().map((({actionMessage:t,type:e},n)=>d("li",{},n,d("p",{},void 0,d("strong",{},void 0,e,": ",t)))))):p))),document.body)};const b=()=>(new Date).toLocaleString(),g=(t,e,n)=>{const r=globalThis.navigator&&globalThis.navigator.languages&&Object(o.isArray)(globalThis.navigator.languages)?globalThis.navigator.languages[0]:"",i=globalThis.location&&globalThis.location.href?globalThis.location.href:"",s=e.getData();return t.session.end=Object(o.isFunction)(n.getCurrentDate)?n.getCurrentDate():b(),t.actions=s,t.env.lang=r,t.env.href=i,Object(o.isFunction)(n.onPrepareStack)&&n.onPrepareStack(t),u=t,JSON.parse(JSON.stringify(u));var u};var y=n(3),m=n.n(y);function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class k{constructor(){v(this,"active",!0),v(this,"stdout",null),v(this,"ignoreLogging",!1),v(this,"stackCollection",void 0),v(this,"_count",0),v(this,"getCounter",(()=>this._count)),v(this,"getStackCollection",(()=>this.stackCollection)),this.stackCollection=new m.a}log(t,e){this._handler(t,"log",!!e)}info(t,e){this._handler(t,"info",!!e)}debug(t,e){this._handler(t,"debug",!!e)}warn(t,e){this._handler(t,"warn",!!e)}error(t,e){this._handler(t,"error",!!e)}setUp(t){"boolean"==typeof t.active&&(this.active=Boolean(t.active)),"function"==typeof t.stdout&&(this.stdout=t.stdout)}_handler(t,e,n){if(!this.ignoreLogging&&this.active){let r;if(Object(o.isFunction)(this.stdout)&&this.stdout(e,t,n),"string"==typeof t){const n={};n[e]=t,r=n}else"object"==typeof t&&(r=t);r&&this.stackCollection.add(Object.assign({},r)),this._count+=1}}}const j=new k;var O;function S(t,e,n,r){O||(O="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=r;else if(i>1){for(var s=new Array(i),u=0;u<i;u++)s[u]=arguments[u+3];e.children=s}if(e&&o)for(var c in o)void 0===e[c]&&(e[c]=o[c]);else e||(e=o||{});return{$$typeof:O,type:t,key:void 0===n?null:""+n,ref:null,props:e,_owner:null}}function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const x=Object(r.createContext)(null),w=()=>{const t=Object(r.useContext)(x);return{getStackData:t.getStackData,triggerError:t.onError}};class P extends r.Component{constructor(t){super(t),_(this,"__hasCriticalError",!1),_(this,"stack",void 0),_(this,"handlerError",((t,e,n,r,o)=>{if(this.unbindActions(),!this.__hasCriticalError){this.__hasCriticalError=!0;const t=((t,e,n,r,o)=>(e.add(a(r,o)),g(t,e,n)))(this.stack,j.getStackCollection(),{getCurrentDate:this.props.getCurrentDate,onPrepareStack:this.props.onPrepareStack},o,n);this.onError(t),this.setState({bsod:!0})}})),_(this,"_onMouseDown",(t=>{this.stack.mousePressed=t&&t.button})),_(this,"_onKeyDown",(t=>{this.stack.keyboardPressed=t&&t.code})),_(this,"_onKeyUp",(()=>{setTimeout((()=>{this.stack.keyboardPressed=null}))})),_(this,"_onMouseUp",(()=>{setTimeout((()=>{this.stack.mousePressed=null}))})),_(this,"getStackData",(()=>g(this.stack,j.getStackCollection(),{getCurrentDate:this.props.getCurrentDate,onPrepareStack:this.props.onPrepareStack}))),_(this,"onError",(t=>{Object(o.isFunction)(this.props.onError)&&this.props.onError(t)})),_(this,"closeBsod",(()=>{this.setState({bsod:!1})})),this.state={bsod:!1},this.stack={keyboardPressed:null,mousePressed:null,session:{},env:{},actions:j.getStackCollection().data};const e=Object(o.isNumber)(this.props.limit)?this.props.limit:25;j.setUp({active:t.active}),j.getStackCollection().setLimit(e),Object(o.isFunction)(this.props.onPrepareStack)&&(this.stack.onPrepareStack=this.props.onPrepareStack),Object(o.isFunction)(this.props.stdout)&&j.setUp({stdout:this.props.stdout}),this.stack.session.start=Object(o.isFunction)(this.props.getCurrentDate)?this.props.getCurrentDate():b(),(Object(o.isString)(this.props.sessionID)||Object(o.isNumber)(this.props.sessionID))&&(this.stack.sessionId=this.props.sessionID)}componentDidMount(){this.props.active&&"undefined"!=typeof window&&(this.bindActions(),window.onerror=this.handlerError)}componentWillUnmount(){this.unbindActions()}bindActions(){document.addEventListener("mousedown",this._onMouseDown),document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("keydown",this._onKeyDown),document.addEventListener("keyup",this._onKeyUp)}unbindActions(){window.onerror=null,document.removeEventListener("keydown",this._onKeyDown),document.removeEventListener("keyup",this._onKeyUp),document.removeEventListener("mousedown",this._onMouseDown),document.removeEventListener("mouseup",this._onMouseUp)}render(){const t=Object(r.isValidElement)(this.props.bsod)?this.props.bsod:h;return S(x.Provider,{value:{getStackData:this.getStackData,onError:this.onError}},void 0,this.props.children,this.props.bsodActive&&this.state.bsod&&S(t,{count:j.getCounter(),onClose:this.closeBsod,stackData:this.getStackData()}))}}_(P,"defaultProps",{logger:j,active:!0,bsodActive:!0,sessionID:!1,limit:25,getCurrentDate:b});e.default=j}])}));