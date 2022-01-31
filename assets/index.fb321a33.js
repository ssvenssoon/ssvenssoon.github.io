import{h as w,r as v,o as r,c,a as t,b as d,w as h,t as _,d as S,F as $,e as u,p as f,f as g,g as I,v as V,i as T,n as E,j as k,k as C,l as L,m as N,q as R}from"./vendor.9df06d96.js";const D=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const e of s.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&l(e)}).observe(document,{childList:!0,subtree:!0});function i(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(a){if(a.ep)return;a.ep=!0;const s=i(a);fetch(a.href,s)}};D();var O="/tv-show/assets/icon.d89457dc.png";var p=(o,n)=>{const i=o.__vccOpts||o;for(const[l,a]of n)i[l]=a;return i};const A={data(){return{connectionStatus:navigator.onLine}},methods:{currentDateTime(){return w().format("YYYY/MM/DD")}}},W={class:"navbar navbar-expand-lg navbar-dark bg-dark"},M={class:"container-fluid"},Y=t("img",{src:O,alt:"",style:{height:"50px"}},null,-1),j=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),H={class:"collapse navbar-collapse",id:"navbarNavDropdown"},q={class:"navbar-nav"},P={class:"nav-item"},B=u("Home"),F={class:"nav-item"},z=u("About"),K={class:"nav-item"},U=u("Contact"),G={class:"nav-item dropdown"},J=t("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Navigation ",-1),Q={class:"dropdown-menu dropdown-menu-dark","aria-labelledby":"navbarDropdownMenuLink"},X=u(" TV-Shows "),Z=t("li",null,[t("a",{class:"dropdown-item",href:"#"},"Something else here")],-1),tt={id:"time"},et={class:"alert-container"},at={key:0,class:"alert alert-warning alert-dismissible fade show",role:"alert"},ot=u(" You are not connected to internet. "),st=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),nt=[ot,st],it=t("footer",{class:"bg-light text-center text-white"},[t("div",{class:"container p-4 pb-0"},[t("section",{class:"mb-4"},[t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#3b5998"},href:"#!",role:"button"},[t("i",{class:"fab fa-facebook-f"})]),t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#55acee"},href:"https://twitter.com/Guas_ve",target:"_blank",role:"button"},[t("i",{class:"fab fa-twitter"})]),t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#ac2bac"},href:"#!",role:"button"},[t("i",{class:"fab fa-instagram"})]),t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#0082ca"},href:"#!",role:"button"},[t("i",{class:"fab fa-linkedin-in"})]),t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#333333"},href:"#!",role:"button"},[t("i",{class:"fab fa-github"})])])]),t("div",{class:"text-center p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"}}," \xA9 2022 Copyright ")],-1);function rt(o,n,i,l,a,s){const e=v("RouterLink"),m=v("RouterView");return r(),c($,null,[t("nav",W,[t("div",M,[d(e,{to:"/",class:"nav-link"},{default:h(()=>[Y]),_:1}),j,t("div",H,[t("ul",q,[t("li",P,[d(e,{to:"/",class:"nav-link"},{default:h(()=>[B]),_:1})]),t("li",F,[d(e,{to:"/about",class:"nav-link"},{default:h(()=>[z]),_:1})]),t("li",K,[d(e,{to:"/contact",class:"nav-link"},{default:h(()=>[U]),_:1})]),t("li",G,[J,t("ul",Q,[t("li",null,[d(e,{to:"/search",class:"dropdown-item"},{default:h(()=>[X]),_:1})]),Z])]),t("p",tt,_(s.currentDateTime()),1)])])])]),t("main",null,[t("div",et,[a.connectionStatus!==!0?(r(),c("div",at,nt)):S("",!0)]),d(m)]),it],64)}var ct=p(A,[["render",rt]]),lt="/tv-show/assets/icon.d89457dc.png";const dt={},y=o=>(f("data-v-694335eb"),o=o(),g(),o),ut={class:"card-container"},_t={class:"card",style:{width:"18rem"}},ht=y(()=>t("img",{src:lt,class:"card-img-top",alt:"..."},null,-1)),pt={class:"card-body"},bt=y(()=>t("h5",{class:"card-title"},"About",-1)),vt=y(()=>t("p",{class:"card-text"},[u(" This is a website where you can search for your favourite Tv-Show from all over the world. "),t("br"),t("br"),u(" With some of the shows you will be served with links so that you can easily access the website where the Tv-Show is streamed. You can also see what rating the Tv-Show has. Only to make it easy for you to find a show that you might like. ")],-1)),mt={class:"card-item-about"},ft=u(" Contact "),gt=u(" Search ");function yt(o,n,i,l,a,s){const e=v("RouterLink");return r(),c("div",ut,[t("div",_t,[ht,t("div",pt,[bt,vt,t("div",mt,[d(e,{to:"/contact",class:"btn btn-primary"},{default:h(()=>[ft]),_:1}),d(e,{to:"/search",class:"btn btn-primary"},{default:h(()=>[gt]),_:1})])])])])}var wt=p(dt,[["render",yt],["__scopeId","data-v-694335eb"]]);const $t={};function kt(o,n){return r(),c("h1",null,"Contact")}var xt=p($t,[["render",kt]]),St="/tv-show/assets/placeholder.1a8352b9.png";const It={data(){return{results:[],names:""}},methods:{fetchShows(){const o=`https://api.tvmaze.com/search/shows?q=${this.names}`;fetch(o).then(n=>n.json()).then(n=>{n.forEach(i=>{this.results.push({name:i.show.name,image:i.show.image?i.show.image.medium:"",links:i.show.officialSite,rating:i.show.rating.average,country:i.show.network.country.name})})}),this.results=[]},clear(){this.results=[],this.names=""},keyEnter(o){o.keyCode===13&&(o.preventDefault(),this.fetchShows())}}},Vt=o=>(f("data-v-b2778e60"),o=o(),g(),o),Tt={class:"input-container"},Et={id:"buttons"},Ct={key:0},Lt=["src"],Nt={key:1},Rt=Vt(()=>t("img",{style:{width:"40px",height:"40px"},src:St},null,-1)),Dt=[Rt],Ot={id:"name-rating"},At=["href"],Wt={id:"rating"},Mt=u(" Rating: "),Yt={key:1};function jt(o,n,i,l,a,s){return r(),c("div",Tt,[I(t("input",{id:"input",onKeyup:n[0]||(n[0]=(...e)=>s.keyEnter&&s.keyEnter(...e)),"onUpdate:modelValue":n[1]||(n[1]=e=>a.names=e),placeholder:"Search TV-Shows..."},null,544),[[V,a.names]]),t("div",Et,[t("button",{onClick:n[2]||(n[2]=(...e)=>s.fetchShows&&s.fetchShows(...e)),type:"button",class:"btn btn-primary"}," Search "),t("button",{onClick:n[3]||(n[3]=(...e)=>s.clear&&s.clear(...e)),type:"button",class:"btn btn-danger"},"Clear")]),t("ul",null,[(r(!0),c($,null,T(a.results,e=>(r(),c("li",{id:"results",key:e.id},[e.image!==""?(r(),c("div",Ct,[t("img",{src:e.image,style:{width:"40px"}},null,8,Lt)])):(r(),c("div",Nt,Dt)),t("div",Ot,[t("a",{href:e.links,target:"_blank"},_(e.name),9,At),t("div",Wt,[Mt,e.rating!==null?(r(),c("p",{key:0,style:E([e.rating>=7?{color:"green"}:{color:"red"}])},_(e.rating),5)):(r(),c("p",Yt,"None"))]),t("p",null,_(e.country),1)])]))),128))])])}var x=p(It,[["render",jt],["__scopeId","data-v-b2778e60"]]);const Ht={props:{name:{type:String,default:""},rating:{type:String,default:""},country:{type:String,default:""},link:{type:String,default:""}}};function qt(o,n,i,l,a,s){return r(),c("ul",null,[t("li",null,_(i.name),1),t("li",null,_(i.rating),1),t("li",null,_(i.country),1),t("li",null,_(i.link),1)])}var Pt=p(Ht,[["render",qt]]),Bt="/tv-show/assets/tv-series.6997956c.webp",Ft="/tv-show/assets/hbo-2.9c8018e4.png",zt="/tv-show/assets/TV_grid_sm@3x.b8084df9.png";const Kt={components:{InputSearchVue:x,infoComponentVue:Pt}},Ut=o=>(f("data-v-50036b56"),o=o(),g(),o),Gt={class:"container-fluid"},Jt={class:"row"},Qt=k('<div class="col-lg-5" data-v-50036b56><div class="slider" data-v-50036b56><div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel" data-v-50036b56><div class="carousel-indicators" data-v-50036b56><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" data-v-50036b56></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" data-v-50036b56></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" data-v-50036b56></button></div><div class="carousel-inner" data-v-50036b56><div class="carousel-item active" data-v-50036b56><img src="'+Bt+'" class="d-block w-100" alt="TV-Series image" data-v-50036b56></div><div class="carousel-item" data-v-50036b56><img src="'+Ft+'" class="d-block w-100" alt="..." data-v-50036b56></div><div class="carousel-item" data-v-50036b56><img src="'+zt+'" class="d-block w-100" alt="..." data-v-50036b56></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" data-v-50036b56><span class="carousel-control-prev-icon" aria-hidden="true" data-v-50036b56></span><span class="visually-hidden" data-v-50036b56>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" data-v-50036b56><span class="carousel-control-next-icon" aria-hidden="true" data-v-50036b56></span><span class="visually-hidden" data-v-50036b56>Next</span></button></div></div></div>',1),Xt={class:"col-lg-3"},Zt={class:"col-lg-4"},te={class:"accordion",id:"accordionExample"},ee=k('<div class="accordion-item" data-v-50036b56><h2 class="accordion-header" id="headingOne" data-v-50036b56><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-v-50036b56> Why? </button></h2><div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-v-50036b56><div class="accordion-body" data-v-50036b56> I&#39;ve built this website for you to provide accessibility to a smoother way of finding TV series. </div></div></div><div class="accordion-item" data-v-50036b56><h2 class="accordion-header" id="headingTwo" data-v-50036b56><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-v-50036b56> What I want to achieve! </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" data-v-50036b56><div class="accordion-body" data-v-50036b56> I want to build an interactive and user-friendly website so that you as a visitor can quickly navigate between different streaming services. </div></div></div>',2),ae={class:"accordion-item"},oe=Ut(()=>t("h2",{class:"accordion-header",id:"headingThree"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Info! ")],-1)),se={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},ne={class:"accordion-body"},ie=u(" If available, this is the info you will get just by typing the name of your favourite Tv-Show: ");function re(o,n,i,l,a,s){const e=v("InputSearchVue"),m=v("infoComponentVue");return r(),c("div",Gt,[t("div",Jt,[Qt,t("div",Xt,[d(e)]),t("div",Zt,[t("div",te,[ee,t("div",ae,[oe,t("div",se,[t("div",ne,[ie,d(m,{name:"Tv-show name",rating:" Rating 0 - 10",country:"In what country the tv-show is made",link:"Link to streaming services"})])])])])])])])}var ce=p(Kt,[["render",re],["__scopeId","data-v-50036b56"]]);const le={components:{InputSearch:x}},de={id:"container"};function ue(o,n,i,l,a,s){const e=v("InputSearch");return r(),c("div",de,[d(e)])}var _e=p(le,[["render",ue],["__scopeId","data-v-32b8b43a"]]),he=C({history:L(),routes:[{component:wt,path:"/about"},{component:xt,path:"/contact"},{component:ce,path:"/"},{component:_e,path:"/search"}]});function pe(o={}){const{immediate:n=!1,onNeedRefresh:i,onOfflineReady:l,onRegistered:a,onRegisterError:s}=o;let e;const m=async(b=!0)=>{};return"serviceWorker"in navigator&&(e=new N("/tv-show/sw.js",{scope:"/tv-show/",type:"classic"}),e.addEventListener("activated",b=>{b.isUpdate?window.location.reload():l==null||l()}),e.register({immediate:n}).then(b=>{a==null||a(b)}).catch(b=>{s==null||s(b)})),m}pe();R(ct).use(he).use(w).mount("#app");
