(this.webpackJsonpbooklist=this.webpackJsonpbooklist||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(1),o=n.n(r),i=n(6),a=n.n(i),s=(n(13),n(3)),u=n(7),j=n(16),b=function(t,e){switch(e.type){case"ADD_BOOK":return[].concat(Object(u.a)(t),[{title:e.book.title,author:e.book.author,id:Object(j.a)()}]);case"REMOVE_BOOK":return t.filter((function(t){return t.id!==e.id}));default:return t}},l=Object(r.createContext)();var O=function(t){var e=Object(r.useReducer)(b,[],(function(){var t=localStorage.getItem("books");return t?JSON.parse(t):[]})),n=Object(s.a)(e,2),o=n[0],i=n[1];return Object(r.useEffect)((function(){localStorage.setItem("books",JSON.stringify(o))}),[o]),Object(c.jsx)(l.Provider,{value:{books:o,dispatch:i},children:t.children})};var d=function(){var t=Object(r.useContext)(l).dispatch,e=Object(r.useState)(""),n=Object(s.a)(e,2),o=n[0],i=n[1],a=Object(r.useState)(""),u=Object(s.a)(a,2),j=u[0],b=u[1];return Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({type:"ADD_BOOK",book:{title:o,author:j}}),i(""),b("")},children:[Object(c.jsx)("input",{type:"text",placeholder:"book title",value:o,onChange:function(t){return i(t.target.value)},required:!0}),Object(c.jsx)("input",{type:"text",placeholder:"author",value:j,onChange:function(t){return b(t.target.value)},required:!0}),Object(c.jsx)("input",{type:"submit",value:"Add Book"})]})};var h=function(t){var e=t.book,n=Object(r.useContext)(l).dispatch;return Object(c.jsxs)("li",{onClick:function(){return n({type:"REMOVE_BOOK",id:e.id})},children:[Object(c.jsx)("div",{className:"title",children:e.title}),Object(c.jsx)("div",{className:"author",children:e.author})]})};var v=function(){var t=Object(r.useContext)(l).books;return t.length?Object(c.jsx)("div",{className:"book-list",children:Object(c.jsx)("ul",{children:t.map((function(t){return Object(c.jsx)(h,{book:t},t.id)}))})}):Object(c.jsx)("div",{className:"empty",children:"No Books to Read"})};var x=function(){var t=Object(r.useContext)(l).books;return Object(c.jsxs)("div",{className:"navbar",children:[Object(c.jsx)("h1",{children:"Ninja Reading List"}),Object(c.jsxs)("p",{children:["Currently you have ",t.length," books to get through ..."]})]})};var f=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(O,{children:[Object(c.jsx)(x,{}),Object(c.jsx)(v,{}),Object(c.jsx)(d,{})]})})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),c(t),r(t),o(t),i(t)}))};a.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(f,{})}),document.getElementById("root")),p()}},[[14,1,2]]]);
//# sourceMappingURL=main.17de645b.chunk.js.map