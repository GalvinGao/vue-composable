(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{315:function(e,t,r){"use strict";r.r(t);var n=r(19),u=(r(91),r(92),r(93),r(94),r(79),r(72),r(73),r(95)),a=(r(104),r(105)),c=r(294),o=r.n(c),i=r(90);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(u.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={name:"axios-example",setup:function(){var e=Object(n.g)(1),t=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];!o.a&&console.warn("[axios] not installed, please install it");var u=Object(i.i)(e)||Object(i.e)(e)?Object(i.h)(t)?t:void 0:e;r=Object(i.e)(e)?e:Object(i.e)(t)?t:r;var c=o.a.create(u),l=Object(n.a)((function(){return c})),v=Object(n.g)(!1),f=Object(n.g)(null),b=void 0,p=function(e){if(!b)throw new Error("Cannot cancel because no request has been made");b.cancel(e),v.value=!0,e&&(f.value=e)},d=Object(i.o)(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b=o.a.CancelToken.source(),v.value=!1,f.value=null,e.abrupt("return",c.request(s({cancelToken:b.token},t)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),r),g=Object(n.a)((function(){return d.result.value&&d.result.value.data||d.error.value&&d.error.value.response&&d.error.value.response.data||null})),O=Object(n.a)((function(){return d.result.value&&d.result.value.status||d.error.value&&d.error.value.response&&d.error.value.response.status||null})),y=Object(n.a)((function(){return d.result.value&&d.result.value.statusText||d.error.value&&d.error.value.response&&d.error.value.response.statusText||null}));return"string"==typeof e?d.exec(s({},u,{url:e}),!1):u&&u.url&&d.exec(u,!1),s({},d,{client:l,data:g,status:O,statusText:y,cancel:p,isCancelled:v,cancelledMessage:f})}(),r=t.data,u=t.loading,c=t.exec,l=(t.error,t.status);return Object(n.h)(e,(function(e){c({method:"GET",url:"https://reqres.in/api/user/"+e})})),{id:e,data:r,loading:u,status:l}}},f=r(2),b=Object(f.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("current Id "+e._s(e.id))]),e._v(" "),r("p",[r("button",{on:{click:function(t){e.id--}}},[e._v("prev")]),e._v(" "),r("button",{on:{click:function(t){e.id++}}},[e._v("next")])]),e._v(" "),e.loading?r("p",[e._v("loading...")]):r("div",[r("p",[e._v("Status: "+e._s(e.status))]),e._v("\n    "+e._s(e.data)+"\n  ")])])}),[],!1,null,null,null);t.default=b.exports},90:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return j})),r.d(t,"c",(function(){return z})),r.d(t,"d",(function(){return T})),r.d(t,"e",(function(){return p})),r.d(t,"f",(function(){return O})),r.d(t,"g",(function(){return d})),r.d(t,"h",(function(){return g})),r.d(t,"i",(function(){return b})),r.d(t,"j",(function(){return s})),r.d(t,"k",(function(){return w})),r.d(t,"l",(function(){return P})),r.d(t,"m",(function(){return A})),r.d(t,"n",(function(){return x})),r.d(t,"o",(function(){return k})),r.d(t,"p",(function(){return S})),r.d(t,"q",(function(){return v}));r(91),r(92),r(93),r(94),r(79),r(72),r(73),r(103);var n=r(146),u=(r(169),r(172),r(104),r(105)),a=r(95),c=r(178),o=(r(85),r(19));function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e){return Object(o.c)(e)?e.value:e}function v(e){return Object(o.c)(e)?e:Object(o.g)(e)}Array.isArray;var f=function(e){return"function"==typeof e},b=function(e){return"string"==typeof e},p=function(e){return"boolean"==typeof e},d=function(e){return"number"==typeof e},g=function(e){return null!==e&&"object"===Object(c.a)(e)},O=function(e){return g(e)&&!!e.tagName};function y(e){return g(e)&&f(e.then)&&f(e.catch)}var j=function(){},h=function(){return!1};function m(e){return new Promise((function(t){setTimeout(t,e)}))}function x(e){var t=v(e.currentPage),r=v(e.pageSize),n=Object(o.g)(0),u=v(e.total),a=Object(o.a)({get:function(){return n.value},set:function(e){"number"==typeof e?n.value=Math.min(e,u.value):console.warn("[offset] expected number but got: '".concat(Object(c.a)(e),"' value: '").concat(e,"'"))}}),i=Object(o.a)({get:function(){return t.value},set:function(e){var r,n,u;"number"==typeof e?(t.value=(r=e,n=1,u=s.value,r<n?n:r>u?u:r),a.value=(t.value-1)*l.value):console.warn("[currentPage] expected number but got: '".concat(Object(c.a)(e),"' value: '").concat(e,"'"))}}),l=Object(o.a)({get:function(){return r.value},set:function(e){"number"==typeof e?r.value=e:console.warn("[pageSize] expected number but got: '".concat(Object(c.a)(e),"' value: '").concat(e,"'"))}}),s=Object(o.a)((function(){return Math.ceil(u.value/l.value)}));i.value=t.value;return Object(o.h)([u,l],(function(){i.value>s.value&&(i.value=s.value)}),{lazy:!0}),{pageSize:l,total:u,currentPage:i,offset:a,lastPage:s,next:function(){return++i.value},prev:function(){return--i.value},first:function(){return i.value=1},last:function(){return i.value=s.value}}}function w(e,t){var r=v(e),n=x(l({},{currentPage:1,pageSize:10},{},t,{total:Object(o.a)((function(){return r.value.length}))})),u=Object(o.a)((function(){var e=r.value;return Array.isArray(e)?e.slice(n.offset.value,n.offset.value+n.pageSize.value):[]}));return l({},n,{result:u})}function k(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!e)throw new Error("[usePromise] argument can't be '".concat(e,"'"));if("function"!=typeof e)throw new Error("[usePromise] expects function, but received ".concat(Object(c.a)(e)));var r=Object(o.g)(!1),n=Object(o.g)(null),a=Object(o.g)(null),i=Object(o.g)(),l=function(){var c=Object(u.a)(regeneratorRuntime.mark((function u(){var c,o,l,s,v,f,b=arguments;return regeneratorRuntime.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:for(r.value=!0,n.value=null,a.value=null,c=b.length,o=new Array(c),l=0;l<c;l++)o[l]=b[l];return s=o&&e.length!==o.length&&o.length>0&&p(o[o.length-1])?o[o.length-1]:t,v=i.value=e.apply(void 0,o),u.prev=6,u.next=9,v;case 9:return f=u.sent,i.value===v&&(a.value=f),u.abrupt("return",f);case 14:return u.prev=14,u.t0=u.catch(6),i.value===v&&(n.value=u.t0,a.value=null),u.abrupt("return",s?v:void 0);case 18:return u.prev=18,i.value===v&&(r.value=!1),u.finish(18);case 21:case"end":return u.stop()}}),u,null,[[6,14,18,21]])})));return function(){return c.apply(this,arguments)}}();return{exec:l,result:a,promise:i,loading:r,error:n}}function P(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(o.g)(!1),n=void 0,u=function(e){return n(e)},a=function(e){return new Promise((function(t,u){n=function(e){r.value=!0,u(e)},e.then(t).catch(u)}))},c=k((function(){return a(e.apply(void 0,arguments))}),t);return l({},c,{cancel:u,cancelled:r})}var R=Symbol("RetryId"),E=Symbol("CancellationToken"),_=function(){var e=Object(u.a)(regeneratorRuntime.mark((function e(t,r,u,a){var o,i,l,s,v,b,p,O,j,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r[R].value,i=-1,l=t.maxRetries||9001,s=t.retryDelay||D,r.retryErrors.value=[],r.isRetrying.value=!1,r.nextRetry.value=void 0,v=void 0;case 8:if(b=!1,p=null,e.prev=10,++i,!y(p=a?u.apply(void 0,Object(n.a)(a)):u())){e.next=17;break}return e.next=16,p;case 16:p=e.sent;case 17:if(!r[E].value){e.next=19;break}return e.abrupt("return",null);case 19:b=!0,e.next=26;break;case 22:e.prev=22,e.t0=e.catch(10),p=null,r.retryErrors.value.push(e.t0);case 26:if(o===r[R].value){e.next=28;break}return e.abrupt("return",p);case 28:if(!b){e.next=32;break}return r.isRetrying.value=!1,r.nextRetry.value=void 0,e.abrupt("return",p);case 32:if(!(i>=l)){e.next=36;break}return r.isRetrying.value=!1,r.nextRetry.value=void 0,e.abrupt("return",Promise.reject(new Error("[useRetry] max retries reached ".concat(l))));case 36:if(r.isRetrying.value=!0,O=Date.now(),!y(j=s(i))){e.next=45;break}return e.next=42,j;case 42:e.t1=e.sent,e.next=46;break;case 45:e.t1=j;case 46:if(h=e.t1,y(j)&&!h){e.next=61;break}if(!d(h)){e.next=52;break}v=h,e.next=57;break;case 52:if(!g(x=h)||!f(x.getTime)){e.next=56;break}v=h.getTime(),e.next=57;break;case 56:throw new Error("[useRetry] invalid value received from options.retryDelay '".concat(Object(c.a)(h),"'"));case 57:if(v<O?r.nextRetry.value=O+v:(r.nextRetry.value=v,v-=O),!(v>0)){e.next=61;break}return e.next=61,m(v);case 61:if(!r[E].value){e.next=63;break}return e.abrupt("return",null);case 63:if(o===r[R].value){e.next=65;break}return e.abrupt("return",p);case 65:if(i<9e3){e.next=8;break}case 66:return e.abrupt("return",null);case 67:case"end":return e.stop()}var x}),e,null,[[10,22]])})));return function(t,r,n,u){return e.apply(this,arguments)}}();function S(e,t){var r,n=!e||f(e)?{}:e,u=f(e)?e:t;if(!f(e)&&!g(e))throw new Error("[useRetry] options needs to be 'object'");if(u&&!f(u))throw new Error("[useRetry] factory needs to be 'function'");var c=Object(o.g)(!1),i=Object(o.g)(),s=Object(o.g)([]),v={value:!1},b=(r={isRetrying:c,retryCount:Object(o.a)((function(){return s.value.length})),nextRetry:i,retryErrors:s},Object(a.a)(r,R,{value:0}),Object(a.a)(r,E,v),r),p=u?function(){++b[R].value;for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return _(n,b,u,t)}:function(e){return++b[R].value,_(n,b,e,void 0)};return l({},b,{cancel:function(){b.isRetrying.value=!1,b.retryErrors.value.push(new Error("[useRetry] cancelled")),b.nextRetry.value=void 0,v.value=!0},exec:p})}var T=function(e){var t=100*Math.pow(2,e);return t+.2*t*Math.random()},D=function(){return 0};function A(e,t,r){return z(e,t,r)}function z(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{isImmediate:!1};return function(){for(var u=arguments.length,a=new Array(u),c=0;c<u;c++)a[c]=arguments[c];var o=this,i=function(){t=void 0,n.isImmediate||e.apply(o,a)},l=n.isImmediate&&void 0===t;void 0!==t&&clearTimeout(t),t=setTimeout(i,r),l&&e.apply(o,a)}}}}]);