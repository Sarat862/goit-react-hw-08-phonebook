"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[522],{522:function(e,t,n){n.r(t),n.d(t,{ContactsPage:function(){return g},default:function(){return F}});var a=n(791),r="ContactForm_contactForm__y0Rca",s="ContactForm_contactForm__field__+cOPR",c="ContactForm_contactForm__input__k3i+4",o="ContactForm_contactForm__btn__fU2H+",i=n(434),l=n(56),u=n(184),m=function(){var e=(0,i.I0)();return(0,u.jsxs)("form",{className:r,onSubmit:function(t){t.preventDefault();var n=t.target,a=n.elements.name.value,r=n.elements.number.value,s=(0,l.uK)({name:a,number:r});e(s),n.reset()},children:[(0,u.jsxs)("label",{className:s,children:[" Name",(0,u.jsx)("input",{className:c,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,u.jsxs)("label",{className:s,children:[" Number",(0,u.jsx)("input",{className:c,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,u.jsx)("button",{className:o,type:"submit",children:"Add contact"})]})},d="ContactList_contactList__item__2K2vx",_="ContactList_contactList__btn__Q+Zz6",f=function(e){var t=e.contacts;return{loading:t.loading,error:t.error}},h=function(e){var t=e.filter,n=e.contacts;if(!t)return n.items;var a=t.toLowerCase();return n.items.filter((function(e){return e.name.toLowerCase().includes(a)}))};function p(){var e=(0,i.v9)(h),t=(0,i.I0)();return(0,u.jsx)("ul",{children:e.map((function(e){var n=e.id,a=e.name,r=e.number;return(0,u.jsxs)("li",{className:d,children:[a,": ",r,(0,u.jsx)("button",{className:_,onClick:function(){return function(e){var n=(0,l.GK)(e);t(n)}(n)},children:"Delete"})]},n)}))})}var v="Filter_filterTitle__5SDqd",x="Filter_filterInput__1Cysk",b=function(e){return e.filter},j=n(653);function C(){var e=(0,i.v9)(b),t=(0,i.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:v,children:"Find contacts by name"}),(0,u.jsx)("input",{className:x,type:"text",name:"filter",value:e,onChange:function(e){var n=e.target.value;t((0,j.T)(n))}})]})}var g=function(){var e=(0,i.v9)(h),t=(0,i.v9)(f),n=t.loading,r=t.error,s=(0,i.I0)();return(0,a.useEffect)((function(){s((0,l.yF)())}),[s]),(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Phonebook"}),(0,u.jsx)(m,{}),(0,u.jsx)("h2",{children:"Contacts"}),(0,u.jsx)(C,{}),e.length>0&&(0,u.jsx)(p,{}),n&&(0,u.jsx)("p",{style:{color:"blue",marginLeft:"20px"},children:"...Loading"}),r&&(0,u.jsx)("p",{children:"Oops, something went wrong"})]})},F=g}}]);
//# sourceMappingURL=522.b4abe77c.chunk.js.map