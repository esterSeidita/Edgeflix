"use strict";(self.webpackChunkedgeflix=self.webpackChunkedgeflix||[]).push([[891],{7333:function(e,n,r){r.d(n,{Z:function(){return f}});var s=r(8214),a=r(5861),t=r(4942),i=r(1413),c=r(885),u=r(2791),l=r(6871),o=r(9815),p="AccessForm_AccessForm__rMrwg",m="AccessForm_AccessForm__inputGroup__-EiD1",d=r(184);var f=function(e){e.sendData;var n=e.formType,r=(0,u.useState)({avatar:"https://cdn-icons-png.flaticon.com/512/843/843331.png?w=740"}),f=(0,c.Z)(r,2),v=f[0],g=f[1],h=(0,l.s0)(),x=(0,o.S)(),j=x.users,w=x.fetchAllUsers;(0,u.useEffect)((function(){w()}),[]);var _=function(e){var n=e.target.name,r=e.target.value;g((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,t.Z)({},n,r))}))},b=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(n,r){var a,t,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signup"!==r){e.next=22;break}return e.prev=1,e.next=4,fetch("https://edgemony-backend.herokuapp.com/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return a=e.sent,e.next=7,a.json();case 7:if(t=e.sent,201===a.status){e.next=12;break}throw new Error(t);case 12:localStorage.setItem("JWT_accessToken",t.accessToken),localStorage.setItem("currentUser",t.user.id),h("/browse");case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),alert(e.t0);case 20:e.next=24;break;case 22:(i=j.filter((function(e){return e.email===n.email}))).length?(localStorage.setItem("currentUser",i[0].id),h("/browse")):alert("Questa email non esiste, registrati!");case 24:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(n,r){return e.apply(this,arguments)}}();return(0,d.jsxs)("form",{autoComplete:"false",onSubmit:function(e){e.preventDefault(),b(v,n)},className:p,children:["signup"===n?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("label",{htmlFor:"avatar",children:"Avatar"}),(0,d.jsx)("input",{type:"text",value:v.avatar,name:"avatar",onChange:_,id:"avatar"})]}),(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("label",{htmlFor:"username",children:"Username"}),(0,d.jsx)("input",{required:!0,autoComplete:"new-password",type:"text",value:v.username||"",name:"username",onChange:_,id:"username"})]})]}):null,(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("label",{htmlFor:"email",children:"Email"}),(0,d.jsx)("input",{required:!0,autoComplete:"new-password",type:"email",value:v.email||"",name:"email",onChange:_,id:"email"})]}),(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("label",{htmlFor:"password",children:"Password"}),(0,d.jsx)("input",{required:!0,autoComplete:"new-password",type:"password",value:v.password||"",name:"password",onChange:_,id:"password"})]}),(0,d.jsx)("div",{className:m,children:"signup"===n?(0,d.jsx)("input",{type:"submit",value:"Sign Up"}):(0,d.jsx)("input",{type:"submit",value:"Sign In"})})]})}},7648:function(e,n,r){r.d(n,{Z:function(){return t}});var s="Overlay_Overlay__QvtbA",a=r(184);var t=function(e){var n=e.functionOnClick,r=void 0===n?function(){}:n;return(0,a.jsx)("div",{onClick:function(){return r()},className:s})}},8891:function(e,n,r){r.r(n),r.d(n,{default:function(){return p}});var s=r(7333),a=r(7648),t=r(3504),i=r(6871),c="Signup_Signup__hmLPH",u="Signup_Signup__redirect__egHmf",l=r(1221),o=r(184);var p=function(){var e=(0,i.s0)();return(0,o.jsxs)("div",{className:c,children:[(0,o.jsx)("img",{onClick:function(){return e("/signin")},src:l,alt:"Edgeflix"}),(0,o.jsx)("h1",{children:"Signup"}),(0,o.jsx)(a.Z,{}),(0,o.jsx)(s.Z,{formType:"signup"}),(0,o.jsxs)("small",{className:u,children:["Sei gi\xe0 registrato? ",(0,o.jsx)(t.rU,{to:"/signin",children:"Sign In!"})]})]})}},1221:function(e,n,r){e.exports=r.p+"static/media/logo.606f44d2a13c4c194bf1.png"}}]);
//# sourceMappingURL=891.21fcb716.chunk.js.map