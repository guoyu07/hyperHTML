/*! (c) Andrea Giammarchi (ISC) */var hyperHTML=function(e){"use strict";function t(){}function n(e){this.childNodes=e,this.length=e.length,this.first=e[0],this.last=e[this.length-1]}function r(){}function i(){var e=function(e,n){for(var r=new k(n),i=e.length,o=0;o<i;o++){var a=e[o];a.nodeType===g&&t(a,r)}},t=function r(e,t){pe.has(e)&&e.dispatchEvent(t);for(var n=e.children,i=n.length,o=0;o<i;o++)r(n[o],t)};try{new MutationObserver(function(t){for(var n=t.length,r=0;r<n;r++){var i=t[r];e(i.removedNodes,w),e(i.addedNodes,N)}}).observe(document,{subtree:!0,childList:!0})}catch(n){document.addEventListener("DOMNodeRemoved",function(t){e([t.target],w)},!1),document.addEventListener("DOMNodeInserted",function(t){e([t.target],N)},!1)}}function o(e){var t=je.get(this);return t&&t.template===ee(e)?u.apply(t.updates,arguments):a.apply(this,arguments),this}function a(e){e=ee(e);var t=Le.get(e)||l.call(this,e),n=X(this.ownerDocument,t.fragment),r=Se.create(n,t.paths);je.set(this,{template:e,updates:r}),u.apply(r,arguments),this.textContent="",this.appendChild(n)}function u(){for(var e=arguments.length,t=1;t<e;t++)this[t-1](arguments[t])}function l(e){var t=[],n=e.join(C).replace(Me,Oe),r=Q(this,n);Se.find(r,t,e.slice());var i={fragment:r,paths:t};return Le.set(e,i),i}function c(e){return arguments.length<2?null==e?Pe("html"):"string"==typeof e?c.wire(null,e):"raw"in e?Pe("html")(e):"nodeType"in e?c.bind(e):Be(e,"html"):("raw"in e?Pe("html"):c.wire).apply(null,arguments)}var s=function(e,t){var n="_"+e+"$";return{get:function(){return this[n]||(this[e]=t.call(this,e))},set:function(e){Object.defineProperty(this,n,{configurable:!0,value:e})}}},f={},d=[],h=f.hasOwnProperty,v=0,p={define:function(e,t){e in f||(v=d.push(e)),f[e]=t},invoke:function(e,t){for(var n=0;n<v;n++){var r=d[n];if(h.call(e,r))return f[r](e[r],t)}}},m=document.defaultView,g=1,b=/^area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr$/i,y="http://www.w3.org/2000/svg",N="connected",w="dis"+N,x=/^style|textarea$/i,E="_hyper: "+(Math.random()*new Date|0)+";",C="\x3c!--"+E+"--\x3e",k=m.Event;try{new k("Event")}catch(Fe){k=function(e){var t=document.createEvent("Event");return t.initEvent(e,!1,!1),t}}var A=m.Map||function(){var e=[],t=[];return{get:function(n){return t[e.indexOf(n)]},set:function(n,r){t[e.push(n)-1]=r}}},S=m.WeakMap||function(){return{get:function(e){return e[E]},set:function(e,t){Object.defineProperty(e,E,{configurable:!0,value:t})}}},T=m.WeakSet||function(){var e=new S;return{add:function(t){e.set(t,!0)},has:function(t){return!0===e.get(t)}}},j=Array.isArray||function(e){return function(t){return"[object Array]"===e.call(t)}}({}.toString),L=E.trim||function(){return this.replace(/^\s+|\s+$/g,"")},M=function(e,t){return O(e).createElement(t)},O=function(e){return e.ownerDocument||e},D=function(e){return O(e).createDocumentFragment()},$=function(e,t){return O(e).createTextNode(t)},P=" \\f\\n\\r\\t",B="[ "+P+"]+[^  \\f\\n\\r\\t\\/>\"'=]+",R="<([A-Za-z]+[A-Za-z0-9:_-]*)((?:",H="(?:=(?:'[^']*?'|\"[^\"]*?\"|<[^>]*?>|[^  \\f\\n\\r\\t\\/>\"'=]+))?)",_=new RegExp(R+B+H+"+)([ "+P+"]*/?>)","g"),F=new RegExp(R+B+H+"*)([ "+P+"]*/>)","g"),Z=D(document),z="append"in Z,V="content"in M(document,"template");Z.appendChild($(Z,"g")),Z.appendChild($(Z,""));var G=1===Z.cloneNode(!0).childNodes.length,I="importNode"in document,W=z?function(e,t){e.append.apply(e,t)}:function(e,t){for(var n=t.length,r=0;r<n;r++)e.appendChild(t[r])},q=new RegExp("("+B+"=)(['\"]?)"+C+"\\2","gi"),J=function(e,t,n,r){return"<"+t+n.replace(q,K)+r},K=function(e,t,n){return t+(n||'"')+E+(n||'"')},Q=function(e,t){return("ownerSVGElement"in e?re:ne)(e,t.replace(_,J))},U=G?function(e){for(var t=e.cloneNode(),n=e.childNodes||[],r=n.length,i=0;i<r;i++)t.appendChild(U(n[i]));return t}:function(e){return e.cloneNode(!0)},X=I?function(e,t){return e.importNode(t,!0)}:function(e,t){return U(t)},Y=[].slice,ee=function(e){return te(e)},te=function(e){if(e.propertyIsEnumerable("raw")||/Firefox\/(\d+)/.test((m.navigator||{}).userAgent)&&parseFloat(RegExp.$1)<55){var t={};te=function(e){var n="_"+e.join(E);return t[n]||(t[n]=e)}}else te=function(e){return e};return te(e)},ne=V?function(e,t){var n=M(e,"template");return n.innerHTML=t,n.content}:function(e,t){var n=M(e,"template"),r=D(e);if(/^[^\S]*?<(col(?:group)?|t(?:head|body|foot|r|d|h))/i.test(t)){var i=RegExp.$1;n.innerHTML="<table>"+t+"</table>",W(r,Y.call(n.querySelectorAll(i)))}else n.innerHTML=t,W(r,Y.call(n.childNodes));return r},re=V?function(e,t){var n=D(e),r=O(e).createElementNS(y,"svg");return r.innerHTML=t,W(n,Y.call(r.childNodes)),n}:function(e,t){var n=D(e),r=M(e,"div");return r.innerHTML='<svg xmlns="'+y+'">'+t+"</svg>",W(n,Y.call(r.firstChild.childNodes)),n};n.prototype.insert=function(){var e=D(this.first);return W(e,this.childNodes),e},n.prototype.remove=function(){var e=this.first,t=this.last;if(2===this.length)t.parentNode.removeChild(t);else{var n=O(e).createRange();n.setStartBefore(this.childNodes[1]),n.setEndAfter(t),n.deleteContents()}return e};var ie=function(e){var t=[],n=void 0;switch(e.nodeType){case g:case 11:n=e;break;case 8:n=e.parentNode,oe(t,n,e);break;default:n=e.ownerElement}for(e=n;n=n.parentNode;e=n)oe(t,n,e);return t},oe=function(e,t,n){e.unshift(e.indexOf.call(t.childNodes,n))},ae={create:function(e,t,n){return{type:e,name:n,node:t,path:ie(t)}},find:function(e,t){for(var n=t.length,r=0;r<n;r++)e=e.childNodes[t[r]];return e}},ue=/acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,le=function(e,t,n){if(n){var r=t.cloneNode(!0);return r.value="",e.setAttributeNode(r),ce(r,n)}return ce(e.style,n)},ce=function(e,t){var n=void 0,r=void 0;return function(i){switch(typeof i){case"object":if(i){if("object"===n){if(!t&&r!==i)for(var o in r)o in i||(e[o]="")}else t?e.value="":e.cssText="";var a=t?{}:e;for(var u in i){var l=i[u];a[u]="number"!=typeof l||ue.test(u)?l:l+"px"}n="object",t?e.value=de(r=a):r=i;break}default:r!=i&&(n="string",r=i,t?e.value=i||"":e.cssText=i||"")}}},se=/([^A-Z])([A-Z]+)/g,fe=function(e,t,n){return t+"-"+n.toLowerCase()},de=function(e){var t=[];for(var n in e)t.push(n.replace(se,fe),":",e[n],";");return t.join("")},he=function(e){return e},ve=function(e,t,n,r,i){for(var o=r||he,a=null==i?null:o(i,0),u=0,l=0,c=t.length-1,s=t[0],f=t[c],d=n.length-1,h=n[0],v=n[d];u<=c&&l<=d;)if(null==s)s=t[++u];else if(null==f)f=t[--c];else if(null==h)h=n[++l];else if(null==v)v=n[--d];else if(s==h)s=t[++u],h=n[++l];else if(f==v)f=t[--c],v=n[--d];else if(s==v)e.insertBefore(o(s,1),o(f,-0).nextSibling),s=t[++u],v=n[--d];else if(f==h)e.insertBefore(o(f,1),o(s,0)),f=t[--c],h=n[++l];else{var p=t.indexOf(h);if(p<0)e.insertBefore(o(h,1),o(s,0)),h=n[++l];else{var m=t[p];t[p]=null,e.insertBefore(o(m,1),o(s,0)),h=n[++l]}}if(u<=c||l<=d)if(u>c){var g=n[d+1],b=null==g?a:o(g,0);if(l===d)e.insertBefore(o(n[l],1),b);else{for(var y=e.ownerDocument.createDocumentFragment();l<=d;)y.appendChild(o(n[l++],1));e.insertBefore(y,b)}}else if(null==t[u]&&u++,u===c)e.removeChild(o(t[u],-1));else{var N=e.ownerDocument.createRange();N.setStartBefore(o(t[u],-1)),N.setEndAfter(o(t[c],-1)),N.deleteContents()}return n},pe=new T;r.prototype=Object.create(null);var me=function(e){return{html:e}},ge=function Ze(e,t){return"ELEMENT_NODE"in e?e:e.constructor===n?1/t<0?t?e.remove():e.last:t?e.insert():e.first:Ze(e.render(),t)},be=function(e){return"ELEMENT_NODE"in e||e instanceof n||e instanceof t},ye=function(e,t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t[i],a=ae.find(e,o.path);switch(o.type){case"any":n.push(Ce(a,[]));break;case"attr":n.push(ke(a,o.name,o.node));break;case"text":n.push(Ae(a))}}return n},Ne=function ze(e,t,n){for(var r=e.childNodes,i=r.length,o=0;o<i;o++){var a=r[o];switch(a.nodeType){case g:we(a,t,n),ze(a,t,n);break;case 8:a.textContent===E&&(n.shift(),t.push(x.test(e.nodeName)?ae.create("text",e):ae.create("any",a)));break;case 3:x.test(e.nodeName)&&L.call(a.textContent)===C&&(n.shift(),t.push(ae.create("text",e)))}}},we=function(e,t,n){for(var i=new r,o=e.attributes,a=Y.call(o),u=[],l=a.length,c=0;c<l;c++){var s=a[c];if(s.value===E){var f=s.name;if(!(f in i)){var d=n.shift().replace(/^(?:|[\S\s]*?\s)(\S+?)=['"]?$/,"$1");i[f]=o[d]||o[d.toLowerCase()],t.push(ae.create("attr",i[f],d))}u.push(s)}}for(var h=u.length,v=0;v<h;v++)e.removeAttributeNode(u[v]);var p=e.nodeName;if(/^script$/i.test(p)){for(var m=M(e,p),g=0;g<o.length;g++)m.setAttributeNode(o[g].cloneNode(!0));m.textContent=e.textContent,e.parentNode.replaceChild(m,e)}},xe=function(e,t){t(e.placeholder),"text"in e?Promise.resolve(e.text).then(String).then(t):"any"in e?Promise.resolve(e.any).then(t):"html"in e?Promise.resolve(e.html).then(me).then(t):Promise.resolve(p.invoke(e,t)).then(t)},Ee=function(e){return null!=e&&"then"in e},Ce=function(e,t){var n=!1,r=void 0;return function i(o){switch(typeof o){case"string":case"number":case"boolean":n?r!==o&&(r=o,t[0].textContent=o):(n=!0,r=o,t=ve(e.parentNode,t,[$(e,o)],ge,e));break;case"object":case"undefined":if(null==o){n=!1,t=ve(e.parentNode,t,[],ge,e);break}default:if(n=!1,r=o,j(o))if(0===o.length)t.length&&(t=ve(e.parentNode,t,[],ge,e));else switch(typeof o[0]){case"string":case"number":case"boolean":i({html:o});break;case"object":if(j(o[0])&&(o=o.concat.apply([],o)),Ee(o[0])){Promise.all(o).then(i);break}default:t=ve(e.parentNode,t,o,ge,e)}else be(o)?t=ve(e.parentNode,t,11===o.nodeType?Y.call(o.childNodes):[o],ge,e):Ee(o)?o.then(i):"placeholder"in o?xe(o,i):"text"in o?i(String(o.text)):"any"in o?i(o.any):"html"in o?t=ve(e.parentNode,t,Y.call(Q(e,[].concat(o.html).join("")).childNodes),ge,e):i("length"in o?Y.call(o):p.invoke(o,i))}}},ke=function(e,t,n){var r="ownerSVGElement"in e,o=void 0;if("style"===t)return le(e,n,r);if(/^on/.test(t)){var a=t.slice(2);return a===N||a===w?(Te&&(Te=!1,i()),pe.add(e)):t.toLowerCase()in e&&(a=a.toLowerCase()),function(t){o!==t&&(o&&e.removeEventListener(a,o,!1),o=t,t&&e.addEventListener(a,t,!1))}}if("data"===t||!r&&t in e)return function(n){o!==n&&(o=n,e[t]!==n&&(e[t]=n,null==n&&e.removeAttribute(t)))};var u=!1,l=n.cloneNode(!0);return function(t){o!==t&&(o=t,l.value!==t&&(null==t?(u&&(u=!1,e.removeAttributeNode(l)),l.value=t):(l.value=t,u||(u=!0,e.setAttributeNode(l)))))}},Ae=function(e){var t="";return function n(r){t!==r&&(t=r,"object"==typeof r&&r?Ee(r)?r.then(n):"placeholder"in r?xe(r,n):n("text"in r?String(r.text):"any"in r?r.any:"html"in r?[].concat(r.html).join(""):"length"in r?Y.call(r).join(""):p.invoke(r,n)):e.textContent=null==r?"":r)}},Se={create:ye,find:Ne},Te=!0,je=new S,Le=new A,Me=F,Oe=function(e,t,n){return b.test(t)?e:"<"+t+n+"></"+t+">"},De=new S,$e=function(e,t){return null==e?Pe(t||"html"):Be(e,t||"html")},Pe=function(e){var t=void 0,n=void 0,r=void 0,i=void 0,a=void 0;return function(u){u=ee(u);var l=i!==u;return l&&(i=u,r=D(document),n="svg"===e?document.createElementNS(y,"svg"):r,a=o.bind(n)),a.apply(null,arguments),l&&("svg"===e&&W(r,Y.call(n.childNodes)),t=Re(r)),t}},Be=function(e,t){var n=t.indexOf(":"),r=De.get(e),i=t;return-1<n&&(i=t.slice(n+1),t=t.slice(0,n)||"html"),r||De.set(e,r={}),r[i]||(r[i]=Pe(t))},Re=function(e){for(var t=e.childNodes,r=t.length,i=[],o=0;o<r;o++){var a=t[o];a.nodeType!==g&&0===L.call(a.textContent).length||i.push(a)}return 1===i.length?i[0]:new n(i)},He=function(e){return o.bind(e)},_e=p.define;return c.Component=t,c.bind=He,c.define=_e,c.diff=ve,c.hyper=c,c.wire=$e,function(e){Object.defineProperties(t.prototype,{handleEvent:{value:function(e){var t=e.currentTarget;this["getAttribute"in t&&t.getAttribute("data-call")||"on"+e.type](e)}},html:s("html",e),svg:s("svg",e),state:s("state",function(){return this.defaultState}),defaultState:{get:function(){return{}}},setState:{value:function(e){var t=this.state,n="function"==typeof e?e.call(this,t):e;for(var r in n)t[r]=n[r];this.render()}}})}(Pe),c}(window);
