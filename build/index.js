!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=7)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){t.exports=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}},function(t,e,r){var n=r(8),o=r(9),c=r(10),i=r(12);t.exports=function(t,e){return n(t)||o(t,e)||c(t,e)||i()}},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.data}()},function(t,e){!function(){t.exports=this.wp.coreData}()},function(t,e,r){"use strict";r.r(e);var n=r(1),o=r.n(n),c=r(2),i=r.n(c),u=r(0),a=r(3),l=r(4),f=r(5),s=r(6);function p(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?p(Object(r),!0).forEach((function(e){o()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}Object(a.registerBlockType)("gutenberg-practice-02/meta-block",{title:"Meta Block",icon:"smiley",category:"layout",edit:function(t){var e=t.className,r=(t.setAttributes,t.attributes,Object(f.useSelect)((function(t){return t("core/editor").getCurrentPostType()}),[])),n=Object(s.useEntityProp)("postType",r,"meta"),o=i()(n,2),c=o[0],a=o[1],p=c.gutenberg_practice_02_meta_block_field;return Object(u.createElement)("div",{className:e},Object(u.createElement)(l.TextControl,{label:"Meta Block Field",value:p,onChange:function(t){a(b(b({},c),{},{gutenberg_practice_02_meta_block_field:t}))}}))},save:function(){return null}})},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,c=void 0;try{for(var i,u=t[Symbol.iterator]();!(n=(i=u.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,c=t}finally{try{n||null==u.return||u.return()}finally{if(o)throw c}}return r}}},function(t,e,r){var n=r(11);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}]);