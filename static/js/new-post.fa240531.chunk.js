(this["webpackJsonpreact-social-app"]=this["webpackJsonpreact-social-app"]||[]).push([[5],{22:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return c}));n(24);var r="https://edgemony-backend.herokuapp.com",a=function(t){return fetch(r+t).then((function(t){return t.json()}))},o=function(t,e){return fetch(r+t,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))},c=function(t){return fetch(r+t,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(t){return t.json()}))}},24:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(8);var a=n(7);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(a.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},25:function(t,e,n){"use strict";var r=n(26),a=n.n(r),o=n(1);e.a=function(t){var e=t.bgColor,n=t.text;return Object(o.jsx)("div",{className:a.a.Modal,style:{background:"".concat(e)},children:Object(o.jsx)("p",{children:n})})}},26:function(t,e,n){t.exports={Modal:"Modal_Modal__32mLz"}},37:function(t,e,n){t.exports={createPost:"CreatePost_createPost__3XCbM",__author:"CreatePost___author__2lcbm"}},51:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n(0),o=n(22),c=n(25),u=n(37),i=n.n(u),s=n(1),b=function(){var t=Object(a.useState)(""),e=Object(r.a)(t,2),n=e[0],u=e[1],b=Object(a.useState)(""),l=Object(r.a)(b,2),f=l[0],j=l[1],d=Object(a.useState)(""),h=Object(r.a)(d,2),p=h[0],O=h[1],m=Object(a.useState)({}),g=Object(r.a)(m,2),v=g[0],x=g[1],y=Object(a.useState)(!1),_=Object(r.a)(y,2),S=_[0],C=_[1];return Object(a.useEffect)((function(){x({author:n,text:p,date:(new Date).toISOString(),photo:f})}),[n,f,p]),Object(s.jsxs)("div",{className:i.a.createPost,children:[S&&Object(s.jsx)(c.a,{bgColor:"lightskyblue",text:"Il post \xe8 stato aggiunto"}),Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{className:i.a.__author,children:[Object(s.jsx)("input",{value:n,onChange:function(t){return u(t.target.value)},name:"author",id:"author",type:"text",placeholder:"Author",required:!0}),Object(s.jsx)("input",{onChange:function(t){return j(t.target.value)},value:f,name:"img",id:"img",type:"text",placeholder:"Img URL"}),Object(s.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),Object(o.c)("/posts",v),C(!0),setTimeout((function(){C(!1)}),3e3)},children:"SEND"})]}),Object(s.jsx)("textarea",{value:p,onChange:function(t){return O(t.target.value)},name:"message",id:"message",cols:"30",rows:"10",placeholder:"Message",required:!0})]})]})};e.default=function(){return Object(s.jsx)(b,{})}}}]);
//# sourceMappingURL=new-post.fa240531.chunk.js.map