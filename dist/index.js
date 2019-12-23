/*!
 * name: @feizheng/check-modules
 * url: https://github.com/afeiship/check-modules
 * version: 1.0.0
 * license: MIT
 */

var hasModule=require("has-module"),DEFAULT_CALLBACK=function(n){console.warn(["Not installed size: "+n.length,"npm install "+n.join(" ")].join("\n"))};module.exports=function(n,e){var l=e||DEFAULT_CALLBACK,o=n.filter(function(n){return!hasModule(n)});return o.length&&l(o),!o.length};