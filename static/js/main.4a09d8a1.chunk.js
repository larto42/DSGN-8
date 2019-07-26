(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(3),i=a.n(r),s=(a(85),a(86),a(87),a(88),a(79)),c=(a(89),function(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],r=t[1],i=function(){r(!a)};return o.a.createElement("nav",{className:"menu__wrapper",onClick:i},o.a.createElement("button",{className:"menu__button"+(a?" opened":""),"aria-expanded":a?"true":"false"},o.a.createElement("i",{className:"menu__icon_default fas fa-bars"}),o.a.createElement("i",{className:"menu__icon_opened fas fa-times"}),o.a.createElement("span",{className:"menu__text"},"Menu")),o.a.createElement("ul",{className:"menu__list"+(a?" opened":"")},[{href:"#team",text:"Our team"},{href:"#portfolio",text:"Portfolio"},{href:"#brands",text:"Brands"}].map(function(e,t){return o.a.createElement("li",{key:t,className:"menu__item"},o.a.createElement("a",{className:"menu__item__link",href:e.href,onClick:i},o.a.createElement("div",{className:"menu__item__text-wrapper"},o.a.createElement("span",{className:"menu__item__text"},e.text))))})))}),l=function(e){var t=e.iconClass;return o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{href:"#",className:"header__social-icons__link"},o.a.createElement("i",{className:"fab ".concat(t)})))},m=["fa-facebook-f","fa-instagram","fa-twitter","fa-linkedin"],p=function(){return o.a.createElement("header",{className:"header content-wrapper"},o.a.createElement("div",{className:"header__logo-icons"},o.a.createElement("h2",{className:"header__logo"},o.a.createElement("a",{href:"#"},"DSGN")),o.a.createElement("div",{className:"header__social-icons"},m.map(function(e,t){return o.a.createElement(l,{key:t,iconClass:e})}))),o.a.createElement(c,null))},d=(a(90),a(91),function(e){var t=e.smallText,a=e.bigText;return o.a.createElement("div",{className:"title"},o.a.createElement("div",{className:"title__subtitle"},o.a.createElement("span",{className:"title__subtitle__line"}),o.a.createElement("p",{className:"title__subtitle__text"},t),o.a.createElement("span",{className:"title__subtitle__line"})),o.a.createElement("h2",{className:"title__main-title"},a))}),u=function(){return o.a.createElement("div",{className:"hero content-wrapper grid-span-all"},o.a.createElement(d,{smallText:"Need our help?",bigText:"Top designers"}),o.a.createElement("a",{href:"#team",className:"hero__goto-action"},"Check us!"),o.a.createElement("a",{href:"#portfolio"},o.a.createElement("div",{className:"hero__show-more"},o.a.createElement("span",{className:"hero__show-more__icon lnr lnr-chevron-down"}),o.a.createElement("span",{className:"hero__show-more__icon lnr lnr-chevron-down"}))),o.a.createElement("div",{className:"hero__background-image"}))},h=a(5),f=a(6),g=a(8),_=a(7),b=a(9),E=a(38),w=a.n(E),v=a(68),y=a.n(v),N=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).state={value:0},a.componentDidMount=function(){window.innerWidth>=768?setTimeout(function(){a.setState({value:a.props.number})},0):a.setState({value:a.props.number})},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.number,a=e.title,n=e.description,r=e.className,i=!(window.innerWidth<768);return o.a.createElement("div",{className:"stat-wrapper"},o.a.createElement("div",{className:"circle ".concat(r)},o.a.createElement(w.a,{className:"stat__circle__progress",variant:"static",value:this.state.value,thickness:1,size:150}),o.a.createElement(w.a,{className:"stat__circle__bg",variant:"static",value:100,thickness:1,size:150}),o.a.createElement("h2",null,i?o.a.createElement(y.a,{end:t,duration:3,easingFn:function(e,t,a,n){var o=(e/=n)*e;return t+a*(o*e+-3*o+3*e)}}):t),o.a.createElement("h3",null,a)),o.a.createElement("p",{className:"description"},n))}}]),t}(n.Component),x=(a(168),function(){return o.a.createElement("div",{className:"stats content-wrapper"},[{className:"projects-stat",title:"Big projects",number:50,description:"Our experience shows in projects we've made!"},{className:"client-stat",title:"Clients",number:35,description:"Customer satisfaction is the most important for us. That's why we care about every detail."},{className:"month-stat",title:"Months",number:80,description:"Over 6 years of constant innovation makes us the best partner for your new project!"}].map(function(e,t){return o.a.createElement(N,{key:t,className:e.className,title:e.title,number:e.number,description:e.description})}))}),j=(a(169),function(e){var t=e.image,a=e.title,n=e.subTitle,r=e.description,i=e.animDirection;return o.a.createElement("div",{className:"card content-wrapper","data-aos":i,"data-aos-duration":"700"},o.a.createElement("div",{className:"card__description"},o.a.createElement("div",{className:"card__first-part-border"},o.a.createElement("h3",{className:"card__description__title"}," ",a," "),o.a.createElement("span",{className:"card__description__subtitle"}," ",n," "),o.a.createElement("p",{className:"card__description__desc"}," ",r," "))),o.a.createElement("div",{className:"card__image",style:{backgroundImage:"url(".concat(t,")")}},o.a.createElement("div",{className:"card__second-part-border"})))}),O=function(e){var t=e.smallText,a=e.bigText,n=e.image;return o.a.createElement("div",{className:"section-image",style:{backgroundImage:"url(".concat(n,")")}},o.a.createElement("div",{className:"section-image__backdrop"}),o.a.createElement("div",{className:"section-image__text"},o.a.createElement(d,{smallText:t,bigText:a})))},k=(a(170),function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.image,n=e.bigText,r=e.smallText;return o.a.createElement("div",{className:"section content-wrapper  grid-span-all"},o.a.createElement(O,{image:a,bigText:n,smallText:r}),o.a.createElement("div",{className:"grid"},t))}}]),t}(n.Component)),C=(a(171),a(25)),T=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(_.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props,t=e.modalIsOpen,a=e.toggleModal,n=e.images,r=e.currentImgIndex;return o.a.createElement(C.b,null,t?o.a.createElement(C.a,{onClose:a},o.a.createElement(C.c,{views:n,currentIndex:r})):null)}}]),t}(n.Component),I=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).state={images:[{id:1,src:"https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:2,src:"https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:3,src:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:4,src:"https://images.unsplash.com/photo-1506377711776-dbdc2f3c20d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:5,src:"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80"},{id:6,src:"https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"},{id:7,src:"https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:8,src:"https://images.unsplash.com/photo-1519408469771-2586093c3f14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=647&q=80"},{id:9,src:"https://images.unsplash.com/photo-1459550428001-4ed6ca421293?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1546&q=80"},{id:10,src:"https://images.unsplash.com/photo-1484662020986-75935d2ebc66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},{id:11,src:"https://images.unsplash.com/photo-1488751045188-3c55bbf9a3fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"},{id:12,src:"https://images.unsplash.com/photo-1476988941939-9b114fb1ba94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"},{id:13,src:"https://source.unsplash.com/random/?technology"},{id:14,src:"https://source.unsplash.com/random/?technology,laptop"},{id:15,src:"https://source.unsplash.com/random/?technology,office"},{id:16,src:"https://source.unsplash.com/random/?technology,company"},{id:17,src:"https://source.unsplash.com/random/?technology,pc"},{id:18,src:"https://source.unsplash.com/random/?technology,desk"},{id:19,src:"https://source.unsplash.com/random/?technology,work"},{id:20,src:"https://source.unsplash.com/random/?laptop"},{id:21,src:"https://source.unsplash.com/random/?desk"},{id:22,src:"https://source.unsplash.com/random/?work"},{id:23,src:"https://source.unsplash.com/random/?pc"},{id:24,src:"https://source.unsplash.com/random/?office"}],modalIsOpen:!1,currentImgIndex:0},a.toggleModal=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;a.setState(function(t){return{modalIsOpen:!t.modalIsOpen,currentImgIndex:e-1}})},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"gallery"},o.a.createElement(T,{currentImgIndex:this.state.currentImgIndex,modalIsOpen:this.state.modalIsOpen,toggleModal:this.toggleModal,images:this.state.images.map(function(e){return{src:e.src}})}),this.state.images.map(function(t){return o.a.createElement("button",{className:"gallery__image-wrapper",onClick:function(){return e.toggleModal(t.id)},key:t.id},o.a.createElement("figure",{className:"gallery__image",style:{backgroundImage:"url(".concat(t.src,")")},alt:""}),o.a.createElement("span",{className:"gallery__image__eye-icon lnr lnr-eye"}))}))}}]),t}(n.Component),M=(a(235),function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(o)))).state={images:[{id:1,url:"https://techcrunch.com/wp-content/uploads/2018/07/logo-2.png?w=300"},{id:2,url:"https://cnet3.cbsistatic.com/img/Yt768C55hXNi2eGSB9qOv-e7SQg=/2011/03/16/c7675aa8-fdba-11e2-8c7c-d4ae52e62bcc/Chrome-logo-2011-03-16.jpg"},{id:3,url:"https://www.tablety.pl/wp-content/uploads/2013/09/android-logo.jpg"},{id:4,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1024px-Apple_logo_black.svg.png"},{id:5,url:"https://brandmark.io/logo-rank/random/pepsi.png"},{id:6,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Playstation_logo_colour.svg/788px-Playstation_logo_colour.svg.png"},{id:7,url:"https://cdn.pixabay.com/photo/2016/08/09/17/52/instagram-1581266_640.jpg"},{id:8,url:"https://trellis.co/wp-content/uploads/2015/09/hidden_meanings_facts_within_famous_logos_cover_image.jpg"},{id:9,url:"https://diylogodesigns.com/wp-content/uploads/2016/05/adidas-blue-logo-png-download.png"},{id:10,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/NBC_logo.svg/1024px-NBC_logo.svg.png"},{id:11,url:"https://www.topachat.com/images/picto/zz287.png"},{id:12,url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/1200px-NASA_logo.svg.png"}]},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"logo-gallery content-wrapper"},this.state.images.map(function(e){return o.a.createElement("div",{className:"logo-gallery__image-cont",key:e.id},o.a.createElement("img",{className:"logo-gallery__image-cont__image",src:e.url,alt:""}))}))}}]),t}(n.Component)),B=(a(236),function(){return o.a.createElement("footer",{className:"footer content-wrapper grid-span-all"},o.a.createElement("div",{className:"footer__wrapper grid content-wrapper"},o.a.createElement("div",{className:"footer__section","data-aos":"flip-left","data-aos-duration":"700","data-aos-delay":"300","data-aos-anchor-placement":"top-bottom"},o.a.createElement("h2",{className:"footer__section__title"},"Our team"),o.a.createElement("p",{className:"footer__section__text"},"If you want to work with us, feel free to contact us via email. We are always looking for developers!")),o.a.createElement("div",{className:"footer__section","data-aos":"flip-right","data-aos-duration":"700","data-aos-anchor-placement":"top-bottom"},o.a.createElement("h2",{className:"footer__section__title"},"About"),o.a.createElement("p",{className:"footer__section__text"},"We are the best company in the entire wordl!")),o.a.createElement("div",{className:"footer__section","data-aos":"flip-left","data-aos-duration":"700","data-aos-delay":"300","data-aos-anchor-placement":"top-bottom"},o.a.createElement("h2",{className:"footer__section__title"},"Contact"),o.a.createElement("p",{className:"footer__section__text"},"free@template.com"),o.a.createElement("p",{className:"footer__section__text"},"www.freetemplate.com"),o.a.createElement("p",{className:"footer__section__text"},"tel. +48 123 456 79")),o.a.createElement("div",{className:"copyright"},"Copyright \u24c7 DSGN free use!")))}),W=a(71),D=a.n(W),S=(a(237),a(24)),A=a.n(S),J=a(72),q=a.n(J),H=a(73),Q=a.n(H),z=a(74),G=a.n(z),P=a(75),F=a.n(P),X=a(76),Y=a.n(X),$=a(77),K=a.n($),L=a(78),R=a.n(L);var U=function(){D.a.init({disable:function(){return window.innerWidth<768}});var e=[{name:"Adrianna",position:"Senior Graphic Designer",description:"She is the graphic designer with 3 years of professional experience.",animationClass:"fade-right",image:Q.a},{name:"Thomas",position:"Software Engineer",description:"He is the software engineer with 5 years of professional experience.",animationClass:"fade-left",image:G.a},{name:"Olivia",position:"Art director",description:"She is the art director with 8 years of professional experience.",animationClass:"fade-right",image:F.a},{name:"Taylor",position:"CEO",description:"She is the boss in here.",animationClass:"fade-left",image:Y.a}];return o.a.createElement("div",{className:"App"},o.a.createElement(p,null),o.a.createElement(u,null),o.a.createElement(x,null),o.a.createElement(A.a,{id:"team"},o.a.createElement(k,{image:q.a,bigText:"Our team",smallText:"Meet us!"},e.map(function(e,t){return o.a.createElement(j,{key:t,image:e.image,title:e.name,subTitle:e.position,description:e.description,animDirection:e.animationClass})}))),o.a.createElement(A.a,{id:"portfolio"},o.a.createElement(k,{image:K.a,bigText:"Portfolio",smallText:"Check our projects!"},o.a.createElement(I,null))),o.a.createElement(A.a,{id:"brands"},o.a.createElement(k,{image:R.a,bigText:"Brands",smallText:"We work for"},o.a.createElement(M,null))),o.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e,t,a){e.exports=a.p+"static/media/ourteam.8672a2e5.jpg"},73:function(e,t,a){e.exports=a.p+"static/media/Adrianna.66bcc311.jpg"},74:function(e,t,a){e.exports=a.p+"static/media/Thomas.3aa9b1a3.jpg"},75:function(e,t,a){e.exports=a.p+"static/media/Olivia.7def2554.jpg"},76:function(e,t,a){e.exports=a.p+"static/media/Taylor.90778a6b.jpg"},77:function(e,t,a){e.exports=a.p+"static/media/portfolio.107cc1f8.jpg"},78:function(e,t,a){e.exports=a.p+"static/media/brands.0071f1f2.jpg"},80:function(e,t,a){e.exports=a(242)},85:function(e,t,a){},86:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.4a09d8a1.chunk.js.map