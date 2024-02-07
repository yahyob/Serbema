"use strict";(self.webpackChunkSERBEMA_2024=self.webpackChunkSERBEMA_2024||[]).push([[430],{857:function(e,n,s){n.ZP={GET:"GET",POST:"POST",PATCH:"PATCH",PUT:"PUT",DELETE:"DELETE"}},2121:function(e,n,s){s.d(n,{I:function(){return l}});var a=s(5671),r=s(3144),t=s(9050),i=s(857),l=function(){function e(){(0,a.Z)(this,e)}return(0,r.Z)(e,null,[{key:"create",value:function(e){return(0,t.Z)(this.endpoint,i.ZP.POST,e)}}]),e}();l.endpoint="/api/token/"},9050:function(e,n,s){s.d(n,{Z:function(){return o}});var a=s(1413),r=s(857),t=s(4569),i=s.n(t),l="http://62.209.128.34";function o(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.ZP.GET,s=arguments.length>2?arguments[2]:void 0,t=arguments.length>3?arguments[3]:void 0,o=(0,a.Z)({Accept:"application/json"},t),c={method:n,url:l+e};return localStorage.getItem("accessToken")&&(o.Authorization="Bearer  ".concat(localStorage.getItem("accessToken"))),s&&(c.data=s,s instanceof FormData?o["Content-type"]="multipart/form-data":o["Content-type"]="application/json"),c.headers=o,i()(c).then((function(e){return e.data}))}},4672:function(e,n,s){var a=s(1413),r=(s(2791),s(7496)),t=s(135),i=s(184);n.Z=function(e){var n=e.label,s=e.name,l=e.rules,o=e.restField,c=e.fieldKey,u=e.suffix,d=void 0===u?"":u,f=e.size,h=e.placeholder;return(0,i.jsx)(r.Z.Item,(0,a.Z)((0,a.Z)({},o),{},{label:n,name:s,fieldKey:c,rules:l,children:(0,i.jsx)(t.Z,{placeholder:h,size:f,type:"email",suffix:d})}))}},3224:function(e,n,s){s(2791);var a=s(7496),r=s(135),t=s(184);n.Z=function(e){var n=e.label,s=e.name,i=e.rules,l=e.placeholder,o=e.className,c=e.size;return(0,t.jsx)(a.Z.Item,{label:n,name:s,rules:i,children:(0,t.jsx)(r.Z.Password,{size:c,placeholder:l,className:o})})}},8099:function(e,n,s){var a=s(1413),r=(s(2791),s(7496)),t=s(135),i=s(184);n.Z=function(e){var n=e.label,s=e.name,l=e.rules,o=e.restField,c=e.fieldKey,u=e.suffix,d=e.placeholder,f=e.className,h=e.size;return(0,i.jsx)(r.Z.Item,(0,a.Z)((0,a.Z)({},o),{},{label:n,name:s,rules:l,fieldKey:c,children:(0,i.jsx)(t.Z,{size:h,suffix:u,placeholder:d,className:f})}))}},8177:function(e,n,s){s.d(n,{N:function(){return t}});var a=s(188),r=s(3168),t=function(){return{t:(0,r.$)().t,lang:(0,a.VQ)()}}},7430:function(e,n,s){s.r(n),s.d(n,{default:function(){return b}});var a=s(9439),r=s(3695),t=s(7496),i=s(6106),l=s(914),o=s(7309),c=s(2791),u=s(4672),d=s(8099),f=s(8177),h=s(184);var p=function(){var e=(0,f.N)().lang;return(0,h.jsx)("div",{className:"reg-banner",children:(0,h.jsx)("img",{src:"/assets/img/banner".concat("en"===e?".png":"ru"===e?"_ru.png":"uz"===e?"_uz.png":".png"),alt:"reg_banner_img"})})},m=s(6871),Z=s(2121),x=s(3224),g=s(4446);var v=function(){var e=(0,c.useContext)(g.T).userData,n=(0,m.s0)(),s={};return(0,h.jsx)("div",{className:"varification",children:(0,h.jsx)(t.Z,{onFinish:function(a){s={password:a.password,email:e.email},Z.I.create(s).then((function(e){localStorage.setItem("refreshToken",e.refresh),localStorage.setItem("accessToken",e.access),r.ZP.success("Registratsiyadan muaffaqiyatli o\u2019tdingiz / success",[5]),n("/")})).catch((function(e){var n,s;r.ZP.error(null===(n=e.response)||void 0===n||null===(s=n.data)||void 0===s?void 0:s.detail,[2])}))},autoComplete:"off",children:(0,h.jsxs)(i.Z,{gutter:24,children:[(0,h.jsx)(l.Z,{xs:{span:24},lg:{span:12,offset:6},children:(0,h.jsx)(x.Z,{size:"large",placeholder:"Tasdiqlovchi kod / Verfication code ",rules:[{required:!0}],name:"password"})}),(0,h.jsx)(l.Z,{xs:{span:24},lg:{span:12,offset:6},children:(0,h.jsx)(t.Z.Item,{children:(0,h.jsx)(o.Z,{size:"large",type:"primary",htmlType:"submit",children:"Yuborish / Submit"})})})]})})})},j=s(5671),y=s(3144),T=s(9050),P=s(857),z=function(){function e(){(0,j.Z)(this,e)}return(0,y.Z)(e,null,[{key:"create",value:function(e){return(0,T.Z)(this.endpoint,P.ZP.POST,e)}}]),e}();z.endpoint="/api/register/";var b=function(){var e=(0,m.s0)(),n=(0,c.useContext)(g.T).setUserData,s=(0,c.useState)(!1),f=(0,a.Z)(s,2),Z=f[0],x=f[1];return(0,h.jsxs)("div",{className:"register",children:[(0,h.jsx)(p,{}),(0,h.jsx)("div",{className:"reg-title",children:"Ro\u2019yxatdan o\u2019tish / Sign up"}),(0,h.jsx)(t.Z,{onFinish:function(s){x(!0),z.create(s).then((function(e){n(e),r.ZP.success("Successfully implemented",[2]),r.ZP.success("A confirmation code has been sent to your email",[2]),x(!1)})).catch((function(n){var s,a,t;if(0!==(null===(s=n.response)||void 0===s||null===(a=s.data)||void 0===a||null===(t=a.email)||void 0===t?void 0:t.length))return r.ZP.warning("A user with this email already exists",[2]),x(!1),e("/login"),1;console.log(n),r.ZP.error("The process failed",[2]),x(!1)}))},autoComplete:"off",children:(0,h.jsxs)(i.Z,{gutter:24,children:[(0,h.jsx)(l.Z,{xs:{span:24},lg:{span:12,offset:6},children:(0,h.jsx)(d.Z,{size:"large",rules:[{required:!0}],placeholder:"Ism / First Name",name:"first_name"})}),(0,h.jsx)(l.Z,{xs:{span:24},lg:{span:12,offset:6},children:(0,h.jsx)(d.Z,{size:"large",rules:[{required:!0}],placeholder:"Familya / Last Name",name:"last_name"})}),(0,h.jsx)(l.Z,{xs:{span:24},lg:{span:12,offset:6},children:(0,h.jsx)(d.Z,{size:"large",rules:[{required:!0}],placeholder:"Tashkilot / Affiliation",name:"affiliation"})}),(0,h.jsx)(l.Z,{xs:{span:24},lg:{span:12,offset:6},children:(0,h.jsx)(d.Z,{size:"large",rules:[{required:!0}],placeholder:"Mamlakat / Country",name:"country"})}),(0,h.jsx)(l.Z,{xs:{span:24},lg:{span:12,offset:6},children:(0,h.jsx)(u.Z,{size:"large",rules:[{required:!0}],placeholder:"E-mail",name:"email"})}),(0,h.jsx)(l.Z,{xs:{span:24},lg:{span:12,offset:6},children:(0,h.jsx)(t.Z.Item,{children:(0,h.jsx)(o.Z,{loading:Z,size:"large",type:"primary",htmlType:"submit",children:"Ro\u2019yxatdan o\u2019tish / Sign up"})})})]})}),(0,h.jsx)(v,{})]})}}}]);
//# sourceMappingURL=430.2bf9f475.chunk.js.map