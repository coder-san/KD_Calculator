(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"8ypT":function(e,t,a){},Bl7J:function(e,t,a){"use strict";var r=a("uBgz"),l=a("q1tI"),n=a.n(l),c=(a("Wbzz"),function(e){var t=e.siteTitle;return n.a.createElement("header",null,t)});c.defaultProps={siteTitle:""};var s=c;a("8ypT"),t.a=function(e){var t=e.children,a=r.data;return n.a.createElement("div",null,n.a.createElement(s,{siteTitle:a.site.siteMetadata.title}),n.a.createElement("div",null,n.a.createElement("main",null,t),n.a.createElement("footer",null,n.a.createElement("p",null,"Version ",a.site.siteMetadata.version))))}},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),l=a.n(r),n=a("Bl7J");var c=function(e){return console.log(e),l.a.createElement("div",{className:"results"},isNaN(e.props.current_km)?l.a.createElement("span",null):l.a.createElement("p",null,"Your current K/M is ",e.props.current_km.toPrecision(2)),e.props.target_kills&&e.props.target_matches&&e.props.target_km?l.a.createElement("div",null,l.a.createElement("p",null,"You need ",l.a.createElement("strong",null,e.props.target_kills)," kills in ",l.a.createElement("strong",null,e.props.target_matches)," more match",e.props.target_matches>1?l.a.createElement("span",null,"es"):l.a.createElement("span",null)," to reach ",e.props.target_km," K/M."),l.a.createElement("p",null,"(",(e.props.target_kills/e.props.target_matches).toPrecision(2)," kills/match)")):l.a.createElement("span",null))};var s=function(e){var t=Object(r.useState)(),a=t[0],n=t[1],s=Object(r.useState)(),o=s[0],m=s[1],u=Object(r.useState)(),i=u[0],p=u[1],g=Object(r.useState)(),h=g[0],d=g[1],_=Object(r.useState)(1),E=_[0],v=_[1],f=Object(r.useState)(),b=f[0],k=f[1];return Object(r.useEffect)((function(){console.log("Calculating kills needed"),p(a/o),k(h*(o+E)-a)}),[a,o,h,E]),l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"current_matches"},"Current matches"),l.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;console.log("Current matches changed to "+t),m(parseInt(t))},value:o,name:"current_matches",id:"current_matches",className:"form-control",placeholder:"current_matches","aria-describedby":"current_matches_help"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"current_kills"},"Current kills"),l.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;console.log("Current kills changed to "+t),n(parseInt(t))},value:a,className:"form-control",name:"current_kills",id:"current_kills","aria-describedby":"current_kills_help",placeholder:"current kills"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"target_km"},"Target K/M"),l.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;console.log("TargetKM changed to "+t),d(parseInt(t))},className:"form-control",name:"target_km",value:h,id:"target_km","aria-describedby":"target_km_help",placeholder:"Your target K/M"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"target_matches"},"Target matches"),l.a.createElement("input",{type:"number",onChange:function(e){var t=e.target.value;console.log("Target matches changed to "+t),v(parseInt(t))},className:"form-control",name:"target_matches",value:E,id:"target_matches","aria-describedby":"target_matches_help",placeholder:"Number of matches to reach target"}))),l.a.createElement(c,{props:{current_matches:o,current_kills:a,current_km:i,target_kills:b,target_km:h,target_matches:E}}))};t.default=function(){return l.a.createElement(n.a,null,l.a.createElement(s,null))}},uBgz:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"K/D maintainer for PUBG","version":"1.3"}}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-dbbe7f2edbe134384bb5.js.map