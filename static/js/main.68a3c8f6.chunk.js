(this.webpackJsonptours=this.webpackJsonptours||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),s=c(6),i=c.n(s),a=(c(12),c(4)),j=c.n(a),o=c(7),u=c(2),l=c(0),b=function(){return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("h1",{children:"Loading ..."})})},d=c(5),h=function(e){var t=e.id,c=e.image,r=e.info,s=e.name,i=e.price,a=e.removeTour,j=Object(n.useState)(!1),o=Object(u.a)(j,2),b=o[0],d=o[1];return Object(l.jsxs)("article",{className:"single-tour",children:[Object(l.jsx)("img",{src:c,alt:s}),Object(l.jsxs)("footer",{children:[Object(l.jsxs)("div",{className:"tour-info",children:[Object(l.jsx)("h4",{children:s}),Object(l.jsx)("h4",{className:"tour-price",children:i})]}),Object(l.jsxs)("p",{children:[b?r:"".concat(r.substring(0,200),"..."),Object(l.jsx)("button",{onClick:function(){return d(!b)},children:b?"show less":"show more"})]}),Object(l.jsx)("button",{className:"delete-btn",onClick:function(){return a(t)},children:"not intrested"})]})]})},O=function(e){var t=e.items,c=e.removeTour;return Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h2",{children:"tours and travels"}),Object(l.jsx)("div",{className:"under-line"})]}),Object(l.jsx)("div",{children:t.map((function(e){return Object(l.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{removeTour:c}),e.id)}))})]})},x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],r=t[1],s=Object(n.useState)(!0),i=Object(u.a)(s,2),a=i[0],d=i[1],h=function(){var e=Object(o.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://course-api.com/react-tours-project");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,d(!1),r(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),a?Object(l.jsx)("main",{children:Object(l.jsx)(b,{})}):0===c.length?Object(l.jsx)("main",{children:Object(l.jsxs)("div",{className:"title",children:[Object(l.jsx)("h2",{children:"tours unavailable"}),Object(l.jsx)("button",{className:"btn",onClick:h,children:"view tours"})]})}):Object(l.jsx)("main",{children:Object(l.jsx)(O,{items:c,removeTour:function(e){var t=c.filter((function(t){return t.id!==e}));r(t)}})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.68a3c8f6.chunk.js.map