/*!
 * name: @feizheng/check-modules
 * url: https://github.com/afeiship/check-modules
 * version: 1.0.3
 * license: MIT
 */

var hasModule=require("has-module"),ansiColor=require("ansi-colors"),DEFAULT_CALLBACK=function(o){console.log("Not installed size: "+o.length),console.log(ansiColor.green.bold([,"npm install "+o.join(" ")].join("\n")))};module.exports=function(o,n){var e=n||DEFAULT_CALLBACK,l=o.filter(function(o){return!hasModule(o)});return l.length&&e(l),!l.length};