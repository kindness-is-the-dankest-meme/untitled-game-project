parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"PsEZ":[function(require,module,exports) {
"use strict";function e(e){return e instanceof URL||"string"==typeof e||e instanceof Request}function n(e){return e instanceof WebAssembly.Instance}Object.defineProperty(exports,"__esModule",{value:!0}),exports.load=o;const t="function"==typeof WebAssembly.instantiateStreaming,s=["`WebAssembly.instantiateStreaming` failed. Assuming this is because your","server does not serve wasm with `application/wasm` MIME type. Falling back","to `WebAssembly.instantiate` which is slower. Original error:\n"].join(" ");function i(e,n){return e.then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,n))}function a(e,n){return t?WebAssembly.instantiateStreaming(e,n).catch(t=>(console.warn(s,t),i(e,n))):i(e,n)}async function r(e,t){const s=await WebAssembly.instantiate(e,t);return n(s)?{instance:s,module:e}:s}async function o(n,t){const{instance:s,module:i}=await(e(n)?a(fetch(n),t):r(n,t));return o.__wbindgen_wasm_module=i,s.exports}
},{}],"OdRb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.run=t,exports.default=E,exports.__wbindgen_throw=exports.__widl_f_log_1_=exports.__wbg_error_4bb6c2a97407129a=exports.__wbg_stack_558ba5917b466edd=exports.__wbg_new_59cb74e423758ede=exports.__wbindgen_object_drop_ref=exports.__wbindgen_string_new=void 0;var e=require("./wasm-loader.js");let n;function t(){n.run()}let r=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});r.decode();let o=null;function _(){return null!==o&&o.buffer===n.memory.buffer||(o=new Uint8Array(n.memory.buffer)),o}function c(e,n){return r.decode(_().subarray(e,e+n))}const u=new Array(32);u.fill(void 0),u.push(void 0,null,!0,!1);let s=u.length;function i(e){s===u.length&&u.push(u.length+1);const n=s;return s=u[n],u[n]=e,n}function b(e){return u[e]}function f(e){e<36||(u[e]=s,s=e)}function l(e){const n=b(e);return f(e),n}let d=0,w=new TextEncoder("utf-8");const g="function"==typeof w.encodeInto?function(e,n){return w.encodeInto(e,n)}:function(e,n){const t=w.encode(e);return n.set(t),{read:e.length,written:t.length}};function a(e){let t=e.length,r=n.__wbindgen_malloc(t);const o=_();let c=0;for(;c<t;c++){const n=e.charCodeAt(c);if(n>127)break;o[r+c]=n}if(c!==t){0!==c&&(e=e.slice(c)),r=n.__wbindgen_realloc(r,t,t=c+3*e.length);const o=_().subarray(r+c,r+t);c+=g(e,o).written}return d=c,r}let p=null;function x(){return null!==p&&p.buffer===n.memory.buffer||(p=new Int32Array(n.memory.buffer)),p}const h=function(e,n){return i(c(e,n))};exports.__wbindgen_string_new=h;const m=function(e){l(e)};exports.__wbindgen_object_drop_ref=m;const y=function(){return i(new Error)};exports.__wbg_new_59cb74e423758ede=y;const j=function(e,n){const t=a(b(n).stack),r=d;x()[e/4+0]=t,x()[e/4+1]=r};exports.__wbg_stack_558ba5917b466edd=j;const k=function(e,t){const r=c(e,t).slice();n.__wbindgen_free(e,1*t),console.error(r)};exports.__wbg_error_4bb6c2a97407129a=k;const v=function(e){console.log(b(e))};exports.__widl_f_log_1_=v;const A=function(e,n){throw new Error(c(e,n))};function E(r){return(0,e.load)(r,{"./untitled_game_project.js":{__wbindgen_string_new:h,__wbindgen_object_drop_ref:m,__wbg_new_59cb74e423758ede:y,__wbg_stack_558ba5917b466edd:j,__wbg_error_4bb6c2a97407129a:k,__widl_f_log_1_:v,__wbindgen_throw:A}}).then(e=>(n=e,{run:t}))}exports.__wbindgen_throw=A;
},{"./wasm-loader.js":"PsEZ"}],"FMio":[function(require,module,exports) {
module.exports="untitled_game_project_bg.0e8d2126.wasm";
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
//# sourceMappingURL=src.54c7ad09.js.map