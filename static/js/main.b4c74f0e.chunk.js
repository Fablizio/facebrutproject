(this["webpackJsonpedgemony-react-2021"]=this["webpackJsonpedgemony-react-2021"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={home:"Home_home__1JXvv",grid:"Home_grid__sUtIT",createPostBtn:"Home_createPostBtn__1BGTQ",friend:"Home_friend__eOEhP"}},,function(e,t,n){e.exports={header:"Header_header__1v0yI",active:"Header_active__3GX0s"}},function(e,t,n){e.exports={createPost:"CreatePost_createPost__3XCbM",__author:"CreatePost___author__2lcbm"}},function(e,t,n){},function(e,t,n){e.exports={Friends:"Friends_Friends__2IY9Z",__friendsList:"Friends___friendsList__319r6"}},function(e,t,n){e.exports={post:"Post_post__3hqZB",deleteBtn:"Post_deleteBtn__1bIB2"}},,,function(e,t,n){e.exports={footer:"Footer_footer__7dIj9"}},function(e,t,n){e.exports={friend:"FriendPreview_friend__3Gjby"}},function(e,t,n){e.exports={message:"MessagePreview_message__3j9dl"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(22),r=n.n(s),i=n(10),o=(n(33),n(5)),j=n(21),u=n(2),d=n(16),l=n.n(d),b=n(0),h=function(e){var t=e.name||"App",n=e.links||[{link:"/",label:"Link"}],a=function(e){var t=Object(u.h)(e);return Object(u.f)({path:t.pathname,end:!0})?l.a.active:""};return Object(b.jsxs)("header",{className:l.a.header,children:[Object(b.jsx)("h1",{children:t}),Object(b.jsx)("nav",{children:Object(b.jsx)("ul",{children:n.map((function(e,t){return Object(b.jsx)("li",{children:Object(b.jsx)(i.b,{className:a(e.link),to:e.link,children:e.label})},t)}))})})]})},O=n(23),f=n.n(O),x=function(){var e=(new Date).getFullYear();return Object(b.jsxs)("footer",{className:f.a.footer,children:[Object(b.jsx)("hr",{}),Object(b.jsxs)("p",{children:["Copyright Edgemony ",e]})]})},m=(n(26),"https://edgemony-backend.herokuapp.com"),p=function(e){return fetch(m+e).then((function(e){return e.json()}))},_=function(e,t){return fetch(m+e,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()}))},g=n(17),v=n.n(g),w=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],j=r[1],u=Object(a.useState)(""),d=Object(o.a)(u,2),l=d[0],h=d[1],O=Object(a.useState)({}),f=Object(o.a)(O,2),x=f[0],m=f[1];return Object(a.useEffect)((function(){m({author:n,text:l,date:(new Date).toISOString(),photo:i})}),[n,i,l]),Object(b.jsx)("div",{className:v.a.createPost,children:Object(b.jsxs)("form",{children:[Object(b.jsxs)("div",{className:v.a.__author,children:[Object(b.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},name:"author",id:"author",type:"text",placeholder:"Author",required:!0}),Object(b.jsx)("input",{onChange:function(e){return j(e.target.value)},value:i,name:"img",id:"img",type:"text",placeholder:"Img URL"}),Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),_("/posts",x),alert("Il post `e stato creato!")},children:"SEND"})]}),Object(b.jsx)("textarea",{value:l,onChange:function(e){return h(e.target.value)},name:"message",id:"message",cols:"30",rows:"10",placeholder:"Message",required:!0})]})})},y=function(){return Object(b.jsx)(w,{})},C=function(){return Object(b.jsx)("h1",{children:"Messagesssss"})},S=n(18),F=n.n(S),P=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),i=r[0],j=r[1],u=Object(a.useState)({}),d=Object(o.a)(u,2),l=d[0],h=d[1];return Object(a.useEffect)((function(){h({name:n,photo:i})}),[n,i]),Object(b.jsx)("div",{className:F.a.createFriend,children:Object(b.jsx)("form",{children:Object(b.jsxs)("div",{className:F.a.__friend,children:[Object(b.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},name:"friend",id:"friend",type:"text",placeholder:"Friend name",required:!0}),Object(b.jsx)("input",{onChange:function(e){return j(e.target.value)},value:i,name:"photo",id:"photo",type:"text",placeholder:"Photo URL"}),Object(b.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),_("/friends",l),alert("L'amico \xe8 stato aggiunto")},children:"ADD"})]})})})},N=n(24),k=n.n(N),D=function(e){var t=e.data||{name:"Friend",photo:"https://randomuser.me/api/portraits/women/59.jpg"};return Object(b.jsxs)("div",{className:k.a.friend,children:[Object(b.jsx)("img",{src:t.photo,alt:t.name}),Object(b.jsx)("p",{children:t.name})]})},B=n(19),E=n.n(B),H=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(a.useEffect)((function(){p("/friends?_page=1").then((function(e){return c(e)}))}),[]),Object(b.jsxs)("div",{className:E.a.Friends,children:[Object(b.jsx)(P,{}),Object(b.jsx)("div",{className:E.a.__friendsList,children:n.map((function(e){return Object(b.jsx)(D,{data:e},e.id)}))})]})},I=n(36),L=n(37),M=n(25),T=n.n(M),q=function(e){var t=e.data||{text:"lorem ipsum",date:new Date,sender:"User"};return Object(b.jsxs)("div",{className:T.a.message,children:[Object(b.jsx)("h5",{children:t.sender}),Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:Object(I.a)(new Date(t.date),new Date,{addSuffix:!0,locale:L.a})})}),Object(b.jsx)("p",{children:t.text})]})},G=n(20),U=n.n(G),A=function(e){var t=e.data||{author:"User",text:"text",date:new Date,photo:"https://images.unsplash.com/photo-1639512398860-be15f48100ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"};return Object(b.jsxs)("article",{className:U.a.post,children:[Object(b.jsx)("button",{onClick:function(){var t;(t="/posts/".concat(e.data.id),fetch(m+t,{method:"DELETE",headers:{"Content-type":"application/json"}}).then((function(e){return e.json()}))).then((function(){})),alert("Post by ".concat(e.data.author," was deleted")),window.location.href="/"},className:U.a.deleteBtn,children:"X"}),Object(b.jsx)("h3",{children:t.author}),Object(b.jsx)("p",{children:Object(b.jsx)("small",{children:Object(I.a)(new Date(t.date),new Date,{addSuffix:!0,locale:L.a})})}),Object(b.jsx)("p",{children:t.text}),t.photo?Object(b.jsx)("img",{src:t.photo,alt:t.author}):Object(b.jsx)(b.Fragment,{})]})},J=n(14),X=n.n(J),R=[],Y=[],Z=[],Q=function(){var e=Object(a.useState)(R),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(Z),r=Object(o.a)(s,2),j=r[0],u=r[1],d=Object(a.useState)(Y),l=Object(o.a)(d,2),h=l[0],O=l[1];return Object(a.useEffect)((function(){p("/friends?_limit=4").then((function(e){return c(e)})),p("/messages?_limit=4").then((function(e){return O(e)})),p("/posts").then((function(e){return u(e.reverse())}))}),[]),Object(b.jsxs)("section",{className:X.a.home,children:[Object(b.jsx)("h3",{children:"Bevenuto utente"}),Object(b.jsxs)("div",{className:X.a.grid,children:[Object(b.jsx)("aside",{children:n.map((function(e,t){return Object(b.jsx)(D,{data:e},t)}))}),Object(b.jsxs)("main",{children:[Object(b.jsx)(i.b,{to:"/new-post",children:Object(b.jsx)("button",{className:X.a.createPostBtn,children:"+ Create a new post!"})}),j.map((function(e,t){return Object(b.jsx)(A,{data:e},t)}))]}),Object(b.jsx)("aside",{children:h.map((function(e,t){return Object(b.jsx)(q,{data:e},t)}))})]})]})},V={name:"Feisbrut",nav:[{link:"/",label:"Home"},{link:"/messages",label:"Messages"},{link:"/friends",label:"Friends"}],friendsPreview:[]},W=function(e,t){return"change-name"===t.type?Object(j.a)(Object(j.a)({},e),{},{name:"Feisbell"}):e};var z=function(){var e=Object(a.useReducer)(W,V),t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)("div",{children:[Object(b.jsx)(h,{name:n.name,links:n.nav}),Object(b.jsx)("button",{onClick:function(){return c({type:"change-name"})},children:"Cambia nome"}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",element:Object(b.jsx)(Q,{})}),Object(b.jsx)(u.a,{path:"/new-post",element:Object(b.jsx)(y,{})}),Object(b.jsx)(u.a,{path:"/messages",element:Object(b.jsx)(C,{})}),Object(b.jsx)(u.a,{path:"/friends",element:Object(b.jsx)(H,{})})]}),Object(b.jsx)(x,{})]})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(i.a,{children:Object(b.jsx)(z,{})})}),document.getElementById("root")),K()}],[[35,1,2]]]);
//# sourceMappingURL=main.b4c74f0e.chunk.js.map