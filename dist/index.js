/*!
 * name: @jswork/check-modules
 * url: https://github.com/afeiship/check-modules
 * version: 1.0.0
 * license: MIT
 */

var hasModule=require("has-module"),chalk=require("chalk"),DEFAULT_CALLBACK=function(e){console.log("Not installed size: "+e.length),console.log(chalk.green.bold(["npm install "+e.join(" ")].join("\n")))};module.exports=function(e,l){l=l||DEFAULT_CALLBACK,e=e.filter(function(e){return!hasModule(e)});return e.length&&l(e),!e.length};