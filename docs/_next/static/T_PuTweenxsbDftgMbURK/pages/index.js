(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"/EDR":function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var n=e("23aj");return{page:n.default||n}}])},"23aj":function(n,t,e){"use strict";e.r(t);var r=e("qKvR"),c=(e("q1tI"),e("/MKj")),a=e("2Eek"),o=e.n(a),i=e("FbiP"),u=e.n(i);var s=e("d04V"),b=e.n(s),f=function(n){return"".concat(n/16,"rem")};function l(){var n,t,e=(n=["\n    from, ","%, to {\n      width: ",";\n      height: ",";\n      opacity: 0.5;\n    }\n    ","% {\n      width: ",";\n      height: ",";\n      opacity: 1;\n    }\n  "],t||(t=n.slice(0)),u()(o()(n,{raw:{value:u()(t)}})));return l=function(){return e},e}var d=function(n){var t=n.boxSize,e=void 0===t?20:t,c=n.width,a=void 0===c?180:c,o=n.animationTime,i=void 0===o?1200:o,u=n.numBox,s=void 0===u?3:u,d=n.boxColor,p=void 0===d?"skyblue":d,j=b()(Array(s),function(n,t){return function(n){return Object(r.a)("animation-delay:",i*(n/s),"ms;")}(t)}),O=Object(r.c)(l(),Math.floor(200/s),f(e),f(e),Math.floor(100/s),f(2*e),f(2*e)),h=Object(r.a)("box-sizing:border-box;margin-top:",f(40),";margin-bottom:",f(40),";margin-left:auto;margin-right:auto;display:flex;max-width:",f(a),";height:",f(2*e),";width:100%;flex-flow:row;justify-content:space-evenly;align-items:center;& > div{width:",f(e),";height:",f(e),";opacity:0.5;background-color:",p,";animation-name:",O,";animation-duration:",i,"ms;animation-iteration-count:infinite;}");return Object(r.b)("div",{css:h},j.map(function(n){return Object(r.b)("div",{key:n.name,css:n})}))},p=e("ntF4"),j=e("8Rtz"),O=e("Igcr"),h=e("zrwo"),v=e("sLDa"),m={count:5},w=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.a.ADD:return Object(h.a)({},n,{count:n.count+t.payload});case v.a.MINUS:return Object(h.a)({},n,{count:n.count-t.payload});default:return n}},g=e("7zJJ"),x=e("oW9L"),k=e("ln6h"),y=e.n(k),D=e("5rFJ"),M=y.a.mark(I),C=y.a.mark(E);function I(){var n;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Object(D.d)(v.a.ADD);case 3:n=t.sent,console.log("Logged ADDED",n.payload),t.next=0;break;case 7:case"end":return t.stop()}},M)}function E(){return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(D.a)([Object(D.b)(I)]);case 2:case"end":return n.stop()}},C)}var z=E;e.d(t,"Page",function(){return N});var N=function(n){var t=n.numCount,e=n.minus3,c=n.add2;return Object(r.b)("main",null,Object(r.b)(p.a,{title:"Nextjs Typescript Eslint",themeColor:"red",hrefCanonical:"/",favIconPath:"/static/icons/favicon.ico",appleIconPath:"/static/icons/icon192x192.png",hrefManifest:"/static/manifest/manifest.json"}),Object(r.b)("span",null,"This is index"),Object(r.b)("div",null,"Number is ".concat(t)),Object(r.b)("button",{type:"button",onClick:c},"add 2"),Object(r.b)("button",{type:"button",onClick:e},"minus 3"),Object(r.b)(d,null),Object(r.b)("br",null),Object(r.b)(j.a,{href:"/stats",prefetch:!1},Object(r.b)("a",null,"stats")),Object(r.b)("br",null),Object(r.b)(j.a,{href:"/about",prefetch:!1},Object(r.b)("a",null,"about")))},P=Object(c.c)(function(n){return{numCount:(n.count||{}).count||0}},function(n){return{add2:function(){return n(Object(g.a)(2))},minus3:function(){return n(Object(g.b)(3))}}})(N);t.default=Object(O.a)({callbackOnMount:function(n){n.substitueReducers({count:w}),n.substitueSagas({root:x.a,index:z})},Child:P})},"2Eek":function(n,t,e){n.exports=e("W7oM")},"4bdI":function(n,t,e){e("Ui4e"),n.exports=e("WEpk").Object.freeze},"7zJJ":function(n,t,e){"use strict";e.d(t,"a",function(){return c}),e.d(t,"b",function(){return a});var r=e("sLDa"),c=function(n){return{type:r.a.ADD,payload:n}},a=function(n){return{type:r.a.MINUS,payload:n}}},FbiP:function(n,t,e){n.exports=e("4bdI")},Igcr:function(n,t,e){"use strict";var r=e("qKvR"),c=e("q1tI"),a=e("/MKj"),o=function(n){var t=n.store,e=n.callbackOnMount,a=n.callbackOnUnmount,o=n.Child;return Object(c.useEffect)(function(){return e(t),function(){a&&a(t)}},[]),o?Object(r.b)(o,null):null};t.a=function(n){var t=n.callbackOnMount,e=n.callbackOnUnmount,c=n.Child;return function(){return Object(r.b)(a.b.Consumer,null,function(n){var a=n.store;return Object(r.b)(o,{callbackOnMount:t,callbackOnUnmount:e,store:a,Child:c})})}}},Ui4e:function(n,t,e){var r=e("93I4"),c=e("6/1s").onFreeze;e("zn7N")("freeze",function(n){return function(t){return n&&r(t)?n(c(t)):t}})},W7oM:function(n,t,e){e("nZgG");var r=e("WEpk").Object;n.exports=function(n,t){return r.defineProperties(n,t)}},nZgG:function(n,t,e){var r=e("Y7ZC");r(r.S+r.F*!e("jmDH"),"Object",{defineProperties:e("fpC5")})},oW9L:function(n,t,e){"use strict";var r=e("ln6h"),c=e.n(r),a=e("5rFJ"),o=c.a.mark(u),i=c.a.mark(s);function u(){var n,t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Object(a.d)("*");case 3:return n=e.sent,e.next=6,Object(a.c)();case 6:t=e.sent,console.log("action: ",n),console.log("state: ",t),e.next=0;break;case 11:case"end":return e.stop()}},o)}function s(){return c.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(a.a)([Object(a.b)(u)]);case 2:case"end":return n.stop()}},i)}t.a=s},sLDa:function(n,t,e){"use strict";t.a={ADD:"ADD",MINUS:"MINUS"}}},[["/EDR",1,0]]]);