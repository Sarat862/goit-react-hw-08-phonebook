"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[643],{6643:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var a=t(9434),n=t(6057),o=t(7205),i=t(5012),s=t(5953),l=t(6015),c=t(184);function u(){var e=(0,a.I0)();return(0,c.jsxs)(l.Z,{component:"form",onSubmit:function(r){r.preventDefault();var t=r.target,a=t.elements.email.value,o=t.elements.password.value,i=(0,n.x4)({email:a,password:o});e(i),t.reset()},sx:{mt:3},children:[(0,c.jsxs)(s.ZP,{container:!0,spacing:2,children:[(0,c.jsx)(s.ZP,{item:!0,xs:12,children:(0,c.jsx)(i.Z,{required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoFocus:!0,type:"email"})}),(0,c.jsx)(s.ZP,{item:!0,xs:12,children:(0,c.jsx)(i.Z,{required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password"})})]}),(0,c.jsx)(o.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Login"})]})}var d=t(3978),m=t(403),f=t(4565),v=t(803);function h(){return(0,c.jsx)(v.Z,{component:"main",maxWidth:"xs",children:(0,c.jsxs)(l.Z,{sx:{marginTop:5,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,c.jsx)(d.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,c.jsx)(m.Z,{})}),(0,c.jsx)(f.Z,{component:"h1",variant:"h5",children:"Login page"}),(0,c.jsx)(u,{})]})})}},403:function(e,r,t){var a=t(4836);r.Z=void 0;var n=a(t(5649)),o=t(184),i=(0,n.default)((0,o.jsx)("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"}),"LockOutlined");r.Z=i},3978:function(e,r,t){t.d(r,{Z:function(){return j}});var a=t(885),n=t(3366),o=t(7462),i=t(2791),s=t(8182),l=t(4419),c=t(277),u=t(5513),d=t(1245),m=t(184),f=(0,d.Z)((0,m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),v=t(5878),h=t(1217);function p(e){return(0,h.Z)("MuiAvatar",e)}(0,v.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var g=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],x=(0,c.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,r){var t=e.ownerState;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((function(e){var r=e.theme,t=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:(r.vars||r).shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&(0,o.Z)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600]}))})),Z=(0,c.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,r){return r.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),b=(0,c.ZP)(f,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,r){return r.fallback}})({width:"75%",height:"75%"});var j=i.forwardRef((function(e,r){var t=(0,u.Z)({props:e,name:"MuiAvatar"}),c=t.alt,d=t.children,f=t.className,v=t.component,h=void 0===v?"div":v,j=t.imgProps,w=t.sizes,k=t.src,y=t.srcSet,S=t.variant,P=void 0===S?"circular":S,z=(0,n.Z)(t,g),R=null,A=function(e){var r=e.crossOrigin,t=e.referrerPolicy,n=e.src,o=e.srcSet,s=i.useState(!1),l=(0,a.Z)(s,2),c=l[0],u=l[1];return i.useEffect((function(){if(n||o){u(!1);var e=!0,a=new Image;return a.onload=function(){e&&u("loaded")},a.onerror=function(){e&&u("error")},a.crossOrigin=r,a.referrerPolicy=t,a.src=n,o&&(a.srcset=o),function(){e=!1}}}),[r,t,n,o]),c}((0,o.Z)({},j,{src:k,srcSet:y})),D=k||y,M=D&&"error"!==A,I=(0,o.Z)({},t,{colorDefault:!M,component:h,variant:P}),C=function(e){var r=e.classes,t={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,l.Z)(t,p,r)}(I);return R=M?(0,m.jsx)(Z,(0,o.Z)({alt:c,src:k,srcSet:y,sizes:w,ownerState:I,className:C.img},j)):null!=d?d:D&&c?c[0]:(0,m.jsx)(b,{className:C.fallback}),(0,m.jsx)(x,(0,o.Z)({as:h,ownerState:I,className:(0,s.Z)(C.root,f),ref:r},z,{children:R}))}))}}]);
//# sourceMappingURL=643.28affdd8.chunk.js.map