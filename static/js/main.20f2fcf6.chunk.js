(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var o=c(1),s=c.n(o),n=c(7),a=c.n(n),i=(c(13),c(3)),l=(c(14),c(8)),d=c(0),r=function(t){var e=t.setInputText,c=t.setStatus,s=t.inputText,n=t.todos,a=t.setTodos,i=Object(o.useRef)(null);Object(o.useEffect)((function(){i.current.focus()}));return Object(d.jsxs)("form",{className:"media",children:[Object(d.jsxs)("div",{class:"inputbox",children:[Object(d.jsx)("input",{value:s,onChange:function(t){e(t.target.value)},ref:i,type:"text"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),a([].concat(Object(l.a)(n),[{text:s,completed:!1,id:1e3*Math.random()}])),e("")},type:"submit",children:Object(d.jsx)("i",{className:"fas fa-plus-square"})})]}),Object(d.jsx)("div",{className:"select",children:Object(d.jsxs)("select",{onChange:function(t){c(t.target.value)},name:"todos",className:"filter-todo",children:[Object(d.jsx)("option",{value:"all",children:"All"}),Object(d.jsx)("option",{value:"completed",children:"Completed"}),Object(d.jsx)("option",{value:"uncompleted",children:"Uncompleted"})]})})]})},u=c(6),j=function(t){var e=t.text,c=t.todo,o=t.setTodos,s=t.todos;return Object(d.jsxs)("div",{className:"todo",children:[Object(d.jsx)("li",{className:"todo-item ".concat(c.completed?"completed":" "),children:e}),Object(d.jsx)("button",{className:"complete-btn",onClick:function(){return o(s.map((function(t){return t.id===c.id?Object(u.a)(Object(u.a)({},t),{},{completed:!t.completed}):t})))},children:Object(d.jsx)("i",{className:"fas fa-check"})}),Object(d.jsx)("button",{className:"trash-btn",onClick:function(){o(s.filter((function(t){return t.id!==c.id})))},children:Object(d.jsx)("i",{className:"fas fa-trash"})})]})},b=function(t){var e=t.todos,c=t.filterdTodos,o=t.setTodos;return Object(d.jsx)("div",{className:"todo-container",children:Object(d.jsx)("ul",{className:"todo-list",children:c.map((function(t){return Object(d.jsx)(j,{text:t.text,todo:t,todos:e,setTodos:o},t.id)}))})})};var f=function(){var t=Object(o.useState)(""),e=Object(i.a)(t,2),c=e[0],s=e[1],n=Object(o.useState)([]),a=Object(i.a)(n,2),l=a[0],u=a[1],j=Object(o.useState)("all"),f=Object(i.a)(j,2),O=f[0],m=f[1],x=Object(o.useState)([]),p=Object(i.a)(x,2),h=p[0],v=p[1];Object(o.useEffect)((function(){g()}),[]),Object(o.useEffect)((function(){N(),S()}),[l,O]);var N=function(){switch(O){case"completed":v(l.filter((function(t){return!0===t.completed})));break;case"uncompleted":v(l.filter((function(t){return!1===t.completed})));break;default:v(l)}},S=function(){localStorage.setItem("todos",JSON.stringify(l))},g=function(){if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));u(t)}};return Object(d.jsxs)("div",{children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{children:"To-Do List"})}),Object(d.jsx)(r,{setInputText:s,todos:l,setTodos:u,inputText:c,setStatus:m}),Object(d.jsx)(b,{todos:l,setTodos:u,filterdTodos:h})]})};a.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.20f2fcf6.chunk.js.map