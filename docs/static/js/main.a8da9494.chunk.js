(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,n){"use strict";n.r(t);var a=n(157),r=(n(94),n(91)),o=n(17),l=n(1),i=n.n(l),c=n(8),u=n(86),s=n(155),d=n(33),f=n(72),m=n(159),b=n(26),g=["2","3","4","5","6","7","8","9",{value:"0",label:"10",isJoker:!1},"J","Q","K","A",{value:"X",label:"Joker",isJoker:!0}].map(function(e){if("object"===typeof e)return e;return{label:e,value:e,isJoker:!1}}),h=g.reduce(function(e,t){return e[t.value]=t,e},{}),v={H:{value:"H",label:"\u2665",color:"red"},D:{value:"D",label:"\u2666",color:"red"},S:{value:"S",label:"\u2660",color:"black"},C:{value:"C",label:"\u2663",color:"black"},B:{value:"B",label:"",color:"black"},R:{value:"R",label:"",color:"red"}},y=[v.H,v.S,v.C,v.D],k=[v.B,v.R],w=g.map(function(e){return e.isJoker?k.map(function(t){return{rank:e.value,suit:t.value}}):y.map(function(t){return{rank:e.value,suit:t.value}})}).flatMap(function(e){return e});function E(e,t){var n=g.findIndex(function(t){return t.value===e.rank}),a=g.findIndex(function(e){return e.value===t.rank});if(-1===n||-1===a)throw new Error("rank not found for cards, "+e+" "+t);return n!==a?n-a:e.suit<t.suit?-1:e.suit===t.suit?0:1}function A(){return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=e[t];e[t]=e[n],e[n]=a}return e}([].concat(Object(b.a)(w),Object(b.a)(w))).slice(0,27).sort(E)}function p(e,t){return e.filter(function(e){return 0===E(e,t)}).length<2}function C(e){var t=e.rank,n=e.setRank;return i.a.createElement(c.a,{style:{flexDirection:"row"}},i.a.createElement(u.a,{style:{fontSize:22,marginHorizontal:6}},"\u5f53\u524d\u6253",i.a.createElement(m.a,{selectedValue:t,onValueChange:function(e){return n(e)}},g.filter(function(e){return!e.isJoker}).map(function(e){return i.a.createElement(m.a.Item,{key:e.value,label:e.label,value:e.value})}))," ",i.a.createElement(u.a,{style:{color:v.H.color}},v.H.label,h[t].label),"\u662f\u767e\u642d"))}var j=n(2),S=n(156),O=n(89),R=j.a.create({divider:{height:2,backgroundColor:"black",marginHorizontal:10}});function x(){return i.a.createElement(c.a,{style:R.divider})}var W=n(158),B=n(87),J=n.n(B);function H(e){var t=e.rank,n=e.suit,a=e.isStacked,r=e.disabled,o=h[t],l=v[n];return i.a.createElement(c.a,{style:[Q.card,a&&Q.cardStacked]},i.a.createElement(u.a,{style:{fontFamily:"monospace",fontSize:16,color:l.color,lineHeight:16,textAlign:"center",width:20,marginTop:4,fontWeight:"bold"}},"10"===o.label?o.label:o.label.split("").join("\n"),"\n",l.label),i.a.createElement(W.a,{source:{uri:J.a},style:{position:"absolute",left:"calc(50% - 20px)",top:"calc(50% - 20px)",width:40,height:40}}),r&&i.a.createElement(c.a,{style:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.3)"}}))}var D=function(e){var t=e.cards,n=e.hands;return i.a.createElement(S.a,{style:{flex:1,minHeight:60},contentContainerStyle:{flexWrap:"wrap",flexDirection:"row",paddingRight:60,paddingBottom:60,overflow:"hidden"}},!!t&&t.map(function(e,t){return i.a.createElement(H,Object.assign({key:e.rank+e.suit+t},e,{isStacked:!0}))}),!!n&&n.map(function(e,t){var n=e.map(function(e,t){return i.a.createElement(H,Object.assign({key:e.rank+e.suit+t},e,{isStacked:!0}))});return t>0?i.a.createElement(l.Fragment,{key:t},i.a.createElement(c.a,{style:{width:16}}),i.a.createElement(c.a,{style:{flexDirection:"row",flexWrap:"nowrap"}},n)):n}))},I=n(90),z=function(e){var t=e.style,n=e.titleStyle,a=e.title,r=e.disabled,o=Object(I.a)(e,["style","titleStyle","title","disabled"]);return i.a.createElement(O.a,Object.assign({style:[{backgroundColor:r?T.disabled.background:T.button.background,borderRadius:2,padding:4,alignItems:"center",justifyContent:"center"},t],disabled:r},o),i.a.createElement(u.a,{style:[{color:r?T.disabled.text:"white",textAlign:"center"},n]},a))},K="rgb(33, 150, 243)",P={0:"black",4:"rgb(161, 161, 161)",6:"rgb(223, 223, 223)",8:"white"},T={disabled:{background:P[6],text:P[4]},button:{background:K}};var M=j.a.create({incDecButton:{flex:2,minWidth:80,maxWidth:200,margin:6},actionButton:{flex:1,minWidth:80,maxWidth:150,margin:6},buttonTitle:{fontSize:30},buttonTitleSmall:{fontSize:18}}),F=function(e){return i.a.createElement(c.a,null,i.a.createElement(c.a,{style:{flexDirection:"row",justifyContent:"center",alignContent:"center"}},i.a.createElement(z,{onPress:e.decRank,disabled:e.rankID<=0,title:"<",style:M.incDecButton,titleStyle:M.buttonTitle}),i.a.createElement(z,{onPress:e.incRank,title:">",disabled:e.rankID>=g.length-1,style:M.incDecButton,titleStyle:M.buttonTitle})),i.a.createElement(c.a,{style:{flexDirection:"row",justifyContent:"center",alignContent:"center"}},i.a.createElement(z,{onPress:e.randomCards,title:"\u968f\u673a\u53d1\u724c",disabled:e.numberOfCards>0,style:M.actionButton,titleStyle:M.buttonTitleSmall}),i.a.createElement(z,{onPress:e.clearCards,title:"\u6e05\u9664",disabled:0===e.numberOfCards,style:M.actionButton,titleStyle:M.buttonTitle}),i.a.createElement(z,{onPress:e.deleteLastCard,title:"\u5220\u9664",disabled:0===e.numberOfCards,style:M.actionButton,titleStyle:M.buttonTitle})))};function L(e){var t=e.cards,n=e.addCard,a=e.clearCards,r=e.randomCards,s=e.deleteLastCard,d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(l.useState)(e),n=Object(o.a)(t,2),a=n[0],r=n[1];return{value:a,increase:Object(l.useCallback)(function(){return r(function(e){return e+1})},[r]),decrease:Object(l.useCallback)(function(){return r(function(e){return e-1})},[r])}}(),f=d.value,m=d.increase,b=d.decrease;return i.a.createElement(c.a,{style:{flex:1}},i.a.createElement(D,{cards:t}),i.a.createElement(x,null),i.a.createElement(u.a,{style:{fontSize:14,margin:4}},"\u70b9\u51fb\u6251\u514b\u724c\u6dfb\u52a0"),i.a.createElement(S.a,{style:{height:110,flexGrow:0},contentContainerStyle:{flex:1,justifyContent:"center"},horizontal:!0},(g[f].isJoker?k:y).map(function(e){var a={suit:e.value,rank:g[f].value},r=p(t,a);return i.a.createElement(O.a,{key:e.value,onPress:function(){return n(a)},disabled:!r},i.a.createElement(H,{suit:e.value,rank:g[f].value,disabled:!r}))})),i.a.createElement(F,{numberOfCards:t.length,clearCards:a,randomCards:r,deleteLastCard:s,rankID:f,incRank:m,decRank:b}))}var Q=j.a.create({card:{width:80,height:60*1.618,backgroundColor:"white",borderColor:"black",borderWidth:2,borderRadius:4,margin:3},cardStacked:{marginRight:-60,marginBottom:-60}});function V(e){return{calc:function(t,n){var a=e.calc(t,n.charCodeAt(0)),r=a.minHands,o=function(e){for(var t=[],n=0;n<e.size();++n)t.push(e.get(n));return t}(a.solutions);return{minHands:r,solutionsRaw:o,solutions:U(o)}}}}var Z=/[0-9A-Z]{2}/;function G(e,t,n){var a=Object(b.a)(t),r=Object(b.a)(e);if(e.forEach(function(e,t){e.forEach(function(e,o){if(a.length>0){var l=a.indexOf(e);if(l>=0){a.splice(l,1);var i=Object(b.a)(r[t]);i.splice(o,1,n),r[t]=i}}})}),a.length>0)throw new Error('Cannot find all wildcards, double check the data, hands = "'.concat(e,'", usedWildCards = "').concat(t,'", wildCard="').concat(n,'"'));return r}function U(e){try{return function(e){for(var t=[],n=null,a=0;a<e.length;++a){if(0===e[a].length)throw new Error("solutions shouldn't have empty line: #"+a);if("-"===e[a][0]){var r=e[a];n=r.split(" ").filter(function(e){return e.match(Z)})}else{if(null==n)throw new Error("wildcard definition should be before solution definition");var o=e[a],l=o.split("|").map(function(e){return e.split(" ").filter(function(e){return e.match(Z)})}).filter(function(e){return e.length>0}),i=G(l,n,"??");t.push({wildCards:n,actualHands:i,asHands:l})}}return t}(e)}catch(t){throw console.log(e),t}}var Y=j.a.create({container:{padding:10},borderBox:{borderWidth:2,borderColor:"black"}});function N(){return(N=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var X=i.a.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),q=i.a.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),$=function(e){return i.a.createElement("svg",N({width:24,height:24,viewBox:"0 0 24 24"},e),X,q)},_=(n.p,function(e){return i.a.createElement(O.a,{style:[{width:40,flexDirection:"row",justifyContent:"center",alignItems:"center"},e.style],onPress:e.toggleWindowSize},i.a.createElement($,null))}),ee=Object(l.memo)(function(e){return i.a.createElement(S.a,{style:[Y.container,{flex:2}]},e.strategyResult&&("loading"===e.strategyResult?i.a.createElement(u.a,{style:{fontSize:20}},"\u8ba1\u7b97\u4e2d..."):i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,null,"\u6700\u5c11".concat(e.strategyResult.minHands,"\u624b\u53ef\u4ee5\u51fa\u5b8c")),i.a.createElement(c.a,null,function(){var t=e.strategyResult.solutions.length-10;return i.a.createElement(i.a.Fragment,null,e.strategyResult.solutions.slice(0,10).map(function(t,n){return i.a.createElement(D,{key:n,hands:t.actualHands.map(function(t){return t.map(function(t){return function(e,t){if(2!==e.length)throw new Error("CardRaw should have a length of 2");return"BJ"===e?{rank:"X",suit:"R"}:"SJ"===e?{rank:"X",suit:"B"}:"??"===e?t:{rank:e[0],suit:e[1]}}(t,{rank:e.rank,suit:"H"})})})})}),t>0&&"\u8fd8\u6709".concat(t,"\u79cd\u65b9\u6848\u53ef\u4ee5\u8fbe\u5230\u540c\u6837\u7684\u6700\u5c11\u624b\u6570"))}()))))}),te=i.a.memo(function(e){var t=e.strategyResult,n=e.rank,a=e.toggleWindowSize;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{style:{flexDirection:"row",justifyContent:"flex-end",alignContent:"center"}},i.a.createElement(c.a,{style:{flex:1}},i.a.createElement(u.a,{style:{fontSize:20,padding:4,textAlign:"center"}},"\u62c6\u724c\u7b56\u7565\u8ba1\u7b97\u7ed3\u679c")),i.a.createElement(_,{toggleWindowSize:a,style:{position:"absolute",right:0,height:"100%"}})),i.a.createElement(x,null),i.a.createElement(ee,{strategyResult:t,rank:n}))}),ne=null;function ae(e){var t=e.screenProps;Object(l.useEffect)(function(){new Promise(function(e,t){if(window.Module)return e(V(window.Module));var n=document.createElement("script");n.src="res/strategy.js",n.onload=function(){var n=window.Module;n.onRuntimeInitialized=function(){e(V(window.Module))},n.onAbort=function(){t("wasm module aborted during loading")}},n.onerror=function(){return t("wasm module failed to load")},document.body.appendChild(n)}).then(function(e){ne=e})},[]);var n=t.rank,a=t.setRank,r=t.cards,s=t.clearCards,d=t.addCard,f=t.randomCards,m=t.deleteLastCard,b=Object(l.useState)(null),g=Object(o.a)(b,2),h=g[0],v=g[1],y=Object(l.useState)(!1),k=Object(o.a)(y,2),w=k[0],E=k[1],A=Object(l.useCallback)(function(){return E(function(e){return!e})},[E]),p=Object(l.useCallback)(function(){v("loading"),E(!0),setTimeout(function(){if(null!=ne){var e=function(e){return e.map(function(e){return"X"===e.rank?"R"===e.suit?"BJ":"SJ":e.rank+e.suit}).join("")}(r);v(ne.calc(e,n))}},0)},[r,v,E]);return i.a.createElement(c.a,{style:{height:"100%"}},i.a.createElement(u.a,{style:{fontSize:14}},"\u63bc\u86cb\u62c6\u724c\u8ba1\u7b97\u5668"),w?i.a.createElement(te,{strategyResult:h,rank:n,toggleWindowSize:A}):i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{style:[Y.container,{height:40,justifyContent:"center",alignItems:"center"}]},i.a.createElement(C,{rank:n,setRank:a})),i.a.createElement(x,null),i.a.createElement(c.a,{style:[{flex:1,minHeight:350}]},i.a.createElement(L,{cards:r,addCard:d,clearCards:s,randomCards:f,deleteLastCard:m})),i.a.createElement(c.a,{style:[Y.container,{justifyContent:"center",padding:6}]},i.a.createElement(z,{title:"\u8ba1\u7b97\u62c6\u724c\u7b56\u7565",onPress:p,style:{height:60},titleStyle:{fontSize:40}}))))}ae.navigationOptions={title:"\u63bc\u86cb\u7b56\u7565\u8ba1\u7b97"};var re=Object(d.createSwitchNavigator)({Home:ae,Details:function(e){return i.a.createElement(c.a,null,i.a.createElement(u.a,null,"Details"),i.a.createElement(s.a,{title:"Go to Home",onPress:function(){return e.navigation.navigate("Home")}}))}},{initialRouteName:"Home"});function oe(e){var t=Object(l.useState)("2"),n=Object(o.a)(t,2),a=n[0],u=n[1],s=function(){var e=Object(l.useState)([]),t=Object(o.a)(e,2),n=t[0],a=t[1];return{cards:n,clearCards:Object(l.useCallback)(function(){return a([])},[a]),addCard:Object(l.useCallback)(function(e){return a(function(t){return t.concat(e)})},[a]),randomCards:Object(l.useCallback)(function(){return a(A())},[a]),deleteLastCard:Object(l.useCallback)(function(){return a(function(e){return e.slice(0,e.length-1)})},[a])}}();return i.a.createElement(c.a,{style:{flex:1,backgroundColor:"lightblue",height:"100%"}},i.a.createElement(re,Object.assign({screenProps:Object(r.a)({rank:a,setRank:u},s)},e)))}oe.router=re.router;var le=Object(f.createBrowserApp)(oe),ie=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}a.a.registerComponent("App",function(){return le}),a.a.runApplication("App",{rootTag:document.getElementById("root")}),function(e){if("serviceWorker"in navigator){if(new URL("/poker-guandan-strategy",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/poker-guandan-strategy","/service-worker.js");ie?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ce(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ce(t,e)})}}({onSuccess:function(){return console.log("service worker loaded successfully")},onUpdate:function(){return console.log("service worker is updated")}}),function(){var e=window.document.getElementById("wechat-guidance");if(e){var t=e.parentNode;t&&t.removeChild(e)}}()},87:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAQAAAAm93DmAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjAhUINB2XPPnXAAAEaElEQVRIx52WWWxUZRTHf3e2TmfrdJlaSWlRlkK6AA1BiCQNWzRIUBACwS1Go2LE0JASwaSVh8qDxroEhBcJFBMTbNQGFRIftAqoIBpKY9vU0EUK0xY6bYdZ78zxodLZ7nTh/3bv+c7vnO+c8333wv0olwp0M3EoZBMZaa0KB/mFnJkAd+BhW1rrKr1b6aV4JsDXHWJpZYGmLcdwdqvMGqRM21W7Es71bCmjFpuG7cWV62qwmrDMJMP63fKPLA3yhjHZsjynt1nuyJIA67VdDZpvc208TJ3ppZrbV2jHRTYWwIuP/c/O3kCQLCO50wfqsDsI4aSwaPiEy5eX77SaDeAPDQcHsjv4kJWYdem6rAXUK47f2M5tqtg3byEF2DAihDO93KKV83xFB5Rg5e506mdgQ0bXajkuNyQqWopIjxyVR/3GM1RNPd5ZHJx/56gMy1QakPekyE0N1slwLuXkOvWPKWHjisrPsiLIYZzpcNmceira9//yoLSLOwHgl0tyMwnaIWtUjmjOKwYOrY30TSxtEpdsE1+c8xdikxcknIJcHuKtWC1jRX1szq53dYUTj0bCWBJqbqOYwpQuLKDe+EA1q1KaofxQnxA5KJfFLaoEREQVv4hEZFD8ml3fKzSRmQjcXO7v0VjcJPslJEekJmWr8bomxSOsid+yjk2Pm4sSIrj5Hcihidf4iJI0Z3RcC1ntYKMS96bA2vZ9UtRjsklCEpW3BdknYRG5LuckkibHE6K/SNZ4bwEKXbOSLz8HrRzCyRnycRPEwHE6WZsmxzKyi4cKGLkHzHdZks/6RsY4Thd1VLCbXRRymnfQpwEWkGcfirt/nlwV9mpspFmWyYCIXJC5skJOJkxlogZlsY+qWFN8PjWgEbecMFcAJzbe57nkyYiTD1+YQAzoHvAOaSwrYi0f0EcjD7KUydTPkIfBGPDfwe5rGst07EXhCb7kzSk+IX/h6eLWxGMGNLya5vbrlQZpFnXSeycoW4TaxBBVDw23yf3qguTfojIRmMHne6bII50C8rxwOHWiluX1NN8XsFHs7SxKKaseXll8988Z41pknocd2q0yUfeIf7ofgHH9KKVjVKc9QJg5UDry9aRXVUxBOSVzh9iNkUlkYHtu9x7pTDNE9xSRq/Ky2L08g5IISE42SmegKlByji4cZGsG93KJjzlGDn2BsU/oS84oWZmG/APY2ck3zKeCcopwYATCeOjmKq10E6CRUjba+mdzcSqgJdOZw2VG1R2GCvaOqS3OrMxsvRlUv++Ox++o+tTsppYeKjGm7lADqFMMn/Fdf+Ts+Z0FZrUzVD0QwooJCOElK3S6t6RJ9bQ2lFaaIiDJ7rGS5lNJMS7mKFuVrOgNbuqWWAzeUfqQCTcFhSKzPaRGr+vnPG38VXp/oo1Rhujnb9pQ44EL2cwiCnBiwoYBK1HAhDmlbRECKIgSJChRvHi5TQ8tfEuQpKbrMJFBBhb02NEBFo3fDJVhBAjgJ8xdQoQI3zP+B8PxaLIJz6YTAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTAyLTIxVDA4OjUyOjI5KzAwOjAwIu73FAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wMi0yMVQwODo1MjoyOSswMDowMFOzT6gAAAAASUVORK5CYII="},93:function(e,t,n){e.exports=n(147)},94:function(e,t,n){}},[[93,1,2]]]);
//# sourceMappingURL=main.a8da9494.chunk.js.map