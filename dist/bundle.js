!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){!function e(n){for(var t in n.supervised)return e(n.supervised[t]);console.log(n.name)}(t(1)({Rana:"Hiba",Samar:"Sara",Hassan:"Sara",Sara:"Hiba",Hiba:"Siroun"}).getRootNode())},function(e,n,t){const r=t(2);e.exports=function(e){var n=new r;for(var t in e)n.findNodeByName(t)||n.createNode(t),n.findNodeByName(e[t])||n.createNode(e[t]);for(var t in e){var o=n.findNodeByName(e[t]),i=n.findNodeByName(t);o.setSupervisor(i),i.setSupervised(o)}return n}},function(e,n,t){const r=t(3);e.exports=function(e){this.nodes=[],this.getRootNode=function(){for(var e=0;e<this.nodes.length;e++)if(this.nodes[e].supervisor)return this.nodes[e];return null},this.findNodeByName=function(e){for(var n=0;n<this.nodes.length;n++)if(this.nodes[n].name===e)return this.nodes[n];return null},this.createNode=function(e){var n=new r(e);this.nodes.push(n)}}},function(e,n){e.exports=function(e){this.name=e,this.supervisor=null,this.supervised=[],this.setSupervisor=function(e){this.supervisor=e},this.setSupervised=function(e){this.supervised.push(e),e.setSupervisor(this)}}}]);