(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(e,t,r){r("74v/"),e.exports=r("nOHt")},"74v/":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("hUgY")}])},HxN6:function(e,t,r){"use strict";var n=r("o0o1"),i=r.n(n),a=r("wx14"),o=r("Ff2n");function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var u=r("q1tI"),s=r.n(u),p=r("qKvR");s.a.createElement;function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={storeKey:"__NEXT_REDUX_STORE__",serializeState:function(e){return e},deserializeState:function(e){return e},isServerSideRendering:!0};function d(e){var t=e.seriralizedState,r=e.config,n=e.ctx,i=e.makeStore,a=f({},b,{},r),o=a.deserializeState,c=a.storeKey,u=function(){return i(f({preloadedState:o(t)},n,{},r))};return window[c]=window[c]||u(),window[c]}t.a=function(e){var t=e.makeStore,r=e.config,n=f({},b,{},void 0===r?{}:r);return function(e){var r=function(r){var i=r.initialProps,c=r.initialState,u=Object(o.a)(r,["initialProps","initialState"]),s=d({seriralizedState:c,config:n,makeStore:t});return Object(p.b)(e,Object(a.a)({},u,i,{store:s}))};return(n.isServerSideRendering||e.getInitialProps)&&(r.getInitialProps=function(r){var a,o;return i.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(a=d({ctx:r.ctx,makeStore:t}),r.ctx.store=a,"function"!==typeof e.getInitialProps){c.next=8;break}return c.next=5,i.a.awrap(e.getInitialProps.call(e,r));case 5:c.t0=c.sent,c.next=9;break;case 8:c.t0={};case 9:return o=c.t0,c.abrupt("return",{initialProps:o,initialState:n.serializeState(a.getState())});case 11:case"end":return c.stop()}}),null,null,null,Promise)}),r}}},XFcN:function(e,t,r){"use strict";var n=r("i7Pf"),i=r("ANjH"),a=r("rhY5"),o=Object(i.c)({count:a.a});t.a=function(e){var t=e.preloadedState;return Object(n.a)({reducer:o,devTools:!1,preloadedState:t})}},hUgY:function(e,t,r){"use strict";r.r(t),function(e){var n=r("o0o1"),i=r.n(n),a=r("wx14"),o=r("q1tI"),c=r.n(o),u=r("/MKj"),s=r("HxN6"),p=r("XFcN"),l=r("qKvR"),f=(c.a.createElement,function(e){var t=e.Component,r=e.pageProps,n=e.appProps,i=e.store;return Object(l.b)(u.a,{store:i},Object(l.b)(t,Object(a.a)({},n,r)))});f.getInitialProps=function(){return i.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{appProps:{appInitialProcessEnv:e.env.TEST_APP_PROP}});case 1:case"end":return t.stop()}}),null,null,null,Promise)},t.default=Object(s.a)({makeStore:p.a})(f)}.call(this,r("8oxB"))}},[[0,1,2,0,3]]]);