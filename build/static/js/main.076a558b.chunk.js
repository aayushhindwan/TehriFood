(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{116:function(e,t,a){e.exports=a(202)},121:function(e,t,a){},122:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},123:function(e,t,a){},124:function(e,t,a){},194:function(e,t,a){e.exports=a.p+"static/media/landingSVG.46d9f22b.svg"},195:function(e,t,a){},196:function(e,t,a){e.exports=a.p+"static/media/pic1.24d6c4b3.jpg"},197:function(e,t,a){e.exports=a.p+"static/media/pic2.db90f482.jpg"},198:function(e,t,a){e.exports=a.p+"static/media/pic3.db7d1920.jpg"},199:function(e,t,a){e.exports=a.p+"static/media/pic4.8a8e4051.jpg"},20:function(e,t){e.exports="3001"},202:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(16),c=a.n(r),o=(a(121),a(122),a(123),a(6)),s=a(100),i=a(208);a(124);function m(){var e=Object(s.a)(["\n.navbar{\n    color : white;\n     \n.navbar-link, .navbar-brand ,navbar-nav{\n    color : white;\n    font-weight : bolder;\n    font-size: 25px\n}\n\n.nav-link\n{\n    color : white\n}"]);return m=function(){return e},e}var u=a(101).a.div(m()),d=function(e){return l.a.createElement(u,null,l.a.createElement(i.a,{bg:"dark",expand:"lg"},l.a.createElement(i.a.Brand,{href:"/"},"Tehri Food"),l.a.createElement(i.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(i.a.Collapse,{id:"basic-navbar-nav"})))},h=a(31),p=a.n(h),E=a(41),f=a(11),b=a(12),v=a(14),g=a(13),y=(a(35),a(52),a(207),a(210)),w=a(26),k=a.n(w),C=a(27),O=a.n(C),N=a(9),j=a(17),x=a.n(j),S=a(20),T=a.n(S),I=a(21),D=a.n(I),_=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main_div"},l.a.createElement("div",{className:"posts"},l.a.createElement(N.b,{to:"/Restaurant/"+this.props._id},l.a.createElement("h1",null,"aan,kdfans,kn"))))}}]),a}(n.Component);a(89);n.Component,a(92);var A=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:"",tags:[],body:""},e.SubmitDoubt=function(t){console.log(e.state.tags);var a="";x.a.post(D.a+":"+T.a+"/question/postQuestion",{QuestionTitle:e.state.title,QuestionTags:e.state.tags,QuestionBody:e.state.body}).then((function(t){a=t.data,e.setState({title:""}),e.setState({tags:[]}),e.setState({body:""}),e.props.history.push("/questionById/"+a)}))},e.handleTitleChange=function(t){console.log("changing"),e.setState({title:t.target.value})},e.handleTagChange=function(t){e.setState({tags:t.target.value})},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){[].forEach.call(document.getElementsByClassName("tags-input"),(function(e){var t=document.createElement("input"),a=document.createElement("input"),n=[];function l(t){var l={text:t,element:document.createElement("span")};l.element.classList.add("tag"),l.element.textContent=l.text;var o=document.createElement("span");o.classList.add("close"),o.addEventListener("click",(function(){r(n.indexOf(l))})),l.element.appendChild(o),n.push(l),e.insertBefore(l.element,a),c()}function r(t){var a=n[t];n.splice(t,1),e.removeChild(a.element),c()}function c(){var e=[];n.forEach((function(t){e.push(t.text)})),t.value=e.join(",")}t.setAttribute("type","hidden"),t.setAttribute("name",e.getAttribute("data-name")),a.setAttribute("type","text"),a.classList.add("main-input"),a.addEventListener("input",(function(){var e=a.value.split(" ");e.length>1&&(e.forEach((function(e){var t=e.replace(/[^\w -]/g,"").trim().replace(/\W+/g,"-");t.length>0&&l(t)})),a.value="")})),a.addEventListener("keydown",(function(e){8===(e.which||e.keyCode)&&0===a.value.length&&n.length>0&&r(n.length-1)})),e.appendChild(a),e.appendChild(t),l("hello!")}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"doubts-posts"},l.a.createElement("legend",null,"Title"),l.a.createElement("input",{type:"text",placeholder:"Title of doubts",onChange:this.handleTitleChange,value:this.state.title}),l.a.createElement(k.a,{editor:O.a,data:this.state.body,onChange:function(t,a){console.log(a.getData()),e.setState({body:a.getData()})}}),l.a.createElement("legend",null,"Tags"),l.a.createElement("div",{className:"tags-input","data-name":"tags-input"}),l.a.createElement("br",null),l.a.createElement(y.a,{onClick:this.SubmitDoubt},"Submit Doubt"))}}]),a}(n.Component);Object(o.f)(A),n.Component;n.Component,a(63);var F=a(5),L=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){return Object(f.a)(this,a),t.call(this,e)}return Object(b.a)(a,[{key:"render",value:function(){this.props.indexValue;return l.a.createElement(F.l,{md:"4"},l.a.createElement(F.c,{onClick:this.props.onChildClick},l.a.createElement(F.e,{top:!0,src:this.props.imageUrl,overlay:"white-slight",hover:!0,waves:!0,alt:"MDBCard image cap"}),l.a.createElement(F.d,{className:"elegant-color white-text rounded-bottom"},l.a.createElement("a",{href:"#!",className:"activator waves-effect waves-light mr-4"}),l.a.createElement(F.g,null,this.props.item),l.a.createElement(F.g,null," ",l.a.createElement("span",{style:{backgroundColor:"#DAF7A6"}}," Rs:",this.props.price)," "),l.a.createElement("hr",null),l.a.createElement("p",null,this.props.desc),l.a.createElement("hr",null),l.a.createElement("div",{style:{backgroundColor:"#DAF76"},class:"fa fa-shopping-cart"},"Click to add to Cart"))))}}]),a}(n.Component),B=(n.Component,a(193),function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={Item:[1,3],Cart:[],total:parseInt(0)},n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://sheet.best/api/sheets/a73c2b4d-7414-4afd-9ef7-7ed1b39f5c0b").then((function(t){for(var a=[],n=t.data[e.props.match.params.id],l=Object.keys(n).length-1,r=1;r<=l/4;r++){var c=String("Item"+r),o="Cost"+r,s="Photo"+r,i="Description"+r;n[c]&&n[o]&&a.push({item:n[c],price:n[o],imageUrl:n[s],desc:n[i]})}console.log("heuuu"),console.log(a),e.setState({Item:a})}))}},{key:"addCart",value:function(){var e=Object(E.a)(p.a.mark((function e(t,a){var n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state.Cart,console.log(this.state.Cart),!window.confirm("Are you Sure to add it to cart?")){e.next=11;break}return e.next=6,n.push({item:t,price:a});case 6:return e.next=8,this.setState({Cart:n});case 8:return e.next=10,this.setState({total:this.state.total+parseInt(a)});case 10:alert("Added! Total="+this.state.total);case 11:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("span",null,"Cart:",l.a.createElement("br",null),this.state.Cart.map((function(t,a){return l.a.createElement("div",null,l.a.createElement("div",{class:"modal-header"},l.a.createElement("p",{class:"heading"}," ",t.item,":",t.price),l.a.createElement("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{onClick:function(){e.setState({total:e.state.total-t.price});var n=e.state.Cart;n.splice(a,1),e.setState({Cart:n})},"aria-hidden":"true",class:"white-text"},"\xd7"))))})),"Total: ",this.state.total,l.a.createElement("br",null),l.a.createElement(y.a,{style:{backgroundColor:"black"}},"Order Now!")),l.a.createElement("div",{className:"main_div"},l.a.createElement(F.u,null,this.state.Item.map((function(t,a){return l.a.createElement(L,{onChildClick:function(){return e.addCart(t.item,t.price)},item:t.item,price:t.price,desc:t.desc,imageUrl:t.imageUrl})})))))}}]),a}(n.Component)),R=(a(194),n.Component,a(195),a(209)),U=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){return Object(f.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main_div",style:{Display:"flex","Flex-direction":"row"}},l.a.createElement(N.b,{params:"aayush",to:"/Restaurant/"+this.props._id},l.a.createElement(R.a,{style:{width:"18*3rem"}},l.a.createElement(R.a.Img,{variant:"top",src:this.props.imageUrl}),l.a.createElement(R.a.Body,null,l.a.createElement(R.a.Title,null,this.props.name),l.a.createElement(R.a.Text,null,this.props.location,l.a.createElement("br",null),"Contact No:",this.props.contact)))))}}]),a}(n.Component),M=function(){return l.a.createElement(F.m,null,l.a.createElement(F.h,{activeItem:1,length:4,showControls:!0,showIndicators:!0,className:"z-depth-1"},l.a.createElement(F.j,null,l.a.createElement(F.k,{itemId:"1"},l.a.createElement(F.w,null,l.a.createElement("img",{className:"d-block w-100",src:a(196),alt:"First slide"}),l.a.createElement(F.r,{overlay:"black-light"})),l.a.createElement(F.i,null,l.a.createElement("h1",{className:"h1-responsive"},"Online Food Delievery "),l.a.createElement("h2",null,"For the First Time in Tehri!"))),l.a.createElement(F.k,{itemId:"2"},l.a.createElement(F.w,null,l.a.createElement("img",{className:"d-block w-100",src:a(197),alt:"Second slide"}),l.a.createElement(F.r,{overlay:"black-strong"})),l.a.createElement(F.i,null,l.a.createElement("h1",{style:{color:"grey"},className:"h3-responsive"}),l.a.createElement("h2",{style:{color:"black"}},"Memes are Necessary "))),l.a.createElement(F.k,{itemId:"3"},l.a.createElement(F.w,null,l.a.createElement("img",{className:"d-block w-100",src:a(198),alt:"Third slide"}),l.a.createElement(F.r,{overlay:"black-slight"})),l.a.createElement(F.i,null,l.a.createElement("h1",{className:"h3-responsive"},"Hygiene is our top Priority"),l.a.createElement("h2",null,"Be Assured"))),l.a.createElement(F.k,{itemId:"4"},l.a.createElement(F.w,null,l.a.createElement("img",{className:"d-block w-100",src:a(199),alt:"Second slide"}),l.a.createElement(F.r,{overlay:"black-strong"})),l.a.createElement(F.i,null,l.a.createElement("h1",{className:"h3-responsive"},"Your Trust"),l.a.createElement("h2",null,"Our Pleasure"))))))},H=function(e){Object(v.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={Hotels:[1,3,4]},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(p.a.mark((function e(){var t=this;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://sheet.best/api/sheets/f00005bd-4cff-48a8-90fe-cd022efbd14d").then((function(e){var a=e.data;t.setState({Hotels:a})}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(M,null),this.state.Hotels.map((function(e,t){return l.a.createElement(U,{name:e.Name,location:e.Location,contact:e.Contact,_id:e.Id,imageUrl:e.Photo})})))}}]),a}(n.Component),W=a(58),X=function(){return l.a.createElement(F.m,null,l.a.createElement(F.b,null,l.a.createElement("a",{href:"#",class:"fa fa-facebook"}," Facebook")),l.a.createElement(F.b,null,l.a.createElement("a",{href:"#",class:"fa fa-twitter"},"Twitter")))},P=function(){return l.a.createElement("div",null,l.a.createElement(F.n,{style:{backgroundColor:"black",color:"white"},color:"stylish-color-dark",className:"page-footer font-small pt-4 mt-4"},l.a.createElement(F.m,{fluid:!0,className:"text-center text-md-left"},l.a.createElement(F.u,null,l.a.createElement(F.l,{md:"6"},l.a.createElement("h5",{className:"text-uppercase mb-4 mt-3 font-weight-bold"},"Tehri Food (food at doorstep!)"),l.a.createElement("p",null,"We are team of yougsters of New Tehri are dedicated to serve you at fullest. Supports us by Sharing our Website to your fellows.")),l.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),l.a.createElement(F.l,{md:"2"},l.a.createElement("h5",{className:"text-uppercase mb-4 mt-3 font-weight-bold"},"Developer"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Aayush Hindwan")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"aayushh@nitp.ac.in")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"LinkedIn")))),l.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),l.a.createElement(F.l,{md:"2"},l.a.createElement("h5",{className:"text-uppercase mb-4 mt-3 font-weight-bold"},"Fouder"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Abhishek Rawat")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Facebook")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Instagram")))),l.a.createElement("hr",{className:"clearfix w-100 d-md-none"}),l.a.createElement(F.l,{md:"2"},l.a.createElement("h5",{className:"text-uppercase mb-4 mt-3 font-weight-bold"},"Links"),l.a.createElement("ul",{className:"list-unstyled"},l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Give us Feedback/Suggestions")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Be our Sellor")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Interested in delievery?")),l.a.createElement("li",null,l.a.createElement("a",{href:"#!"},"Any Doubts?")))))),l.a.createElement("hr",null),l.a.createElement("div",{className:"footer-copyright text-center py-3"},l.a.createElement(X,null))))};var Q=function(){var e=Object(W.b)((function(e){return e.story.name}));return console.log(e),l.a.createElement("div",{className:"App"},l.a.createElement(d,null),l.a.createElement("br",null),l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:H}),l.a.createElement(o.a,{path:"/Restaurant/:id",component:B})),l.a.createElement(P,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var V=a(115),G=a(39),q={name:"shivam",status:"draft",selected:!0,selectedSectionIndex:null,sections:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SECTION":return Object(G.a)(Object(G.a)({},e),{},{sections:[].concat(Object(V.a)(e.sections),[t.payload])});case"SELECTED_SECTION_INDEX":return Object(G.a)(Object(G.a)({},e),{},{selectedSectionIndex:t.payload});case"RE_ARRANGENED_SECTIONS":return Object(G.a)(Object(G.a)({},e),{},{sections:[t.payload]});default:return e}},J=a(43),Y=Object(J.b)({story:z}),$=(a(201),Object(J.c)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(l.a.createElement(W.a,{store:$},l.a.createElement(N.a,null,l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},21:function(e,t){e.exports="http://localhost"},52:function(e,t,a){},63:function(e,t,a){},92:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.076a558b.chunk.js.map