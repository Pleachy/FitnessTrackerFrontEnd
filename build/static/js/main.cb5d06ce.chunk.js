(this.webpackJsonpfitnesstrackerfrontend=this.webpackJsonpfitnesstrackerfrontend||[]).push([[0],{31:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(17),s=n.n(c),i=n(10),a=n(4),o=n.n(a),u=n(9),j=n(5),l=n(2),h=n(0),p="https://fitnesstrac-kr.herokuapp.com/api".REACT_APP_API_URL,b=void 0===p?"https://fitnesstrac-kr.herokuapp.com/api":p,d=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),a=i[0],p=i[1];Object(l.e)();return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Register Page"}),Object(h.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(b,"/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n,password:a})}).then((function(e){return e.json()})).then((function(e){e?(console.log("REGISTER RESULT",e),c(""),p(""),alert("Thank you for signing up!")):(c(""),p(""),alert("That username already exists, please try another one."))})).catch(console.error);case 3:e.sent;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Enter Username: "}),Object(h.jsx)("input",{type:"text",placeholder:"username",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Enter Password: "}),Object(h.jsx)("input",{type:"password",placeholder:"password",value:a,onChange:function(e){return p(e.target.value)}})]}),Object(h.jsx)("button",{type:"submit",children:"Register!"})]})]})},O=function(e){var t=e.activity;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:["Activity Name: ",t.name]}),Object(h.jsxs)("p",{children:["Description: ",t.description]})]})},f=function(e){var t=e.activities;return Object(h.jsx)(h.Fragment,{children:t.length>0?t.map((function(e){return Object(h.jsx)(O,{activity:e},e.id)})):Object(h.jsx)("div",{children:"No Activities Yet"})})},x="https://fitnesstrac-kr.herokuapp.com/api".REACT_APP_API_URL,v=void 0===x?"https://fitnesstrac-kr.herokuapp.com/api":x,m=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(j.a)(s,2),a=i[0],l=i[1],p=localStorage.getItem("Token");return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h4",{children:"Create a new activity"}),Object(h.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(v,"/activities"),{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(p)},body:JSON.stringify({name:n,description:a})}).then((function(e){return e.json()})).then((function(e){e.error&&alert(e.message),c(""),l("")})).catch(console.error);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("label",{children:"Enter Activity Name "}),Object(h.jsx)("input",{type:"text",placeholder:"activity name",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("fieldset",{children:[Object(h.jsx)("label",{children:"Enter Activity Description "}),Object(h.jsx)("input",{type:"text",placeholder:"description",value:a,onChange:function(e){return l(e.target.value)}})]}),Object(h.jsx)("button",{type:"submit",children:"Add Activity"})]})]})},g="https://fitnesstrac-kr.herokuapp.com/api".REACT_APP_API_URL,k=void 0===g?"https://fitnesstrac-kr.herokuapp.com/api":g,y=function(e){var t=Object(r.useState)([]),n=Object(j.a)(t,2),c=n[0],s=n[1],i=localStorage.getItem("Token");console.log("Activities in Activities.js",c);var a=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(k,"/activities"),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){e&&s(e)})).catch(console.error);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a()}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Activities List"}),i?Object(h.jsx)(m,{}):Object(h.jsx)("p",{children:"(Resgister and Login to make your own activities!)"}),Object(h.jsx)(f,{activities:c})]})},S="https://fitnesstrac-kr.herokuapp.com/api".REACT_APP_API_URL,T=void 0===S?"https://fitnesstrac-kr.herokuapp.com/api":S,A=function(e){var t=Object(r.useState)(""),n=Object(j.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(""),a=Object(j.a)(i,2),p=a[0],b=a[1],d=e.setToken,O=Object(l.e)();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Login"}),Object(h.jsxs)("form",{onSubmit:function(){var e=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("".concat(T,"/users/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:c,password:p})}).then((function(e){return e.json()})).then((function(e){e.error?(alert("Invalid username or password, If you don't have an account, use the register link to make one"),s(""),b("")):(console.log("RESULT OF LOGGING IN",e),d(e.token),localStorage.setItem("Token",e.token),s(""),b(""),alert(e.message),O.push("/"))})).catch(console.error);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Enter Username:"}),Object(h.jsx)("input",{type:"text",name:"password",value:c,onChange:function(e){return s(e.target.value)}})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{children:"Enter Password:"}),Object(h.jsx)("input",{type:"password",name:"password",value:p,onChange:function(e){return b(e.target.value)}})]}),Object(h.jsx)("button",{type:"submit",children:"Login"})]})]})},R=function(e){var t=e.routine,n=t.activities;return t.isPublic?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("h3",{children:["Name: ",t.name]}),Object(h.jsxs)("p",{children:["Created By: ",t.creatorName]}),Object(h.jsxs)("p",{children:["Goal: ",t.goal]}),Object(h.jsx)("h4",{children:"Routine Activities"}),Object(h.jsx)(f,{activities:n}),Object(h.jsx)("p",{children:"--------------------------------------------------------------------"})]}):Object(h.jsx)(h.Fragment,{children:" "})},w=function(e){var t=e.routines;localStorage.getItem("Token");return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{children:"Routines"}),t.map((function(e){return Object(h.jsx)(R,{routine:e},e.id)}))]})},P=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("h1",{children:"Your Profile"})})},E="https://fitnesstrac-kr.herokuapp.com/api".REACT_APP_API_URL,C=void 0===E?"https://fitnesstrac-kr.herokuapp.com/api":E,I=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)([]),a=Object(j.a)(s,2),p=a[0],b=a[1],O=Object(l.e)(),f=function(){var e=Object(u.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(C,"/routines"),{headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("FETCH ROUTINES RESULT (app.js)",e),b(e)})).catch(console.error);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){f()}),[n]),Object(r.useEffect)((function(){var e=localStorage.getItem("Token");e&&c(e)}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"app-chicken",children:[Object(h.jsx)("h3",{children:"Welcome to fitness tracker!"}),Object(h.jsxs)("div",{id:"navbar",children:[Object(h.jsx)(i.b,{to:"/activities",children:"Activities "}),Object(h.jsx)(i.b,{to:"/routines",children:"Routines"}),n?Object(h.jsx)(i.b,{to:"/MyRoutines",children:"MyRoutines "}):null,n?null:Object(h.jsx)(i.b,{to:"/register",children:"Register "}),n?null:Object(h.jsx)(i.b,{to:"/login",children:"Login"}),n?Object(h.jsx)("button",{onClick:function(){alert("You have successfully logged out"),c(""),localStorage.removeItem("Token"),O.push("/")},children:"Logout"}):null]}),Object(h.jsx)(l.a,{exact:!0,path:"/activities",children:Object(h.jsx)(y,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/register",children:Object(h.jsx)(d,{})}),Object(h.jsx)(l.a,{exact:!0,path:"/login",children:Object(h.jsx)(A,{setToken:c})}),Object(h.jsx)(l.a,{exact:!0,path:"/routines",children:Object(h.jsx)(w,{routines:p})}),Object(h.jsx)(l.a,{exact:!0,path:"/MyRoutines",children:Object(h.jsx)(P,{})})]})})};s.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(I,{})}),document.getElementById("app"))}},[[31,1,2]]]);
//# sourceMappingURL=main.cb5d06ce.chunk.js.map