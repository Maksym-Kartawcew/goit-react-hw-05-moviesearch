"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[983],{1755:function(e,t,r){r.d(t,{D:function(){return n}});var n={position:"top-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"}},3402:function(e,t,r){r.d(t,{Z:function(){return p}});r(2791);var n="MoviesNetItem_MoviesNetItem__RcVDF",a=r(7689),s=r(1087),c=r(2968),u=r(184),i=function(e){var t=e.title,r=e.poster,i=e.year,o=e.movieId,p=(0,a.TH)();return(0,u.jsx)("li",{className:n,children:(0,u.jsxs)(s.rU,{to:"/movies/".concat(o),children:[(0,u.jsx)("img",{state:{from:p},src:r?"https://image.tmdb.org/t/p/w200/".concat(r):c,alt:t,width:"275"}),(0,u.jsx)("h3",{children:t}),(0,u.jsxs)("p",{children:["Year: ",i]})]})})},o="MoviesNet_MoviesNetList__RlGIx",p=function(e){var t=e.dayMovies;return(0,u.jsx)("ul",{className:o,children:t.map((function(e){return(0,u.jsx)(i,{movieId:e.id,title:e.title?e.title:e.name,poster:e.poster_path,year:e.first_air_date?e.first_air_date:e.release_date},e.id)}))})}},3983:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),s=r(7757),c=r.n(s),u=r(2791),i=r(4691),o=r(7596),p=r(851),l=r(1755),f=(r(5462),r(3402)),v=r(184);t.default=function(){var e=(0,u.useState)([]),t=(0,a.Z)(e,2),r=t[0],s=t[1],h=(0,u.useState)(!0),d=(0,a.Z)(h,2),m=d[0],w=d[1],x=(0,u.useState)(null),b=(0,a.Z)(x,2)[1];return(0,u.useEffect)((function(){var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.JA)();case 3:t=e.sent,console.log(t),s(t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),b(e.t0.message),o.Am.error(e.t0.message,l.D);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,v.jsxs)("div",{children:[m&&(0,v.jsx)(i.fe,{visible:!0,height:80,width:80,ariaLabel:"dna-loading",wrapperStyle:{},wrapperClassName:"dna-wrapper"}),(0,v.jsx)(f.Z,{dayMovies:r})]})}},851:function(e,t,r){r.d(t,{Hx:function(){return d},JA:function(){return o},Rn:function(){return w},Y5:function(){return l},uV:function(){return v}});var n=r(5861),a=r(7757),s=r.n(a),c=r(1243),u="37244e55abf3f6dfeaa909abea58e77f";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i={api_key:u};function o(){return p.apply(this,arguments)}function p(){return(p=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("trending/all/day",{params:i});case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t),{params:i});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/credits"),{params:i});case 3:return r=e.sent,e.abrupt("return",r.data.cast);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function d(e){return m.apply(this,arguments)}function m(){return(m=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("movie/".concat(t,"/reviews"),{params:i});case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function w(e){return x.apply(this,arguments)}function x(){return x=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={api_key:u,query:t},e.prev=1,e.next=4,c.Z.get("search/movie?",{params:r});case 4:return n=e.sent,e.abrupt("return",n.data.results);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])}))),x.apply(this,arguments)}},2968:function(e,t,r){e.exports=r.p+"static/media/cinema.e32b6db9e1af618bc6fb.png"}}]);
//# sourceMappingURL=983.bbaed1cc.chunk.js.map