(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{434:function(e,t,r){"use strict";r.r(t);r(48);var n=r(103),a=r(320),u=(r(77),r(32)),c=r(406),l=r.n(c),s=r(316);function o(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Object(n.o)(!1),c=Object(n.o)(null),o=void 0,i=function(e){o&&(o.cancel(e),r.value=!0,c.value=e)},v=Object(s.N)(function(){var t=Object(u.a)(regeneratorRuntime.mark((function t(n){var u;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=l.a.CancelToken.source(),r.value=!1,c.value=null,u=Object(s.e)(n)?{url:n}:n,t.abrupt("return",e.request(Object(a.a)({cancelToken:o.token},u)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),{lazy:!0,throwException:t}),b=Object(n.a)((function(){return v.result.value&&v.result.value.data||v.error.value&&v.error.value.response&&v.error.value.response.data||null})),d=Object(n.a)((function(){return v.result.value&&v.result.value.status||v.error.value&&v.error.value.response&&v.error.value.response.status||null})),p=Object(n.a)((function(){return v.result.value&&v.result.value.statusText||v.error.value&&v.error.value.response&&v.error.value.response.statusText||null}));return Object(a.a)(Object(a.a)({},v),{},{client:e,data:b,status:d,statusText:p,cancel:i,isCancelled:r,cancelledMessage:c})}var i={name:"axios-example",setup:function(){var e=Object(n.o)(1),t=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Object(s.e)(e)||Object(s.b)(e)?Object(s.d)(t)?t:void 0:e;r=Object(s.b)(e)?e:Object(s.b)(t)?t:r;var u=l.a.create(n),c=o(u,r);return"string"==typeof e?c.exec(Object(a.a)(Object(a.a)({},n),{},{url:e}),!1):n&&n.url&&c.exec(n,!1),c}(),r=t.data,u=t.loading,c=t.exec,i=(t.error,t.status);return Object(n.s)(e,(function(e){c({method:"GET",url:"https://reqres.in/api/user/"+e})})),{id:e,data:r,loading:u,status:i}}},v=r(27),b=Object(v.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[e._v("current Id "+e._s(e.id))]),e._v(" "),r("p",[r("button",{on:{click:function(t){e.id--}}},[e._v("prev")]),e._v(" "),r("button",{on:{click:function(t){e.id++}}},[e._v("next")])]),e._v(" "),e.loading?r("p",[e._v("loading...")]):r("div",[r("p",[e._v("Status: "+e._s(e.status))]),e._v("\n    "+e._s(e.data)+"\n  ")])])}),[],!1,null,null,null);t.default=b.exports}}]);