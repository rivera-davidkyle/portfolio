(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{64:function(e,t,a){e.exports=a.p+"static/media/pfp.1de98085.png"},69:function(e,t,a){e.exports=a.p+"static/media/resume.8a310433.pdf"},80:function(e,t,a){e.exports=a(96)},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},96:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(61),o=a.n(i),c=(a(87),a(14)),l=a(74),s=a(122),m=a(123),u=a(133),p=a(124),f=a(129),d=a(125),E=a(134),g=a(121),v=(a(88),a(89),a(64)),x=a.n(v),b=a(128),y=a(126),h=a(65),j=a.n(h),k={grid:{display:"flex",justifyContent:"center",alignItems:"center"},container:{padding:"20px"}};var w=function(){return r.a.createElement(b.a,{className:"home"},r.a.createElement(d.a,null,r.a.createElement(d.a,null,r.a.createElement("img",{className:"pfp",alt:"",src:x.a})),r.a.createElement(y.a,{container:!0,sx:k.grid},r.a.createElement(y.a,{item:!0,xs:12,md:6},r.a.createElement(d.a,{sx:k.container},r.a.createElement(f.a,{variant:"h4"},"David Rivera"),r.a.createElement(f.a,{variant:"h5"},r.a.createElement(j.a,{options:{loop:!0},onInit:function(e){e.typeString("Software Developer.").pauseFor(2e3).deleteAll().typeString("Lifelong Learner.").pauseFor(2e3).deleteAll().typeString("Product Focused.").pauseFor(2e3).deleteAll().start()}}))),r.a.createElement(d.a,{sx:k.container},r.a.createElement(f.a,{variant:"body1",align:"center"},"I am passionate on actualizing ideas and concepts through web-based applications. I seek out opportunities to enhance my skill set and refine my abilities to better my craft."))))))},C=(a(93),a(130)),I=a(131),F=a(132),O=a(127),S={grid:{display:"flex",justifyContent:"center",alignItems:"center"},listItem:{borderBottom:"1px solid #f702d3",padding:"10px",color:"#fff9fe",display:"flex",flexDirection:"column",justifyContent:"start",alignItems:"start"},container:{display:"flex",justifyContent:"start",alignItems:"start",padding:"0",margin:"0"}},_="https://api.github.com/users/rivera-davidkyle/repos",A={html:"#E34C26",css:"#264de4",javascript:"#ba9730",python:"#306998",django:"#092E20",aws:"#FF9900",cpp:"#00599C",assembly:"#6E4C13",react:"#2e6878",drf:"#008899",java:"#007396",mui:"#0081CB",numpy:"#013243",pandas:"#150458",scikitlearn:"#F7931E",bootstrap:"#7952B3"};function B(){var e=Object(n.useState)(null),t=Object(c.a)(e,2),a=t[0],i=t[1];return Object(n.useEffect)(function(){fetch(_).then(function(e){return e.json()}).then(function(e){var t=e.filter(function(e){return"my-website"!==e.name&&"rivera-davidkyle"!==e.name}).map(function(e){return{name:e.name||"",description:e.description||"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",topics:e.topics||[],url:e.html_url||""}});i(t)}).catch(function(e){return console.error(e)})},[]),r.a.createElement(C.a,{component:"div"},a&&a.map(function(e,t){return r.a.createElement(I.a,{sx:S.listItem,key:t,href:e.url},r.a.createElement(F.a,{primary:r.a.createElement(f.a,{variant:"h5"},(a=e.name,a.split("-").map(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}).join(" "))),secondary:r.a.createElement(f.a,{variant:"body2"},e.description)}),r.a.createElement(d.a,{disableGutters:!0,sx:S.container},e.topics&&e.topics.map(function(e,t){return r.a.createElement(O.a,{key:t,label:e,sx:{backgroundColor:A[e]||"transparent",color:"#fff9fe",margin:"3px"}})})));var a}))}var L=function(){return r.a.createElement(b.a,{className:"proj"},r.a.createElement(y.a,{container:!0,sx:S.grid},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(B,null))))},N=(a(94),a(70)),P=a.n(N),T=a(69),D={grid:{display:"flex",justifyContent:"center",alignItems:"center"},icon:{verticalAlign:"super"},listButton:{"&:hover":{backgroundColor:"transparent"}},typography:{transition:"color 0.3s","&:hover":{color:"#f702d3"}}},H={Resume:a.n(T).a,"2022 Portfolio Website":"https://rivera-davidkyle.github.io/my-website/",UCN:"https://www.ucn-portal.org/"};var R=function(){return r.a.createElement(b.a,{className:"info"},r.a.createElement(y.a,{container:!0,sx:D.grid},r.a.createElement(y.a,{item:!0,xs:12},r.a.createElement(C.a,{component:"div"},Object.keys(H).map(function(e,t){return r.a.createElement(I.a,{disableRipple:!0,sx:D.listButton,href:H[e]},r.a.createElement(F.a,{primary:r.a.createElement(f.a,{variant:"h4",align:"center",sx:D.typography},e,r.a.createElement(P.a,{sx:D.icon}))}))})))))},z=a(71),J=a.n(z),U=a(72),G=a.n(U),M=a(73),W=a.n(M),q=Object(l.a)({typography:{fontFamily:["Lato","Thin"].join(","),fontSize:20}}),K=Object(l.a)({typography:{body1:{color:"#fff9fe"},h4:{color:"#fff9fe"},fontFamily:["Lato","Thin"].join(","),fontSize:20}}),Q={button:{padding:"20px",color:"#f702d3",position:"relative","&::before":{content:"''",position:"absolute",top:0,left:0,width:0,height:"2px",background:"#f702d3",transition:"width 0.3s ease-in-out"},"&:hover":{backgroundColor:"transparent","&::before":{width:"100%"}}},navbar:{display:"flex",flexDirection:"column",alignItems:"center",color:"#f702d3",backgroundColor:"#1c1c1c"},icon:{color:"#f702d3",transition:"color 0.3s","&:hover":{color:"#fff9fe"}}},V={Home:r.a.createElement(w,null),Projects:r.a.createElement(L,null),Info:r.a.createElement(R,null)};var X=function(){var e=Object(n.useState)("Home"),t=Object(c.a)(e,2),a=t[0],i=t[1],o=Object(n.useState)(!0),l=Object(c.a)(o,2),v=l[0],x=l[1],b=function(e,t){t!==a&&(x(!1),setTimeout(function(){x(!0),i(t)},200))};return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{theme:q},r.a.createElement(m.a,{elevation:0,sx:Q.navbar,position:"fixed"},r.a.createElement(u.a,{sx:{borderBottom:"2px solid #f702d3"}},r.a.createElement(p.a,{variant:"text",onClick:function(){return b(0,"Home")},sx:Q.button},r.a.createElement(f.a,null,"Home")),r.a.createElement(p.a,{variant:"text",onClick:function(){return b(0,"Projects")},sx:Q.button},r.a.createElement(f.a,null,"Projects")),r.a.createElement(p.a,{variant:"text",onClick:function(){return b(0,"Info")},sx:Q.button},r.a.createElement(f.a,null,"Info")))),r.a.createElement(g.a,{in:v,timeout:850,classNames:{enterActive:"animate__animated animate__fadeIn",exitActive:"animate__animated animate__fadeOut"},unmountOnExit:!0},r.a.createElement(s.a,{theme:K},V[a])),r.a.createElement(d.a,{sx:{marginTop:"auto",padding:"10px"}},r.a.createElement(E.a,{sx:Q.icon,onClick:function(){return window.open("https://github.com/rivera-davidkyle")}},r.a.createElement(J.a,null)),r.a.createElement(E.a,{sx:Q.icon,onClick:function(){return window.open("https://www.linkedin.com/in/rivera-davidkyle/")}},r.a.createElement(G.a,{sx:Q.icon})),r.a.createElement(E.a,{sx:Q.icon,onClick:function(){return window.open("mailto:rivera.davidkyle@gmail.com")}},r.a.createElement(W.a,{sx:Q.icon})))))},Y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),i(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(X,null))),Y()}},[[80,1,2]]]);
//# sourceMappingURL=main.3189fc37.chunk.js.map