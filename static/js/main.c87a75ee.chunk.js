(this["webpackJsonpemployee-details"]=this["webpackJsonpemployee-details"]||[]).push([[0],{316:function(e,s,t){},318:function(e,s,t){"use strict";t.r(s);var a=t(2),n=t(9),c=t.n(n),r=t(77),i=t.n(r),l=(t(83),t(30)),o=t(31),b=t(34),d=t(33),h=function(e){var s=e.name,t=e.username,n=e.email,c=e.id;return Object(a.jsxs)("div",{className:"tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(a.jsx)("img",{src:"https://robohash.org/".concat(c,"?200x200"),alt:"robots"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{children:s}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"b",children:"Username:"})," ",t]}),Object(a.jsxs)("p",{children:[Object(a.jsx)("span",{className:"b",children:"E-mail:"})," ",n]})]})]})},j=function(e){var s=e.employees;return Object(a.jsx)("div",{className:"cards",children:s.map((function(e,t){return Object(a.jsx)(h,{id:s[t].id,name:s[t].name,username:s[t].username,email:s[t].email},t)}))})},m=function(e){var s=e.searchChange;return Object(a.jsx)("div",{className:"pa2",children:Object(a.jsx)("input",{className:"pa3 ba b--blue bg-lightest-blue b",type:"search",placeholder:"Employees",onChange:s})})},u=function(e){return Object(a.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"},children:e.children})},p=function(e){Object(b.a)(t,e);var s=Object(d.a)(t);function t(e){var a;return Object(l.a)(this,t),(a=s.call(this,e)).state={hasError:!1},a}return Object(o.a)(t,[{key:"componentDidCatch",value:function(e,s){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(a.jsx)("h1",{children:"Oops! Something went wrong!"}):this.props.children}}]),t}(n.Component),g=function(e){var s=e.onRouteChange;return e.isSignedIn?Object(a.jsx)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:Object(a.jsx)("p",{onClick:function(){return s("signout")},className:"f3 link dim black underline pa3 pointer",children:"Sign Out"})}):Object(a.jsxs)("nav",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(a.jsx)("p",{onClick:function(){return s("signin")},className:"f3 link dim black underline pa3 pointer",children:"Sign In"}),Object(a.jsx)("p",{onClick:function(){return s("register")},className:"f3 link dim black underline pa3 pointer",children:"Register"})]})},O=t(32),x=t.n(O),f={particles:{number:{value:1e3,density:{enable:!0,value_area:1e3}}}},v=function(e){var s=e.onRouteChange;return Object(a.jsxs)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:[Object(a.jsx)(x.a,{className:"particles",param:f}),Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Sign In"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f5",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f5",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:function(){return s("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib",type:"submit",value:"Sign in"})}),Object(a.jsx)("div",{className:"lh-copy mt3",children:Object(a.jsx)("p",{onClick:function(){return s("register")},className:"f5 link dim black db pointer",children:"Register"})})]})})]})},w={particles:{number:{value:1e3,density:{enable:!0,value_area:1e3}}}},N=function(e){var s=e.onRouteChange;return Object(a.jsxs)("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center",children:[Object(a.jsx)(x.a,{className:"particles",param:w}),Object(a.jsx)("main",{className:"pa4 black-80",children:Object(a.jsxs)("div",{className:"measure",children:[Object(a.jsxs)("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0",children:[Object(a.jsx)("legend",{className:"f1 fw6 ph0 mh0",children:"Register"}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f5",htmlFor:"name",children:"Name"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"namel",name:"name",id:"name"})]}),Object(a.jsxs)("div",{className:"mt3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f5",htmlFor:"email-address",children:"Email"}),Object(a.jsx)("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})]}),Object(a.jsxs)("div",{className:"mv3",children:[Object(a.jsx)("label",{className:"db fw6 lh-copy f5",htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"})]})]}),Object(a.jsx)("div",{className:"",children:Object(a.jsx)("input",{onClick:function(){return s("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib",type:"submit",value:"Register"})})]})})]})},y=(t(316),function(e){Object(b.a)(t,e);var s=Object(d.a)(t);function t(){var e;return Object(l.a)(this,t),(e=s.call(this)).onSearchChange=function(s){e.setState({searchfield:s.target.value})},e.onRouteChange=function(s){"signout"===s?e.setState({isSignedIn:!1}):"home"===s&&e.setState({isSignedIn:!0}),e.setState({route:s})},e.state={employees:[],searchfield:"",route:"signin",isSignedIn:!1},e}return Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(s){return e.setState({employees:s})}))}},{key:"render",value:function(){var e=this.state,s=e.employees,t=e.searchfield,n=e.isSignedIn,c=e.route,r=s.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return s.length?Object(a.jsxs)("div",{className:"tc",children:[Object(a.jsx)(g,{isSignedIn:n,onRouteChange:this.onRouteChange}),"home"===c?Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"f1",children:"Employee Records"}),Object(a.jsx)(m,{searchChange:this.onSearchChange}),Object(a.jsx)(u,{children:Object(a.jsx)(p,{children:Object(a.jsx)(j,{employees:r})})})]}):"signin"===c?Object(a.jsx)(v,{onRouteChange:this.onRouteChange}):Object(a.jsx)(N,{onRouteChange:this.onRouteChange})]}):Object(a.jsx)("h1",{className:"tc",children:"Loading"})}}]),t}(n.Component)),k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,319)).then((function(s){var t=s.getCLS,a=s.getFID,n=s.getFCP,c=s.getLCP,r=s.getTTFB;t(e),a(e),n(e),c(e),r(e)}))};t(317);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),k()},83:function(e,s,t){}},[[318,1,2]]]);
//# sourceMappingURL=main.c87a75ee.chunk.js.map