"use strict";(self.webpackChunkinstello=self.webpackChunkinstello||[]).push([[355],{7355:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var i=t(5671),r=t(3144),s=t(136),c=t(2882),o=t(2791),a=t(6139),l=t(704),h=t(3826),u=t(7237),p=t(8872),d=t(6871),m=t(184),x=(0,l.Z)({form:"login"})((function(e){var n=(0,u.D)(40);return(0,m.jsxs)("form",{onSubmit:e.handleSubmit,children:[(0,m.jsx)("div",{children:(0,m.jsx)(a.Z,{component:h.ZP,validate:[u.C,n],name:"email",placeholder:"login"})}),(0,m.jsx)("div",{children:(0,m.jsx)(a.Z,{component:h.ZP,validate:[u.C,n],name:"password",placeholder:"Password",type:"password"})}),(0,m.jsxs)("div",{children:[(0,m.jsx)(a.Z,{component:h.ZP,type:"checkbox",name:"RememberMe"}),"Remember me"]}),e.captchaURL&&(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:e.captchaURL,alt:""}),(0,h.Gr)("Symbols from image","captcha",[u.C],h.ZP)]}),e.error&&(0,m.jsx)("div",{children:(0,m.jsx)("span",{style:{color:"red"},children:e.error})}),(0,m.jsx)("div",{children:(0,m.jsx)("button",{children:"Login"})})]})})),j=function(e){return e.isAuth?(0,m.jsx)(d.Fg,{to:"/profile"}):(0,m.jsxs)("div",{className:"login",children:[(0,m.jsx)("h1",{children:"Login"}),(0,m.jsx)(x,{captchaURL:e.captchaURL,onSubmit:function(n){e.login(n.email,n.password,n.rememberMe,n.captcha)}})]})},f=t(8687),v=function(e){(0,s.Z)(t,e);var n=(0,c.Z)(t);function t(){return(0,i.Z)(this,t),n.apply(this,arguments)}return(0,r.Z)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return(0,m.jsx)(j,{login:this.props.login,captchaURL:this.props.captchaURL,isAuth:this.props.isAuth})}}]),t}(o.Component),g=(0,f.$j)((function(e){return{isAuth:e.auth.isAuth,captchaURL:e.auth.captchaURL}}),{login:p.x4})(v)}}]);
//# sourceMappingURL=355.6fdd9f9c.chunk.js.map