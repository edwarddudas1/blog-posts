parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t){return i(t)||o(t)||n(t)||r()}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(t,e){if(t){if("string"==typeof t)return a(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function o(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function i(t){if(Array.isArray(t))return a(t)}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}function c(){"use strict";c=function(){return r};var e,r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(e){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof b?e:b,a=Object.create(o.prototype),c=new _(n||[]);return i(a,"_invoke",{value:P(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=p;var d="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function b(){}function w(){}function x(){}var E={};f(E,u,function(){return this});var L=Object.getPrototypeOf,O=L&&L(L(D([])));O&&O!==n&&o.call(O,u)&&(E=O);var j=x.prototype=b.prototype=Object.create(E);function k(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function S(e,r){function n(i,a,c,u){var s=h(e[i],e,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==t(f)&&o.call(f,"__await")?r.resolve(f.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(f).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,u)})}u(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r(function(r,o){n(t,e,r,o)})}return a=a?a.then(o,o):o()}})}function P(t,r,n){var o=d;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:e,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=I(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var s=h(t,r,n);if("normal"===s.type){if(o=n.done?v:y,s.arg===g)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function I(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,I(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function D(r){if(r||""===r){var n=r[u];if(n)return n.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var i=-1,a=function t(){for(;++i<r.length;)if(o.call(r,i))return t.value=r[i],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(r)+" is not iterable")}return w.prototype=x,i(j,"constructor",{value:x,configurable:!0}),i(x,"constructor",{value:w,configurable:!0}),w.displayName=f(x,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,f(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},r.awrap=function(t){return{__await:t}},k(S.prototype),f(S.prototype,s,function(){return this}),r.AsyncIterator=S,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new S(p(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},k(j),f(j,l,"Generator"),f(j,u,function(){return this}),f(j,"toString",function(){return"[object Generator]"}),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=D,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),s=o.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),N(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;N(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:D(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),g}},r}function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach(function(e){l(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function l(t,e,r){return(e=f(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function f(e){var r=p(e,"string");return"symbol"==t(r)?r:r+""}function p(e,r){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function h(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function d(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function a(t){h(i,n,o,a,c,"next",t)}function c(t){h(i,n,o,a,c,"throw",t)}a(void 0)})}}var y,m=[];function v(){return g.apply(this,arguments)}function g(){return(g=d(c().mark(function t(){var e,r;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/posts");case 3:if(e=t.sent,console.log("Response status:",e.status),e.ok){t.next=7;break}throw new Error("Network Error Response Identified");case 7:return t.next=9,e.json();case 9:r=t.sent,console.log("Fetched data:",r),m=r,t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("Error fetching or processing data",t.t0);case 17:case"end":return t.stop()}},t,null,[[0,14]])}))).apply(this,arguments)}function b(t,e){return w.apply(this,arguments)}function w(){return(w=d(c().mark(function t(e,r){var n,o;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/posts",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e,content:r})});case 3:if(n=t.sent,console.log(n,"response"),n.ok){t.next=7;break}throw new Error("Failed to create post");case 7:return t.next=9,n.json();case 9:o=t.sent,m.push(o),console.log("Rendering posts with data:",m),k(m),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}},t,null,[[0,15]])}))).apply(this,arguments)}var x=function(){var t=d(c().mark(function t(e,r,n){var o,i;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/posts/".concat(e),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r,content:n})});case 3:if((o=t.sent).ok){t.next=6;break}throw new Error("Failed to update post");case 6:return t.next=8,o.json();case 8:i=t.sent,console.log("Updated post:",i),k(m=m.map(function(t){return t.id===e?s(s({},t),{},{title:r,content:n}):t})),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),console.error("Error updating post:",t.t0);case 17:case"end":return t.stop()}},t,null,[[0,14]])}));return function(e,r,n){return t.apply(this,arguments)}}();function E(t){return L.apply(this,arguments)}function L(){return(L=d(c().mark(function t(e){var r;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("http://localhost:3000/posts/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 3:if(r=t.sent,console.log("deletePost response:",r),r.ok){t.next=7;break}throw new Error("Failed to delete the post");case 7:k(m=m.filter(function(t){return t.id!==Number(e)})),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error("Error deleting post",t.t0);case 14:case"end":return t.stop()}},t,null,[[0,11]])}))).apply(this,arguments)}function O(t,e){return j.apply(this,arguments)}function j(){return(j=d(c().mark(function t(r,n){var o,i;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("🚨 Debugging createComment | postId:",r,"Comment:",n),r&&!(r<1)){t.next=4;break}return console.error("❌ Invalid post ID:",r),t.abrupt("return");case 4:return t.prev=4,t.next=7,fetch("http://localhost:3000/posts/".concat(r,"/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({content:n})});case 7:if((o=t.sent).ok){t.next=10;break}throw new Error("Failed to create comment. Server responded with status ".concat(o.status));case 10:return t.next=12,o.json();case 12:i=t.sent,console.log("✅ Comment added:",i),k(m=m.map(function(t){return t.id===r?s(s({},t),{},{comments:[].concat(e(t.comments||[]),[i.comment])}):t})),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(4),console.error("❌ Error creating comment:",t.t0);case 21:case"end":return t.stop()}},t,null,[[4,18]])}))).apply(this,arguments)}function k(t){var e=document.querySelector(".menuContainer");if(!y)return console.log("Template not found");var r=y({posts:t});e.innerHTML=r}function S(){return P.apply(this,arguments)}function P(){return(P=d(c().mark(function t(){var e,r;return c().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v();case 2:if(t.sent,e=document.querySelector(".menuTemplate"),(r=e.innerHTML||e.content.firstElementChild.innerHTML).trim()){t.next=8;break}return console.error("Template source is empty"),t.abrupt("return");case 8:y=Handlebars.compile(r),k(m);case 10:case"end":return t.stop()}},t)}))).apply(this,arguments)}document.getElementById("createPostForm").addEventListener("submit",function(t){t.preventDefault(),b(document.getElementById("titleInput").value,document.getElementById("contentInput").value),document.getElementById("titleInput").value="",document.getElementById("contentInput").value=""}),document.addEventListener("click",function(t){if(t.target.classList.contains("editPostButton")){var e=t.target.getAttribute("data-id"),r=prompt("Enter new title:"),n=prompt("Enter new content:");r&&n&&(console.log("Updating post with ID: ".concat(e)),x(Number(e),r,n))}}),document.addEventListener("click",function(t){if(t.target.classList.contains("deletePostButton")){var e=t.target.getAttribute("data-id");e?(console.log("Delete button clicked for post ID:",e),E(e)):console.error("No valid post ID found for delete operation.")}}),document.addEventListener("submit",function(t){if(t.target.classList.contains("createCommentForm")){t.preventDefault();var e=Number(t.target.getAttribute("data-post-id")),r=t.target.querySelector(".commentInput"),n=r.value.trim();if(!n)return void console.error("Comment cannot be empty");O(e,n),r.value=""}}),S();
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.7108c02b.js.map