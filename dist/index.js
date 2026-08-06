"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=f(function(k,g){
var l=require('@stdlib/ndarray-base-shape/dist'),c=require('@stdlib/ndarray-base-strides/dist'),d=require('@stdlib/ndarray-base-stride/dist'),u=require('@stdlib/ndarray-base-offset/dist'),q=require('@stdlib/ndarray-base-data-buffer/dist'),p=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),h=require('@stdlib/blas-base-sger/dist').ndarray;function o(e){var r,t,s,a,i,v;return i=e[0],v=e[1],a=e[2],r=p(e[3]),t=l(a,!1),s=c(a,!1),h(t[0],t[1],r,q(i),d(i,0),u(i),q(v),d(v,0),u(v),q(a),s[0],s[1],u(a)),a}g.exports=o
});var x=n();module.exports=x;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
