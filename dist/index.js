parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},n=console.trace.bind(void 0),t=console.log.bind(void 0),r=console.warn.bind(void 0),e=console.error.bind(void 0),i=console.count.bind(void 0),c=function(o){return function(n){for(var t=arguments.length,r=Array(t>1?t-1:0),e=1;e<t;e++)r[e-1]=arguments[e];return o&&o.apply(void 0,[n].concat(r)),n}},u=function(o,n,t,r){var e={};return t&&(e.get=function(o,r){return n!==r&&n||t(r),o[r]}),r&&(e.set=function(o,t,e){return n!==t&&n||r(t,e),o[t]=e,!0}),new Proxy(o,e)},s=function(t,r){return u(t,r,function(t){"symbol"!==(void 0===t?"undefined":o(t))&&n("GET: "+t)},function(t,r){"symbol"!==(void 0===t?"undefined":o(t))&&n("SET: "+t,r)})};exports.trace=n,exports.print=t,exports.warn=r,exports.error=e,exports.count=i,exports.log=c,exports.watchObject=u,exports.traceProp=s;
},{}]},{},["Focm"], null)