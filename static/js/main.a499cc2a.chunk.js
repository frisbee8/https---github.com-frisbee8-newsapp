(this.webpackJsonpnewsapp=this.webpackJsonpnewsapp||[]).push([[0],{54:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){"use strict";n.r(e);n(0);var c=n(66),s=n(46),i=n(2);e.default=function(t){return Object(i.jsx)("div",{children:t.books&&Object(i.jsx)("div",{style:{paddingLeft:"20pt",paddingRight:"20pt"},children:Object(i.jsx)(s.a,{container:!0,spacing:1.5,alignItems:"center",children:t.books.articles.map((function(t,e){return Object(i.jsx)(s.a,{item:!0,xs:12,sm:6,md:4,children:Object(i.jsx)(c.a,{style:{paddingLeft:"15pt",paddingRight:"15pt",paddingTop:"7pt",paddingBottom:"7pt",backgroundColor:"#f9f9f9"},children:Object(i.jsxs)("a",{href:t.url,target:"_blank",style:{textDecoration:"none"},children:[Object(i.jsx)("img",{src:t.urlToImage,width:"100%"}),t.title,Object(i.jsxs)("span",{style:{fontSize:"10pt",color:"gray"},children:["\xa0\xa0",t.publishedAt.substring(0,10)]})]})},e)})}))})})})}},65:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),i=n(43),r=n.n(i),a=(n(54),n(24)),o=n.n(a),d=n(31),j=n(9),l=(n.p,n(56),n(57),n(66)),u=n(46),p=n(2);var b=function(){var t=Object(c.useState)(),e=Object(j.a)(t,2),n=e[0],s=e[1],i=Object(c.useState)(),r=Object(j.a)(i,2),a=r[0],b=r[1];Object(c.useEffect)((function(){function t(){return(t=Object(d.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://random.dog/woof.json");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,s(n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[a]);var f=function(){return("mp4"===n.url.slice(-3)||n.fileSizeBytes>13e5)&&setTimeout((function(){b(!a)}),500),null};return Object(p.jsx)("div",{children:Object(p.jsx)("div",{style:{paddingLeft:"20pt",paddingRight:"20pt"},children:Object(p.jsx)(u.a,{container:!0,spacing:1.5,alignItems:"center",children:n&&Object(p.jsx)(u.a,{item:!0,xs:12,sm:7,children:Object(p.jsxs)(l.a,{style:{paddingLeft:"15pt",paddingRight:"15pt",paddingTop:"7pt",paddingBottom:"7pt",backgroundColor:"#f9f9f9"},children:[Object(p.jsx)("img",{src:n.url,width:"100%"}),Object(p.jsx)(f,{})]})})})})})},f=n(87),h=n(91),g=n(90);var O=function(){var t=Object(c.useState)(null),e=Object(j.a)(t,2),i=e[0],r=e[1];Object(c.useEffect)((function(){function t(){return(t=Object(d.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://saurav.tech/NewsAPI/everything/cnn.json");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,r(n);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var a=Object(c.useState)(0),l=Object(j.a)(a,2),u=l[0],O=l[1],x=s.a.lazy((function(){return Promise.resolve().then(n.bind(null,57))}));return Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{style:{textAlign:"center"},children:"Welcome to a CNN news feed"}),Object(p.jsx)(g.a,{color:"transparent",position:"static",children:Object(p.jsxs)(f.a,{value:u,onChange:function(t,e){O(e)},children:[Object(p.jsx)(h.a,{label:"CNN"}),Object(p.jsx)(h.a,{label:"Dog"})]})}),Object(p.jsx)("div",{hidden:0!==u,children:Object(p.jsx)(c.Suspense,{fallback:"Loading...",children:Object(p.jsx)(x,{books:i})})}),Object(p.jsx)("div",{hidden:1!==u,children:Object(p.jsx)(b,{})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,92)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),i(t),r(t)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(O,{})}),document.getElementById("root")),x()}},[[65,1,2]]]);
//# sourceMappingURL=main.a499cc2a.chunk.js.map