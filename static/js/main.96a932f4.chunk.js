(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),i=a.n(c),o=a(19),s=a(2),u=a(3),l=a(5),m=a(4),p=a(6),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props;return r.a.createElement("div",{className:"github-profile"},r.a.createElement("img",{src:e.avatar_url,alt:""}),r.a.createElement("div",{className:"info"},r.a.createElement("div",{className:"name"},e.name),r.a.createElement("div",{className:"company"},e.company)))}}]),t}(r.a.Component),h=function(e){return r.a.createElement("div",null,e.profiles.map(function(e){return r.a.createElement(f,Object.assign({key:e.id},e))}))},d=a(7),b=a.n(d),v=a(18),E=a(27),j=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={userName:""},a.handleSubmit=function(){var e=Object(v.a)(b.a.mark(function e(t){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.get("https://api.github.com/users/".concat(a.state.userName));case 3:n=e.sent,a.props.onSubmit(n.data),a.setState({userName:""});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",value:this.state.userName,onChange:function(t){return e.setState({userName:t.target.value})},placeholder:"GitHub username",required:!0}),r.a.createElement("button",null,"Add card"))}}]),t}(r.a.Component),w=(a(45),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={profiles:[]},a.addNewProfile=function(e){a.setState(function(t){return{profiles:[].concat(Object(o.a)(t.profiles),[e])}})},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Xenia's GitHub Cards App on React"),r.a.createElement("p",null,"Take input from the user, call a public Github API,",r.a.createElement("br",null)," update the list of users")),r.a.createElement(j,{onSubmit:this.addNewProfile}),r.a.createElement(h,{profiles:this.state.profiles}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.96a932f4.chunk.js.map