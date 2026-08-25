(this["webpackJsonpresearch-lab-website"]=this["webpackJsonpresearch-lab-website"]||[]).push([[0],{11:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(0),l=a.n(n);const r=Object(n.createContext)(),c=()=>Object(n.useContext)(r),o=e=>{let{children:t}=e;const[a,c]=Object(n.useState)(()=>localStorage.getItem("language")||"fr");Object(n.useEffect)(()=>{localStorage.setItem("language",a)},[a]);return l.a.createElement(r.Provider,{value:{language:a,toggleLanguage:()=>{c(e=>"fr"===e?"en":"fr")}}},t)}},46:function(e,t,a){"use strict";a.d(t,"b",(function(){return m}));var n=a(0),l=a.n(n),r=a(31),c=a(52),o=a.n(c),s=a(11);const i=Object(n.createContext)(),m=()=>{const e=Object(n.useContext)(i);if(!e)throw new Error("useData doit \xeatre utilis\xe9 dans un DataProvider");return e};t.a=e=>{let{children:t}=e;const[a,c]=Object(n.useState)({publications:[],team:[],research:[],tools:[],news:[],contact:[]}),[m,u]=Object(n.useState)(!0),[d,g]=Object(n.useState)(null),{language:p}=Object(s.b)(),h="https://docs.google.com/spreadsheets/d/e/2PACX-1vRvv_lUiP6sK7A7QTxMI0eA3kllA9oj-D2Ee7BnCivHov_iKQ6p1CH96be-iMGi1_bDtMASdEC2Ibmi/pub?single=true&output=csv",b=e=>new Promise(t=>{o.a.parse(e,{header:!0,skipEmptyLines:!0,complete:e=>{t(e.data)}})});return Object(n.useEffect)(()=>{(async()=>{try{console.log("Fetching publications...");const e=await r.a.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vSo6MckZda8rqUJ7BfRO2xTO1W-FnWYaYnkqLejfoyfd5fm8o3RBhw7UbFWmVzEwMHW1jypezfpRvpW/pub?gid=288160773&single=true&output=csv"),t=await b(e.data);c(e=>({...e,publications:t}))}catch(e){console.error("Error fetching publications:",e),g(e)}})()},[]),Object(n.useEffect)(()=>{(async()=>{try{u(!0),console.log("Fetching language-dependent data...");const e={team:"fr"===p?h+"&gid=1060799501":h+"&gid=1187176887",research:"fr"===p?h+"&gid=1203628962":h+"&gid=1137665444",tools:"fr"===p?h+"&gid=1187415274":h+"&gid=1307378646",news:"fr"===p?h+"&gid=1180969958":h+"&gid=1823112799",contact:"fr"===p?h+"&gid=634275759":h+"&gid=1211289998"},[t,a,n,l,o]=await Promise.all([r.a.get(e.team),r.a.get(e.research),r.a.get(e.tools),r.a.get(e.news),r.a.get(e.contact)]),s=await b(t.data),i=await b(a.data),m=await b(n.data),d=await b(l.data),g=await b(o.data);c(e=>({...e,team:s,research:i,tools:m,news:d,contact:g}))}catch(e){console.error("Error fetching language-dependent data:",e),g(e)}finally{u(!1)}})()},[p]),l.a.createElement(i.Provider,{value:{data:a,loading:m,error:d}},t)}},50:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(77),c=a(11);t.a=function(e){let{onLoad:t}=e;const[a,o]=Object(n.useState)(!0),[s,i]=Object(n.useState)(!1),{language:m}=Object(c.b)();return Object(n.useEffect)(()=>{o(!0),i(!1)},[m]),Object(n.useEffect)(()=>{const e=document.createElement("script");return e.src="https://static.elfsight.com/platform/platform.js",e.async=!0,e.onload=()=>{setTimeout(()=>{o(!1),t&&t()},1e3)},e.onerror=()=>{o(!1),i(!0),t&&t()},document.body.appendChild(e),()=>{document.body.removeChild(e)}},[t,m]),Object(n.useEffect)(()=>{const e=()=>{window.location.hash.includes("calendar-18549a79")&&window.location.hash.includes("-event-")&&setTimeout(()=>{document.querySelector(".eapps-calendar-popup-open")||document.querySelector('[class*="elfsight"][class*="popup"]')||document.querySelector('[class*="eapps"][class*="popup"][class*="open"]')||window.history.pushState(null,"","#/")},300)};window.addEventListener("hashchange",e);const t=t=>{window.location.hash.includes("-event-")&&setTimeout(e,500)};return document.addEventListener("click",t),()=>{window.removeEventListener("hashchange",e),document.removeEventListener("click",t)}},[]),s?l.a.createElement("div",{className:"calendar-wrapper"},l.a.createElement("div",{className:"text-center text-danger"},"fr"===m?"\xc9chec du chargement du calendrier. Veuillez r\xe9essayer plus tard.":"Failed to load the calendar. Please try again later.")):l.a.createElement("div",{className:"calendar-wrapper position-relative"},a&&l.a.createElement("div",{className:"position-absolute top-50 start-50 translate-middle",style:{zIndex:10}},l.a.createElement(r.a,{animation:"border",role:"status"},l.a.createElement("span",{className:"visually-hidden"},"fr"===m?"Chargement...":"Loading..."))),l.a.createElement("div",{className:"elfsight-app-dba8934a-ac3d-4ba2-b88e-c35a058395ba",style:{width:"100%",minHeight:a?"400px":"auto",opacity:a?0:1,transition:"opacity 0.3s ease-in-out"}}))}},57:function(e,t,a){e.exports=a(76)},63:function(e,t,a){},69:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(51),c=a.n(r),o=(a(63),a(18)),s=a(4),i=(a(64),a(46)),m=a(11),u=a(83),d=a(81),g=a(84);var p=()=>{const{language:e,toggleLanguage:t}=Object(m.b)();return l.a.createElement("button",{onClick:t,className:"flag-toggle"},l.a.createElement("img",{src:"fr"===e?"/icons/canada.png":"/icons/quebec.png",alt:"fr"===e?"Switch to English":"Passer en Fran\xe7ais",className:"flag-icon"}))};a(69);var h=function(){const e=Object(s.m)(),{language:t}=Object(m.b)(),a={fontSize:"1.1rem",position:"relative",padding:"0.5rem 1rem"};return l.a.createElement(u.a,{bg:"light",expand:"lg",style:{boxShadow:"0 2px 4px rgba(0,0,0,.1)",padding:"1rem 0",position:"relative"}},l.a.createElement("div",{style:{content:'""',position:"absolute",top:0,left:0,right:0,height:"6px",background:"linear-gradient(to right, #0960fa 80%, #D5A00F 80%)"}}),l.a.createElement(d.a,null,l.a.createElement(u.a.Brand,{as:o.b,to:"/",style:{fontSize:"1.8rem"}},"Labo Langage"),l.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(g.a,{className:"ms-auto"},l.a.createElement(g.a.Link,{as:o.b,to:"/",style:a,className:"nav-item "+("/"===e.pathname?"active":"")},"fr"!==t?"Home":"Accueil"),l.a.createElement(g.a.Link,{as:o.b,to:"/research",style:a,className:"nav-item "+("/research"===e.pathname?"active":"")},"fr"!==t?"Research":"Recherche"),l.a.createElement(g.a.Link,{as:o.b,to:"/publications",style:a,className:"nav-item "+("/publications"===e.pathname?"active":"")},"Publications"),l.a.createElement(g.a.Link,{as:o.b,to:"/team",style:a,className:"nav-item "+("/team"===e.pathname?"active":"")},"fr"!==t?"Team members":"Collaborateurs"),l.a.createElement(g.a.Link,{as:o.b,to:"/tools",style:a,className:"nav-item "+("/tools"===e.pathname?"active":"")},"fr"!==t?"Tools":"Outils"),l.a.createElement(g.a.Link,{as:o.b,to:"/contact",style:a,className:"nav-item "+("/contact"===e.pathname?"active":"")},"fr"!==t?"Contact us":"Contact")),l.a.createElement("div",{style:{marginLeft:"1rem",borderLeft:"1px solid #dee2e6",paddingLeft:"1rem"}},l.a.createElement(p,null)))))},b=a(82),f=a(78);var E=function(){const{language:e}=Object(m.b)();return l.a.createElement("footer",{className:"text-white py-3 mt-4",style:{backgroundColor:"#0960fa",opacity:"0.6"}},l.a.createElement(d.a,null,l.a.createElement(b.a,{className:"align-items-center"},l.a.createElement(f.a,{md:8,className:"d-flex align-items-center gap-4 logo-container"},l.a.createElement("img",{src:"/images/Udem_logo.png",alt:"Logo UdeM",className:"h-8",style:{height:"50px",width:"auto",objectFit:"contain"}}),l.a.createElement("img",{src:"/images/CRBLM_logo.png",alt:"Logo CRBLM",className:"h-8",style:{height:"32px",width:"auto",objectFit:"contain"}}),l.a.createElement("img",{src:"/images/CIRCA_logo.png",alt:"Logo CIRCA",className:"h-8",style:{height:"50px",width:"auto",objectFit:"contain"}})),l.a.createElement(f.a,{md:4,className:"text-md-end text-center mt-3 mt-md-0"},l.a.createElement("p",{className:"mb-0 text-sm-white fs-6"}," ","fr"!==e?"Website by Declercq Kilian":"Site web par Declercq Kilian"),l.a.createElement("p",{className:"mb-0 text-sm-white fs-6"}," ","fr"!==e?"Labo-Langage \xa9 2024 - All rights reserved":"Labo-Langage \xa9 2024 - Tous droits r\xe9serv\xe9s"," ")))))},v=a(19);const y=v.b`
  0% { 
    transform: translate(-200%, -120vh) rotate(-15deg);
  }
  20% {
    transform: translate(1000%, -90vh) rotate(20deg);
  }
  40% {
    transform: translate(-100%, -60vh) rotate(-10deg);
  }
  60% {
    transform: translate(50%, -30vh) rotate(5deg);
  }
  80% {
    transform: translate(-25%, -10vh) rotate(-3deg);
  }
  95% {
    transform: translate(5%, 5%) rotate(2deg);
  }
  100% { 
    transform: translate(0%, 0) rotate(0deg);
  }
`,w=v.b`
  0% { opacity: 0; transform: scale(0.6) translateX(-50%); }
  100% { opacity: 0.3; transform: scale(1) translateX(-50%); }
`,j=v.a.img`
  width: ${e=>e.size}px;
  height: auto;
  position: absolute;
  top: calc(50% - ${e=>e.size/2}px);
  left: calc(50% - ${e=>e.size/2}px);
  animation: ${y} 6s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
`,x=v.a.div`
  width: ${e=>.8*e.size}px;
  height: ${e=>.1*e.size}px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  position: absolute;
  bottom: calc(50% - ${e=>e.size/2}px - ${e=>.05*e.size}px);
  left: 50%;
  transform-origin: center;
  animation: ${w} 1s cubic-bezier(0.39, 0.575, 0.565, 1) 4s forwards;
  opacity: 0;
`,O=v.a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;var L=function(e){let{imageUrl:t,size:a,onAnimationComplete:r}=e;const[c,o]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{console.log("\ud83d\udef8 UFO animation started");const e=setTimeout(()=>{o(!0),r&&r()},6500);return()=>{console.log("\ud83d\udef8 Cleaning up UFO animation timer"),clearTimeout(e)}},[r]),l.a.createElement(O,{style:{opacity:c?0:1,transition:"opacity 0.5s ease-out"}},l.a.createElement("div",{style:{position:"relative",width:3*a,height:2*a}},l.a.createElement(x,{size:a}),l.a.createElement(j,{src:t,alt:"UFO",size:a})))},C=a(50);const z=v.a.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1002;
  pointer-events: none;
`,N=Object(v.a)(d.a)`
  margin-top: 8.2rem;
`,S=v.a.h1`
  font-family: "Chivo", sans-serif;
  font-weight: 900;
  font-size: 52px;
  line-height: 58px;
  margin-bottom: 1rem;
`;var k=e=>{let{show:t}=e;const{language:a}=Object(m.b)();return l.a.createElement(z,{style:{opacity:t?1:0,transition:"opacity 0.5s ease-in-out"}},l.a.createElement(N,null,l.a.createElement(b.a,null,l.a.createElement(f.a,null,l.a.createElement(S,null,"fr"!==a?"Welcome to Phaedra Royle's research laboratory":"Bienvenue sur le laboratoire de recherche de Phaedra Royle")))))};a(75);const F=Object(n.lazy)(()=>a.e(3).then(a.bind(null,104))),T=Object(n.lazy)(()=>a.e(8).then(a.bind(null,98))),P=Object(n.lazy)(()=>a.e(7).then(a.bind(null,101))),A=Object(n.lazy)(()=>a.e(4).then(a.bind(null,102))),R=Object(n.lazy)(()=>a.e(5).then(a.bind(null,103))),U=Object(n.lazy)(()=>Promise.all([a.e(6),a.e(9)]).then(a.bind(null,99)));var B=function(){const[e,t]=Object(n.useState)(!0),[a,r]=Object(n.useState)(!1),[c,u]=Object(n.useState)(!1);return Object(n.useEffect)(()=>{const e=setTimeout(()=>r(!0),4500),a=setTimeout(()=>{t(!1),r(!1)},6500);return()=>{clearTimeout(e),clearTimeout(a)}},[]),l.a.createElement(o.a,null,l.a.createElement(m.a,null,l.a.createElement(i.a,null,l.a.createElement("div",{className:"App min-h-screen flex flex-col"},e&&l.a.createElement(L,{imageUrl:"/images/ovni.png",size:120}),l.a.createElement(k,{show:a}),l.a.createElement("div",{style:{opacity:e?0:1,transition:"opacity 0.5s ease-in-out",position:e?"absolute":"relative",top:0,left:0,width:"100%",height:"100%"}},l.a.createElement(h,null),l.a.createElement("main",{className:"flex-grow"},l.a.createElement(n.Suspense,{fallback:l.a.createElement("div",null,"Loading...")},l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(F,null)}),l.a.createElement(s.a,{path:"/research",element:l.a.createElement(T,null)}),l.a.createElement(s.a,{path:"/publications",element:l.a.createElement(P,null)}),l.a.createElement(s.a,{path:"/team",element:l.a.createElement(A,null)}),l.a.createElement(s.a,{path:"/tools",element:l.a.createElement(R,null)}),l.a.createElement(s.a,{path:"/contact",element:l.a.createElement(U,null)})))),l.a.createElement(E,null)),!c&&l.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",opacity:0}},l.a.createElement(C.a,{onLoad:()=>{u(!0)}}))))))};var I=e=>{e&&e instanceof Function&&a.e(10).then(a.bind(null,100)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:r,getTTFB:c}=t;a(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(B,null))),I()}},[[57,1,2]]]);
//# sourceMappingURL=main.b8dd4ecf.chunk.js.map