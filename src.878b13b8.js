parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PsEZ":[function(require,module,exports) {
"use strict";function e(e){return e instanceof URL||"string"==typeof e||e instanceof Request}function n(e){return e instanceof WebAssembly.Instance}Object.defineProperty(exports,"__esModule",{value:!0}),exports.load=o;const t="function"==typeof WebAssembly.instantiateStreaming,s=["`WebAssembly.instantiateStreaming` failed. Assuming this is because your","server does not serve wasm with `application/wasm` MIME type. Falling back","to `WebAssembly.instantiate` which is slower. Original error:\n"].join(" ");function i(e,n){return e.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,n))}function a(e,n){return t?WebAssembly.instantiateStreaming(e,n).catch(t=>(console.warn(s,t),i(e,n))):i(e,n)}async function r(e,t){const s=await WebAssembly.instantiate(e,t);return n(s)?{instance:s,module:e}:s}async function o(n,t){const{instance:s,module:i}=await(e(n)?a(fetch(n),t):r(n,t));return o.__wbindgen_wasm_module=i,s.exports}
},{}],"vexR":[function(require,module,exports) {
module.exports=function(o){return o&&"object"==typeof o&&"function"==typeof o.copy&&"function"==typeof o.fill&&"function"==typeof o.readUInt8};
},{}],"tcrG":[function(require,module,exports) {
"function"==typeof Object.create?module.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:module.exports=function(t,e){t.super_=e;var o=function(){};o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t};
},{}],"pBGv":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"gfUn":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=Object.getOwnPropertyDescriptors||function(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++)r[t[n]]=Object.getOwnPropertyDescriptor(e,t[n]);return r},r=/%[sdj%]/g;exports.format=function(e){if(!v(e)){for(var t=[],n=0;n<arguments.length;n++)t.push(i(arguments[n]));return t.join(" ")}n=1;for(var o=arguments,u=o.length,s=String(e).replace(r,function(e){if("%%"===e)return"%";if(n>=u)return e;switch(e){case"%s":return String(o[n++]);case"%d":return Number(o[n++]);case"%j":try{return JSON.stringify(o[n++])}catch(t){return"[Circular]"}default:return e}}),c=o[n];n<u;c=o[++n])h(c)||!S(c)?s+=" "+c:s+=" "+i(c);return s},exports.deprecate=function(t,r){if(void 0!==e&&!0===e.noDeprecation)return t;if(void 0===e)return function(){return exports.deprecate(t,r).apply(this,arguments)};var n=!1;return function(){if(!n){if(e.throwDeprecation)throw new Error(r);e.traceDeprecation?console.trace(r):console.error(r),n=!0}return t.apply(this,arguments)}};var n,o={};function i(e,t){var r={seen:[],stylize:s};return arguments.length>=3&&(r.depth=arguments[2]),arguments.length>=4&&(r.colors=arguments[3]),b(t)?r.showHidden=t:t&&exports._extend(r,t),j(r.showHidden)&&(r.showHidden=!1),j(r.depth)&&(r.depth=2),j(r.colors)&&(r.colors=!1),j(r.customInspect)&&(r.customInspect=!0),r.colors&&(r.stylize=u),p(r,e,r.depth)}function u(e,t){var r=i.styles[t];return r?"["+i.colors[r][0]+"m"+e+"["+i.colors[r][1]+"m":e}function s(e,t){return e}function c(e){var t={};return e.forEach(function(e,r){t[e]=!0}),t}function p(e,t,r){if(e.customInspect&&t&&P(t.inspect)&&t.inspect!==exports.inspect&&(!t.constructor||t.constructor.prototype!==t)){var n=t.inspect(r,e);return v(n)||(n=p(e,n,r)),n}var o=l(e,t);if(o)return o;var i=Object.keys(t),u=c(i);if(e.showHidden&&(i=Object.getOwnPropertyNames(t)),E(t)&&(i.indexOf("message")>=0||i.indexOf("description")>=0))return f(t);if(0===i.length){if(P(t)){var s=t.name?": "+t.name:"";return e.stylize("[Function"+s+"]","special")}if(w(t))return e.stylize(RegExp.prototype.toString.call(t),"regexp");if(z(t))return e.stylize(Date.prototype.toString.call(t),"date");if(E(t))return f(t)}var b,h="",m=!1,x=["{","}"];(d(t)&&(m=!0,x=["[","]"]),P(t))&&(h=" [Function"+(t.name?": "+t.name:"")+"]");return w(t)&&(h=" "+RegExp.prototype.toString.call(t)),z(t)&&(h=" "+Date.prototype.toUTCString.call(t)),E(t)&&(h=" "+f(t)),0!==i.length||m&&0!=t.length?r<0?w(t)?e.stylize(RegExp.prototype.toString.call(t),"regexp"):e.stylize("[Object]","special"):(e.seen.push(t),b=m?a(e,t,r,u,i):i.map(function(n){return y(e,t,r,u,n,m)}),e.seen.pop(),g(b,h,x)):x[0]+h+x[1]}function l(e,t){if(j(t))return e.stylize("undefined","undefined");if(v(t)){var r="'"+JSON.stringify(t).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return e.stylize(r,"string")}return x(t)?e.stylize(""+t,"number"):b(t)?e.stylize(""+t,"boolean"):h(t)?e.stylize("null","null"):void 0}function f(e){return"["+Error.prototype.toString.call(e)+"]"}function a(e,t,r,n,o){for(var i=[],u=0,s=t.length;u<s;++u)A(t,String(u))?i.push(y(e,t,r,n,String(u),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(y(e,t,r,n,o,!0))}),i}function y(e,t,r,n,o,i){var u,s,c;if((c=Object.getOwnPropertyDescriptor(t,o)||{value:t[o]}).get?s=c.set?e.stylize("[Getter/Setter]","special"):e.stylize("[Getter]","special"):c.set&&(s=e.stylize("[Setter]","special")),A(n,o)||(u="["+o+"]"),s||(e.seen.indexOf(c.value)<0?(s=h(r)?p(e,c.value,null):p(e,c.value,r-1)).indexOf("\n")>-1&&(s=i?s.split("\n").map(function(e){return"  "+e}).join("\n").substr(2):"\n"+s.split("\n").map(function(e){return"   "+e}).join("\n")):s=e.stylize("[Circular]","special")),j(u)){if(i&&o.match(/^\d+$/))return s;(u=JSON.stringify(""+o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(u=u.substr(1,u.length-2),u=e.stylize(u,"name")):(u=u.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),u=e.stylize(u,"string"))}return u+": "+s}function g(e,t,r){return e.reduce(function(e,t){return 0,t.indexOf("\n")>=0&&0,e+t.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60?r[0]+(""===t?"":t+"\n ")+" "+e.join(",\n  ")+" "+r[1]:r[0]+t+" "+e.join(", ")+" "+r[1]}function d(e){return Array.isArray(e)}function b(e){return"boolean"==typeof e}function h(e){return null===e}function m(e){return null==e}function x(e){return"number"==typeof e}function v(e){return"string"==typeof e}function O(e){return"symbol"==typeof e}function j(e){return void 0===e}function w(e){return S(e)&&"[object RegExp]"===T(e)}function S(e){return"object"==typeof e&&null!==e}function z(e){return S(e)&&"[object Date]"===T(e)}function E(e){return S(e)&&("[object Error]"===T(e)||e instanceof Error)}function P(e){return"function"==typeof e}function D(e){return null===e||"boolean"==typeof e||"number"==typeof e||"string"==typeof e||"symbol"==typeof e||void 0===e}function T(e){return Object.prototype.toString.call(e)}function N(e){return e<10?"0"+e.toString(10):e.toString(10)}exports.debuglog=function(t){if(j(n)&&(n=""),t=t.toUpperCase(),!o[t])if(new RegExp("\\b"+t+"\\b","i").test(n)){var r=e.pid;o[t]=function(){var e=exports.format.apply(exports,arguments);console.error("%s %d: %s",t,r,e)}}else o[t]=function(){};return o[t]},exports.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},exports.isArray=d,exports.isBoolean=b,exports.isNull=h,exports.isNullOrUndefined=m,exports.isNumber=x,exports.isString=v,exports.isSymbol=O,exports.isUndefined=j,exports.isRegExp=w,exports.isObject=S,exports.isDate=z,exports.isError=E,exports.isFunction=P,exports.isPrimitive=D,exports.isBuffer=require("./support/isBuffer");var F=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function k(){var e=new Date,t=[N(e.getHours()),N(e.getMinutes()),N(e.getSeconds())].join(":");return[e.getDate(),F[e.getMonth()],t].join(" ")}function A(e,t){return Object.prototype.hasOwnProperty.call(e,t)}exports.log=function(){console.log("%s - %s",k(),exports.format.apply(exports,arguments))},exports.inherits=require("inherits"),exports._extend=function(e,t){if(!t||!S(t))return e;for(var r=Object.keys(t),n=r.length;n--;)e[r[n]]=t[r[n]];return e};var J="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function R(e,t){if(!e){var r=new Error("Promise was rejected with a falsy value");r.reason=e,e=r}return t(e)}function H(r){if("function"!=typeof r)throw new TypeError('The "original" argument must be of type Function');function n(){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n]);var o=t.pop();if("function"!=typeof o)throw new TypeError("The last argument must be of type Function");var i=this,u=function(){return o.apply(i,arguments)};r.apply(this,t).then(function(t){e.nextTick(u,null,t)},function(t){e.nextTick(R,t,u)})}return Object.setPrototypeOf(n,Object.getPrototypeOf(r)),Object.defineProperties(n,t(r)),n}exports.promisify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');if(J&&e[J]){var r;if("function"!=typeof(r=e[J]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(r,J,{value:r,enumerable:!1,writable:!1,configurable:!0}),r}function r(){for(var t,r,n=new Promise(function(e,n){t=e,r=n}),o=[],i=0;i<arguments.length;i++)o.push(arguments[i]);o.push(function(e,n){e?r(e):t(n)});try{e.apply(this,o)}catch(u){r(u)}return n}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),J&&Object.defineProperty(r,J,{value:r,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(r,t(e))},exports.promisify.custom=J,exports.callbackify=H;
},{"./support/isBuffer":"vexR","inherits":"tcrG","process":"pBGv"}],"OdRb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.run=b,exports.default=q,exports.__wbindgen_throw=exports.__widl_f_log_1_=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_object_drop_ref=exports.__wbindgen_string_new=void 0;var e=require("./wasm-loader.js");let n;const t="undefined"==typeof TextDecoder?require("util").TextDecoder:TextDecoder;let r=new t("utf-8",{ignoreBOM:!0,fatal:!0});r.decode();let o=null;function _(){return null!==o&&o.buffer===n.memory.buffer||(o=new Uint8Array(n.memory.buffer)),o}function c(e,n){return r.decode(_().subarray(e,e+n))}const u=new Array(32);u.fill(void 0),u.push(void 0,null,!0,!1);let i=u.length;function s(e){i===u.length&&u.push(u.length+1);const n=i;return i=u[n],u[n]=e,n}function d(e){return u[e]}function l(e){e<36||(u[e]=i,i=e)}function f(e){const n=d(e);return l(e),n}function b(){n.run()}let w=0;const g="undefined"==typeof TextEncoder?require("util").TextEncoder:TextEncoder;let a=new g("utf-8");const p="function"==typeof a.encodeInto?function(e,n){return a.encodeInto(e,n)}:function(e,n){const t=a.encode(e);return n.set(t),{read:e.length,written:t.length}};function x(e,n,t){if(void 0===t){const t=a.encode(e),r=n(t.length);return _().subarray(r,r+t.length).set(t),w=t.length,r}let r=e.length,o=n(r);const c=_();let u=0;for(;u<r;u++){const n=e.charCodeAt(u);if(n>127)break;c[o+u]=n}if(u!==r){0!==u&&(e=e.slice(u)),o=t(o,r,r=u+3*e.length);const n=_().subarray(o+u,o+r);u+=p(e,n).written}return w=u,o}let h=null;function y(){return null!==h&&h.buffer===n.memory.buffer||(h=new Int32Array(n.memory.buffer)),h}const m=function(e,n){return s(c(e,n))};exports.__wbindgen_string_new=m;const j=function(e){f(e)};exports.__wbindgen_object_drop_ref=j;const v=function(){return s(new Error)};exports.__wbg_new_59cb74e423758ede=v;const T=function(e,t){var r=x(d(t).stack,n.__wbindgen_malloc,n.__wbindgen_realloc),o=w;y()[e/4+1]=o,y()[e/4+0]=r};exports.__wbg_stack_558ba5917b466edd=T;const k=function(e,t){try{console.error(c(e,t))}finally{n.__wbindgen_free(e,t)}};exports.__wbg_error_4bb6c2a97407129a=k;const E=function(e){console.log(d(e))};exports.__widl_f_log_1_=E;const A=function(e,n){throw new Error(c(e,n))};function q(t){return(0,e.load)(t,{"./untitled_game_project.js":{__wbindgen_string_new:m,__wbindgen_object_drop_ref:j,__wbg_new_59cb74e423758ede:v,__wbg_stack_558ba5917b466edd:T,__wbg_error_4bb6c2a97407129a:k,__widl_f_log_1_:E,__wbindgen_throw:A}}).then(e=>(n=e,{run:b}))}exports.__wbindgen_throw=A;
},{"./wasm-loader.js":"PsEZ","util":"gfUn"}],"FMio":[function(require,module,exports) {
module.exports="untitled_game_project_bg.98f0f6d8.wasm";
},{}],"jBO1":[function(require,module,exports) {
"use strict";var e=t(require("../pkg/untitled_game_project.js"));function t(e){return e&&e.__esModule?e:{default:e}}module.exports=(0,e.default)(require("../pkg/untitled_game_project_bg.wasm"));
},{"../pkg/wasm-loader.js":"PsEZ","../pkg/untitled_game_project.js":"OdRb","../pkg/untitled_game_project_bg.wasm":"FMio"}],"iMte":[function(require,module,exports) {

},{}],"QCba":[function(require,module,exports) {
"use strict";var r=require("./lib.rs");require("./style.css"),(0,r.run)();
},{"./lib.rs":"jBO1","./style.css":"iMte"}],0:[function(require,module,exports) {
function cacheReplace(id, mod) {
  // replace the entry in the cache with the loaded wasm module
  module.bundle.cache[id] = null;
  module.bundle.register(id, mod);
}

Promise.all([
  require("./lib.rs").then(wasm => cacheReplace("jBO1", wasm))
]).then(() => {
  require("./index.ts");
});

},{"./lib.rs":"jBO1","./index.ts":"QCba"}]},{},[0], null)
//# sourceMappingURL=src.878b13b8.js.map