/*! cdg - v - 2016-04-20
* Copyright (c) 2016 Kitae; Licensed  */
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
!function(a,b,c,d){function e(b,c){b.owlCarousel={name:"Owl Carousel",author:"Bartosz Wojciechowski",version:"2.0.0-beta.2.1"},this.settings=null,this.options=a.extend({},e.Defaults,c),this.itemData=a.extend({},l),this.dom=a.extend({},m),this.width=a.extend({},n),this.num=a.extend({},o),this.drag=a.extend({},q),this.state=a.extend({},r),this.e=a.extend({},s),this.plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=null,this.dom.el=b,this.dom.$el=a(b);for(var d in e.Plugins)this.plugins[d[0].toLowerCase()+d.slice(1)]=new e.Plugins[d](this);this.init()}function f(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function g(){return f(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function h(){return f(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function i(){return f(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function j(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function k(){return b.navigator.msPointerEnabled}var l,m,n,o,p,q,r,s;l={index:!1,indexAbs:!1,posLeft:!1,clone:!1,active:!1,loaded:!1,lazyLoad:!1,current:!1,width:!1,center:!1,page:!1,hasVideo:!1,playVideo:!1},m={el:null,$el:null,stage:null,$stage:null,oStage:null,$oStage:null,$items:null,$oItems:null,$cItems:null,$content:null},n={el:0,stage:0,item:0,prevWindow:0,cloneLast:0},o={items:0,oItems:0,cItems:0,active:0,merged:[]},q={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},r={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},s={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Plugins={},e.prototype.init=function(){if(this.setResponsiveOptions(),this.trigger("initialize"),this.dom.$el.hasClass(this.settings.baseClass)||this.dom.$el.addClass(this.settings.baseClass),this.dom.$el.hasClass(this.settings.themeClass)||this.dom.$el.addClass(this.settings.themeClass),this.settings.rtl&&this.dom.$el.addClass("owl-rtl"),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var a,b,c;if(a=this.dom.$el.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.dom.$el.children(b).width(),a.length&&0>=c)return this.preloadAutoWidthImages(a),!1}this.width.prevWindow=this.viewport(),this.createStage(),this.fetchContent(),this.eventsCall(),this.internalEvents(),this.dom.$el.addClass("owl-loading"),this.refresh(!0),this.dom.$el.removeClass("owl-loading").addClass("owl-loaded"),this.trigger("initialized"),this.addTriggerableEvents()},e.prototype.setResponsiveOptions=function(){if(this.options.responsive){var b=this.viewport(),c=this.options.responsive,d=-1;a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),this.settings=a.extend({},this.options,c[d]),delete this.settings.responsive,this.settings.responsiveClass&&this.dom.$el.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)}else this.settings=a.extend({},this.options)},e.prototype.optionsLogic=function(){this.dom.$el.toggleClass("owl-center",this.settings.center),this.settings.loop&&this.num.oItems<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.createStage=function(){var b=c.createElement("div"),d=c.createElement(this.settings.stageElement);b.className="owl-stage-outer",d.className="owl-stage",b.appendChild(d),this.dom.el.appendChild(b),this.dom.oStage=b,this.dom.$oStage=a(b),this.dom.stage=d,this.dom.$stage=a(d),b=null,d=null},e.prototype.createItemContainer=function(){var b=c.createElement(this.settings.itemElement);return b.className=this.settings.itemClass,a(b)},e.prototype.fetchContent=function(b){this.dom.$content=b?b instanceof jQuery?b:a(b):this.settings.nestedItemSelector?this.dom.$el.find("."+this.settings.nestedItemSelector).not(".owl-stage-outer"):this.dom.$el.children().not(".owl-stage-outer"),this.num.oItems=this.dom.$content.length,0!==this.num.oItems&&this.initStructure()},e.prototype.initStructure=function(){this.createNormalStructure()},e.prototype.createNormalStructure=function(){var a,b;for(a=0;a<this.num.oItems;a++)b=this.createItemContainer(),this.initializeItemContainer(b,this.dom.$content[a]),this.dom.$stage.append(b);this.dom.$content=null},e.prototype.createCustomStructure=function(a){var b,c;for(b=0;a>b;b++)c=this.createItemContainer(),this.createItemContainerData(c),this.dom.$stage.append(c)},e.prototype.initializeItemContainer=function(a,b){this.trigger("change",{property:{name:"item",value:a}}),this.createItemContainerData(a),a.append(b),this.trigger("changed",{property:{name:"item",value:a}})},e.prototype.createItemContainerData=function(b,c){var d=a.extend({},this.itemData);c&&a.extend(d,c.data("owl-item")),b.data("owl-item",d)},e.prototype.cloneItemContainer=function(a){var b=a.clone(!0,!0).addClass("cloned");return this.createItemContainerData(b,b),b.data("owl-item").clone=!0,b},e.prototype.updateLocalContent=function(){var b,c;for(this.dom.$oItems=this.dom.$stage.find("."+this.settings.itemClass).filter(function(){return a(this).data("owl-item").clone===!1}),this.num.oItems=this.dom.$oItems.length,b=0;b<this.num.oItems;b++)c=this.dom.$oItems.eq(b),c.data("owl-item").index=b},e.prototype.loopClone=function(){if(!this.settings.loop||this.num.oItems<this.settings.items)return!1;var b,c,d,e=this.settings.items,f=this.num.oItems-1;for(this.settings.stagePadding&&1===this.settings.items&&(e+=1),this.num.cItems=2*e,d=0;e>d;d++)b=this.cloneItemContainer(this.dom.$oItems.eq(d)),c=this.cloneItemContainer(this.dom.$oItems.eq(f-d)),this.dom.$stage.append(b),this.dom.$stage.prepend(c);this.dom.$cItems=this.dom.$stage.find("."+this.settings.itemClass).filter(function(){return a(this).data("owl-item").clone===!0})},e.prototype.reClone=function(){null!==this.dom.$cItems&&(this.dom.$cItems.remove(),this.dom.$cItems=null,this.num.cItems=0),this.settings.loop&&this.loopClone()},e.prototype.calculate=function(){var a,b,c,d,e,f,g,h=0,i=0;for(this.width.el=this.dom.$el.width()-2*this.settings.stagePadding,this.width.view=this.dom.$el.width(),c=this.width.el-this.settings.margin*(1===this.settings.items?0:this.settings.items-1),this.width.el=this.width.el+this.settings.margin,this.width.item=(c/this.settings.items+this.settings.margin).toFixed(3),this.dom.$items=this.dom.$stage.find(".owl-item"),this.num.items=this.dom.$items.length,this.settings.autoWidth&&this.dom.$items.css("width",""),this._coordinates=[],this.num.merged=[],d=this.settings.rtl?this.settings.center?-(this.width.el/2):0:this.settings.center?this.width.el/2:0,this.width.mergeStage=0,a=0;a<this.num.items;a++)this.settings.merge?(g=this.dom.$items.eq(a).find("[data-merge]").attr("data-merge")||1,this.settings.mergeFit&&g>this.settings.items&&(g=this.settings.items),this.num.merged.push(parseInt(g)),this.width.mergeStage+=this.width.item*this.num.merged[a]):this.num.merged.push(1),f=this.width.item*this.num.merged[a],this.settings.autoWidth&&(f=this.dom.$items.eq(a).width()+this.settings.margin,this.settings.rtl?this.dom.$items[a].style.marginLeft=this.settings.margin+"px":this.dom.$items[a].style.marginRight=this.settings.margin+"px"),this._coordinates.push(d),this.dom.$items.eq(a).data("owl-item").posLeft=h,this.dom.$items.eq(a).data("owl-item").width=f,this.settings.rtl?(d+=f,h+=f):(d-=f,h-=f),i-=Math.abs(f),this.settings.center&&(this._coordinates[a]=this.settings.rtl?this._coordinates[a]+f/2:this._coordinates[a]-f/2);for(this.width.stage=Math.abs(this.settings.autoWidth?this.settings.center?i:d:i),e=this.num.oItems+this.num.cItems,b=0;e>b;b++)this.dom.$items.eq(b).data("owl-item").indexAbs=b;this.setSizes()},e.prototype.setSizes=function(){this.settings.stagePadding!==!1&&(this.dom.oStage.style.paddingLeft=this.settings.stagePadding+"px",this.dom.oStage.style.paddingRight=this.settings.stagePadding+"px"),this.settings.rtl?b.setTimeout(a.proxy(function(){this.dom.stage.style.width=this.width.stage+"px"},this),0):this.dom.stage.style.width=this.width.stage+"px";for(var c=0;c<this.num.items;c++)this.settings.autoWidth||(this.dom.$items[c].style.width=this.width.item-this.settings.margin+"px"),this.settings.rtl?this.dom.$items[c].style.marginLeft=this.settings.margin+"px":this.dom.$items[c].style.marginRight=this.settings.margin+"px",1===this.num.merged[c]||this.settings.autoWidth||(this.dom.$items[c].style.width=this.width.item*this.num.merged[c]-this.settings.margin+"px");this.width.stagePrev=this.width.stage},e.prototype.responsive=function(){if(!this.num.oItems)return!1;var a=this.isElWidthChanged();return a?this.trigger("resize").isDefaultPrevented()?!1:(this.state.responsive=!0,this.refresh(),this.state.responsive=!1,void this.trigger("resized")):!1},e.prototype.refresh=function(){var a=this.dom.$oItems&&this.dom.$oItems.eq(this.normalize(this.current(),!0));return this.trigger("refresh"),this.setResponsiveOptions(),this.updateLocalContent(),this.optionsLogic(),0===this.num.oItems?!1:(this.dom.$stage.addClass("owl-refresh"),this.reClone(),this.calculate(),this.dom.$stage.removeClass("owl-refresh"),a?this.reset(a.data("owl-item").indexAbs):(this.dom.oStage.scrollLeft=0,this.reset(this.dom.$oItems.eq(0).data("owl-item").indexAbs)),this.state.orientation=b.orientation,this.watchVisibility(),void this.trigger("refreshed"))},e.prototype.updateActiveItems=function(){this.trigger("change",{property:{name:"items",value:this.dom.$items}});var a,b,c,d,e,f;for(a=0;a<this.num.items;a++)this.dom.$items.eq(a).data("owl-item").active=!1,this.dom.$items.eq(a).data("owl-item").current=!1,this.dom.$items.eq(a).removeClass(this.settings.activeClass).removeClass(this.settings.centerClass);for(this.num.active=0,padding=2*this.settings.stagePadding,stageX=this.coordinates(this.current())+padding,view=this.settings.rtl?this.width.view:-this.width.view,b=0;b<this.num.items;b++)c=this.dom.$items.eq(b),d=c.data("owl-item").posLeft,e=c.data("owl-item").width,f=this.settings.rtl?d-e-padding:d-e+padding,(this.op(d,"<=",stageX)&&this.op(d,">",stageX+view)||this.op(f,"<",stageX)&&this.op(f,">",stageX+view))&&(this.num.active++,c.data("owl-item").active=!0,c.data("owl-item").current=!0,c.addClass(this.settings.activeClass),this.settings.lazyLoad||(c.data("owl-item").loaded=!0),this.settings.loop&&this.updateClonedItemsState(c.data("owl-item").index));this.settings.center&&(this.dom.$items.eq(this.current()).addClass(this.settings.centerClass).data("owl-item").center=!0),this.trigger("changed",{property:{name:"items",value:this.dom.$items}})},e.prototype.updateClonedItemsState=function(a){var b,c,d;for(this.settings.center&&(b=this.dom.$items.eq(this.current()).data("owl-item").index),d=0;d<this.num.items;d++)c=this.dom.$items.eq(d),c.data("owl-item").index===a&&(c.data("owl-item").current=!0,c.data("owl-item").index===b&&c.addClass(this.settings.centerClass))},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._resizer=a.proxy(function(){this.responsiveTimer()},this),this.e._responsiveCall=a.proxy(function(){this.responsive()},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.responsiveTimer=function(){return this.viewport()===this.width.prevWindow?!1:(b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._responsiveCall,this.settings.responsiveRefreshRate),void(this.width.prevWindow=this.viewport()))},e.prototype.internalEvents=function(){var a=j(),d=k();this.dragType=a&&!d?["touchstart","touchmove","touchend","touchcancel"]:a&&d?["MSPointerDown","MSPointerMove","MSPointerUp","MSPointerCancel"]:["mousedown","mousemove","mouseup"],(a||d)&&this.settings.touchDrag?this.on(c,this.dragType[3],this.e._onDragEnd):(this.dom.$stage.on("dragstart",function(){return!1}),this.settings.mouseDrag?this.dom.stage.onselectstart=function(){return!1}:this.dom.$el.addClass("owl-text-select-on")),this.transitionEndVendor&&this.on(this.dom.stage,this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",this.e._resizer,!1),this.dragEvents()},e.prototype.dragEvents=function(){!this.settings.touchDrag||"touchstart"!==this.dragType[0]&&"MSPointerDown"!==this.dragType[0]?this.settings.mouseDrag&&"mousedown"===this.dragType[0]?this.on(this.dom.stage,this.dragType[0],this.e._onDragStart,!1):this.off(this.dom.stage,this.dragType[0],this.e._onDragStart):this.on(this.dom.stage,this.dragType[0],this.e._onDragStart,!1)},e.prototype.onDragStart=function(a){var d,e,f,g,h;if(d=a.originalEvent||a||b.event,3===d.which)return!1;if("mousedown"===this.dragType[0]&&this.dom.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,e="touchstart"===d.type,f=e?a.targetTouches[0].pageX:d.pageX||d.clientX,g=e?a.targetTouches[0].pageY:d.pageY||d.clientY,this.drag.offsetX=this.dom.$stage.position().left-this.settings.stagePadding,this.drag.offsetY=this.dom.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.dom.$stage.position().left+this.width.stage-this.width.el+this.settings.margin),this.state.inMotion&&this.support3d)h=this.getTransformProperty(),this.drag.offsetX=h,this.animate(h),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=f-this.drag.offsetX,this.drag.startY=g-this.drag.offsetY,this.drag.start=f-this.drag.startX,this.drag.targetEl=d.target||d.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),this.on(c,this.dragType[1],this.e._onDragMove,!1),this.on(c,this.dragType[2],this.e._onDragEnd,!1)},e.prototype.onDragMove=function(a){var c,e,f,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e="touchmove"==c.type,f=e?c.targetTouches[0].pageX:c.pageX||c.clientX,g=e?c.targetTouches[0].pageY:c.pageY||c.clientY,this.drag.currentX=f-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this.num.oItems):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this.num.oItems)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(){var a,b,d;if(this.state.isTouch){if("mousedown"===this.dragType[0]&&this.dom.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),a=this.drag.endTime-this.drag.startTime,b=Math.abs(this.drag.distance),(b>3||a>300)&&this.removeClick(this.drag.targetEl),d=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(d),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(d)||this.transitionEnd(),this.drag.distance=0,this.off(c,this.dragType[1],this.e._onDragMove),this.off(c,this.dragType[2],this.e._onDragEnd)}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.dom.stage,null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=0,d=30;return this.settings.freeDrag||a.each(this.coordinates(),a.proxy(function(a,e){b>e-d&&e+d>b?c=a:this.op(b,"<",e)&&this.op(b,">",this.coordinates(a+1)||e-this.width.el)&&(c="left"===this.state.direction?a+1:a)},this)),this.settings.loop||(this.op(b,">",this.coordinates(this.minimum()))?c=b=this.minimum():this.op(b,"<",this.coordinates(this.maximum()))&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.dom.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.dom.$stage.css({left:b+"px"}):this.dom.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this.num.oItems)return d;if(a=this.normalize(a),this._current===a)this.animate(this.coordinates(this._current));else{var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.animate(this.coordinates(this._current)),this.updateActiveItems(),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.reset=function(a){this.suppress(["change","changed"]),this.speed(0),this.current(a),this.release(["change","changed"])},e.prototype.normalize=function(a,b){if(a===d||!this.dom.$items)return d;if(this.settings.loop){var c=this.dom.$items.length;a=(a%c+c)%c}else a=Math.max(this.minimum(),Math.min(this.maximum(),a));return b?this.dom.$items.eq(a).data("owl-item").index:a},e.prototype.maximum=function(){var b,c,d=this.settings;if(!d.loop&&d.center)b=this.num.oItems-1;else if(d.loop||d.center)if(d.loop||d.center)b=this.num.oItems+d.items;else{if(!d.autoWidth&&!d.merge)throw"Can not detect maximum absolute position.";revert=d.rtl?1:-1,c=this.dom.$stage.width()-this.$el.width(),a.each(this.coordinates(),function(a,d){return d*revert>=c?!1:void(b=a+1)})}else b=this.num.oItems-d.items;return b},e.prototype.minimum=function(){return this.dom.$oItems.eq(0).data("owl-item").indexAbs},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(a){return a!==d?this._coordinates[a]:this._coordinates},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.normalize(this.current(),!0),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1;h<this.settings.items&&i===!1?(f=this.num.items-(this.settings.items-g)-this.settings.items,this.reset(f)):h>=this.num.items-this.settings.items&&i===!0&&(f=g-this.num.oItems,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e)},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c)},e.prototype.next=function(a){a=a||!1,this.to(this.normalize(this.current(),!0)+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.normalize(this.current(),!0)-1,a)},e.prototype.transitionEnd=function(a){if(a!==d){a.stopPropagation();var b=a.target||a.srcElement||a.originalTarget;if(b!==this.dom.stage)return!1}this.state.inMotion=!1,this.trigger("translated")},e.prototype.isElWidthChanged=function(){var a=this.dom.$el.width()-this.settings.stagePadding,b=this.width.el+this.settings.margin;return a!==b},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.insertContent=function(a){this.dom.$stage.empty(),this.fetchContent(a),this.refresh()},e.prototype.addItem=function(a,b){var c=this.createItemContainer();b=b||0,this.initializeItemContainer(c,a),0===this.dom.$oItems.length?this.dom.$stage.append(c):-1!==p?this.dom.$oItems.eq(b).before(c):this.dom.$oItems.eq(b).after(c),this.refresh()},e.prototype.removeItem=function(a){this.dom.$oItems.eq(a).remove(),this.refresh()},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.insertContent,add:this.addItem,remove:this.removeItem},a.proxy(function(a,c){this.dom.$el.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.dom.el)&&(this.dom.$el.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.dom.el)||(this.dom.$el.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.init())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.dom.$el.hasClass(this.settings.themeClass)&&this.dom.$el.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&this.off(b,"resize",this.e._resizer),this.transitionEndVendor&&this.off(this.dom.stage,this.transitionEndVendor,this.e._transitionEnd);for(var a in this.plugins)this.plugins[a].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.off(this.dom.stage,this.dragType[0],this.e._onDragStart),this.settings.mouseDrag&&this.off(c,this.dragType[3],this.e._onDragStart),this.settings.mouseDrag&&(this.dom.$stage.off("dragstart",function(){return!1}),this.dom.stage.onselectstart=function(){})),this.dom.$el.off(".owl"),null!==this.dom.$cItems&&this.dom.$cItems.remove(),this.e=null,this.dom.$el.data("owlCarousel",null),delete this.dom.el.owlCarousel,this.dom.$stage.unwrap(),this.dom.$items.unwrap(),this.dom.$items.contents().unwrap(),this.dom=null},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this.num.oItems,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[g.type]||(a.each(this.plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.dom.$el.trigger(g),"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=i(),this.support3d){this.transformVendor=h();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[g()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){LazyLoad=function(b){this.owl=b,this.owl.options=a.extend({},LazyLoad.Defaults,this.owl.options),this.handlers={"changed.owl.carousel":a.proxy(function(a){"items"==a.property.name&&a.property.value&&!a.property.value.is(":empty")&&this.check()},this)},this.owl.dom.$el.on(this.handlers)},LazyLoad.Defaults={lazyLoad:!1},LazyLoad.prototype.check=function(){var a,c,d,e,f=b.devicePixelRatio>1?"data-src-retina":"data-src";for(d=0;d<this.owl.num.items;d++)e=this.owl.dom.$items.eq(d),e.data("owl-item").current===!0&&e.data("owl-item").loaded===!1&&(c=e.find(".owl-lazy"),a=c.attr(f),a=a||c.attr("data-src"),a&&(c.css("opacity","0"),this.preload(c,e)))},LazyLoad.prototype.preload=function(c,d){var e,f,g;c.each(a.proxy(function(c,h){this.owl.trigger("load",null,"lazy"),e=a(h),f=new Image,g=e.attr(b.devicePixelRatio>1?"data-src-retina":"data-src"),g=g||e.attr("data-src"),f.onload=a.proxy(function(){d.data("owl-item").loaded=!0,e.is("img")?e.attr("src",f.src):e.css("background-image","url("+f.src+")"),e.css("opacity",1),this.owl.trigger("loaded",null,"lazy")},this),f.src=g},this))},LazyLoad.prototype.destroy=function(){var a,b;for(a in this.handlers)this.owl.dom.$el.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.lazyLoad=LazyLoad}(window.Zepto||window.jQuery,window,document),function(a,b){AutoHeight=function(b){this.owl=b,this.owl.options=a.extend({},AutoHeight.Defaults,this.owl.options),this.handlers={"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.owl.settings.autoHeight&&this.setHeight()},this)},this.owl.dom.$el.on(this.handlers)},AutoHeight.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},AutoHeight.prototype.setHeight=function(){var a,c=this.owl.dom.$items.eq(this.owl.current()),d=this.owl.dom.$oStage,e=0;this.owl.dom.$oStage.hasClass(this.owl.settings.autoHeightClass)||this.owl.dom.$oStage.addClass(this.owl.settings.autoHeightClass),a=b.setInterval(function(){e+=1,c.data("owl-item").loaded?(d.height(c.height()+"px"),clearInterval(a)):500===e&&clearInterval(a)},100)},AutoHeight.prototype.destroy=function(){var a,b;for(a in this.handlers)this.owl.dom.$el.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoHeight=AutoHeight}(window.Zepto||window.jQuery,window,document),function(a,b,c){Video=function(b){this.owl=b,this.owl.options=a.extend({},Video.Defaults,this.owl.options),this.handlers={"resize.owl.carousel":a.proxy(function(a){this.owl.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this.owl.state.videoPlay&&this.stopVideo()},this),"refresh.owl.carousel refreshed.owl.carousel":a.proxy(function(a){return this.owl.settings.video?void(this.refreshing="refresh"==a.type):!1},this),"changed.owl.carousel":a.proxy(function(a){this.refreshing&&"items"==a.property.name&&a.property.value&&!a.property.value.is(":empty")&&this.checkVideoLinks()},this)},this.owl.dom.$el.on(this.handlers),this.owl.dom.$el.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.playVideo(a)},this))},Video.Defaults={video:!1,videoHeight:!1,videoWidth:!1},Video.prototype.checkVideoLinks=function(){var a,b,c;for(c=0;c<this.owl.num.items;c++)b=this.owl.dom.$items.eq(c),b.data("owl-item").hasVideo||(a=b.find(".owl-video"),a.length&&(this.owl.state.hasVideos=!0,this.owl.dom.$items.eq(c).data("owl-item").hasVideo=!0,a.css("display","none"),this.getVideoInfo(a,b)))},Video.prototype.getVideoInfo=function(a,b){var c,d,e,f,g=a.data("vimeo-id"),h=a.data("youtube-id"),i=a.data("width")||this.owl.settings.videoWidth,j=a.data("height")||this.owl.settings.videoHeight,k=a.attr("href");if(g)d="vimeo",e=g;else if(h)d="youtube",e=h;else{if(!k)throw new Error("Missing video link.");e=k.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),e[3].indexOf("youtu")>-1?d="youtube":e[3].indexOf("vimeo")>-1&&(d="vimeo"),e=e[6]}b.data("owl-item").videoType=d,b.data("owl-item").videoId=e,b.data("owl-item").videoWidth=i,b.data("owl-item").videoHeight=j,c={type:d,id:e},f=i&&j?'style="width:'+i+"px;height:"+j+'px;"':"",a.wrap('<div class="owl-video-wrapper"'+f+"></div>"),this.createVideoTn(a,c)},Video.prototype.createVideoTn=function(b,c){function d(a){f='<div class="owl-video-play-icon"></div>',e=k.settings.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(e),b.after(f)}var e,f,g,h=b.find("img"),i="src",j="",k=this.owl;return this.owl.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(d(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(g="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",d(g)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){g=a[0].thumbnail_large,d(g),k.settings.loop&&k.updateActiveItems()}}))},Video.prototype.stopVideo=function(){this.owl.trigger("stop",null,"video");var a=this.owl.dom.$items.eq(this.owl.state.videoPlayIndex);a.find(".owl-video-frame").remove(),a.removeClass("owl-video-playing"),this.owl.state.videoPlay=!1},Video.prototype.playVideo=function(b){this.owl.trigger("play",null,"video"),this.owl.state.videoPlay&&this.stopVideo();var c,d,e,f=a(b.target||b.srcElement),g=f.closest("."+this.owl.settings.itemClass);e=g.data("owl-item").videoType,id=g.data("owl-item").videoId,width=g.data("owl-item").videoWidth||Math.floor(g.data("owl-item").width-this.owl.settings.margin),height=g.data("owl-item").videoHeight||this.owl.dom.$stage.height(),"youtube"===e?c='<iframe width="'+width+'" height="'+height+'" src="http://www.youtube.com/embed/'+id+"?autoplay=1&v="+id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===e&&(c='<iframe src="http://player.vimeo.com/video/'+id+'?autoplay=1" width="'+width+'" height="'+height+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),g.addClass("owl-video-playing"),this.owl.state.videoPlay=!0,this.owl.state.videoPlayIndex=g.data("owl-item").indexAbs,d=a('<div style="height:'+height+"px; width:"+width+'px" class="owl-video-frame">'+c+"</div>"),f.after(d)
},Video.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d.parentNode).hasClass("owl-video-frame")&&(this.owl.speed(0),this.owl.state.isFullScreen=!0),d&&this.owl.state.isFullScreen&&this.owl.state.videoPlay?!1:this.owl.state.isFullScreen?(this.owl.state.isFullScreen=!1,!1):this.owl.state.videoPlay&&this.owl.state.orientation!==b.orientation?(this.owl.state.orientation=b.orientation,!1):!0},Video.prototype.destroy=function(){var a,b;this.owl.dom.$el.off("click.owl.video");for(a in this.handlers)this.owl.dom.$el.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.video=Video}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){Animate=function(b){this.core=b,this.core.options=a.extend({},Animate.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.dom.$el.on(this.handlers)},Animate.Defaults={animateOut:!1,animateIn:!1},Animate.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.dom.$items.eq(this.previous),e=this.core.dom.$items.eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},Animate.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},Animate.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.dom.$el.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=Animate}(window.Zepto||window.jQuery,window,document),function(a,b,c){Autoplay=function(b){this.core=b,this.core.options=a.extend({},Autoplay.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.dom.$el.on(this.handlers)},Autoplay.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},Autoplay.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},Autoplay.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},Autoplay.prototype.stop=function(){b.clearInterval(this.interval)},Autoplay.prototype.pause=function(){b.clearInterval(this.interval)},Autoplay.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.dom.$el.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=Autoplay}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this.core=c,this.initialized=!1,this.pages=[],this.controls={},this.template=null,this.$element=this.core.dom.$el,this.overrides={next:this.core.next,prev:this.core.prev,to:this.core.to},this.handlers={"changed.owl.carousel":a.proxy(function(b){"items"==b.property.name&&(this.initialized||(this.initialize(),this.initialized=!0),this.update(),this.draw()),this.filling&&(b.property.value.data("owl-item").dot=a(":first-child",b.property.value).find("[data-dot]").andSelf().data("dot"))},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this.core.state.revert&&!this.core.settings.loop&&this.core.settings.navRewind){var b=this.core.current(),c=this.core.maximum(),d=this.core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}this.filling=this.core.settings.dotsData&&"item"==a.property.name&&a.property.value&&a.property.value.is(":empty")},this),"refreshed.owl.carousel":a.proxy(function(){this.initialized&&(this.update(),this.draw())},this)},this.core.options=a.extend({},b.Defaults,this.core.options),this.$element.on(this.handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this.core.settings;d.dotsData||(this.template=a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")),d.navContainer&&d.dotsContainer||(this.controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this.controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this.controls.$container),this.controls.$indicators.on(this.core.dragType[2],"div",a.proxy(function(b){var c=a(b.target).parent().is(this.controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this.controls.$container),this.controls.$next=a("<"+d.navElement+">"),this.controls.$previous=this.controls.$next.clone(),this.controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on(this.core.dragType[2],a.proxy(function(){this.prev()},this)),this.controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on(this.core.dragType[2],a.proxy(function(){this.next()},this));for(c in this.overrides)this.core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this.handlers)this.$element.off(a,this.handlers[a]);for(b in this.controls)this.controls[b].remove();for(d in this.overides)this.core[d]=this.overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this.core.settings,e=this.core.num.cItems/2,f=this.core.num.items-e,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots)for(this.pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this.pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this.core.num.merged[a]},b.prototype.draw=function(){var b,c,d="",e=this.core.settings,f=this.core.dom.$oItems,g=this.core.normalize(this.core.current(),!0);if(!e.nav||e.loop||e.navRewind||(this.controls.$previous.toggleClass("disabled",0>=g),this.controls.$next.toggleClass("disabled",g>=this.core.maximum())),this.controls.$previous.toggle(e.nav),this.controls.$next.toggle(e.nav),e.dots){if(b=this.pages.length-this.controls.$indicators.children().length,b>0){for(c=0;c<Math.abs(b);c++)d+=e.dotData?f.eq(c).data("owl-item").dot:this.template;this.controls.$indicators.append(d)}else 0>b&&this.controls.$indicators.children().slice(b).remove();this.controls.$indicators.find(".active").removeClass("active"),this.controls.$indicators.children().eq(a.inArray(this.current(),this.pages)).addClass("active")}this.controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this.core.settings;b.page={index:a.inArray(this.current(),this.pages),count:this.pages.length,size:c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items}},b.prototype.current=function(){var b=this.core.normalize(this.core.current(),!0);return a.grep(this.pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this.core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this.pages),d=this.pages.length,b?++c:--c,c=this.pages[(c%d+d)%d].start):(c=this.core.normalize(this.core.current(),!0),d=this.core.num.oItems,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this.overrides.to,this.core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this.overrides.to,this.core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this.overrides.to,this.core)(b,c):(e=this.pages.length,a.proxy(this.overrides.to,this.core)(this.pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this.core=c,this.hashes={},this.$element=this.core.dom.$el,this.handlers={"initialized.owl.carousel":a.proxy(function(){b.location.hash.substring(1)&&a(b).trigger("hashchange.owl.navigation")},this),"changed.owl.carousel":a.proxy(function(b){this.filling&&(b.property.value.data("owl-item").hash=a(":first-child",b.property.value).find("[data-hash]").andSelf().data("hash"),this.hashes[b.property.value.data("owl-item").hash]=b.property.value)},this),"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.core.current()===d&&"URLHash"==this.core.settings.startPosition&&(a.data=this.hashes[b.location.hash.substring(1)]),this.filling="item"==a.property.name&&a.property.value&&a.property.value.is(":empty")},this)},this.core.options=a.extend({},e.Defaults,this.core.options),this.$element.on(this.handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this.core.dom.$oItems,d=this.hashes[a]&&c.index(this.hashes[a])||0;return a?(this.core.dom.oStage.scrollLeft=0,void this.core.to(d,!1,!0)):!1},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this.handlers)this.owl.dom.$el.off(c,this.handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document);
;(function ( $, window, undefined ) {

  "use strict";

  //  create the defaults once
  var pluginName = 'pep';
  var defaults   = {

    // Options
    // ----------------------------------------------------------------------------------------------
    // See ** https://github.com/briangonzalez/jquery.pep.js ** for fully documented options.
    // It was too hard to manage options here and in the readme.
    // ----------------------------------------------------------------------------------------------
    initiate:                       function(){},
    start:                          function(){},
    drag:                           function(){},
    stop:                           function(){},
    easing:                         null,
    rest:                           function(){},
    moveTo:                         false,
    callIfNotStarted:               ['stop', 'rest'],
    startThreshold:                 [0,0],
    grid:                           [1,1],
    debug:                          false,
    activeClass:                    'pep-active',
    multiplier:                     1,
    velocityMultiplier:             2.5,
    shouldPreventDefault:           true,
    allowDragEventPropagation:      true,
    stopEvents:                     '',
    hardwareAccelerate:             true,
    useCSSTranslation:              true,
    disableSelect:                  true,
    cssEaseString:                  "cubic-bezier(0.190, 1.000, 0.220, 1.000)",
    cssEaseDuration:                1000,
    shouldEase:                     true,
    droppable:                      false,
    droppableActiveClass:           'pep-dpa',
    overlapFunction:                false,
    constrainTo:                    false,
    removeMargins:                  true,
    place:                          true,
    deferPlacement:                 false,
    axis:                           null,
    forceNonCSS3Movement:           false,
    elementsWithInteraction:        'input',
    revert:                         false,
    revertAfter:                    'stop',
    revertIf:                       function(){ return true; },
    ignoreRightClick:               true,
    startPos:                       {
        left:                           null,
        top:                            null
    },
    useBoundingClientRect:          false
  };

  //  ---------------------------------
  //  -----  Our main Pep object  -----
  //  ---------------------------------
  function Pep( el, options ) {

    this.name = pluginName;

    // reference to our DOM object
    // and it's jQuery equivalent.
    this.el  = el;
    this.$el = $(el);

    //  merge in defaults
    this.options    = $.extend( {}, defaults, options) ;

    // store document/body so we don't need to keep grabbing them
    // throughout the code
    this.$document  = $(this.$el[0].ownerDocument);
    this.$body      = this.$document.find('body');

    //  Create our triggers based on touch/click device
    this.moveTrigger        = "MSPointerMove pointermove touchmove mousemove";
    this.startTrigger       = "MSPointerDown pointerdown touchstart mousedown";
    this.stopTrigger        = "MSPointerUp pointerup touchend mouseup";
    this.startTriggerArray  = this.startTrigger.split(' ');
    this.moveTriggerArray   = this.moveTrigger.split(' ');
    this.stopTriggerArray   = this.stopTrigger.split(' ');
    this.stopEvents         = [ this.stopTrigger, this.options.stopEvents ].join(' ');

    if ( this.options.constrainTo === 'window' )
      this.$container = this.$document;
    else if ( this.options.constrainTo && (this.options.constrainTo !== 'parent') )
      this.$container = $(this.options.constrainTo);
    else
      this.$container = this.$el.parent();

    // IE need this
    if ( this.isPointerEventCompatible() )
      this.applyMSDefaults();

    this.CSSEaseHash    = this.getCSSEaseHash();
    this.scale          = 1;
    this.started        = false;
    this.disabled       = false;
    this.activeDropRegions = [];
    this.resetVelocityQueue();

    this.init();
    return this;
  }

  //  init();
  //    initialization logic
  //    you already have access to the DOM el and the options via the instance,
  //    e.g., this.el and this.options
  Pep.prototype.init = function () {

    if ( this.options.debug )
      this.buildDebugDiv();

    if ( this.options.disableSelect )
      this.disableSelect();

    // position the parent & place the object, if necessary.
    if ( this.options.place && !this.options.deferPlacement ) {
      this.positionParent();
      this.placeObject();
    }

    this.ev = {};       // to store our event movements
    this.pos = {};      // to store positions
    this.subscribe();
  };

  //  subscribe();
  //    useful in the event we want to programmatically
  //    interact with our Pep object.
  //      e.g.:     $('#pep').trigger('stop')
  Pep.prototype.subscribe = function () {
    var self = this;

    // Subscribe to our start event
    this.onStartEvent = function(ev){ self.handleStart(ev); };
    this.$el.on(this.startTrigger, this.onStartEvent);

    // Add a flag to events that start on elements that should allow interaction
    // so handleStart() can ignore them but allow them to bubble up through the DOM
    this.onStartEventOnElementsWithInteraction = function(ev){ ev.ignorePropagation = true; };
    this.$el.on(
      this.startTrigger,
      this.options.elementsWithInteraction,
      this.onStartEventOnElementsWithInteraction
    );

    // Subscribe to our stop event
    this.onStopEvents = function(ev) { self.handleStop(ev); };
    this.$document.on(this.stopEvents, this.onStopEvents);

    // Subscribe to our move event
    this.onMoveEvents = function(ev){ self.moveEvent = ev; };
    this.$document.on(this.moveTrigger, this.onMoveEvents);
  };

  Pep.prototype.unsubscribe = function() {
    this.$el.off(this.startTrigger, this.onStartEvent);
    this.$el.off(
      this.startTrigger,
      this.options.elementsWithInteraction,
      this.onStartEventOnElementsWithInteraction
    );
    this.$document.off(this.stopEvents, this.onStopEvents);
    this.$document.off(this.moveTrigger, this.onMoveEvents);
  };

  //  handleStart();
  //    once this.startTrigger occurs, handle all of the logic
  //    that must go on. This is where Pep's heavy lifting is done.
  Pep.prototype.handleStart = function(ev) {

    // ignorePropagation is set to true if the event originates from an element
    // listed in this.options.elementsWithInteraction
    if (ev.ignorePropagation) return;

    var self = this;

            // only continue chugging if our start event is a valid move event.
            if ( this.isValidMoveEvent(ev) && !this.disabled ){

              if( !(this.options.ignoreRightClick && ev.which === 3) ) {

                    // IE10 Hack. Me not happy.
                    if ( this.isPointerEventCompatible() && ev.preventManipulation )
                      ev.preventManipulation();

                    // normalize event
                    ev = this.normalizeEvent(ev);

                    // position the parent & place the object, if necessary.
                    if ( this.options.place && this.options.deferPlacement ) {
                      this.positionParent();
                      this.placeObject();
                    }

                    // log it
                    this.log({ type: 'event', event: ev.type });

                    // hardware accelerate, if necessary.
                    if ( this.options.hardwareAccelerate && !this.hardwareAccelerated ) {
                      this.hardwareAccelerate();
                      this.hardwareAccelerated = true;
                    }

                    // fire user's initiate event.
                    var shouldContinue = this.options.initiate.call(this, ev, this);
                    if ( shouldContinue === false )
                      return;


                    // cancel the rest timeout
                    clearTimeout( this.restTimeout );

                    // add active class and reset css animation, if necessary
                    this.$el.addClass( this.options.activeClass );
                    this.removeCSSEasing();

                    // store event's x & y values for later use
                    this.startX = this.ev.x = ev.pep.x;
                    this.startY = this.ev.y = ev.pep.y;

                    // store initial offset.
                    this.initialPosition = this.initialPosition || this.$el.position();

                    // store the initial touch/click event, used to calculate the inital delta values.
                    this.startEvent = this.moveEvent = ev;

                    // make object active, so watchMoveLoop starts looping.
                    this.active     = true;

                    // preventDefault(), is necessary
                    if ( this.options.shouldPreventDefault )
                      ev.preventDefault();

                    // allow / disallow event bubbling
                    if ( !this.options.allowDragEventPropagation )
                      ev.stopPropagation();

                    // animation loop to ensure we don't fire
                    // too many unneccessary repaints
                    (function watchMoveLoop(){
                        if ( !self.active ) return;
                        self.handleMove();
                        self.requestAnimationFrame( watchMoveLoop );
                    })();

                    (function watchEasingLoop(){
                        if ( !self.options.easing ) return;
                        if ( self.easing ) self.options.easing.call(self, null, self);
                        self.requestAnimationFrame( watchEasingLoop );
                    })();
              }
            }
  };

  //  handleMove();
  //    the logic for when the move events occur
  Pep.prototype.handleMove = function() {

            // setup our event object
            if ( typeof(this.moveEvent) === 'undefined' )
              return;

            // get our move event's x & y
            var ev      = this.normalizeEvent( this.moveEvent );
            var curX    = window.parseInt(ev.pep.x / this.options.grid[0]) * this.options.grid[0];
            var curY    = window.parseInt(ev.pep.y / this.options.grid[1]) * this.options.grid[1];

            // last in, first out (LIFO) queue to help us manage velocity
            this.addToLIFO( { time: ev.timeStamp, x: curX, y: curY } );

            // calculate values necessary to moving
            var dx, dy;

            if ( $.inArray( ev.type, this.startTriggerArray ) > -1  ){
              dx = 0;
              dy = 0;
            } else{
              dx = curX - this.ev.x;
              dy = curY - this.ev.y;
            }

            this.dx   = dx;
            this.dy   = dy;
            this.ev.x = curX;
            this.ev.y = curY;

            // no movement in either direction -- so return
            if (dx === 0 && dy === 0){
              this.log({ type: 'event', event: '** stopped **' });
              return;
            }

            // check if object has moved past X/Y thresholds
            // if so, fire users start event
            var initialDx  = Math.abs(this.startX - curX);
            var initialDy  = Math.abs(this.startY - curY);
            if ( !this.started && ( initialDx > this.options.startThreshold[0] || initialDy > this.options.startThreshold[1] ) ){
              this.started = true;
              this.$el.addClass('pep-start');
              this.options.start.call(this, this.startEvent, this);
            }

            // Move before calculate position and fire events
            this.doMoveTo(dx, dy);

            // Calculate our drop regions
            if ( this.options.droppable ) {
              this.calculateActiveDropRegions();
            }

            // fire user's drag event.
            var continueDrag = this.options.drag.call(this, ev, this);

            if ( continueDrag === false ) {
              this.resetVelocityQueue();
              return;
            }

            // log the move trigger & event position
            this.log({ type: 'event', event: ev.type });
            this.log({ type: 'event-coords', x: this.ev.x, y: this.ev.y });
            this.log({ type: 'velocity' });
  };

  Pep.prototype.doMoveTo = function(dx, dy) {
            var hash = this.handleConstraint(dx, dy);
            var xOp, yOp;

            // if using not using CSS transforms, move object via absolute position
            if ( typeof this.options.moveTo === 'function') {
              xOp     = ( dx >= 0 ) ? "+=" + Math.abs(dx/this.scale)*this.options.multiplier : "-=" + Math.abs(dx/this.scale)*this.options.multiplier;
              yOp     = ( dy >= 0 ) ? "+=" + Math.abs(dy/this.scale)*this.options.multiplier : "-=" + Math.abs(dy/this.scale)*this.options.multiplier;

              if ( this.options.constrainTo ) {
                xOp = (hash.x !== false) ? hash.x : xOp;
                yOp = (hash.y !== false) ? hash.y : yOp;
              }

              // only move along single axis, if necessary
              if ( this.options.axis  === 'x' ) yOp = hash.y;
              if ( this.options.axis  === 'y' ) xOp = hash.x;

              this.options.moveTo.call(this, xOp, yOp);
            } else if ( !this.shouldUseCSSTranslation() ){
              xOp     = ( dx >= 0 ) ? "+=" + Math.abs(dx/this.scale)*this.options.multiplier : "-=" + Math.abs(dx/this.scale)*this.options.multiplier;
              yOp     = ( dy >= 0 ) ? "+=" + Math.abs(dy/this.scale)*this.options.multiplier : "-=" + Math.abs(dy/this.scale)*this.options.multiplier;

              if ( this.options.constrainTo ) {
                xOp = (hash.x !== false) ? hash.x : xOp;
                yOp = (hash.y !== false) ? hash.y : yOp;
              }

              // only move along single axis, if necessary
              if ( this.options.axis  === 'x' ) yOp = hash.y;
              if ( this.options.axis  === 'y' ) xOp = hash.x;

              this.moveTo(xOp, yOp);
            }
            else {

              dx = (dx/this.scale)*this.options.multiplier;
              dy = (dy/this.scale)*this.options.multiplier;

              if ( this.options.constrainTo ) {
                dx = (hash.x === false) ? dx : 0 ;
                dy = (hash.y === false) ? dy : 0 ;
              }

              // only move along single axis, if necessary
              if ( this.options.axis  === 'x' ) dy = 0;
              if ( this.options.axis  === 'y' ) dx = 0;

              this.moveToUsingTransforms( dx, dy );
            }
  };

  //  handleStop();
  //    the logic for when the stop events occur
  Pep.prototype.handleStop = function(ev) {

            // no need to handle stop event if we're not active
            if (!this.active)
              return;

            // log it
            this.log({ type: 'event', event: ev.type });

            // make object inactive, so watchMoveLoop returns
            this.active = false;

            // make object easing.
            this.easing = true;

            // remove our start class
            this.$el.removeClass('pep-start')
                    .addClass('pep-ease');

            // Calculate our drop regions
            if ( this.options.droppable ) {
              this.calculateActiveDropRegions();
            }

            // fire user's stop event.
            if ( this.started || (!this.started &&  $.inArray('stop', this.options.callIfNotStarted) > -1 ) ) {
              this.options.stop.call(this, ev, this);
            }

            // ease the object, if necessary.
            if (this.options.shouldEase) {
              this.ease(ev, this.started);
            } else {
              this.removeActiveClass();
            }

            if ( this.options.revert && (this.options.revertAfter === 'stop' || !this.options.shouldEase) && ( this.options.revertIf && this.options.revertIf.call(this) ) ) {
              this.revert();
            }

            // this must be set to false after
            // the user's stop event is called, so the dev
            // has access to it.
            this.started = false;

            // reset the velocity queue
            this.resetVelocityQueue();

  };

  //  ease();
  //    used in conjunction with the LIFO queue
  //    to ease the object after stop
  Pep.prototype.ease = function(ev, started){

            var pos       = this.$el.position();
            var vel       = this.velocity();
            var dt        = this.dt;
            var x         = (vel.x/this.scale) * this.options.multiplier;
            var y         = (vel.y/this.scale) * this.options.multiplier;

            var hash      = this.handleConstraint(x, y, true);

            // ✪  Apply the CSS3 animation easing magic  ✪
            if ( this.cssAnimationsSupported() )
              this.$el.css( this.getCSSEaseHash() );

            var xOp = ( vel.x > 0 ) ? "+=" + x : "-=" + Math.abs(x);
            var yOp = ( vel.y > 0 ) ? "+=" + y : "-=" + Math.abs(y);

            if ( this.options.constrainTo ) {
              xOp = (hash.x !== false) ? hash.x : xOp;
              yOp = (hash.y !== false) ? hash.y : yOp;
            }

            if ( this.options.axis  === 'x' ) yOp = "+=0";
            if ( this.options.axis  === 'y' ) xOp = "+=0";

            // ease it via JS, the last true tells it to animate.
            var jsAnimateFallback = !this.cssAnimationsSupported() || this.options.forceNonCSS3Movement;
            if (typeof this.options.moveTo === 'function') {
              this.options.moveTo.call(this, xOp, yOp);
            } else {
              this.moveTo(xOp, yOp, jsAnimateFallback);
            }

            // when the rest occurs, remove active class and call
            // user's rest event.
            var self = this;
            this.restTimeout = setTimeout( function(){

              // Calculate our drop regions
              if ( self.options.droppable ) {
                self.calculateActiveDropRegions();
              }

              self.easing = false;

              // call users rest event.
              if ( started || ( !started && $.inArray('rest', self.options.callIfNotStarted) > -1 ) ) {
                self.options.rest.call(self, ev, self);
              }

              // revert thy self!
              if ( self.options.revert && (self.options.revertAfter === 'ease' && self.options.shouldEase) && ( self.options.revertIf && self.options.revertIf.call(self) ) ) {
                self.revert();
              }

              // remove active class
              self.removeActiveClass();

            }, this.options.cssEaseDuration );

  };

  // normalizeEvent()
  Pep.prototype.normalizeEvent = function(ev) {
      ev.pep        = {};

      if ( this.isTouch(ev) ) {

        ev.pep.x      = ev.originalEvent.touches[0].pageX;
        ev.pep.y      = ev.originalEvent.touches[0].pageY;
        ev.pep.type   = ev.type;

      }
      else if ( this.isPointerEventCompatible() || !this.isTouch(ev) ) {

        if ( ev.pageX  ) {
          ev.pep.x      = ev.pageX;
          ev.pep.y      = ev.pageY;
        } else {
          ev.pep.x      = ev.originalEvent.pageX;
          ev.pep.y      = ev.originalEvent.pageY;
        }

        ev.pep.type   = ev.type;

      }

      return ev;
   };

  // resetVelocityQueue()
  //
  Pep.prototype.resetVelocityQueue = function() {
    this.velocityQueue = new Array(5);
  };

  //  moveTo();
  //    move the object to an x and/or y value
  //    using jQuery's .css function -- this fxn uses the
  //    .css({top: "+=20", left: "-=30"}) syntax
  Pep.prototype.moveTo = function(x,y, animate) {

    this.log({ type: 'delta', x: x, y: y });
    if ( animate ) {
      this.$el.animate({ top: y, left: x }, 0, 'easeOutQuad', {queue: false});
    } else{
      this.$el.stop(true, false).css({ top: y , left: x });
    }

  };

  //  moveToUsingTransforms();
  //    move the object to an x and/or y value
  Pep.prototype.moveToUsingTransforms = function(x,y) {

    // Check for our initial values if we don't have them.
    var matrixArray  = this.matrixToArray( this.matrixString() );
    if ( !this.cssX )
      this.cssX = this.xTranslation( matrixArray );

    if ( !this.cssY )
      this.cssY = this.yTranslation( matrixArray );

    // CSS3 transforms are additive from current position
    this.cssX = this.cssX + x;
    this.cssY = this.cssY + y;

    this.log({ type: 'delta', x: x, y: y });

    matrixArray[4]    = this.cssX;
    matrixArray[5]    = this.cssY;

    this.translation  = this.arrayToMatrix( matrixArray );
    this.transform( this.translation );
  };

  Pep.prototype.transform = function(value) {
    this.$el.css({
        '-webkit-transform': value,
           '-moz-transform': value,
            '-ms-transform': value,
             '-o-transform': value,
                'transform': value  });
  };

  Pep.prototype.xTranslation = function(matrixArray) {
    matrixArray  = matrixArray || this.matrixToArray( this.matrixString() );
    return parseInt(matrixArray[4], 10);
  };

  Pep.prototype.yTranslation = function(matrixArray) {
    matrixArray  = matrixArray || this.matrixToArray( this.matrixString() );
    return parseInt(matrixArray[5], 10);
  };


  // 3 helper functions for working with the
  // objects CSS3 transforms
  // matrixString
  // matrixToArray
  // arrayToMatrix
  Pep.prototype.matrixString = function() {

    var validMatrix = function(o){
      return !( !o || o === 'none' || o.indexOf('matrix') < 0  );
    };

    var matrix = "matrix(1, 0, 0, 1, 0, 0)";

    if ( validMatrix( this.$el.css('-webkit-transform') ) )
      matrix = this.$el.css('-webkit-transform');

    if ( validMatrix( this.$el.css('-moz-transform') ) )
      matrix = this.$el.css('-moz-transform');

    if ( validMatrix( this.$el.css('-ms-transform') ) )
      matrix = this.$el.css('-ms-transform');

    if ( validMatrix( this.$el.css('-o-transform') ) )
      matrix = this.$el.css('-o-transform');

    if ( validMatrix( this.$el.css('transform') ) )
      matrix = this.$el.css('transform');

    return matrix;
  };

  Pep.prototype.matrixToArray = function(str) {
      return str.split('(')[1].split(')')[0].split(',');
  };

  Pep.prototype.arrayToMatrix = function(array) {
      return "matrix(" +  array.join(',')  + ")";
  };

  //  addToLIFO();
  //    a Last-In/First-Out array of the 5 most recent
  //    velocity points, which is used for easing
  Pep.prototype.addToLIFO = function(val){
    // last in, first out
    var arr = this.velocityQueue;
    arr = arr.slice(1, arr.length);
    arr.push(val);
    this.velocityQueue = arr;
  };

  //  velocity();
  //    using the LIFO, calculate velocity and return
  //    velocity in each direction (x & y)
  Pep.prototype.velocity = function(){
    var sumX = 0;
    var sumY = 0;

    for ( var i = 0; i < this.velocityQueue.length -1; i++  ){
      if ( this.velocityQueue[i] ){
        sumX        += (this.velocityQueue[i+1].x - this.velocityQueue[i].x);
        sumY        += (this.velocityQueue[i+1].y - this.velocityQueue[i].y);
        this.dt     = ( this.velocityQueue[i+1].time - this.velocityQueue[i].time );
      }
    }

    // return velocity in each direction.
    return { x: sumX*this.options.velocityMultiplier, y: sumY*this.options.velocityMultiplier};
  };

  Pep.prototype.revert = function() {
    if ( this.shouldUseCSSTranslation() ){
      this.moveToUsingTransforms(-this.xTranslation(),-this.yTranslation());
    }

    if (this.options.place) {
      this.moveTo(this.initialPosition.left, this.initialPosition.top);
    }
  };

  //  requestAnimationFrame();
  //    requestAnimationFrame Polyfill
  //    More info:
  //    http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  Pep.prototype.requestAnimationFrame = function(callback) {
    return  window.requestAnimationFrame        && window.requestAnimationFrame(callback)         ||
            window.webkitRequestAnimationFrame  && window.webkitRequestAnimationFrame(callback)   ||
            window.mozRequestAnimationFrame     && window.mozRequestAnimationFrame(callback)      ||
            window.oRequestAnimationFrame       && window.mozRequestAnimationFrame(callback)      ||
            window.msRequestAnimationFrame      && window.msRequestAnimationFrame(callback)       ||
            window.setTimeout(callback, 1000 / 60);
  };

  //  positionParent();
  //    add the right positioning to the parent object
  Pep.prototype.positionParent = function() {

    if ( !this.options.constrainTo || this.parentPositioned )
      return;

    this.parentPositioned = true;

    // make `relative` parent if necessary
    if ( this.options.constrainTo === 'parent' ) {
      this.$container.css({ position: 'relative' });
    } else if ( this.options.constrainTo === 'window'             &&
                this.$container.get(0).nodeName !== "#document"   &&
                this.$container.css('position') !== 'static' )
    {
      this.$container.css({ position: 'static' });
    }

  };

  //  placeObject();
  //    add the right positioning to the object
  Pep.prototype.placeObject = function() {

    if ( this.objectPlaced )
      return;

    this.objectPlaced = true;

    this.offset = (this.options.constrainTo === 'parent' || this.hasNonBodyRelative() ) ?
                    this.$el.position() : this.$el.offset();

    // better to leave absolute position alone if
    // it already has one.
    if ( parseInt( this.$el.css('left'), 10 ) )
      this.offset.left = this.$el.css('left');

    if (typeof this.options.startPos.left === "number")
        this.offset.left = this.options.startPos.left;

    if ( parseInt( this.$el.css('top'), 10 ) )
      this.offset.top = this.$el.css('top');

    if (typeof this.options.startPos.top === "number")
        this.offset.top = this.options.startPos.top;

    if ( this.options.removeMargins )
      this.$el.css({margin: 0});

    this.$el.css({
      position:   'absolute',
      top:        this.offset.top,
      left:       this.offset.left
    });

  };

  //  hasNonBodyRelative()
  //    returns true if any parent other than the body
  //    has relative positioning
  Pep.prototype.hasNonBodyRelative = function() {
    return this.$el.parents().filter(function() {
        var $this = $(this);
        return $this.is('body') || $this.css('position') === 'relative';
    }).length > 1;
  };

  //  setScale()
  //    set the scale of the object being moved.
  Pep.prototype.setScale = function(val) {
    this.scale = val;
  };

  //  setMultiplier()
  //    set the multiplier of the object being moved.
  Pep.prototype.setMultiplier = function(val) {
    this.options.multiplier = val;
  };

  //  removeCSSEasing();
  //    remove CSS easing properties, if necessary
  Pep.prototype.removeCSSEasing = function() {
    if ( this.cssAnimationsSupported() )
      this.$el.css( this.getCSSEaseHash(true) );
  };

  //  disableSelect();
  //    add the property which causes the object
  //    to not be selected user drags over text areas
  Pep.prototype.disableSelect = function() {

    this.$el.css({
      '-webkit-touch-callout' : 'none',
        '-webkit-user-select' : 'none',
         '-khtml-user-select' : 'none',
           '-moz-user-select' : 'none',
            '-ms-user-select' : 'none',
                'user-select' : 'none'
    });

  };

  // removeActiveClass()
  //  Removes the active class.
  Pep.prototype.removeActiveClass = function() {
    this.$el.removeClass( [this.options.activeClass, 'pep-ease'].join(' ') );
  };

  //  handleConstraint();
  //    returns a hash of where to move to
  //    when we constrain to parent/window
  Pep.prototype.handleConstraint = function(dx, dy, accountForTranslation) {
    var pos               = this.$el.position();
    this.pos.x            = pos.left;
    this.pos.y            = pos.top;

    var hash              = { x: false, y: false };

    var upperYLimit, upperXLimit, lowerXLimit, lowerYLimit;

    // log our positions
    this.log({ type: "pos-coords", x: this.pos.x, y: this.pos.y});

    if ( $.isArray( this.options.constrainTo ) ) {

      if ( this.options.constrainTo[3] !== undefined && this.options.constrainTo[1] !== undefined ) {
        upperXLimit     = this.options.constrainTo[1] === false ?  Infinity : this.options.constrainTo[1];
        lowerXLimit     = this.options.constrainTo[3] === false ? -Infinity : this.options.constrainTo[3];
      }
      if ( this.options.constrainTo[0] !== false && this.options.constrainTo[2] !== false ) {
        upperYLimit       = this.options.constrainTo[2] === false ?  Infinity : this.options.constrainTo[2];
        lowerYLimit       = this.options.constrainTo[0] === false ? -Infinity : this.options.constrainTo[0];
      }

      // is our object trying to move outside lower X & Y limits?
      if ( this.pos.x + dx < lowerXLimit)     hash.x = lowerXLimit;
      if ( this.pos.y + dy < lowerYLimit)     hash.y = lowerYLimit;

    } else if ( typeof this.options.constrainTo === 'string' ) {
      lowerXLimit       = 0;
      lowerYLimit       = 0;
      upperXLimit       = this.$container.width()  - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().width : this.$el.outerWidth());
      upperYLimit       = this.$container.height() - (this.options.useBoundingClientRect ? this.$el[0].getBoundingClientRect().height : this.$el.outerHeight());

      // is our object trying to move outside lower X & Y limits?
      if ( this.pos.x + dx < 0 )              hash.x = 0;
      if ( this.pos.y + dy < 0 )              hash.y = 0;
    }

    // is our object trying to move outside upper X & Y limits?
    if ( this.pos.x + dx > upperXLimit )    hash.x = upperXLimit;
    if ( this.pos.y + dy > upperYLimit )    hash.y = upperYLimit;

    // Account for translation, which makes movement a little tricky.
    if ( this.shouldUseCSSTranslation() && accountForTranslation ){
      if (hash.x === lowerXLimit && this.xTranslation() ) hash.x = lowerXLimit - this.xTranslation();
      if (hash.x === upperXLimit && this.xTranslation() ) hash.x = upperXLimit - this.xTranslation();

      if (hash.y === lowerYLimit && this.yTranslation() ) hash.y = lowerYLimit - this.yTranslation();
      if (hash.y === upperYLimit && this.yTranslation() ) hash.y = upperYLimit - this.yTranslation();
    }

    return hash;
  };

  //  getCSSEaseHash();
  //    returns a hash of params used in conjunction
  //    with this.options.cssEaseString
  Pep.prototype.getCSSEaseHash = function(reset){
    if ( typeof(reset) === 'undefined' ) reset = false;

    var cssEaseString;
    if (reset){
      cssEaseString = '';
    } else if ( this.CSSEaseHash ) {
      return this.CSSEaseHash;
    } else {
      cssEaseString = ['all', this.options.cssEaseDuration + 'ms', this.options.cssEaseString].join(' ');
    }

    return {
                  '-webkit-transition'   : cssEaseString,   // chrome, safari, etc.
                     '-moz-transition'   : cssEaseString,   // firefox
                      '-ms-transition'   : cssEaseString,   // microsoft
                       '-o-transition'   : cssEaseString,   // opera
                          'transition'   : cssEaseString    // future
          };
  };

  // calculateActiveDropRegions()
  //    sets parent droppables of this.
  Pep.prototype.calculateActiveDropRegions = function() {
    var self = this;
    this.activeDropRegions.length = 0;

    $.each( $(this.options.droppable), function(idx, el){
      var $el = $(el);
      if ( self.isOverlapping($el, self.$el) ){
        $el.addClass(self.options.droppableActiveClass);
        self.activeDropRegions.push($el);
      } else {
        $el.removeClass(self.options.droppableActiveClass);
      }
    });

  };

  //  isOverlapping();
  //    returns true if element a over
  Pep.prototype.isOverlapping = function($a,$b) {

    if ( this.options.overlapFunction ) {
      return this.options.overlapFunction($a,$b);
    }

    var rect1 = $a[0].getBoundingClientRect();
    var rect2 = $b[0].getBoundingClientRect();

    return !( rect1.right   < rect2.left  ||
              rect1.left    > rect2.right ||
              rect1.bottom  < rect2.top   ||
              rect1.top     > rect2.bottom  );
  };

  //  isTouch();
  //    returns whether or not event is a touch event
  Pep.prototype.isTouch = function(ev){
    return ev.type.search('touch') > -1;
  };

  // isPointerEventCompatible();
  //    return whether or note our device is pointer
  //    event compatible; typically means where on a
  //    touch Win8 device
  Pep.prototype.isPointerEventCompatible = function() {
    return ("MSPointerEvent" in window);
  };

  // applyMSDefaults();
  Pep.prototype.applyMSDefaults = function(first_argument) {
    this.$el.css({
        '-ms-touch-action' :    'none',
        'touch-action' :        'none',
        '-ms-scroll-chaining':  'none',
        '-ms-scroll-limit':     '0 0 0 0'
    });
  };

  //  isValidMoveEvent();
  //    returns true if we're on a non-touch device -- or --
  //    if the event is **single** touch event on a touch device
  Pep.prototype.isValidMoveEvent = function(ev){
    return ( !this.isTouch(ev) || ( this.isTouch(ev) && ev.originalEvent && ev.originalEvent.touches && ev.originalEvent.touches.length === 1 ) );
  };

  //  shouldUseCSSTranslation();
  //    return true if we should use CSS transforms for move the object
  Pep.prototype.shouldUseCSSTranslation = function() {

    if ( this.options.forceNonCSS3Movement )
      return false;

    if ( typeof(this.useCSSTranslation) !== "undefined" )
      return this.useCSSTranslation;

    var useCSSTranslation = false;

    if ( !this.options.useCSSTranslation || ( typeof(Modernizr) !== "undefined" && !Modernizr.csstransforms)){
      useCSSTranslation = false;
    }
    else{
      useCSSTranslation = true;
    }

    this.useCSSTranslation =  useCSSTranslation;
    return useCSSTranslation;
  };

  //  cssAnimationsSupported():
  //    returns true if the browser supports CSS animations
  //    which are used for easing..
  Pep.prototype.cssAnimationsSupported = function() {

    if ( typeof(this.cssAnimationsSupport) !== "undefined" ){
      return this.cssAnimationsSupport;
    }

    // If the page has Modernizr, let them do the heavy lifting.
    if ( ( typeof(Modernizr) !== "undefined" && Modernizr.cssanimations) ){
      this.cssAnimationsSupport = true;
      return true;
    }

    var animation = false,
        elm = document.createElement('div'),
        animationstring = 'animation',
        keyframeprefix = '',
        domPrefixes = 'Webkit Moz O ms Khtml'.split(' '),
        pfx  = '';

    if( elm.style.animationName ) { animation = true; }

    if( animation === false ) {
      for( var i = 0; i < domPrefixes.length; i++ ) {
        if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
          pfx = domPrefixes[ i ];
          animationstring = pfx + 'Animation';
          keyframeprefix = '-' + pfx.toLowerCase() + '-';
          animation = true;
          break;
        }
      }
    }

    this.cssAnimationsSupport = animation;
    return animation;
  };

  //  hardwareAccelerate();
  //    add fool-proof CSS3 hardware acceleration.
  Pep.prototype.hardwareAccelerate = function() {
    this.$el.css({
      '-webkit-perspective':          1000,
      'perspective':                  1000,
      '-webkit-backface-visibility':  'hidden',
      'backface-visibility':          'hidden'
    });
   };

  //  getMovementValues();
  //    returns object pos, event position, and velocity in each direction.
  Pep.prototype.getMovementValues = function() {
    return { ev: this.ev, pos: this.pos, velocity: this.velocity() };
   };

  //  buildDebugDiv();
  //    Create a little div in the lower right corner of the window
  //    for extra info about the object currently moving
  Pep.prototype.buildDebugDiv = function() {

    // Build the debugDiv and it's inner HTML -- if necessary
    var $debugDiv;
    if ( $('#pep-debug').length === 0 ){
      $debugDiv = $('<div></div>');
      $debugDiv
        .attr('id', 'pep-debug')
        .append("<div style='font-weight:bold; background: red; color: white;'>DEBUG MODE</div>")
        .append("<div id='pep-debug-event'>no event</div>")
        .append("<div id='pep-debug-ev-coords'>event coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>")
        .append("<div id='pep-debug-pos-coords'>position coords: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>")
        .append("<div id='pep-debug-velocity'>velocity: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>")
        .append("<div id='pep-debug-delta'>&Delta; movement: <span class='pep-x'>-</span>, <span class='pep-y'>-</span></div>")
        .css({
          position:   'fixed',
          bottom:     5,
          right:      5,
          zIndex:     99999,
          textAlign:  'right',
          fontFamily: 'Arial, sans',
          fontSize:   10,
          border:     '1px solid #DDD',
          padding:    '3px',
          background: 'white',
          color:      '#333'
        });
    }

    var self = this;
    setTimeout(function(){
      self.debugElements = {
        $event:      $("#pep-debug-event"),
        $velocityX:  $("#pep-debug-velocity .pep-x"),
        $velocityY:  $("#pep-debug-velocity .pep-y"),
        $dX:         $("#pep-debug-delta .pep-x"),
        $dY:         $("#pep-debug-delta .pep-y"),
        $evCoordsX:  $("#pep-debug-ev-coords .pep-x"),
        $evCoordsY:  $("#pep-debug-ev-coords .pep-y"),
        $posCoordsX: $("#pep-debug-pos-coords .pep-x"),
        $posCoordsY: $("#pep-debug-pos-coords .pep-y")
      };
    }, 0);

    $('body').append( $debugDiv );
  };

  // log()
  Pep.prototype.log = function(opts) {
    if ( !this.options.debug ) return;

    switch (opts.type){
    case "event":
      this.debugElements.$event.text(opts.event);
      break;
    case "pos-coords":
      this.debugElements.$posCoordsX.text(opts.x);
      this.debugElements.$posCoordsY.text(opts.y);
      break;
    case "event-coords":
      this.debugElements.$evCoordsX.text(opts.x);
      this.debugElements.$evCoordsY.text(opts.y);
      break;
    case "delta":
      this.debugElements.$dX.text(opts.x);
      this.debugElements.$dY.text(opts.y);
      break;
    case "velocity":
      var vel = this.velocity();
      this.debugElements.$velocityX.text( Math.round(vel.x) );
      this.debugElements.$velocityY.text( Math.round(vel.y) );
      break;
    }
  };

  // toggle()
  //  toggle the pep object
  Pep.prototype.toggle = function(on) {
    if ( typeof(on) === "undefined"){
      this.disabled = !this.disabled;
    }
    else {
      this.disabled = !on;
    }
  };

  //  *** Special Easings functions ***
  //    Used for JS easing fallback
  //    We can use any of these for a
  //    good intertia ease
  $.extend($.easing,
  {
    easeOutQuad: function (x, t, b, c, d) {
      return -c *(t/=d)*(t-2) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
      return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
      return (t===d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
    }
  });

  //  wrap it
  //    A really lightweight plugin wrapper around the constructor,
  //    preventing against multiple instantiations.
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        var pepObj = new Pep( this, options );
        $.data(this, 'plugin_' + pluginName, pepObj);
        $.pep.peps.push(pepObj);
      }
    });
  };

  //  The   _   ___ ___
  //       /_\ | _ \_ _|
  //      / _ \|  _/| |
  //     /_/ \_\_| |___|
  //
  $.pep = {};
  $.pep.peps = [];
  $.pep.toggleAll = function(on){
    $.each(this.peps, function(index, pepObj){
      pepObj.toggle(on);
    });
  };

  $.pep.unbind = function($obj){
    var pep = $obj.data('plugin_' + pluginName);

    if ( typeof pep === 'undefined' )
      return;

    pep.toggle(false);
    pep.unsubscribe();
    $obj.removeData('plugin_' + pluginName);

  };

}(jQuery, window));

/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});