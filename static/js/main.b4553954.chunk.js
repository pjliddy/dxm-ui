(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(36)},36:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(22),c=n.n(r),o=n(13),l=n(12),s=n(2),u=n.n(s),m=n(11),d=n(6),p=n(7),h=n(9),f=n(8),v=n(10),E="https://kiuhmwwxi4.execute-api.us-east-1.amazonaws.com/dxm-api/nodes",b=function(e){return fetch("".concat(E),{method:"POST",body:JSON.stringify(e)}).then(function(e){return console.log("contentCreate: ".concat(JSON.stringify(e))),e},function(e){console.log(e)})},y=function(){return fetch("".concat(E)).then(function(e){return e.json()}).then(function(e){return e},function(e){console.log(e)})},g=function(e){return fetch("".concat(E,"/").concat(e)).then(function(e){return e.json()}).then(function(e){return e},function(e){console.log(e)})},C=function(e){return fetch("".concat(E,"/").concat(e.id),{method:"PUT",body:JSON.stringify(e)}).then(function(e){return e},function(e){console.log(e)})},x=function(e){return fetch("".concat(E,"/").concat(e),{method:"DELETE"}).then(function(e){return e},function(e){console.log(e)})},N=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={items:[],isLoading:!1},n.getContentIndex=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,y();case 3:t=e.sent,n.setState({isLoading:!1,items:t});case 5:case"end":return e.stop()}},e)})),n.deleteContent=function(){var e=Object(m.a)(u.a.mark(function e(t){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,x(t);case 3:n.getContentIndex(),n.setState({isLoading:!1});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"renderList",value:function(){var e=this;return this.state.items.map(function(t){var n="/content/edit/".concat(t.id);return i.a.createElement("tr",{key:t.id},i.a.createElement("td",null,i.a.createElement(o.b,{to:n,className:"item"},t.title)),i.a.createElement("td",null,t.contentType),i.a.createElement("td",{className:"collapsing"},t.id),i.a.createElement("td",{className:"collapsing"},t.dateModified),i.a.createElement("td",{className:"collapsing"},i.a.createElement("div",{className:"ui icon buttons"},i.a.createElement("button",{className:"ui basic button",onClick:function(){return e.deleteContent(t.id)}},i.a.createElement("i",{className:"trash alternate outline icon"})))))})}},{key:"componentDidMount",value:function(){this.getContentIndex()}},{key:"render",value:function(){var e="ui ".concat(this.state.isLoading?"active":""," inverted dimmer");return i.a.createElement("div",null,i.a.createElement(o.b,{to:"/content/new",className:"ui right floated primary button"},"New Content"),i.a.createElement("h1",null,"Content List"),i.a.createElement("div",{className:e},i.a.createElement("div",{className:"ui text loader"},"Working...")),i.a.createElement("table",{className:"ui celled striped compact table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Title"),i.a.createElement("th",null,"Content Type"),i.a.createElement("th",null,"ID"),i.a.createElement("th",null,"Date Modified"),i.a.createElement("th",null))),i.a.createElement("tbody",null,this.renderList())))}}]),t}(i.a.Component),O=n(25),S=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={item:{id:"",contentType:"content",title:"",subTitle:"",copyText:"",dateCreated:"",dateModified:""}},n.handleChange=function(e){var t=Object(O.a)({},n.state).item,a=e.target,i=a.name,r=a.value;t[i]=r,n.setState({item:t})},n.onFormSubmit=function(e){e.preventDefault(),n.props.onFormSubmit(n.state.item)},n.onFormCancel=function(e){e.preventDefault(),n.props.onFormCancel()},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.item.id&&this.props.item.id!==this.state.item.id&&this.setState({item:this.props.item})}},{key:"componentDidUpdate",value:function(){this.props.item.id&&this.props.item.id!==this.state.item.id&&this.setState({item:this.props.item})}},{key:"render",value:function(){var e=this.state.item;return i.a.createElement("div",{className:"ui form"},i.a.createElement("p",null,"All fields must have values. Validation to be added."),i.a.createElement("div",{className:"disabled field"},i.a.createElement("label",{htmlFor:"id"},"ID"),i.a.createElement("input",{name:"id",type:"text",placeholder:"id",value:e.id,readOnly:!0})),i.a.createElement("div",{className:"required field"},i.a.createElement("label",{htmlFor:"contentType"},"Content Type"),i.a.createElement("select",{name:"contentType",type:"text",placeholder:"content type",value:e.contentType,onChange:this.handleChange},i.a.createElement("option",{value:""},"Content Type"),i.a.createElement("option",{value:"content"},"Content"))),i.a.createElement("div",{className:"required field"},i.a.createElement("label",{htmlFor:"title"},"Title"),i.a.createElement("input",{name:"title",type:"text",placeholder:"title",value:e.title,onChange:this.handleChange})),i.a.createElement("div",{className:"required field"},i.a.createElement("label",{htmlFor:"subTitle"},"Subtitle"),i.a.createElement("input",{name:"subTitle",type:"text",placeholder:"subtitle",value:e.subTitle,onChange:this.handleChange})),i.a.createElement("div",{className:"required field"},i.a.createElement("label",{htmlFor:"copyText"},"Copy Text"),i.a.createElement("textarea",{name:"copyText",placeholder:"copy text",value:e.copyText,onChange:this.handleChange})),i.a.createElement("div",{className:"disabled field"},i.a.createElement("label",{htmlFor:"dateCreated"},"Date Created"),i.a.createElement("input",{name:"dateCreated",type:"text",placeholder:"date created",value:e.dateCreated,readOnly:!0})),i.a.createElement("div",{className:"disabled field"},i.a.createElement("label",{htmlFor:"dateModified"},"Date Modified"),i.a.createElement("input",{name:"dateModified",type:"text",placeholder:"date modifed",value:e.dateModified,readOnly:!0})),i.a.createElement("div",null,i.a.createElement("button",{className:"ui secondary basic button",onClick:this.onFormCancel},"Cancel"),i.a.createElement("button",{className:"ui primary button",onClick:this.onFormSubmit},"Save")))}}]),t}(i.a.Component),j=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={item:{id:"",contentType:"",title:"",subTitle:"",copyText:"",dateCreated:"",dateModified:""},redirect:!1,isLoading:!1},n.postContent=function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,b(t);case 3:a=e.sent,console.log("postContent: ".concat(JSON.stringify(a))),n.setState({isLoading:!1,redirect:!0});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.onFormCancel=function(){n.setState({redirect:!0})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){if(this.state.redirect)return i.a.createElement(l.a,{to:"/"});var e="ui ".concat(this.state.isLoading?"active":""," inverted dimmer");return i.a.createElement("div",null,i.a.createElement("h1",null,"New Content"),i.a.createElement("div",{className:e},i.a.createElement("div",{className:"ui text loader"},"Working...")),i.a.createElement(S,{item:this.state.item,onFormSubmit:this.postContent,onFormCancel:this.onFormCancel}))}}]),t}(i.a.Component),T=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(h.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).state={item:{id:"",contentType:"",title:"",subTitle:"",copyText:"",dateCreated:"",dateModified:""},redirect:!1,isLoading:!1},n.getContent=function(){var e=Object(m.a)(u.a.mark(function e(t){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,g(t);case 3:a=e.sent,n.setState({item:a,isLoading:!1});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.putContent=Object(m.a)(u.a.mark(function e(){return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,C(n.state.item);case 3:n.setState({isLoading:!1,redirect:!0});case 4:case"end":return e.stop()}},e)})),n.onFormCancel=function(){n.setState({redirect:!0})},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getContent(this.props.match.params.id)}},{key:"handleLoader",value:function(){return this.state.isLoading?i.a.createElement("div",{className:"ui segment"},i.a.createElement("div",{className:"ui active inverted dimmer"},i.a.createElement("div",{className:"ui text loader"},"Loading")),i.a.createElement("p",null)):i.a.createElement(S,{item:this.state.item,onFormSubmit:this.putContent,onFormCancel:this.onFormCancel})}},{key:"render",value:function(){if(this.state.redirect)return i.a.createElement(l.a,{to:"/"});var e="ui ".concat(this.state.isLoading?"active":""," inverted dimmer");return i.a.createElement("div",null,i.a.createElement("h1",null,"Edit Content"),i.a.createElement("div",{className:e},i.a.createElement("div",{className:"ui text loader"},"Working...")),i.a.createElement(S,{item:this.state.item,onFormSubmit:this.putContent,onFormCancel:this.onFormCancel}))}}]),t}(i.a.Component),w=function(){return i.a.createElement("div",{className:"ui segment"},i.a.createElement("h1",null,"Digital eXperience Manager"))},k=function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement(o.a,{basename:"/"},i.a.createElement(w,null),i.a.createElement(l.b,{path:"/",exact:!0,component:N}),i.a.createElement(l.b,{path:"/content/edit/:id",exact:!0,component:T}),i.a.createElement(l.b,{path:"/content/new",exact:!0,component:j})))};c.a.render(i.a.createElement(k,null),document.querySelector("#root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.b4553954.chunk.js.map