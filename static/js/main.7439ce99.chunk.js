(this.webpackJsonpbasic_react=this.webpackJsonpbasic_react||[]).push([[0],[,,,,,,,,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},,function(e,n,t){},function(e,n,t){"use strict";t.r(n);var c=t(1),s=t.n(c),r=t(3),a=t.n(r),o=(t(12),t(4)),i=t(5),h=t(7),u=t(6),l=(t(13),t(14),t(15),t(0)),d=function(e){return Object(l.jsxs)("div",{className:"card-container",children:[Object(l.jsx)("img",{alt:"persons",src:"https://robohash.org/".concat(e.person.id,"?set=set4 ")}),Object(l.jsx)("h1",{children:e.person.name})]})},j=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.persons.map((function(e){return Object(l.jsx)(d,{person:e},e.id)}))})},p=(t(17),function(e){var n=e.placeholder,t=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:n,onChange:t})}),f=function(e){Object(h.a)(t,e);var n=Object(u.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).handleChange=function(n){e.setState({searchField:n.target.value})},e.state={persons:[],searchField:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({persons:n})}))}},{key:"render",value:function(){var e=this.state,n=e.persons,t=e.searchField,c=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Contact"}),Object(l.jsx)(p,{placeholder:"Search",handleChange:this.handleChange}),Object(l.jsx)(j,{persons:c})]})}}]),t}(c.Component),b=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,19)).then((function(n){var t=n.getCLS,c=n.getFID,s=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),s(e),r(e),a(e)}))};a.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.7439ce99.chunk.js.map