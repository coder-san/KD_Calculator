(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),l=a.n(r),n=a("Bl7J");var c=function(e){return l.a.createElement("div",{className:"results"},isNaN(e.props.current_km)?l.a.createElement("span",null):l.a.createElement("p",null,"Your current K/M is ",e.props.current_km.toPrecision(2)),e.props.target_kills&&e.props.target_matches&&e.props.target_km?l.a.createElement("div",null,l.a.createElement("p",null,"You need ",l.a.createElement("strong",null,e.props.target_kills)," kills in ",l.a.createElement("strong",null,e.props.target_matches)," more match",e.props.target_matches>1?l.a.createElement("span",null,"es"):l.a.createElement("span",null)," to reach ",e.props.target_km," K/M."),l.a.createElement("p",null,"(",(e.props.target_kills/e.props.target_matches).toPrecision(2)," kills/match)")):l.a.createElement("span",null))};var s=function(e){var t=Object(r.useState)(),a=t[0],n=t[1],s=Object(r.useState)(),m=s[0],u=s[1],o=Object(r.useState)(),p=o[0],i=o[1],h=Object(r.useState)(),g=h[0],_=h[1],E=Object(r.useState)(1),d=E[0],b=E[1],k=Object(r.useState)(),v=k[0],f=k[1];return Object(r.useEffect)((function(){i(a/m),f(g*(m+d)-a)}),[a,m,g,d]),l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"current_matches"},"Current matches"),l.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;u(parseInt(t))},value:m,name:"current_matches",id:"current_matches",className:"form-control",placeholder:"current_matches","aria-describedby":"current_matches_help"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"current_kills"},"Current kills"),l.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;n(parseInt(t))},value:a,className:"form-control",name:"current_kills",id:"current_kills","aria-describedby":"current_kills_help",placeholder:"current kills"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"target_km"},"Target K/M"),l.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;_(parseInt(t))},className:"form-control",name:"target_km",value:g,id:"target_km","aria-describedby":"target_km_help",placeholder:"Your target K/M"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"target_matches"},"Target matches"),l.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;b(parseInt(t))},className:"form-control",name:"target_matches",value:d,id:"target_matches","aria-describedby":"target_matches_help",placeholder:"Number of matches to reach target"}))),l.a.createElement(c,{props:{current_matches:m,current_kills:a,current_km:p,target_kills:v,target_km:g,target_matches:d}}))},m=a("vrFN");t.default=function(){return l.a.createElement(n.a,null,l.a.createElement(m.a,{title:"KD Calculator"}),l.a.createElement(s,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-b2cfc72266b39d3b317b.js.map