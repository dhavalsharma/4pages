/*!
  * https://github.com/paulmillr/es6-shim
  * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
  *   and contributors,  MIT License
  * es6-shim: v0.35.1
  * see https://github.com/paulmillr/es6-shim/blob/0.35.1/LICENSE
  * Details and documentation:
  * https://github.com/paulmillr/es6-shim/
  */
(function(e,t){if(typeof define==="function"&&define.amd){define(t)}else if(typeof exports==="object"){module.exports=t()}else{e.returnExports=t()}})(this,function(){"use strict";var e=Function.call.bind(Function.apply);var t=Function.call.bind(Function.call);var r=Array.isArray;var n=Object.keys;var o=function notThunker(t){return function notThunk(){return!e(t,this,arguments)}};var i=function(e){try{e();return false}catch(t){return true}};var a=function valueOrFalseIfThrows(e){try{return e()}catch(t){return false}};var u=o(i);var f=function(){return!i(function(){Object.defineProperty({},"x",{get:function(){}})})};var s=!!Object.defineProperty&&f();var c=function foo(){}.name==="foo";var l=Function.call.bind(Array.prototype.forEach);var p=Function.call.bind(Array.prototype.reduce);var v=Function.call.bind(Array.prototype.filter);var y=Function.call.bind(Array.prototype.some);var h=function(e,t,r,n){if(!n&&t in e){return}if(s){Object.defineProperty(e,t,{configurable:true,enumerable:false,writable:true,value:r})}else{e[t]=r}};var b=function(e,t,r){l(n(t),function(n){var o=t[n];h(e,n,o,!!r)})};var g=Function.call.bind(Object.prototype.toString);var d=typeof/abc/==="function"?function IsCallableSlow(e){return typeof e==="function"&&g(e)==="[object Function]"}:function IsCallableFast(e){return typeof e==="function"};var O={getter:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}Object.defineProperty(e,t,{configurable:true,enumerable:false,get:r})},proxy:function(e,t,r){if(!s){throw new TypeError("getters require true ES5 support")}var n=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,{configurable:n.configurable,enumerable:n.enumerable,get:function getKey(){return e[t]},set:function setKey(r){e[t]=r}})},redefine:function(e,t,r){if(s){var n=Object.getOwnPropertyDescriptor(e,t);n.value=r;Object.defineProperty(e,t,n)}else{e[t]=r}},defineByDescriptor:function(e,t,r){if(s){Object.defineProperty(e,t,r)}else if("value"in r){e[t]=r.value}},preserveToString:function(e,t){if(t&&d(t.toString)){h(e,"toString",t.toString.bind(t),true)}}};var m=Object.create||function(e,t){var r=function Prototype(){};r.prototype=e;var o=new r;if(typeof t!=="undefined"){n(t).forEach(function(e){O.defineByDescriptor(o,e,t[e])})}return o};var w=function(e,t){if(!Object.setPrototypeOf){return false}return a(function(){var r=function Subclass(t){var r=new e(t);Object.setPrototypeOf(r,Subclass.prototype);return r};Object.setPrototypeOf(r,e);r.prototype=m(e.prototype,{constructor:{value:r}});return t(r)})};var j=function(){if(typeof self!=="undefined"){return self}if(typeof window!=="undefined"){return window}if(typeof global!=="undefined"){return global}throw new Error("unable to locate global object")};var S=j();var T=S.isFinite;var I=Function.call.bind(String.prototype.indexOf);var E=Function.apply.bind(Array.prototype.indexOf);var P=Function.call.bind(Array.prototype.concat);var C=Function.call.bind(String.prototype.slice);var M=Function.call.bind(Array.prototype.push);var x=Function.apply.bind(Array.prototype.push);var N=Function.call.bind(Array.prototype.shift);var A=Math.max;var R=Math.min;var _=Math.floor;var k=Math.abs;var F=Math.exp;var L=Math.log;var D=Math.sqrt;var z=Function.call.bind(Object.prototype.hasOwnProperty);var q;var W=function(){};var G=S.Symbol||{};var H=G.species||"@@species";var V=Number.isNaN||function isNaN(e){return e!==e};var B=Number.isFinite||function isFinite(e){return typeof e==="number"&&T(e)};var $=d(Math.sign)?Math.sign:function sign(e){var t=Number(e);if(t===0){return t}if(V(t)){return t}return t<0?-1:1};var U=function isArguments(e){return g(e)==="[object Arguments]"};var J=function isArguments(e){return e!==null&&typeof e==="object"&&typeof e.length==="number"&&e.length>=0&&g(e)!=="[object Array]"&&g(e.callee)==="[object Function]"};var X=U(arguments)?U:J;var K={primitive:function(e){return e===null||typeof e!=="function"&&typeof e!=="object"},string:function(e){return g(e)==="[object String]"},regex:function(e){return g(e)==="[object RegExp]"},symbol:function(e){return typeof S.Symbol==="function"&&typeof e==="symbol"}};var Z=function overrideNative(e,t,r){var n=e[t];h(e,t,r,true);O.preserveToString(e[t],n)};var Y=typeof G==="function"&&typeof G["for"]==="function"&&K.symbol(G());var Q=K.symbol(G.iterator)?G.iterator:"_es6-shim iterator_";if(S.Set&&typeof(new S.Set)["@@iterator"]==="function"){Q="@@iterator"}if(!S.Reflect){h(S,"Reflect",{},true)}var ee=S.Reflect;var te=String;var re={Call:function Call(t,r){var n=arguments.length>2?arguments[2]:[];if(!re.IsCallable(t)){throw new TypeError(t+" is not a function")}return e(t,r,n)},RequireObjectCoercible:function(e,t){if(e==null){throw new TypeError(t||"Cannot call method on "+e)}return e},TypeIsObject:function(e){if(e===void 0||e===null||e===true||e===false){return false}return typeof e==="function"||typeof e==="object"},ToObject:function(e,t){return Object(re.RequireObjectCoercible(e,t))},IsCallable:d,IsConstructor:function(e){return re.IsCallable(e)},ToInt32:function(e){return re.ToNumber(e)>>0},ToUint32:function(e){return re.ToNumber(e)>>>0},ToNumber:function(e){if(g(e)==="[object Symbol]"){throw new TypeError("Cannot convert a Symbol value to a number")}return+e},ToInteger:function(e){var t=re.ToNumber(e);if(V(t)){return 0}if(t===0||!B(t)){return t}return(t>0?1:-1)*_(k(t))},ToLength:function(e){var t=re.ToInteger(e);if(t<=0){return 0}if(t>Number.MAX_SAFE_INTEGER){return Number.MAX_SAFE_INTEGER}return t},SameValue:function(e,t){if(e===t){if(e===0){return 1/e===1/t}return true}return V(e)&&V(t)},SameValueZero:function(e,t){return e===t||V(e)&&V(t)},IsIterable:function(e){return re.TypeIsObject(e)&&(typeof e[Q]!=="undefined"||X(e))},GetIterator:function(e){if(X(e)){return new q(e,"value")}var t=re.GetMethod(e,Q);if(!re.IsCallable(t)){throw new TypeError("value is not an iterable")}var r=re.Call(t,e);if(!re.TypeIsObject(r)){throw new TypeError("bad iterator")}return r},GetMethod:function(e,t){var r=re.ToObject(e)[t];if(r===void 0||r===null){return void 0}if(!re.IsCallable(r)){throw new TypeError("Method not callable: "+t)}return r},IteratorComplete:function(e){return!!e.done},IteratorClose:function(e,t){var r=re.GetMethod(e,"return");if(r===void 0){return}var n,o;try{n=re.Call(r,e)}catch(i){o=i}if(t){return}if(o){throw o}if(!re.TypeIsObject(n)){throw new TypeError("Iterator's return method returned a non-object.")}},IteratorNext:function(e){var t=arguments.length>1?e.next(arguments[1]):e.next();if(!re.TypeIsObject(t)){throw new TypeError("bad iterator")}return t},IteratorStep:function(e){var t=re.IteratorNext(e);var r=re.IteratorComplete(t);return r?false:t},Construct:function(e,t,r,n){var o=typeof r==="undefined"?e:r;if(!n&&ee.construct){return ee.construct(e,t,o)}var i=o.prototype;if(!re.TypeIsObject(i)){i=Object.prototype}var a=m(i);var u=re.Call(e,a,t);return re.TypeIsObject(u)?u:a},SpeciesConstructor:function(e,t){var r=e.constructor;if(r===void 0){return t}if(!re.TypeIsObject(r)){throw new TypeError("Bad constructor")}var n=r[H];if(n===void 0||n===null){return t}if(!re.IsConstructor(n)){throw new TypeError("Bad @@species")}return n},CreateHTML:function(e,t,r,n){var o=re.ToString(e);var i="<"+t;if(r!==""){var a=re.ToString(n);var u=a.replace(/"/g,"&quot;");i+=" "+r+'="'+u+'"'}var f=i+">";var s=f+o;return s+"</"+t+">"},IsRegExp:function IsRegExp(e){if(!re.TypeIsObject(e)){return false}var t=e[G.match];if(typeof t!=="undefined"){return!!t}return K.regex(e)},ToString:function ToString(e){return te(e)}};if(s&&Y){var ne=function defineWellKnownSymbol(e){if(K.symbol(G[e])){return G[e]}var t=G["for"]("Symbol."+e);Object.defineProperty(G,e,{configurable:false,enumerable:false,writable:false,value:t});return t};if(!K.symbol(G.search)){var oe=ne("search");var ie=String.prototype.search;h(RegExp.prototype,oe,function search(e){return re.Call(ie,e,[this])});var ae=function search(e){var t=re.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var r=re.GetMethod(e,oe);if(typeof r!=="undefined"){return re.Call(r,e,[t])}}return re.Call(ie,t,[re.ToString(e)])};Z(String.prototype,"search",ae)}if(!K.symbol(G.replace)){var ue=ne("replace");var fe=String.prototype.replace;h(RegExp.prototype,ue,function replace(e,t){return re.Call(fe,e,[this,t])});var se=function replace(e,t){var r=re.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var n=re.GetMethod(e,ue);if(typeof n!=="undefined"){return re.Call(n,e,[r,t])}}return re.Call(fe,r,[re.ToString(e),t])};Z(String.prototype,"replace",se)}if(!K.symbol(G.split)){var ce=ne("split");var le=String.prototype.split;h(RegExp.prototype,ce,function split(e,t){return re.Call(le,e,[this,t])});var pe=function split(e,t){var r=re.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var n=re.GetMethod(e,ce);if(typeof n!=="undefined"){return re.Call(n,e,[r,t])}}return re.Call(le,r,[re.ToString(e),t])};Z(String.prototype,"split",pe)}var ve=K.symbol(G.match);var ye=ve&&function(){var e={};e[G.match]=function(){return 42};return"a".match(e)!==42}();if(!ve||ye){var he=ne("match");var be=String.prototype.match;h(RegExp.prototype,he,function match(e){return re.Call(be,e,[this])});var ge=function match(e){var t=re.RequireObjectCoercible(this);if(e!==null&&typeof e!=="undefined"){var r=re.GetMethod(e,he);if(typeof r!=="undefined"){return re.Call(r,e,[t])}}return re.Call(be,t,[re.ToString(e)])};Z(String.prototype,"match",ge)}}var de=function wrapConstructor(e,t,r){O.preserveToString(t,e);if(Object.setPrototypeOf){Object.setPrototypeOf(e,t)}if(s){l(Object.getOwnPropertyNames(e),function(n){if(n in W||r[n]){return}O.proxy(e,n,t)})}else{l(Object.keys(e),function(n){if(n in W||r[n]){return}t[n]=e[n]})}t.prototype=e.prototype;O.redefine(e.prototype,"constructor",t)};var Oe=function(){return this};var me=function(e){if(s&&!z(e,H)){O.getter(e,H,Oe)}};var we=function(e,t){var r=t||function iterator(){return this};h(e,Q,r);if(!e[Q]&&K.symbol(Q)){e[Q]=r}};var je=function createDataProperty(e,t,r){if(s){Object.defineProperty(e,t,{configurable:true,enumerable:true,writable:true,value:r})}else{e[t]=r}};var Se=function createDataPropertyOrThrow(e,t,r){je(e,t,r);if(!re.SameValue(e[t],r)){throw new TypeError("property is nonconfigurable")}};var Te=function(e,t,r,n){if(!re.TypeIsObject(e)){throw new TypeError("Constructor requires `new`: "+t.name)}var o=t.prototype;if(!re.TypeIsObject(o)){o=r}var i=m(o);for(var a in n){if(z(n,a)){var u=n[a];h(i,a,u,true)}}return i};if(String.fromCodePoint&&String.fromCodePoint.length!==1){var Ie=String.fromCodePoint;Z(String,"fromCodePoint",function fromCodePoint(e){return re.Call(Ie,this,arguments)})}var Ee={fromCodePoint:function fromCodePoint(e){var t=[];var r;for(var n=0,o=arguments.length;n<o;n++){r=Number(arguments[n]);if(!re.SameValue(r,re.ToInteger(r))||r<0||r>1114111){throw new RangeError("Invalid code point "+r)}if(r<65536){M(t,String.fromCharCode(r))}else{r-=65536;M(t,String.fromCharCode((r>>10)+55296));M(t,String.fromCharCode(r%1024+56320))}}return t.join("")},raw:function raw(e){var t=re.ToObject(e,"bad callSite");var r=re.ToObject(t.raw,"bad raw value");var n=r.length;var o=re.ToLength(n);if(o<=0){return""}var i=[];var a=0;var u,f,s,c;while(a<o){u=re.ToString(a);s=re.ToString(r[u]);M(i,s);if(a+1>=o){break}f=a+1<arguments.length?arguments[a+1]:"";c=re.ToString(f);M(i,c);a+=1}return i.join("")}};if(String.raw&&String.raw({raw:{0:"x",1:"y",length:2}})!=="xy"){Z(String,"raw",Ee.raw)}b(String,Ee);var Pe=function repeat(e,t){if(t<1){return""}if(t%2){return repeat(e,t-1)+e}var r=repeat(e,t/2);return r+r};var Ce=Infinity;var Me={repeat:function repeat(e){var t=re.ToString(re.RequireObjectCoercible(this));var r=re.ToInteger(e);if(r<0||r>=Ce){throw new RangeError("repeat count must be less than infinity and not overflow maximum string size")}return Pe(t,r)},startsWith:function startsWith(e){var t=re.ToString(re.RequireObjectCoercible(this));if(re.IsRegExp(e)){throw new TypeError('Cannot call method "startsWith" with a regex')}var r=re.ToString(e);var n;if(arguments.length>1){n=arguments[1]}var o=A(re.ToInteger(n),0);return C(t,o,o+r.length)===r},endsWith:function endsWith(e){var t=re.ToString(re.RequireObjectCoercible(this));if(re.IsRegExp(e)){throw new TypeError('Cannot call method "endsWith" with a regex')}var r=re.ToString(e);var n=t.length;var o;if(arguments.length>1){o=arguments[1]}var i=typeof o==="undefined"?n:re.ToInteger(o);var a=R(A(i,0),n);return C(t,a-r.length,a)===r},includes:function includes(e){if(re.IsRegExp(e)){throw new TypeError('"includes" does not accept a RegExp')}var t=re.ToString(e);var r;if(arguments.length>1){r=arguments[1]}return I(this,t,r)!==-1},codePointAt:function codePointAt(e){var t=re.ToString(re.RequireObjectCoercible(this));var r=re.ToInteger(e);var n=t.length;if(r>=0&&r<n){var o=t.charCodeAt(r);var i=r+1===n;if(o<55296||o>56319||i){return o}var a=t.charCodeAt(r+1);if(a<56320||a>57343){return o}return(o-55296)*1024+(a-56320)+65536}}};if(String.prototype.includes&&"a".includes("a",Infinity)!==false){Z(String.prototype,"includes",Me.includes)}if(String.prototype.startsWith&&String.prototype.endsWith){var xe=i(function(){"/a/".startsWith(/a/)});var Ne=a(function(){return"abc".startsWith("a",Infinity)===false});if(!xe||!Ne){Z(String.prototype,"startsWith",Me.startsWith);Z(String.prototype,"endsWith",Me.endsWith)}}if(Y){var Ae=a(function(){var e=/a/;e[G.match]=false;return"/a/".startsWith(e)});if(!Ae){Z(String.prototype,"startsWith",Me.startsWith)}var Re=a(function(){var e=/a/;e[G.match]=false;return"/a/".endsWith(e)});if(!Re){Z(String.prototype,"endsWith",Me.endsWith)}var _e=a(function(){var e=/a/;e[G.match]=false;return"/a/".includes(e)});if(!_e){Z(String.prototype,"includes",Me.includes)}}b(String.prototype,Me);var ke=["	\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003","\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028","\u2029\ufeff"].join("");var Fe=new RegExp("(^["+ke+"]+)|(["+ke+"]+$)","g");var Le=function trim(){return re.ToString(re.RequireObjectCoercible(this)).replace(Fe,"")};var De=["\x85","\u200b","\ufffe"].join("");var ze=new RegExp("["+De+"]","g");var qe=/^[\-+]0x[0-9a-f]+$/i;var We=De.trim().length!==De.length;h(String.prototype,"trim",Le,We);var Ge=function(e){return{value:e,done:arguments.length===0}};var He=function(e){re.RequireObjectCoercible(e);this._s=re.ToString(e);this._i=0};He.prototype.next=function(){var e=this._s;var t=this._i;if(typeof e==="undefined"||t>=e.length){this._s=void 0;return Ge()}var r=e.charCodeAt(t);var n,o;if(r<55296||r>56319||t+1===e.length){o=1}else{n=e.charCodeAt(t+1);o=n<56320||n>57343?1:2}this._i=t+o;return Ge(e.substr(t,o))};we(He.prototype);we(String.prototype,function(){return new He(this)});var Ve={from:function from(e){var r=this;var n;if(arguments.length>1){n=arguments[1]}var o,i;if(typeof n==="undefined"){o=false}else{if(!re.IsCallable(n)){throw new TypeError("Array.from: when provided, the second argument must be a function")}if(arguments.length>2){i=arguments[2]}o=true}var a=typeof(X(e)||re.GetMethod(e,Q))!=="undefined";var u,f,s;if(a){f=re.IsConstructor(r)?Object(new r):[];var c=re.GetIterator(e);var l,p;s=0;while(true){l=re.IteratorStep(c);if(l===false){break}p=l.value;try{if(o){p=typeof i==="undefined"?n(p,s):t(n,i,p,s)}f[s]=p}catch(v){re.IteratorClose(c,true);throw v}s+=1}u=s}else{var y=re.ToObject(e);u=re.ToLength(y.length);f=re.IsConstructor(r)?Object(new r(u)):new Array(u);var h;for(s=0;s<u;++s){h=y[s];if(o){h=typeof i==="undefined"?n(h,s):t(n,i,h,s)}Se(f,s,h)}}f.length=u;return f},of:function of(){var e=arguments.length;var t=this;var n=r(t)||!re.IsCallable(t)?new Array(e):re.Construct(t,[e]);for(var o=0;o<e;++o){Se(n,o,arguments[o])}n.length=e;return n}};b(Array,Ve);me(Array);q=function(e,t){this.i=0;this.array=e;this.kind=t};b(q.prototype,{next:function(){var e=this.i;var t=this.array;if(!(this instanceof q)){throw new TypeError("Not an ArrayIterator")}if(typeof t!=="undefined"){var r=re.ToLength(t.length);for(;e<r;e++){var n=this.kind;var o;if(n==="key"){o=e}else if(n==="value"){o=t[e]}else if(n==="entry"){o=[e,t[e]]}this.i=e+1;return Ge(o)}}this.array=void 0;return Ge()}});we(q.prototype);var Be=Array.of===Ve.of||function(){var e=function Foo(e){this.length=e};e.prototype=[];var t=Array.of.apply(e,[1,2]);return t instanceof e&&t.length===2}();if(!Be){Z(Array,"of",Ve.of)}var $e={copyWithin:function copyWithin(e,t){var r=re.ToObject(this);var n=re.ToLength(r.length);var o=re.ToInteger(e);var i=re.ToInteger(t);var a=o<0?A(n+o,0):R(o,n);var u=i<0?A(n+i,0):R(i,n);var f;if(arguments.length>2){f=arguments[2]}var s=typeof f==="undefined"?n:re.ToInteger(f);var c=s<0?A(n+s,0):R(s,n);var l=R(c-u,n-a);var p=1;if(u<a&&a<u+l){p=-1;u+=l-1;a+=l-1}while(l>0){if(u in r){r[a]=r[u]}else{delete r[a]}u+=p;a+=p;l-=1}return r},fill:function fill(e){var t;if(arguments.length>1){t=arguments[1]}var r;if(arguments.length>2){r=arguments[2]}var n=re.ToObject(this);var o=re.ToLength(n.length);t=re.ToInteger(typeof t==="undefined"?0:t);r=re.ToInteger(typeof r==="undefined"?o:r);var i=t<0?A(o+t,0):R(t,o);var a=r<0?o+r:r;for(var u=i;u<o&&u<a;++u){n[u]=e}return n},find:function find(e){var r=re.ToObject(this);var n=re.ToLength(r.length);if(!re.IsCallable(e)){throw new TypeError("Array#find: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0,a;i<n;i++){a=r[i];if(o){if(t(e,o,a,i,r)){return a}}else if(e(a,i,r)){return a}}},findIndex:function findIndex(e){var r=re.ToObject(this);var n=re.ToLength(r.length);if(!re.IsCallable(e)){throw new TypeError("Array#findIndex: predicate must be a function")}var o=arguments.length>1?arguments[1]:null;for(var i=0;i<n;i++){if(o){if(t(e,o,r[i],i,r)){return i}}else if(e(r[i],i,r)){return i}}return-1},keys:function keys(){return new q(this,"key")},values:function values(){return new q(this,"value")},entries:function entries(){return new q(this,"entry")}};if(Array.prototype.keys&&!re.IsCallable([1].keys().next)){delete Array.prototype.keys}if(Array.prototype.entries&&!re.IsCallable([1].entries().next)){delete Array.prototype.entries}if(Array.prototype.keys&&Array.prototype.entries&&!Array.prototype.values&&Array.prototype[Q]){b(Array.prototype,{values:Array.prototype[Q]});if(K.symbol(G.unscopables)){Array.prototype[G.unscopables].values=true}}if(c&&Array.prototype.values&&Array.prototype.values.name!=="values"){var Ue=Array.prototype.values;Z(Array.prototype,"values",function values(){return re.Call(Ue,this,arguments)});h(Array.prototype,Q,Array.prototype.values,true)}b(Array.prototype,$e);if(1/[true].indexOf(true,-0)<0){h(Array.prototype,"indexOf",function indexOf(e){var t=E(this,arguments);if(t===0&&1/t<0){return 0}return t},true)}we(Array.prototype,function(){return this.values()});if(Object.getPrototypeOf){we(Object.getPrototypeOf([].values()))}var Je=function(){return a(function(){return Array.from({length:-1}).length===0})}();var Xe=function(){var e=Array.from([0].entries());return e.length===1&&r(e[0])&&e[0][0]===0&&e[0][1]===0}();if(!Je||!Xe){Z(Array,"from",Ve.from)}var Ke=function(){return a(function(){return Array.from([0],void 0)})}();if(!Ke){var Ze=Array.from;Z(Array,"from",function from(e){if(arguments.length>1&&typeof arguments[1]!=="undefined"){return re.Call(Ze,this,arguments)}else{return t(Ze,this,e)}})}var Ye=-(Math.pow(2,32)-1);var Qe=function(e,r){var n={length:Ye};n[r?(n.length>>>0)-1:0]=true;return a(function(){t(e,n,function(){throw new RangeError("should not reach here")},[]);return true})};if(!Qe(Array.prototype.forEach)){var et=Array.prototype.forEach;Z(Array.prototype,"forEach",function forEach(e){return re.Call(et,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.map)){var tt=Array.prototype.map;Z(Array.prototype,"map",function map(e){return re.Call(tt,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.filter)){var rt=Array.prototype.filter;Z(Array.prototype,"filter",function filter(e){return re.Call(rt,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.some)){var nt=Array.prototype.some;Z(Array.prototype,"some",function some(e){return re.Call(nt,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.every)){var ot=Array.prototype.every;Z(Array.prototype,"every",function every(e){return re.Call(ot,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.reduce)){var it=Array.prototype.reduce;Z(Array.prototype,"reduce",function reduce(e){return re.Call(it,this.length>=0?this:[],arguments)},true)}if(!Qe(Array.prototype.reduceRight,true)){var at=Array.prototype.reduceRight;Z(Array.prototype,"reduceRight",function reduceRight(e){return re.Call(at,this.length>=0?this:[],arguments)},true)}var ut=Number("0o10")!==8;var ft=Number("0b10")!==2;var st=y(De,function(e){return Number(e+0+e)===0});if(ut||ft||st){var ct=Number;var lt=/^0b[01]+$/i;var pt=/^0o[0-7]+$/i;var vt=lt.test.bind(lt);var yt=pt.test.bind(pt);var ht=function(e){var t;if(typeof e.valueOf==="function"){t=e.valueOf();if(K.primitive(t)){return t}}if(typeof e.toString==="function"){t=e.toString();if(K.primitive(t)){return t}}throw new TypeError("No default value")};var bt=ze.test.bind(ze);var gt=qe.test.bind(qe);var dt=function(){var e=function Number(t){var r;if(arguments.length>0){r=K.primitive(t)?t:ht(t,"number")}else{r=0}if(typeof r==="string"){r=re.Call(Le,r);if(vt(r)){r=parseInt(C(r,2),2)}else if(yt(r)){r=parseInt(C(r,2),8)}else if(bt(r)||gt(r)){r=NaN}}var n=this;var o=a(function(){ct.prototype.valueOf.call(n);return true});if(n instanceof e&&!o){return new ct(r)}return ct(r)};return e}();de(ct,dt,{});b(dt,{NaN:ct.NaN,MAX_VALUE:ct.MAX_VALUE,MIN_VALUE:ct.MIN_VALUE,NEGATIVE_INFINITY:ct.NEGATIVE_INFINITY,POSITIVE_INFINITY:ct.POSITIVE_INFINITY});Number=dt;O.redefine(S,"Number",dt)}var Ot=Math.pow(2,53)-1;b(Number,{MAX_SAFE_INTEGER:Ot,MIN_SAFE_INTEGER:-Ot,EPSILON:2.220446049250313e-16,parseInt:S.parseInt,parseFloat:S.parseFloat,isFinite:B,isInteger:function isInteger(e){return B(e)&&re.ToInteger(e)===e},isSafeInteger:function isSafeInteger(e){return Number.isInteger(e)&&k(e)<=Number.MAX_SAFE_INTEGER},isNaN:V});h(Number,"parseInt",S.parseInt,Number.parseInt!==S.parseInt);if(![,1].find(function(e,t){return t===0})){Z(Array.prototype,"find",$e.find)}if([,1].findIndex(function(e,t){return t===0})!==0){Z(Array.prototype,"findIndex",$e.findIndex)}var mt=Function.bind.call(Function.bind,Object.prototype.propertyIsEnumerable);var wt=function ensureEnumerable(e,t){if(s&&mt(e,t)){Object.defineProperty(e,t,{enumerable:false})}};var jt=function sliceArgs(){var e=Number(this);var t=arguments.length;var r=t-e;var n=new Array(r<0?0:r);for(var o=e;o<t;++o){n[o-e]=arguments[o]}return n};var St=function assignTo(e){return function assignToSource(t,r){t[r]=e[r];return t}};var Tt=function(e,t){var r=n(Object(t));var o;if(re.IsCallable(Object.getOwnPropertySymbols)){o=v(Object.getOwnPropertySymbols(Object(t)),mt(t))}return p(P(r,o||[]),St(t),e)};var It={assign:function(e,t){var r=re.ToObject(e,"Cannot convert undefined or null to object");return p(re.Call(jt,1,arguments),Tt,r)},is:function is(e,t){return re.SameValue(e,t)}};var Et=Object.assign&&Object.preventExtensions&&function(){var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return e[1]==="y"}}();if(Et){Z(Object,"assign",It.assign)}b(Object,It);if(s){var Pt={setPrototypeOf:function(e,r){var n;var o=function(e,t){if(!re.TypeIsObject(e)){throw new TypeError("cannot set prototype on a non-object")}if(!(t===null||re.TypeIsObject(t))){throw new TypeError("can only set prototype to an object or null"+t)}};var i=function(e,r){o(e,r);t(n,e,r);return e};try{n=e.getOwnPropertyDescriptor(e.prototype,r).set;t(n,{},null)}catch(a){if(e.prototype!=={}[r]){return}n=function(e){this[r]=e};i.polyfill=i(i({},null),e.prototype)instanceof e}return i}(Object,"__proto__")};b(Object,Pt)}if(Object.setPrototypeOf&&Object.getPrototypeOf&&Object.getPrototypeOf(Object.setPrototypeOf({},null))!==null&&Object.getPrototypeOf(Object.create(null))===null){(function(){var e=Object.create(null);var t=Object.getPrototypeOf;var r=Object.setPrototypeOf;Object.getPrototypeOf=function(r){var n=t(r);return n===e?null:n};Object.setPrototypeOf=function(t,n){var o=n===null?e:n;return r(t,o)};Object.setPrototypeOf.polyfill=false})()}var Ct=!i(function(){Object.keys("foo")});if(!Ct){var Mt=Object.keys;Z(Object,"keys",function keys(e){return Mt(re.ToObject(e))});n=Object.keys}var xt=i(function(){Object.keys(/a/g)});if(xt){var Nt=Object.keys;Z(Object,"keys",function keys(e){if(K.regex(e)){var t=[];for(var r in e){if(z(e,r)){M(t,r)}}return t}return Nt(e)});n=Object.keys}if(Object.getOwnPropertyNames){var At=!i(function(){Object.getOwnPropertyNames("foo")});if(!At){var Rt=typeof window==="object"?Object.getOwnPropertyNames(window):[];var _t=Object.getOwnPropertyNames;Z(Object,"getOwnPropertyNames",function getOwnPropertyNames(e){var t=re.ToObject(e);if(g(t)==="[object Window]"){try{return _t(t)}catch(r){return P([],Rt)}}return _t(t)})}}if(Object.getOwnPropertyDescriptor){var kt=!i(function(){Object.getOwnPropertyDescriptor("foo","bar")});if(!kt){var Ft=Object.getOwnPropertyDescriptor;Z(Object,"getOwnPropertyDescriptor",function getOwnPropertyDescriptor(e,t){return Ft(re.ToObject(e),t)})}}if(Object.seal){var Lt=!i(function(){Object.seal("foo")});if(!Lt){var Dt=Object.seal;Z(Object,"seal",function seal(e){if(!re.TypeIsObject(e)){return e}return Dt(e)})}}if(Object.isSealed){var zt=!i(function(){Object.isSealed("foo")});if(!zt){var qt=Object.isSealed;Z(Object,"isSealed",function isSealed(e){if(!re.TypeIsObject(e)){return true}return qt(e)})}}if(Object.freeze){var Wt=!i(function(){Object.freeze("foo")});if(!Wt){var Gt=Object.freeze;Z(Object,"freeze",function freeze(e){if(!re.TypeIsObject(e)){return e}return Gt(e)})}}if(Object.isFrozen){var Ht=!i(function(){Object.isFrozen("foo")});if(!Ht){var Vt=Object.isFrozen;Z(Object,"isFrozen",function isFrozen(e){if(!re.TypeIsObject(e)){return true}return Vt(e)})}}if(Object.preventExtensions){var Bt=!i(function(){Object.preventExtensions("foo")});if(!Bt){var $t=Object.preventExtensions;Z(Object,"preventExtensions",function preventExtensions(e){if(!re.TypeIsObject(e)){return e}return $t(e)})}}if(Object.isExtensible){var Ut=!i(function(){Object.isExtensible("foo")});if(!Ut){var Jt=Object.isExtensible;Z(Object,"isExtensible",function isExtensible(e){if(!re.TypeIsObject(e)){return false}return Jt(e)})}}if(Object.getPrototypeOf){var Xt=!i(function(){Object.getPrototypeOf("foo")});if(!Xt){var Kt=Object.getPrototypeOf;Z(Object,"getPrototypeOf",function getPrototypeOf(e){return Kt(re.ToObject(e))})}}var Zt=s&&function(){var e=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags");return e&&re.IsCallable(e.get)}();if(s&&!Zt){var Yt=function flags(){if(!re.TypeIsObject(this)){throw new TypeError("Method called on incompatible type: must be an object.")}var e="";if(this.global){e+="g"}if(this.ignoreCase){e+="i"}if(this.multiline){e+="m"}if(this.unicode){e+="u"}if(this.sticky){e+="y"}return e};O.getter(RegExp.prototype,"flags",Yt)}var Qt=s&&a(function(){return String(new RegExp(/a/g,"i"))==="/a/i"});var er=Y&&s&&function(){var e=/./;e[G.match]=false;return RegExp(e)===e}();var tr=a(function(){return RegExp.prototype.toString.call({source:"abc"})==="/abc/"});var rr=tr&&a(function(){return RegExp.prototype.toString.call({source:"a",flags:"b"})==="/a/b"});if(!tr||!rr){var nr=RegExp.prototype.toString;h(RegExp.prototype,"toString",function toString(){var e=re.RequireObjectCoercible(this);if(K.regex(e)){return t(nr,e)}var r=te(e.source);var n=te(e.flags);return"/"+r+"/"+n},true);O.preserveToString(RegExp.prototype.toString,nr)}if(s&&(!Qt||er)){var or=Object.getOwnPropertyDescriptor(RegExp.prototype,"flags").get;var ir=Object.getOwnPropertyDescriptor(RegExp.prototype,"source")||{};var ar=function(){return this.source};var ur=re.IsCallable(ir.get)?ir.get:ar;var fr=RegExp;var sr=function(){return function RegExp(e,t){var r=re.IsRegExp(e);var n=this instanceof RegExp;if(!n&&r&&typeof t==="undefined"&&e.constructor===RegExp){return e}var o=e;var i=t;if(K.regex(e)){o=re.Call(ur,e);i=typeof t==="undefined"?re.Call(or,e):t;return new RegExp(o,i)}else if(r){o=e.source;i=typeof t==="undefined"?e.flags:t}return new fr(e,t)}}();de(fr,sr,{$input:true});RegExp=sr;O.redefine(S,"RegExp",sr)}if(s){var cr={input:"$_",lastMatch:"$&",lastParen:"$+",leftContext:"$`",rightContext:"$'"};l(n(cr),function(e){if(e in RegExp&&!(cr[e]in RegExp)){O.getter(RegExp,cr[e],function get(){return RegExp[e]})}})}me(RegExp);var lr=1/Number.EPSILON;var pr=function roundTiesToEven(e){return e+lr-lr};var vr=Math.pow(2,-23);var yr=Math.pow(2,127)*(2-vr);var hr=Math.pow(2,-126);var br=Math.E;var gr=Math.LOG2E;var dr=Math.LOG10E;var Or=Number.prototype.clz;delete Number.prototype.clz;var mr={acosh:function acosh(e){var t=Number(e);if(V(t)||e<1){return NaN}if(t===1){return 0}if(t===Infinity){return t}return L(t/br+D(t+1)*D(t-1)/br)+1},asinh:function asinh(e){var t=Number(e);if(t===0||!T(t)){return t}return t<0?-asinh(-t):L(t+D(t*t+1))},atanh:function atanh(e){var t=Number(e);if(V(t)||t<-1||t>1){return NaN}if(t===-1){return-Infinity}if(t===1){return Infinity}if(t===0){return t}return.5*L((1+t)/(1-t))},cbrt:function cbrt(e){var t=Number(e);if(t===0){return t}var r=t<0;var n;if(r){t=-t}if(t===Infinity){n=Infinity}else{n=F(L(t)/3);n=(t/(n*n)+2*n)/3}return r?-n:n},clz32:function clz32(e){var t=Number(e);var r=re.ToUint32(t);if(r===0){return 32}return Or?re.Call(Or,r):31-_(L(r+.5)*gr)},cosh:function cosh(e){var t=Number(e);if(t===0){return 1}if(V(t)){return NaN}if(!T(t)){return Infinity}if(t<0){t=-t}if(t>21){return F(t)/2}return(F(t)+F(-t))/2},expm1:function expm1(e){var t=Number(e);if(t===-Infinity){return-1}if(!T(t)||t===0){return t}if(k(t)>.5){return F(t)-1}var r=t;var n=0;var o=1;while(n+r!==n){n+=r;o+=1;r*=t/o}return n},hypot:function hypot(e,t){var r=0;var n=0;for(var o=0;o<arguments.length;++o){var i=k(Number(arguments[o]));if(n<i){r*=n/i*(n/i);r+=1;n=i}else{r+=i>0?i/n*(i/n):i}}return n===Infinity?Infinity:n*D(r)},log2:function log2(e){return L(e)*gr},log10:function log10(e){return L(e)*dr},log1p:function log1p(e){var t=Number(e);if(t<-1||V(t)){return NaN}if(t===0||t===Infinity){return t}if(t===-1){return-Infinity}return 1+t-1===0?t:t*(L(1+t)/(1+t-1))},sign:$,sinh:function sinh(e){var t=Number(e);if(!T(t)||t===0){return t}if(k(t)<1){return(Math.expm1(t)-Math.expm1(-t))/2}return(F(t-1)-F(-t-1))*br/2},tanh:function tanh(e){var t=Number(e);if(V(t)||t===0){return t}if(t>=20){return 1}if(t<=-20){return-1}return(Math.expm1(t)-Math.expm1(-t))/(F(t)+F(-t))},trunc:function trunc(e){var t=Number(e);return t<0?-_(-t):_(t)},imul:function imul(e,t){var r=re.ToUint32(e);var n=re.ToUint32(t);var o=r>>>16&65535;var i=r&65535;var a=n>>>16&65535;var u=n&65535;return i*u+(o*u+i*a<<16>>>0)|0},fround:function fround(e){var t=Number(e);if(t===0||t===Infinity||t===-Infinity||V(t)){return t}var r=$(t);var n=k(t);if(n<hr){return r*pr(n/hr/vr)*hr*vr}var o=(1+vr/Number.EPSILON)*n;var i=o-(o-n);if(i>yr||V(i)){return r*Infinity}return r*i}};b(Math,mr);h(Math,"log1p",mr.log1p,Math.log1p(-1e-17)!==-1e-17);h(Math,"asinh",mr.asinh,Math.asinh(-1e7)!==-Math.asinh(1e7));h(Math,"tanh",mr.tanh,Math.tanh(-2e-17)!==-2e-17);h(Math,"acosh",mr.acosh,Math.acosh(Number.MAX_VALUE)===Infinity);h(Math,"cbrt",mr.cbrt,Math.abs(1-Math.cbrt(1e-300)/1e-100)/Number.EPSILON>8);h(Math,"sinh",mr.sinh,Math.sinh(-2e-17)!==-2e-17);var wr=Math.expm1(10);h(Math,"expm1",mr.expm1,wr>22025.465794806718||wr<22025.465794806718);var jr=Math.round;var Sr=Math.round(.5-Number.EPSILON/4)===0&&Math.round(-.5+Number.EPSILON/3.99)===1;var Tr=lr+1;var Ir=2*lr-1;var Er=[Tr,Ir].every(function(e){return Math.round(e)===e});h(Math,"round",function round(e){var t=_(e);var r=t===-1?-0:t+1;return e-t<.5?t:r},!Sr||!Er);O.preserveToString(Math.round,jr);var Pr=Math.imul;if(Math.imul(4294967295,5)!==-5){Math.imul=mr.imul;O.preserveToString(Math.imul,Pr)}if(Math.imul.length!==2){Z(Math,"imul",function imul(e,t){return re.Call(Pr,Math,arguments);
})}var Cr=function(){var e=S.setTimeout;if(typeof e!=="function"&&typeof e!=="object"){return}re.IsPromise=function(e){if(!re.TypeIsObject(e)){return false}if(typeof e._promise==="undefined"){return false}return true};var r=function(e){if(!re.IsConstructor(e)){throw new TypeError("Bad promise constructor")}var t=this;var r=function(e,r){if(t.resolve!==void 0||t.reject!==void 0){throw new TypeError("Bad Promise implementation!")}t.resolve=e;t.reject=r};t.resolve=void 0;t.reject=void 0;t.promise=new e(r);if(!(re.IsCallable(t.resolve)&&re.IsCallable(t.reject))){throw new TypeError("Bad promise constructor")}};var n;if(typeof window!=="undefined"&&re.IsCallable(window.postMessage)){n=function(){var e=[];var t="zero-timeout-message";var r=function(r){M(e,r);window.postMessage(t,"*")};var n=function(r){if(r.source===window&&r.data===t){r.stopPropagation();if(e.length===0){return}var n=N(e);n()}};window.addEventListener("message",n,true);return r}}var o=function(){var e=S.Promise;var t=e&&e.resolve&&e.resolve();return t&&function(e){return t.then(e)}};var i=re.IsCallable(S.setImmediate)?S.setImmediate:typeof process==="object"&&process.nextTick?process.nextTick:o()||(re.IsCallable(n)?n():function(t){e(t,0)});var a=function(e){return e};var u=function(e){throw e};var f=0;var s=1;var c=2;var l=0;var p=1;var v=2;var y={};var h=function(e,t,r){i(function(){g(e,t,r)})};var g=function(e,t,r){var n,o;if(t===y){return e(r)}try{n=e(r);o=t.resolve}catch(i){n=i;o=t.reject}o(n)};var d=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.fulfillReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+l],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=s;r.reactionLength=0};var O=function(e,t){var r=e._promise;var n=r.reactionLength;if(n>0){h(r.rejectReactionHandler0,r.reactionCapability0,t);r.fulfillReactionHandler0=void 0;r.rejectReactions0=void 0;r.reactionCapability0=void 0;if(n>1){for(var o=1,i=0;o<n;o++,i+=3){h(r[i+p],r[i+v],t);e[i+l]=void 0;e[i+p]=void 0;e[i+v]=void 0}}}r.result=t;r.state=c;r.reactionLength=0};var m=function(e){var t=false;var r=function(r){var n;if(t){return}t=true;if(r===e){return O(e,new TypeError("Self resolution"))}if(!re.TypeIsObject(r)){return d(e,r)}try{n=r.then}catch(o){return O(e,o)}if(!re.IsCallable(n)){return d(e,r)}i(function(){j(e,r,n)})};var n=function(r){if(t){return}t=true;return O(e,r)};return{resolve:r,reject:n}};var w=function(e,r,n,o){if(e===I){t(e,r,n,o,y)}else{t(e,r,n,o)}};var j=function(e,t,r){var n=m(e);var o=n.resolve;var i=n.reject;try{w(r,t,o,i)}catch(a){i(a)}};var T,I;var E=function(){var e=function Promise(t){if(!(this instanceof e)){throw new TypeError('Constructor Promise requires "new"')}if(this&&this._promise){throw new TypeError("Bad construction")}if(!re.IsCallable(t)){throw new TypeError("not a valid resolver")}var r=Te(this,e,T,{_promise:{result:void 0,state:f,reactionLength:0,fulfillReactionHandler0:void 0,rejectReactionHandler0:void 0,reactionCapability0:void 0}});var n=m(r);var o=n.reject;try{t(n.resolve,o)}catch(i){o(i)}return r};return e}();T=E.prototype;var P=function(e,t,r,n){var o=false;return function(i){if(o){return}o=true;t[e]=i;if(--n.count===0){var a=r.resolve;a(t)}}};var C=function(e,t,r){var n=e.iterator;var o=[];var i={count:1};var a,u;var f=0;while(true){try{a=re.IteratorStep(n);if(a===false){e.done=true;break}u=a.value}catch(s){e.done=true;throw s}o[f]=void 0;var c=t.resolve(u);var l=P(f,o,r,i);i.count+=1;w(c.then,c,l,r.reject);f+=1}if(--i.count===0){var p=r.resolve;p(o)}return r.promise};var x=function(e,t,r){var n=e.iterator;var o,i,a;while(true){try{o=re.IteratorStep(n);if(o===false){e.done=true;break}i=o.value}catch(u){e.done=true;throw u}a=t.resolve(i);w(a.then,a,r.resolve,r.reject)}return r.promise};b(E,{all:function all(e){var t=this;if(!re.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=re.GetIterator(e);i={iterator:o,done:false};return C(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{re.IteratorClose(o,true)}catch(f){u=f}}var s=n.reject;s(u);return n.promise}},race:function race(e){var t=this;if(!re.TypeIsObject(t)){throw new TypeError("Promise is not object")}var n=new r(t);var o,i;try{o=re.GetIterator(e);i={iterator:o,done:false};return x(i,t,n)}catch(a){var u=a;if(i&&!i.done){try{re.IteratorClose(o,true)}catch(f){u=f}}var s=n.reject;s(u);return n.promise}},reject:function reject(e){var t=this;if(!re.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}var n=new r(t);var o=n.reject;o(e);return n.promise},resolve:function resolve(e){var t=this;if(!re.TypeIsObject(t)){throw new TypeError("Bad promise constructor")}if(re.IsPromise(e)){var n=e.constructor;if(n===t){return e}}var o=new r(t);var i=o.resolve;i(e);return o.promise}});b(T,{"catch":function(e){return this.then(null,e)},then:function then(e,t){var n=this;if(!re.IsPromise(n)){throw new TypeError("not a promise")}var o=re.SpeciesConstructor(n,E);var i;var b=arguments.length>2&&arguments[2]===y;if(b&&o===E){i=y}else{i=new r(o)}var g=re.IsCallable(e)?e:a;var d=re.IsCallable(t)?t:u;var O=n._promise;var m;if(O.state===f){if(O.reactionLength===0){O.fulfillReactionHandler0=g;O.rejectReactionHandler0=d;O.reactionCapability0=i}else{var w=3*(O.reactionLength-1);O[w+l]=g;O[w+p]=d;O[w+v]=i}O.reactionLength+=1}else if(O.state===s){m=O.result;h(g,i,m)}else if(O.state===c){m=O.result;h(d,i,m)}else{throw new TypeError("unexpected Promise state")}return i.promise}});y=new r(E);I=T.then;return E}();if(S.Promise){delete S.Promise.accept;delete S.Promise.defer;delete S.Promise.prototype.chain}if(typeof Cr==="function"){b(S,{Promise:Cr});var Mr=w(S.Promise,function(e){return e.resolve(42).then(function(){})instanceof e});var xr=!i(function(){S.Promise.reject(42).then(null,5).then(null,W)});var Nr=i(function(){S.Promise.call(3,W)});var Ar=function(e){var t=e.resolve(5);t.constructor={};var r=e.resolve(t);try{r.then(null,W).then(null,W)}catch(n){return true}return t===r}(S.Promise);var Rr=s&&function(){var e=0;var t=Object.defineProperty({},"then",{get:function(){e+=1}});Promise.resolve(t);return e===1}();var _r=function BadResolverPromise(e){var t=new Promise(e);e(3,function(){});this.then=t.then;this.constructor=BadResolverPromise};_r.prototype=Promise.prototype;_r.all=Promise.all;var kr=a(function(){return!!_r.all([1,2])});if(!Mr||!xr||!Nr||Ar||!Rr||kr){Promise=Cr;Z(S,"Promise",Cr)}if(Promise.all.length!==1){var Fr=Promise.all;Z(Promise,"all",function all(e){return re.Call(Fr,this,arguments)})}if(Promise.race.length!==1){var Lr=Promise.race;Z(Promise,"race",function race(e){return re.Call(Lr,this,arguments)})}if(Promise.resolve.length!==1){var Dr=Promise.resolve;Z(Promise,"resolve",function resolve(e){return re.Call(Dr,this,arguments)})}if(Promise.reject.length!==1){var zr=Promise.reject;Z(Promise,"reject",function reject(e){return re.Call(zr,this,arguments)})}wt(Promise,"all");wt(Promise,"race");wt(Promise,"resolve");wt(Promise,"reject");me(Promise)}var qr=function(e){var t=n(p(e,function(e,t){e[t]=true;return e},{}));return e.join(":")===t.join(":")};var Wr=qr(["z","a","bb"]);var Gr=qr(["z",1,"a","3",2]);if(s){var Hr=function fastkey(e){if(!Wr){return null}if(typeof e==="undefined"||e===null){return"^"+re.ToString(e)}else if(typeof e==="string"){return"$"+e}else if(typeof e==="number"){if(!Gr){return"n"+e}return e}else if(typeof e==="boolean"){return"b"+e}return null};var Vr=function emptyObject(){return Object.create?Object.create(null):{}};var Br=function addIterableToMap(e,n,o){if(r(o)||K.string(o)){l(o,function(e){if(!re.TypeIsObject(e)){throw new TypeError("Iterator value "+e+" is not an entry object")}n.set(e[0],e[1])})}else if(o instanceof e){t(e.prototype.forEach,o,function(e,t){n.set(t,e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.set;if(!re.IsCallable(a)){throw new TypeError("bad map")}i=re.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=re.IteratorStep(i);if(u===false){break}var f=u.value;try{if(!re.TypeIsObject(f)){throw new TypeError("Iterator value "+f+" is not an entry object")}t(a,n,f[0],f[1])}catch(s){re.IteratorClose(i,true);throw s}}}}};var $r=function addIterableToSet(e,n,o){if(r(o)||K.string(o)){l(o,function(e){n.add(e)})}else if(o instanceof e){t(e.prototype.forEach,o,function(e){n.add(e)})}else{var i,a;if(o!==null&&typeof o!=="undefined"){a=n.add;if(!re.IsCallable(a)){throw new TypeError("bad set")}i=re.GetIterator(o)}if(typeof i!=="undefined"){while(true){var u=re.IteratorStep(i);if(u===false){break}var f=u.value;try{t(a,n,f)}catch(s){re.IteratorClose(i,true);throw s}}}}};var Ur={Map:function(){var e={};var r=function MapEntry(e,t){this.key=e;this.value=t;this.next=null;this.prev=null};r.prototype.isRemoved=function isRemoved(){return this.key===e};var n=function isMap(e){return!!e._es6map};var o=function requireMapSlot(e,t){if(!re.TypeIsObject(e)||!n(e)){throw new TypeError("Method Map.prototype."+t+" called on incompatible receiver "+re.ToString(e))}};var i=function MapIterator(e,t){o(e,"[[MapIterator]]");this.head=e._head;this.i=this.head;this.kind=t};i.prototype={next:function next(){var e=this.i;var t=this.kind;var r=this.head;if(typeof this.i==="undefined"){return Ge()}while(e.isRemoved()&&e!==r){e=e.prev}var n;while(e.next!==r){e=e.next;if(!e.isRemoved()){if(t==="key"){n=e.key}else if(t==="value"){n=e.value}else{n=[e.key,e.value]}this.i=e;return Ge(n)}}this.i=void 0;return Ge()}};we(i.prototype);var a;var u=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}if(this&&this._es6map){throw new TypeError("Bad construction")}var e=Te(this,Map,a,{_es6map:true,_head:null,_storage:Vr(),_size:0});var t=new r(null,null);t.next=t.prev=t;e._head=t;if(arguments.length>0){Br(Map,e,arguments[0])}return e};a=u.prototype;O.getter(a,"size",function(){if(typeof this._size==="undefined"){throw new TypeError("size method called on incompatible Map")}return this._size});b(a,{get:function get(e){o(this,"get");var t=Hr(e);if(t!==null){var r=this._storage[t];if(r){return r.value}else{return}}var n=this._head;var i=n;while((i=i.next)!==n){if(re.SameValueZero(i.key,e)){return i.value}}},has:function has(e){o(this,"has");var t=Hr(e);if(t!==null){return typeof this._storage[t]!=="undefined"}var r=this._head;var n=r;while((n=n.next)!==r){if(re.SameValueZero(n.key,e)){return true}}return false},set:function set(e,t){o(this,"set");var n=this._head;var i=n;var a;var u=Hr(e);if(u!==null){if(typeof this._storage[u]!=="undefined"){this._storage[u].value=t;return this}else{a=this._storage[u]=new r(e,t);i=n.prev}}while((i=i.next)!==n){if(re.SameValueZero(i.key,e)){i.value=t;return this}}a=a||new r(e,t);if(re.SameValue(-0,e)){a.key=+0}a.next=this._head;a.prev=this._head.prev;a.prev.next=a;a.next.prev=a;this._size+=1;return this},"delete":function(t){o(this,"delete");var r=this._head;var n=r;var i=Hr(t);if(i!==null){if(typeof this._storage[i]==="undefined"){return false}n=this._storage[i].prev;delete this._storage[i]}while((n=n.next)!==r){if(re.SameValueZero(n.key,t)){n.key=n.value=e;n.prev.next=n.next;n.next.prev=n.prev;this._size-=1;return true}}return false},clear:function clear(){o(this,"clear");this._size=0;this._storage=Vr();var t=this._head;var r=t;var n=r.next;while((r=n)!==t){r.key=r.value=e;n=r.next;r.next=r.prev=t}t.next=t.prev=t},keys:function keys(){o(this,"keys");return new i(this,"key")},values:function values(){o(this,"values");return new i(this,"value")},entries:function entries(){o(this,"entries");return new i(this,"key+value")},forEach:function forEach(e){o(this,"forEach");var r=arguments.length>1?arguments[1]:null;var n=this.entries();for(var i=n.next();!i.done;i=n.next()){if(r){t(e,r,i.value[1],i.value[0],this)}else{e(i.value[1],i.value[0],this)}}}});we(a,a.entries);return u}(),Set:function(){var e=function isSet(e){return e._es6set&&typeof e._storage!=="undefined"};var r=function requireSetSlot(t,r){if(!re.TypeIsObject(t)||!e(t)){throw new TypeError("Set.prototype."+r+" called on incompatible receiver "+re.ToString(t))}};var o;var i=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}if(this&&this._es6set){throw new TypeError("Bad construction")}var e=Te(this,Set,o,{_es6set:true,"[[SetData]]":null,_storage:Vr()});if(!e._es6set){throw new TypeError("bad set")}if(arguments.length>0){$r(Set,e,arguments[0])}return e};o=i.prototype;var a=function(e){var t=e;if(t==="^null"){return null}else if(t==="^undefined"){return void 0}else{var r=t.charAt(0);if(r==="$"){return C(t,1)}else if(r==="n"){return+C(t,1)}else if(r==="b"){return t==="btrue"}}return+t};var u=function ensureMap(e){if(!e["[[SetData]]"]){var t=e["[[SetData]]"]=new Ur.Map;l(n(e._storage),function(e){var r=a(e);t.set(r,r)});e["[[SetData]]"]=t}e._storage=null};O.getter(i.prototype,"size",function(){r(this,"size");if(this._storage){return n(this._storage).length}u(this);return this["[[SetData]]"].size});b(i.prototype,{has:function has(e){r(this,"has");var t;if(this._storage&&(t=Hr(e))!==null){return!!this._storage[t]}u(this);return this["[[SetData]]"].has(e)},add:function add(e){r(this,"add");var t;if(this._storage&&(t=Hr(e))!==null){this._storage[t]=true;return this}u(this);this["[[SetData]]"].set(e,e);return this},"delete":function(e){r(this,"delete");var t;if(this._storage&&(t=Hr(e))!==null){var n=z(this._storage,t);return delete this._storage[t]&&n}u(this);return this["[[SetData]]"]["delete"](e)},clear:function clear(){r(this,"clear");if(this._storage){this._storage=Vr()}if(this["[[SetData]]"]){this["[[SetData]]"].clear()}},values:function values(){r(this,"values");u(this);return this["[[SetData]]"].values()},entries:function entries(){r(this,"entries");u(this);return this["[[SetData]]"].entries()},forEach:function forEach(e){r(this,"forEach");var n=arguments.length>1?arguments[1]:null;var o=this;u(o);this["[[SetData]]"].forEach(function(r,i){if(n){t(e,n,i,i,o)}else{e(i,i,o)}})}});h(i.prototype,"keys",i.prototype.values,true);we(i.prototype,i.prototype.values);return i}()};if(S.Map||S.Set){var Jr=a(function(){return new Map([[1,2]]).get(1)===2});if(!Jr){var Xr=S.Map;S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new Xr;if(arguments.length>0){Br(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,S.Map.prototype);return e};S.Map.prototype=m(Xr.prototype);h(S.Map.prototype,"constructor",S.Map,true);O.preserveToString(S.Map,Xr)}var Kr=new Map;var Zr=function(){var e=new Map([[1,0],[2,0],[3,0],[4,0]]);e.set(-0,e);return e.get(0)===e&&e.get(-0)===e&&e.has(0)&&e.has(-0)}();var Yr=Kr.set(1,2)===Kr;if(!Zr||!Yr){var Qr=Map.prototype.set;Z(Map.prototype,"set",function set(e,r){t(Qr,this,e===0?0:e,r);return this})}if(!Zr){var en=Map.prototype.get;var tn=Map.prototype.has;b(Map.prototype,{get:function get(e){return t(en,this,e===0?0:e)},has:function has(e){return t(tn,this,e===0?0:e)}},true);O.preserveToString(Map.prototype.get,en);O.preserveToString(Map.prototype.has,tn)}var rn=new Set;var nn=function(e){e["delete"](0);e.add(-0);return!e.has(0)}(rn);var on=rn.add(1)===rn;if(!nn||!on){var an=Set.prototype.add;Set.prototype.add=function add(e){t(an,this,e===0?0:e);return this};O.preserveToString(Set.prototype.add,an)}if(!nn){var un=Set.prototype.has;Set.prototype.has=function has(e){return t(un,this,e===0?0:e)};O.preserveToString(Set.prototype.has,un);var fn=Set.prototype["delete"];Set.prototype["delete"]=function SetDelete(e){return t(fn,this,e===0?0:e)};O.preserveToString(Set.prototype["delete"],fn)}var sn=w(S.Map,function(e){var t=new e([]);t.set(42,42);return t instanceof e});var cn=Object.setPrototypeOf&&!sn;var ln=function(){try{return!(S.Map()instanceof S.Map)}catch(e){return e instanceof TypeError}}();if(S.Map.length!==0||cn||!ln){var pn=S.Map;S.Map=function Map(){if(!(this instanceof Map)){throw new TypeError('Constructor Map requires "new"')}var e=new pn;if(arguments.length>0){Br(Map,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Map.prototype);return e};S.Map.prototype=pn.prototype;h(S.Map.prototype,"constructor",S.Map,true);O.preserveToString(S.Map,pn)}var vn=w(S.Set,function(e){var t=new e([]);t.add(42,42);return t instanceof e});var yn=Object.setPrototypeOf&&!vn;var hn=function(){try{return!(S.Set()instanceof S.Set)}catch(e){return e instanceof TypeError}}();if(S.Set.length!==0||yn||!hn){var bn=S.Set;S.Set=function Set(){if(!(this instanceof Set)){throw new TypeError('Constructor Set requires "new"')}var e=new bn;if(arguments.length>0){$r(Set,e,arguments[0])}delete e.constructor;Object.setPrototypeOf(e,Set.prototype);return e};S.Set.prototype=bn.prototype;h(S.Set.prototype,"constructor",S.Set,true);O.preserveToString(S.Set,bn)}var gn=new S.Map;var dn=!a(function(){return gn.keys().next().done});if(typeof S.Map.prototype.clear!=="function"||(new S.Set).size!==0||gn.size!==0||typeof S.Map.prototype.keys!=="function"||typeof S.Set.prototype.keys!=="function"||typeof S.Map.prototype.forEach!=="function"||typeof S.Set.prototype.forEach!=="function"||u(S.Map)||u(S.Set)||typeof gn.keys().next!=="function"||dn||!sn){b(S,{Map:Ur.Map,Set:Ur.Set},true)}if(S.Set.prototype.keys!==S.Set.prototype.values){h(S.Set.prototype,"keys",S.Set.prototype.values,true)}we(Object.getPrototypeOf((new S.Map).keys()));we(Object.getPrototypeOf((new S.Set).keys()));if(c&&S.Set.prototype.has.name!=="has"){var On=S.Set.prototype.has;Z(S.Set.prototype,"has",function has(e){return t(On,this,e)})}}b(S,Ur);me(S.Map);me(S.Set)}var mn=function throwUnlessTargetIsObject(e){if(!re.TypeIsObject(e)){throw new TypeError("target must be an object")}};var wn={apply:function apply(){return re.Call(re.Call,null,arguments)},construct:function construct(e,t){if(!re.IsConstructor(e)){throw new TypeError("First argument must be a constructor.")}var r=arguments.length>2?arguments[2]:e;if(!re.IsConstructor(r)){throw new TypeError("new.target must be a constructor.")}return re.Construct(e,t,r,"internal")},deleteProperty:function deleteProperty(e,t){mn(e);if(s){var r=Object.getOwnPropertyDescriptor(e,t);if(r&&!r.configurable){return false}}return delete e[t]},has:function has(e,t){mn(e);return t in e}};if(Object.getOwnPropertyNames){Object.assign(wn,{ownKeys:function ownKeys(e){mn(e);var t=Object.getOwnPropertyNames(e);if(re.IsCallable(Object.getOwnPropertySymbols)){x(t,Object.getOwnPropertySymbols(e))}return t}})}var jn=function ConvertExceptionToBoolean(e){return!i(e)};if(Object.preventExtensions){Object.assign(wn,{isExtensible:function isExtensible(e){mn(e);return Object.isExtensible(e)},preventExtensions:function preventExtensions(e){mn(e);return jn(function(){Object.preventExtensions(e)})}})}if(s){var Sn=function get(e,t,r){var n=Object.getOwnPropertyDescriptor(e,t);if(!n){var o=Object.getPrototypeOf(e);if(o===null){return void 0}return Sn(o,t,r)}if("value"in n){return n.value}if(n.get){return re.Call(n.get,r)}return void 0};var Tn=function set(e,r,n,o){var i=Object.getOwnPropertyDescriptor(e,r);if(!i){var a=Object.getPrototypeOf(e);if(a!==null){return Tn(a,r,n,o)}i={value:void 0,writable:true,enumerable:true,configurable:true}}if("value"in i){if(!i.writable){return false}if(!re.TypeIsObject(o)){return false}var u=Object.getOwnPropertyDescriptor(o,r);if(u){return ee.defineProperty(o,r,{value:n})}else{return ee.defineProperty(o,r,{value:n,writable:true,enumerable:true,configurable:true})}}if(i.set){t(i.set,o,n);return true}return false};Object.assign(wn,{defineProperty:function defineProperty(e,t,r){mn(e);return jn(function(){Object.defineProperty(e,t,r)})},getOwnPropertyDescriptor:function getOwnPropertyDescriptor(e,t){mn(e);return Object.getOwnPropertyDescriptor(e,t)},get:function get(e,t){mn(e);var r=arguments.length>2?arguments[2]:e;return Sn(e,t,r)},set:function set(e,t,r){mn(e);var n=arguments.length>3?arguments[3]:e;return Tn(e,t,r,n)}})}if(Object.getPrototypeOf){var In=Object.getPrototypeOf;wn.getPrototypeOf=function getPrototypeOf(e){mn(e);return In(e)}}if(Object.setPrototypeOf&&wn.getPrototypeOf){var En=function(e,t){var r=t;while(r){if(e===r){return true}r=wn.getPrototypeOf(r)}return false};Object.assign(wn,{setPrototypeOf:function setPrototypeOf(e,t){mn(e);if(t!==null&&!re.TypeIsObject(t)){throw new TypeError("proto must be an object or null")}if(t===ee.getPrototypeOf(e)){return true}if(ee.isExtensible&&!ee.isExtensible(e)){return false}if(En(e,t)){return false}Object.setPrototypeOf(e,t);return true}})}var Pn=function(e,t){if(!re.IsCallable(S.Reflect[e])){h(S.Reflect,e,t)}else{var r=a(function(){S.Reflect[e](1);S.Reflect[e](NaN);S.Reflect[e](true);return true});if(r){Z(S.Reflect,e,t)}}};Object.keys(wn).forEach(function(e){Pn(e,wn[e])});var Cn=S.Reflect.getPrototypeOf;if(c&&Cn&&Cn.name!=="getPrototypeOf"){Z(S.Reflect,"getPrototypeOf",function getPrototypeOf(e){return t(Cn,S.Reflect,e)})}if(S.Reflect.setPrototypeOf){if(a(function(){S.Reflect.setPrototypeOf(1,{});return true})){Z(S.Reflect,"setPrototypeOf",wn.setPrototypeOf)}}if(S.Reflect.defineProperty){if(!a(function(){var e=!S.Reflect.defineProperty(1,"test",{value:1});var t=typeof Object.preventExtensions!=="function"||!S.Reflect.defineProperty(Object.preventExtensions({}),"test",{});return e&&t})){Z(S.Reflect,"defineProperty",wn.defineProperty)}}if(S.Reflect.construct){if(!a(function(){var e=function F(){};return S.Reflect.construct(function(){},[],e)instanceof e})){Z(S.Reflect,"construct",wn.construct)}}if(String(new Date(NaN))!=="Invalid Date"){var Mn=Date.prototype.toString;var xn=function toString(){var e=+this;if(e!==e){return"Invalid Date"}return re.Call(Mn,this)};Z(Date.prototype,"toString",xn)}var Nn={anchor:function anchor(e){return re.CreateHTML(this,"a","name",e)},big:function big(){return re.CreateHTML(this,"big","","")},blink:function blink(){return re.CreateHTML(this,"blink","","")},bold:function bold(){return re.CreateHTML(this,"b","","")},fixed:function fixed(){return re.CreateHTML(this,"tt","","")},fontcolor:function fontcolor(e){return re.CreateHTML(this,"font","color",e)},fontsize:function fontsize(e){return re.CreateHTML(this,"font","size",e)},italics:function italics(){return re.CreateHTML(this,"i","","")},link:function link(e){return re.CreateHTML(this,"a","href",e)},small:function small(){return re.CreateHTML(this,"small","","")},strike:function strike(){return re.CreateHTML(this,"strike","","")},sub:function sub(){return re.CreateHTML(this,"sub","","")},sup:function sub(){return re.CreateHTML(this,"sup","","")}};l(Object.keys(Nn),function(e){var r=String.prototype[e];var n=false;if(re.IsCallable(r)){var o=t(r,"",' " ');var i=P([],o.match(/"/g)).length;n=o!==o.toLowerCase()||i>2}else{n=true}if(n){Z(String.prototype,e,Nn[e])}});var An=function(){if(!Y){return false}var e=typeof JSON==="object"&&typeof JSON.stringify==="function"?JSON.stringify:null;if(!e){return false}if(typeof e(G())!=="undefined"){return true}if(e([G()])!=="[null]"){return true}var t={a:G()};t[G()]=true;if(e(t)!=="{}"){return true}return false}();var Rn=a(function(){if(!Y){return true}return JSON.stringify(Object(G()))==="{}"&&JSON.stringify([Object(G())])==="[{}]"});if(An||!Rn){var _n=JSON.stringify;Z(JSON,"stringify",function stringify(e){if(typeof e==="symbol"){return}var n;if(arguments.length>1){n=arguments[1]}var o=[e];if(!r(n)){var i=re.IsCallable(n)?n:null;var a=function(e,r){var n=i?t(i,this,e,r):r;if(typeof n!=="symbol"){if(K.symbol(n)){return St({})(n)}else{return n}}};o.push(a)}else{o.push(n)}if(arguments.length>2){o.push(arguments[2])}return _n.apply(this,o)})}return S});
//# sourceMappingURL=es6-shim.map

/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
 * @version   3.2.1
 */

(function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){G=t}function r(t){Q=t}function o(){return function(){process.nextTick(a)}}function i(){return function(){B(a)}}function s(){var t=0,e=new X(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){t.port2.postMessage(0)}}function c(){return function(){setTimeout(a,1)}}function a(){for(var t=0;J>t;t+=2){var e=tt[t],n=tt[t+1];e(n),tt[t]=void 0,tt[t+1]=void 0}J=0}function f(){try{var t=require,e=t("vertx");return B=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[rt]&&k(r);var o=n._state;if(o){var i=arguments[o-1];Q(function(){x(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function _(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(e){return ut.error=e,ut}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){Q(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===it?S(t,e._result):e._state===st?j(t,e._result):E(e,void 0,function(e){g(t,e)},function(e){j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===et&&constructor.resolve===nt?b(t,n):r===ut?j(t,ut.error):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,_()):t(n)?w(e,n,v(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===ot&&(t._result=e,t._state=it,0!==t._subscribers.length&&Q(T,t))}function j(t,e){t._state===ot&&(t._state=st,t._result=e,Q(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+it]=n,o[i+st]=r,0===i&&t._state&&Q(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r,o,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return ct.error=n,ct}}function x(t,n,r,o){var i,s,u,c,a=e(r);if(a){if(i=P(r,o),i===ct?(c=!0,s=i.error,i=null):u=!0,n===i)return void j(n,d())}else i=o,u=!0;n._state!==ot||(a&&u?g(n,i):c?j(n,s):t===it?S(n,i):t===st&&j(n,i))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return at++}function k(t){t[rt]=at++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t){return new _t(this,t).promise}function q(t){var e=this;return new e(I(t)?function(n,r){for(var o=t.length,i=0;o>i;i++)e.resolve(t[i]).then(n,r)}:function(t,e){e(new TypeError("You must pass an array to race."))})}function F(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(t){this[rt]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&D(),this instanceof L?C(this,t):K())}function N(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[rt]||k(this.promise),I(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,U())}function U(){return new Error("Array Methods must be provided an Array")}function W(){var t;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;(!n||"[object Promise]"!==Object.prototype.toString.call(n.resolve())||n.cast)&&(t.Promise=pt)}var z;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B,G,H,I=z,J=0,Q=function(t,e){tt[J]=t,tt[J+1]=e,J+=2,2===J&&(G?G(a):H())},R="undefined"!=typeof window?window:void 0,V=R||{},X=V.MutationObserver||V.WebKitMutationObserver,Z="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),$="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,tt=new Array(1e3);H=Z?o():X?s():$?u():void 0===R&&"function"==typeof require?f():c();var et=l,nt=h,rt=Math.random().toString(36).substring(16),ot=void 0,it=1,st=2,ut=new M,ct=new M,at=0,ft=Y,lt=q,ht=F,pt=L;L.all=ft,L.race=lt,L.resolve=nt,L.reject=ht,L._setScheduler=n,L._setAsap=r,L._asap=Q,L.prototype={constructor:L,then:et,"catch":function(t){return this.then(null,t)}};var _t=N;N.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===ot&&t>n;n++)this._eachEntry(e[n],n)},N.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===nt){var o=v(t);if(o===et&&t._state!==ot)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===pt){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){e(t)}),e)}else this._willSettleAt(r(t),e)},N.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===ot&&(this._remaining--,t===st?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},N.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){n._settledAt(it,e,t)},function(t){n._settledAt(st,e,t)})};var dt=W,vt={Promise:pt,polyfill:dt};"function"==typeof define&&define.amd?define(function(){return vt}):"undefined"!=typeof module&&module.exports?module.exports=vt:"undefined"!=typeof this&&(this.ES6Promise=vt),dt()}).call(this);
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var _Map = typeof Map === "function" ? Map : CreateMapPolyfill();
    var _Set = typeof Set === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    var __Metadata__ = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param targetKey (Optional) The property key to decorate.
      * @param targetDescriptor (Optional) The property descriptor for the target key
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     C = Reflect.decorate(decoratorsArray, C);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, C, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, C.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(C, "staticMethod",
      *         Reflect.decorate(decoratorsArray, C, "staticMethod",
      *             Object.getOwnPropertyDescriptor(C, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(C.prototype, "method",
      *         Reflect.decorate(decoratorsArray, C.prototype, "method",
      *             Object.getOwnPropertyDescriptor(C.prototype, "method")));
      *
      */
    function decorate(decorators, target, targetKey, targetDescriptor) {
        if (!IsUndefined(targetDescriptor)) {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsObject(target)) {
                throw new TypeError();
            }
            else if (IsUndefined(targetKey)) {
                throw new TypeError();
            }
            else if (!IsObject(targetDescriptor)) {
                throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            return DecoratePropertyWithDescriptor(decorators, target, targetKey, targetDescriptor);
        }
        else if (!IsUndefined(targetKey)) {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsObject(target)) {
                throw new TypeError();
            }
            targetKey = ToPropertyKey(targetKey);
            return DecoratePropertyWithoutDescriptor(decorators, target, targetKey);
        }
        else {
            if (!IsArray(decorators)) {
                throw new TypeError();
            }
            else if (!IsConstructor(target)) {
                throw new TypeError();
            }
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class C {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class C {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, targetKey) {
            if (!IsUndefined(targetKey)) {
                if (!IsObject(target)) {
                    throw new TypeError();
                }
                targetKey = ToPropertyKey(targetKey);
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
            }
            else {
                if (!IsConstructor(target)) {
                    throw new TypeError();
                }
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, /*targetKey*/ undefined);
            }
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param targetKey (Optional) The property key for the target.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, C);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, C, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, C, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, C.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, targetKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryHasOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetMetadata(metadataKey, target, targetKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryGetOwnMetadata(metadataKey, target, targetKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(C);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(C.prototype, "method");
      *
      */
    function getMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryMetadataKeys(target, targetKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(C);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(C.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        return OrdinaryOwnMetadataKeys(target, targetKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param targetKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class C {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", C);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", C, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", C.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, targetKey) {
        if (!IsObject(target)) {
            throw new TypeError();
        }
        else if (!IsUndefined(targetKey)) {
            targetKey = ToPropertyKey(targetKey);
        }
        // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#deletemetadata-metadatakey-p-
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
        if (IsUndefined(metadataMap)) {
            return false;
        }
        if (!metadataMap.delete(metadataKey)) {
            return false;
        }
        if (metadataMap.size > 0) {
            return true;
        }
        var targetMetadata = __Metadata__.get(target);
        targetMetadata.delete(targetKey);
        if (targetMetadata.size > 0) {
            return true;
        }
        __Metadata__.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated)) {
                if (!IsConstructor(decorated)) {
                    throw new TypeError();
                }
                target = decorated;
            }
        }
        return target;
    }
    function DecoratePropertyWithDescriptor(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated)) {
                if (!IsObject(decorated)) {
                    throw new TypeError();
                }
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function DecoratePropertyWithoutDescriptor(decorators, target, propertyKey) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            decorator(target, propertyKey);
        }
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#getorcreatemetadatamap--o-p-create-
    function GetOrCreateMetadataMap(target, targetKey, create) {
        var targetMetadata = __Metadata__.get(target);
        if (!targetMetadata) {
            if (!create) {
                return undefined;
            }
            targetMetadata = new _Map();
            __Metadata__.set(target, targetMetadata);
        }
        var keyMetadata = targetMetadata.get(targetKey);
        if (!keyMetadata) {
            if (!create) {
                return undefined;
            }
            keyMetadata = new _Map();
            targetMetadata.set(targetKey, keyMetadata);
        }
        return keyMetadata;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasmetadata--metadatakey-o-p-
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
            return true;
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        }
        return false;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryhasownmetadata--metadatakey-o-p-
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        if (metadataMap === undefined) {
            return false;
        }
        return Boolean(metadataMap.has(MetadataKey));
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetmetadata--metadatakey-o-p-
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn) {
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        }
        var parent = GetPrototypeOf(O);
        if (parent !== null) {
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        }
        return undefined;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarygetownmetadata--metadatakey-o-p-
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ false);
        if (metadataMap === undefined) {
            return undefined;
        }
        return metadataMap.get(MetadataKey);
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarydefineownmetadata--metadatakey-metadatavalue-o-p-
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinarymetadatakeys--o-p-
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = GetPrototypeOf(O);
        if (parent === null) {
            return ownKeys;
        }
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) {
            return ownKeys;
        }
        if (ownKeys.length <= 0) {
            return parentKeys;
        }
        var set = new _Set();
        var keys = [];
        for (var _i = 0; _i < ownKeys.length; _i++) {
            var key = ownKeys[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0; _a < parentKeys.length; _a++) {
            var key = parentKeys[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // https://github.com/jonathandturner/decorators/blob/master/specs/metadata.md#ordinaryownmetadatakeys--o-p-
    function OrdinaryOwnMetadataKeys(target, targetKey) {
        var metadataMap = GetOrCreateMetadataMap(target, targetKey, /*create*/ false);
        var keys = [];
        if (metadataMap) {
            metadataMap.forEach(function (_, key) { return keys.push(key); });
        }
        return keys;
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isarray
    function IsArray(x) {
        return Array.isArray(x);
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-isconstructor
    function IsConstructor(x) {
        return typeof x === "function";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-topropertykey
    function ToPropertyKey(value) {
        if (IsSymbol(value)) {
            return value;
        }
        return String(value);
    }
    function GetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) {
            return proto;
        }
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard. 
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype) {
            return proto;
        }
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype) {
            return proto;
        }
        // if the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") {
            return proto;
        }
        // if we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O) {
            return proto;
        }
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        function Map() {
            this._keys = [];
            this._values = [];
            this._cache = cacheSentinel;
        }
        Map.prototype = {
            get size() {
                return this._keys.length;
            },
            has: function (key) {
                if (key === this._cache) {
                    return true;
                }
                if (this._find(key) >= 0) {
                    this._cache = key;
                    return true;
                }
                return false;
            },
            get: function (key) {
                var index = this._find(key);
                if (index >= 0) {
                    this._cache = key;
                    return this._values[index];
                }
                return undefined;
            },
            set: function (key, value) {
                this.delete(key);
                this._keys.push(key);
                this._values.push(value);
                this._cache = key;
                return this;
            },
            delete: function (key) {
                var index = this._find(key);
                if (index >= 0) {
                    this._keys.splice(index, 1);
                    this._values.splice(index, 1);
                    this._cache = cacheSentinel;
                    return true;
                }
                return false;
            },
            clear: function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cache = cacheSentinel;
            },
            forEach: function (callback, thisArg) {
                var size = this.size;
                for (var i = 0; i < size; ++i) {
                    var key = this._keys[i];
                    var value = this._values[i];
                    this._cache = key;
                    callback.call(this, value, key, this);
                }
            },
            _find: function (key) {
                var keys = this._keys;
                var size = keys.length;
                for (var i = 0; i < size; ++i) {
                    if (keys[i] === key) {
                        return i;
                    }
                }
                return -1;
            }
        };
        return Map;
    }
    // naive Set shim
    function CreateSetPolyfill() {
        var cacheSentinel = {};
        function Set() {
            this._map = new _Map();
        }
        Set.prototype = {
            get size() {
                return this._map.length;
            },
            has: function (value) {
                return this._map.has(value);
            },
            add: function (value) {
                this._map.set(value, value);
                return this;
            },
            delete: function (value) {
                return this._map.delete(value);
            },
            clear: function () {
                this._map.clear();
            },
            forEach: function (callback, thisArg) {
                this._map.forEach(callback, thisArg);
            }
        };
        return Set;
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var isNode = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === '[object process]';
        var nodeCrypto = isNode && require("crypto");
        var hasOwn = Object.prototype.hasOwnProperty;
        var keys = {};
        var rootKey = CreateUniqueKey();
        function WeakMap() {
            this._key = CreateUniqueKey();
        }
        WeakMap.prototype = {
            has: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table) {
                    return this._key in table;
                }
                return false;
            },
            get: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table) {
                    return table[this._key];
                }
                return undefined;
            },
            set: function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            },
            delete: function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                if (table && this._key in table) {
                    return delete table[this._key];
                }
                return false;
            },
            clear: function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            }
        };
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i) {
                buffer[i] = Math.random() * 255 | 0;
            }
        }
        function GenRandomBytes(size) {
            if (nodeCrypto) {
                var data = nodeCrypto.randomBytes(size);
                return data;
            }
            else if (typeof Uint8Array === "function") {
                var data = new Uint8Array(size);
                if (typeof crypto !== "undefined") {
                    crypto.getRandomValues(data);
                }
                else if (typeof msCrypto !== "undefined") {
                    msCrypto.getRandomValues(data);
                }
                else {
                    FillRandomBytes(data, size);
                }
                return data;
            }
            else {
                var data = new Array(size);
                FillRandomBytes(data, size);
                return data;
            }
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8) {
                    result += "-";
                }
                if (byte < 16) {
                    result += "0";
                }
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
        function CreateUniqueKey() {
            var key;
            do {
                key = "@@WeakMap@@" + CreateUUID();
            } while (hasOwn.call(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create) {
                    return undefined;
                }
                Object.defineProperty(target, rootKey, { value: Object.create(null) });
            }
            return target[rootKey];
        }
        return WeakMap;
    }
    // hook global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    __global.Reflect[p] = Reflect[p];
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof window !== "undefined" ? window :
        typeof WorkerGlobalScope !== "undefined" ? self :
            typeof global !== "undefined" ? global :
                Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,exports,t){(function(e){"use strict";function n(e){function t(e){var t=e[v];return t}function n(e){var t=e.data;t.target.addEventListener("readystatechange",function(){t.target.readyState===XMLHttpRequest.DONE&&(t.aborted||e.invoke())});var n=t.target[v];return n||(t.target[v]=e),a.apply(t.target,t.args),e}function r(){}function o(e){var t=e.data;return t.aborted=!0,i.apply(t.target,t.args)}var a=c.patchMethod(e.XMLHttpRequest.prototype,"send",function(){return function(e,t){var a=Zone.current,i={target:e,isPeriodic:!1,delay:null,args:t,aborted:!1};return a.scheduleMacroTask("XMLHttpRequest.send",r,i,n,o)}}),i=c.patchMethod(e.XMLHttpRequest.prototype,"abort",function(e){return function(e,n){var r=t(e);if(r&&"string"==typeof r.type){if(null==r.cancelFn)return;r.zone.cancelTask(r)}}})}t(1);var r=t(2),o=t(4),a=t(5),i=t(6),s=t(8),c=t(3),u="set",l="clear",p=["alert","prompt","confirm"],h="undefined"==typeof window?e:window;s.patchTimer(h,u,l,"Timeout"),s.patchTimer(h,u,l,"Interval"),s.patchTimer(h,u,l,"Immediate"),s.patchTimer(h,"request","cancelMacroTask","AnimationFrame"),s.patchTimer(h,"mozRequest","mozCancel","AnimationFrame"),s.patchTimer(h,"webkitRequest","webkitCancel","AnimationFrame");for(var f=0;f<p.length;f++){var d=p[f];c.patchMethod(h,d,function(e,t,n){return function(t,r){return Zone.current.run(e,h,r,n)}})}r.eventTargetPatch(h),i.propertyDescriptorPatch(h),c.patchClass("MutationObserver"),c.patchClass("WebKitMutationObserver"),c.patchClass("FileReader"),o.propertyPatch(),a.registerElementPatch(h),n(h);var v=c.zoneSymbol("xhrTask");h.navigator&&h.navigator.geolocation&&c.patchPrototype(h.navigator.geolocation,["getCurrentPosition","watchPosition"])}).call(exports,function(){return this}())},function(e,exports){(function(e){(function(e){function t(e){return"__zone_symbol__"+e}function n(){D||T||0!=b.length||(e[y]?e[y].resolve(0)[g](a):e[k](a,0))}function r(e){n(),b.push(e)}function o(e){var t=e&&e.rejection;t&&console.error("Unhandled Promise rejection:",t instanceof Error?t.message:t,"; Zone:",e.zone.name,"; Task:",e.task&&e.task.source,"; Value:",t),console.error(e)}function a(){if(!_){for(_=!0;b.length;){var e=b;b=[];for(var t=0;t<e.length;t++){var n=e[t];try{n.zone.runTask(n,null,null)}catch(r){o(r)}}}for(;w.length;){var a=w;w=[];for(var i=function(e){var t=a[e];try{t.zone.runGuarded(function(){throw t})}catch(n){o(n)}},t=0;t<a.length;t++)i(t)}_=!1,D=!1}}function i(e){return e&&e.then}function s(e){return e}function c(e){return M.reject(e)}function u(e,t){return function(n){l(e,t,n)}}function l(e,t,r){if(e[S]===O)if(r instanceof M&&r[S]!==O)p(r),l(e,r[S],r[E]);else if(i(r))r.then(u(e,t),u(e,!1));else{e[S]=t;var o=e[E];e[E]=r;for(var a=0;a<o.length;)h(e,o[a++],o[a++],o[a++],o[a++]);if(0==o.length&&t==Z){e[S]=C;try{throw new Error("Uncaught (in promise): "+r)}catch(s){var c=s;c.rejection=r,c.promise=e,c.zone=f.current,c.task=f.currentTask,w.push(c),n()}}}return e}function p(e){if(e[S]===C){e[S]=Z;for(var t=0;t<w.length;t++)if(e===w[t].promise){w.splice(t,1);break}}}function h(e,t,n,r,o){p(e);var a=e[S]?r||s:o||c;t.scheduleMicroTask(P,function(){try{l(n,!0,t.run(a,null,[e[E]]))}catch(r){l(n,!1,r)}})}var f=function(){function e(e,t){this._properties=null,this._parent=e,this._name=t?t.name||"unnamed":"<root>",this._properties=t&&t.properties||{},this._zoneDelegate=new d(this,this._parent&&this._parent._zoneDelegate,t)}return Object.defineProperty(e,"current",{get:function(){return m},enumerable:!0,configurable:!0}),Object.defineProperty(e,"currentTask",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return this._parent},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this._name},enumerable:!0,configurable:!0}),e.prototype.get=function(e){for(var t=this;t;){if(t._properties.hasOwnProperty(e))return t._properties[e];t=t._parent}},e.prototype.fork=function(e){if(!e)throw new Error("ZoneSpec required!");return this._zoneDelegate.fork(this,e)},e.prototype.wrap=function(e,t){if("function"!=typeof e)throw new Error("Expecting function got: "+e);var n=this._zoneDelegate.intercept(this,e,t),r=this;return function(){return r.runGuarded(n,this,arguments,t)}},e.prototype.run=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null);var o=m;m=this;try{return this._zoneDelegate.invoke(this,e,t,n,r)}finally{m=o}},e.prototype.runGuarded=function(e,t,n,r){void 0===t&&(t=null),void 0===n&&(n=null),void 0===r&&(r=null);var o=m;m=this;try{try{return this._zoneDelegate.invoke(this,e,t,n,r)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{m=o}},e.prototype.runTask=function(e,t,n){if(e.runCount++,e.zone!=this)throw new Error("A task can only be run in the zone which created it! (Creation: "+e.zone.name+"; Execution: "+this.name+")");var r=T;T=e;var o=m;m=this;try{"macroTask"==e.type&&e.data&&!e.data.isPeriodic&&(e.cancelFn=null);try{return this._zoneDelegate.invokeTask(this,e,t,n)}catch(a){if(this._zoneDelegate.handleError(this,a))throw a}}finally{m=o,T=r}},e.prototype.scheduleMicroTask=function(e,t,n,r){return this._zoneDelegate.scheduleTask(this,new v("microTask",this,e,t,n,r,null))},e.prototype.scheduleMacroTask=function(e,t,n,r,o){return this._zoneDelegate.scheduleTask(this,new v("macroTask",this,e,t,n,r,o))},e.prototype.scheduleEventTask=function(e,t,n,r,o){return this._zoneDelegate.scheduleTask(this,new v("eventTask",this,e,t,n,r,o))},e.prototype.cancelTask=function(e){var t=this._zoneDelegate.cancelTask(this,e);return e.runCount=-1,e.cancelFn=null,t},e.__symbol__=t,e}(),d=function(){function e(e,t,n){this._taskCounts={microTask:0,macroTask:0,eventTask:0},this.zone=e,this._parentDelegate=t,this._forkZS=n&&(n&&n.onFork?n:t._forkZS),this._forkDlgt=n&&(n.onFork?t:t._forkDlgt),this._interceptZS=n&&(n.onIntercept?n:t._interceptZS),this._interceptDlgt=n&&(n.onIntercept?t:t._interceptDlgt),this._invokeZS=n&&(n.onInvoke?n:t._invokeZS),this._invokeDlgt=n&&(n.onInvoke?t:t._invokeDlgt),this._handleErrorZS=n&&(n.onHandleError?n:t._handleErrorZS),this._handleErrorDlgt=n&&(n.onHandleError?t:t._handleErrorDlgt),this._scheduleTaskZS=n&&(n.onScheduleTask?n:t._scheduleTaskZS),this._scheduleTaskDlgt=n&&(n.onScheduleTask?t:t._scheduleTaskDlgt),this._invokeTaskZS=n&&(n.onInvokeTask?n:t._invokeTaskZS),this._invokeTaskDlgt=n&&(n.onInvokeTask?t:t._invokeTaskDlgt),this._cancelTaskZS=n&&(n.onCancelTask?n:t._cancelTaskZS),this._cancelTaskDlgt=n&&(n.onCancelTask?t:t._cancelTaskDlgt),this._hasTaskZS=n&&(n.onHasTask?n:t._hasTaskZS),this._hasTaskDlgt=n&&(n.onHasTask?t:t._hasTaskDlgt)}return e.prototype.fork=function(e,t){return this._forkZS?this._forkZS.onFork(this._forkDlgt,this.zone,e,t):new f(e,t)},e.prototype.intercept=function(e,t,n){return this._interceptZS?this._interceptZS.onIntercept(this._interceptDlgt,this.zone,e,t,n):t},e.prototype.invoke=function(e,t,n,r,o){return this._invokeZS?this._invokeZS.onInvoke(this._invokeDlgt,this.zone,e,t,n,r,o):t.apply(n,r)},e.prototype.handleError=function(e,t){return this._handleErrorZS?this._handleErrorZS.onHandleError(this._handleErrorDlgt,this.zone,e,t):!0},e.prototype.scheduleTask=function(e,t){try{if(this._scheduleTaskZS)return this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt,this.zone,e,t);if(t.scheduleFn)t.scheduleFn(t);else{if("microTask"!=t.type)throw new Error("Task is missing scheduleFn.");r(t)}return t}finally{e==this.zone&&this._updateTaskCount(t.type,1)}},e.prototype.invokeTask=function(e,t,n,r){try{return this._invokeTaskZS?this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt,this.zone,e,t,n,r):t.callback.apply(n,r)}finally{e!=this.zone||"eventTask"==t.type||t.data&&t.data.isPeriodic||this._updateTaskCount(t.type,-1)}},e.prototype.cancelTask=function(e,t){var n;if(this._cancelTaskZS)n=this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt,this.zone,e,t);else{if(!t.cancelFn)throw new Error("Task does not support cancellation, or is already canceled.");n=t.cancelFn(t)}return e==this.zone&&this._updateTaskCount(t.type,-1),n},e.prototype.hasTask=function(e,t){return this._hasTaskZS&&this._hasTaskZS.onHasTask(this._hasTaskDlgt,this.zone,e,t)},e.prototype._updateTaskCount=function(e,t){var n=this._taskCounts,r=n[e],o=n[e]=r+t;if(0>o)throw new Error("More tasks executed then were scheduled.");if(0==r||0==o){var a={microTask:n.microTask>0,macroTask:n.macroTask>0,eventTask:n.eventTask>0,change:e};try{this.hasTask(this.zone,a)}finally{this._parentDelegate&&this._parentDelegate._updateTaskCount(e,t)}}},e}(),v=function(){function e(e,t,n,r,o,i,s){this.runCount=0,this.type=e,this.zone=t,this.source=n,this.data=o,this.scheduleFn=i,this.cancelFn=s,this.callback=r;var c=this;this.invoke=function(){try{return t.runTask(c,this,arguments)}finally{a()}}}return e}(),k=t("setTimeout"),y=t("Promise"),g=t("then"),m=new f(null,null),T=null,b=[],_=!1,w=[],D=!1,S=t("state"),E=t("value"),P="Promise.then",O=null,z=!0,Z=!1,C=0,M=function(){function e(e){var t=this;t[S]=O,t[E]=[];try{e&&e(u(t,z),u(t,Z))}catch(n){l(t,!1,n)}}return e.resolve=function(e){return l(new this(null),z,e)},e.reject=function(e){return l(new this(null),Z,e)},e.race=function(e){function t(e){a&&(a=r(e))}function n(e){a&&(a=o(e))}for(var r,o,a=new this(function(e,t){r=e,o=t}),s=0,c=e;s<c.length;s++){var u=c[s];i(u)||(u=this.resolve(u)),u.then(t,n)}return a},e.all=function(e){function t(e){o&&r(e),o=null}for(var n,r,o=new this(function(e,t){n=e,r=t}),a=0,s=[],c=0,u=e;c<u.length;c++){var l=u[c];i(l)||(l=this.resolve(l)),l.then(function(e){return function(t){s[e]=t,a--,o&&!a&&n(s)}}(a),t),a++}return a||n(s),o},e.prototype.then=function(t,n){var r=new e(null),o=f.current;return this[S]==O?this[E].push(o,r,t,n):h(this,o,r,t,n),r},e.prototype["catch"]=function(e){return this.then(null,e)},e}(),I=e[t("Promise")]=e.Promise;if(e.Promise=M,I){var j=I.prototype,L=j[t("then")]=j.then;j.then=function(e,t){var n=this;return new M(function(e,t){L.call(n,e,t)}).then(e,t)}}return e.Zone=f})("undefined"==typeof window?e:window)}).call(exports,function(){return this}())},function(e,exports,t){"use strict";function n(e){var t=[],n=e.wtf;n?t=o.split(",").map(function(e){return"HTML"+e+"Element"}).concat(a):e[i]?t.push(i):t=a;for(var s=0;s<t.length;s++){var c=e[t[s]];r.patchEventTargetMethods(c&&c.prototype)}}var r=t(3),o="Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video",a="ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex".split(","),i="EventTarget";exports.eventTargetPatch=n},function(e,exports){(function(e){"use strict";function t(e,t){for(var n=e.length-1;n>=0;n--)"function"==typeof e[n]&&(e[n]=Zone.current.wrap(e[n],t+"_"+n));return e}function n(e,n){for(var r=e.constructor.name,o=function(o){var a=n[o],i=e[a];i&&(e[a]=function(e){return function(){return e.apply(this,t(arguments,r+"."+a))}}(i))},a=0;a<n.length;a++)o(a)}function r(e,t){var n=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0};delete n.writable,delete n.value;var r=t.substr(2),o="_"+t;n.set=function(e){if(this[o]&&this.removeEventListener(r,this[o]),"function"==typeof e){var t=function(t){var n;n=e.apply(this,arguments),void 0==n||n||t.preventDefault()};this[o]=t,this.addEventListener(r,t,!1)}else this[o]=null},n.get=function(){return this[o]},Object.defineProperty(e,t,n)}function o(e,t){var n=[];for(var o in e)"on"==o.substr(0,2)&&n.push(o);for(var a=0;a<n.length;a++)r(e,n[a]);if(t)for(var i=0;i<t.length;i++)r(e,"on"+t[i])}function a(e,t,n,r,o){var a=e[k];if(a)for(var i=0;i<a.length;i++){var s=a[i],c=s.data;if(c.handler===t&&c.useCapturing===r&&c.eventName===n)return o&&a.splice(i,1),s}return null}function i(e,t){var n=e[k];n||(n=e[k]=[]),n.push(t)}function s(e){var t=e.data;return i(t.target,e),t.target[m](t.eventName,e.invoke,t.useCapturing)}function c(e){var t=e.data;a(t.target,e.invoke,t.eventName,t.useCapturing,!0),t.target[T](t.eventName,e.invoke,t.useCapturing)}function u(e,t){var n=t[0],r=t[1],o=t[2]||!1,i=e||v,u=null;"function"==typeof r?u=r:r&&r.handleEvent&&(u=function(e){return r.handleEvent(e)});var l=!1;try{l=r&&"[object FunctionWrapper]"===r.toString()}catch(p){return}if(!u||l)return i[m](n,r,o);var h=a(i,r,n,o,!1);if(h)return i[m](n,h.invoke,o);var f=Zone.current,d=i.constructor.name+".addEventListener:"+n,k={target:i,eventName:n,name:n,useCapturing:o,handler:r};f.scheduleEventTask(d,u,k,s,c)}function l(e,t){var n=t[0],r=t[1],o=t[2]||!1,i=e||v,s=a(i,r,n,o,!0);s?s.zone.cancelTask(s):i[T](n,r,o)}function p(e){return e&&e.addEventListener?(d(e,y,function(){return u}),d(e,g,function(){return l}),!0):!1}function h(e){var n=v[e];if(n){v[e]=function(){var r=t(arguments,e);switch(r.length){case 0:this[b]=new n;break;case 1:this[b]=new n(r[0]);break;case 2:this[b]=new n(r[0],r[1]);break;case 3:this[b]=new n(r[0],r[1],r[2]);break;case 4:this[b]=new n(r[0],r[1],r[2],r[3]);break;default:throw new Error("Arg list too long.")}};var r,o=new n(function(){});for(r in o)!function(t){"function"==typeof o[t]?v[e].prototype[t]=function(){return this[b][t].apply(this[b],arguments)}:Object.defineProperty(v[e].prototype,t,{set:function(n){"function"==typeof n?this[b][t]=Zone.current.wrap(n,e+"."+t):this[b][t]=n},get:function(){return this[b][t]}})}(r);for(r in n)"prototype"!==r&&n.hasOwnProperty(r)&&(v[e][r]=n[r])}}function f(e,t){try{return Function("f","return function "+e+"(){return f(this, arguments)}")(t)}catch(n){return function(){return t(this,arguments)}}}function d(e,t,n){for(var r=e;r&&!r.hasOwnProperty(t);)r=Object.getPrototypeOf(r);!r&&e[t]&&(r=e);var o,a=exports.zoneSymbol(t);return r&&!(o=r[a])&&(o=r[a]=r[t],r[t]=f(t,n(o,a,t))),o}exports.zoneSymbol=Zone.__symbol__;var v="undefined"==typeof window?e:window;exports.bindArguments=t,exports.patchPrototype=n,exports.isWebWorker="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,exports.isNode="undefined"!=typeof process&&"[object process]"==={}.toString.call(process),exports.isBrowser=!exports.isNode&&!exports.isWebWorker&&!("undefined"==typeof window||!window.HTMLElement),exports.patchProperty=r,exports.patchOnProperties=o;var k=exports.zoneSymbol("eventTasks"),y="addEventListener",g="removeEventListener",m=exports.zoneSymbol(y),T=exports.zoneSymbol(g);exports.patchEventTargetMethods=p;var b=exports.zoneSymbol("originalInstance");exports.patchClass=h,exports.createNamedFn=f,exports.patchMethod=d}).call(exports,function(){return this}())},function(e,exports,t){"use strict";function n(){Object.defineProperty=function(e,t,n){if(o(e,t))throw new TypeError("Cannot assign to read only property '"+t+"' of "+e);return"prototype"!==t&&(n=a(e,t,n)),s(e,t,n)},Object.defineProperties=function(e,t){return Object.keys(t).forEach(function(n){Object.defineProperty(e,n,t[n])}),e},Object.create=function(e,t){return"object"==typeof t&&Object.keys(t).forEach(function(n){t[n]=a(e,n,t[n])}),u(e,t)},Object.getOwnPropertyDescriptor=function(e,t){var n=c(e,t);return o(e,t)&&(n.configurable=!1),n}}function r(e,t,n){return n=a(e,t,n),s(e,t,n)}function o(e,t){return e&&e[l]&&e[l][t]}function a(e,t,n){return n.configurable=!0,n.configurable||(e[l]||s(e,l,{writable:!0,value:{}}),e[l][t]=!0),n}var i=t(3),s=Object.defineProperty,c=Object.getOwnPropertyDescriptor,u=Object.create,l=i.zoneSymbol("unconfigurables");exports.propertyPatch=n,exports._redefineProperty=r},function(e,exports,t){"use strict";function n(e){if(o.isBrowser&&"registerElement"in e.document){var t=document.registerElement,n=["createdCallback","attachedCallback","detachedCallback","attributeChangedCallback"];document.registerElement=function(e,o){return o&&o.prototype&&n.forEach(function(e){var t="Document.registerElement::"+e;if(o.prototype.hasOwnProperty(e)){var n=Object.getOwnPropertyDescriptor(o.prototype,e);n&&n.value?(n.value=Zone.current.wrap(n.value,t),r._redefineProperty(o.prototype,e,n)):o.prototype[e]=Zone.current.wrap(o.prototype[e],t)}else o.prototype[e]&&(o.prototype[e]=Zone.current.wrap(o.prototype[e],t))}),t.apply(document,[e,o])}}}var r=t(4),o=t(3);exports.registerElementPatch=n},function(e,exports,t){"use strict";function n(e){if(!i.isNode){var t="undefined"!=typeof WebSocket;r()?(i.isBrowser&&i.patchOnProperties(HTMLElement.prototype,s),i.patchOnProperties(XMLHttpRequest.prototype,null),"undefined"!=typeof IDBIndex&&(i.patchOnProperties(IDBIndex.prototype,null),i.patchOnProperties(IDBRequest.prototype,null),i.patchOnProperties(IDBOpenDBRequest.prototype,null),i.patchOnProperties(IDBDatabase.prototype,null),i.patchOnProperties(IDBTransaction.prototype,null),i.patchOnProperties(IDBCursor.prototype,null)),t&&i.patchOnProperties(WebSocket.prototype,null)):(o(),i.patchClass("XMLHttpRequest"),t&&a.apply(e))}}function r(){if(i.isBrowser&&!Object.getOwnPropertyDescriptor(HTMLElement.prototype,"onclick")&&"undefined"!=typeof Element){var e=Object.getOwnPropertyDescriptor(Element.prototype,"onclick");if(e&&!e.configurable)return!1}Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{get:function(){return!0}});var t=new XMLHttpRequest,n=!!t.onreadystatechange;return Object.defineProperty(XMLHttpRequest.prototype,"onreadystatechange",{}),n}function o(){for(var e=function(e){var t=s[e],n="on"+t;document.addEventListener(t,function(e){var t,r,o=e.target;for(r=o?o.constructor.name+"."+n:"unknown."+n;o;)o[n]&&!o[n][c]&&(t=Zone.current.wrap(o[n],r),t[c]=o[n],o[n]=t),o=o.parentElement},!0)},t=0;t<s.length;t++)e(t)}var a=t(7),i=t(3),s="copy cut paste abort blur focus canplay canplaythrough change click contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop durationchange emptied ended input invalid keydown keypress keyup load loadeddata loadedmetadata loadstart message mousedown mouseenter mouseleave mousemove mouseout mouseover mouseup pause play playing progress ratechange reset scroll seeked seeking select show stalled submit suspend timeupdate volumechange waiting mozfullscreenchange mozfullscreenerror mozpointerlockchange mozpointerlockerror error webglcontextrestored webglcontextlost webglcontextcreationerror".split(" ");exports.propertyDescriptorPatch=n;var c=i.zoneSymbol("unbound")},function(e,exports,t){"use strict";function n(e){var t=e.WebSocket;e.EventTarget||r.patchEventTargetMethods(t.prototype),e.WebSocket=function(e,n){var o,a=arguments.length>1?new t(e,n):new t(e),i=Object.getOwnPropertyDescriptor(a,"onmessage");return i&&i.configurable===!1?(o=Object.create(a),["addEventListener","removeEventListener","send","close"].forEach(function(e){o[e]=function(){return a[e].apply(a,arguments)}})):o=a,r.patchOnProperties(o,["close","error","message","open"]),o};for(var n in t)e.WebSocket[n]=t[n]}var r=t(3);exports.apply=n},function(e,exports,t){"use strict";function n(e,t,n,o){function a(t){var n=t.data;return n.args[0]=t.invoke,n.handleId=s.apply(e,n.args),t}function i(e){return c(e.data.handleId)}var s=null,c=null;t+=o,n+=o,s=r.patchMethod(e,t,function(n){return function(r,s){if("function"==typeof s[0]){var c=Zone.current,u={handleId:null,isPeriodic:"Interval"===o,delay:"Timeout"===o||"Interval"===o?s[1]||0:null,args:s};return c.scheduleMacroTask(t,s[0],u,a,i)}return n.apply(e,s)}}),c=r.patchMethod(e,n,function(t){return function(n,r){var o=r[0];o&&"string"==typeof o.type?(o.cancelFn&&o.data.isPeriodic||0===o.runCount)&&o.zone.cancelTask(o):t.apply(e,r)}})}var r=t(3);exports.patchTimer=n}]);
!function(t){function r(n){if(e[n])return e[n].exports;var a=e[n]={exports:{},id:n,loaded:!1};return t[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var e={};return r.m=t,r.c=e,r.p="",r(0)}([function(t,exports){"use strict";!function(){function t(){return new Error("STACKTRACE TRACKING")}function r(){try{throw t()}catch(r){return r}}function e(t){return t.stack?t.stack.split(i):[]}function n(t,r){for(var n=e(r),a=0;a<n.length;a++){var c=n[a];a<u.length&&u[a]===c||t.push(n[a])}}function a(t,r){var e=[r];if(t)for(var a=(new Date).getTime(),c=0;c<t.length;c++){var o=t[c],u=o.timestamp;e.push(s+" Elapsed: "+(a-u.getTime())+" ms; At: "+u+" "+s),n(e,o.error),a=u.getTime()}return e.join(i)}function c(t,r){r>0&&(t.push(e((new l).error)),c(t,r-1))}function o(){var t=[];c(t,2);for(var r=t[0],e=t[1],n=0;n<r.length;n++){var a=r[n],o=e[n];if(a!==o)break;u.push(a)}}var i="\n",s="  -------------  ",u=[],f="__creationTrace__",l=function(){function t(){this.error=p(),this.timestamp=new Date}return t}(),d=t(),h=r(),p=d.stack?t:h.stack?r:t;Zone.longStackTraceZoneSpec={name:"long-stack-trace",longStackTraceLimit:10,onScheduleTask:function(t,r,e,n){var a=Zone.currentTask,c=a&&a.data&&a.data[f]||[];return c=[new l].concat(c),c.length>this.longStackTraceLimit&&(c.length=this.longStackTraceLimit),n.data||(n.data={}),n.data[f]=c,t.scheduleTask(e,n)},onHandleError:function(t,r,e,n){var c=Zone.currentTask;if(n instanceof Error&&c){var o=Object.getOwnPropertyDescriptor(n,"stack");if(o){var i=o.get,s=o.value;o={get:function(){return a(c.data&&c.data[f],i?i.apply(this):s)}},Object.defineProperty(n,"stack",o)}else n.stack=a(c.data&&c.data[f],n.stack)}return t.handleError(e,n)}},o()}()}]);