(window["webpackJsonpreel-task"]=window["webpackJsonpreel-task"]||[]).push([[0],{1:function(e,t,r){e.exports={app:"style_app__3FvE1",searchBar:"style_searchBar__1nY_F",searchInput:"style_searchInput__304q-",searchTitle:"style_searchTitle__2qGBc",reel:"style_reel__2uG1G",reelContainer:"style_reelContainer__bRat-",reelBrandName:"style_reelBrandName__2_ytU",reelName:"style_reelName__3lCT5",reelPercent:"style_reelPercent__193P7",totalPaid:"style_totalPaid__3oD3N",reelImage:"style_reelImage__3oYkR",statusIcon:"style_statusIcon__3kbt2",reelList:"style_reelList__2oRJf",progress:"style_progress__CtQIa",dropInPanelContainerclosed:"style_dropInPanelContainerclosed__1kxJE",dropInPanelContaineropen:"style_dropInPanelContaineropen__DF5Xs",sortTitle:"style_sortTitle__1Pbqi",sortRow1:"style_sortRow1__1bIy9",sortRow2:"style_sortRow2__DRi2w",filterTitle:"style_filterTitle__2C8bo",filterRow:"style_filterRow__VIkBV",filterButton:"style_filterButton__eL_yp",sortIcon:"style_sortIcon__3APAx",sortButton:"style_sortButton__23hVw",dropInPanel:"style_dropInPanel__g5PAf",filterPanelContainer:"style_filterPanelContainer__2ZkHd",toggleDropIn:"style_toggleDropIn__2VE2p"}},217:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(31),l=r.n(o),s=r(10),c=r(5),i=r(1),u=r.n(i),p=r(11),d=r(12),m=r(14),f=r(13),y=r(15),E=r(80),_=function(e){var t,r,a=e.brand,o=e.name,l=e.paused,s=e.percentSaved,c=e.total,i=e.url,p=e.toggleReelPause,d=Object(E.usePalette)(i).data;return n.a.createElement("div",{className:u.a.reelContainer},n.a.createElement("h2",{className:u.a.reelBrandName},a),n.a.createElement("h3",{className:u.a.reelName},"".concat(o.substring(0,18),"...")),n.a.createElement("div",{className:u.a.reel},n.a.createElement("span",{className:u.a.reelPercent},s,"%"),n.a.createElement("div",{className:u.a.reelImageOverlay}),n.a.createElement("img",{onClick:function(){return function(e){100!==s&&p(e)}(o)},className:u.a.reelImage,style:{border:"10px solid ".concat(d.vibrant)},src:i,alt:"Reel item"}),n.a.createElement("div",{className:u.a.progress,style:{height:"".concat(s,"%"),backgroundColor:d.vibrant,opacity:l?"0.3":"1"}})),n.a.createElement("span",{className:u.a.totalPaid},l?"Paused":"STATUS:$".concat((t=c,r=s,t/100*r),"/$").concat(c)),n.a.createElement("img",{className:u.a.statusIcon,src:l?"icons/Pause-Icon.png":"icons/Play-Icon.png",alt:"Reel status icon"}))},b=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){var t=this,r=function(e,t){switch(t){case"ALPHABETICAL":return e.sort(function(e,t){return e.brand>t.brand?1:-1});case"TOTAL":return e.sort(function(e,t){return e.total>t.total?1:-1});case"PERCENT_SAVED":return e.sort(function(e,t){return e.percentSaved>t.percentSaved?1:-1});default:return e}};return n.a.createElement("ul",{className:u.a.reelList},"LOW-HIGH"===this.props.direction?r(this.props.reels,this.props.sortType).map(function(e,r){return n.a.createElement(_,{key:r,brand:e.brand,name:e.name,paused:e.paused,percentSaved:e.percentSaved,total:e.total,url:e.url,toggleReelPause:t.props.toggleReelPause})}):r(this.props.reels,this.props.sortType).reverse().map(function(e,r){return n.a.createElement(_,{key:r,brand:e.brand,name:e.name,paused:e.paused,percentSaved:e.percentSaved,total:e.total,url:e.url,toggleReelPause:t.props.toggleReelPause})}))}}]),t}(n.a.Component);function g(e,t,r){return h(e.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())||e.brand.toLowerCase().includes(t.toLowerCase())}),r)}var h=function(e,t){switch(t){case"ACTIVE":return e.filter(function(e){return!1===e.paused});case"PAUSED":return e.filter(function(e){return!0===e.paused});default:return e}},v=Object(c.b)(function(e){return{reels:g(e.reels,e.search,e.filter),sortType:e.sort.type,direction:e.sort.direction}},function(e){return{toggleReelPause:function(t){return e(function(e){return{type:"TOGGLE_REEL_PAUSE",name:e}}(t))}}})(b),P=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("form",{className:u.a.searchBar},n.a.createElement("input",{className:u.a.searchInput,type:"text",onChange:function(t){return e.props.updateSearchQuery(t.target.value)}}),n.a.createElement("h1",{className:u.a.searchTitle},"Search"))}}]),t}(n.a.Component),T=Object(c.b)(function(e){return{}},function(e){return{updateSearchQuery:function(t){return e(function(e){return{type:"UPDATE_SEARCH_QUERY",query:e}}(t))}}})(P),A=r(82),I=function(e){var t=e.sortType,r=e.direction,o=e.filter,l=e.updateSortType,s=e.updateSortDirection,c=e.updateFilter,i=Object(a.useState)(!1),p=Object(A.a)(i,2),d=p[0],m=p[1];return n.a.createElement("div",{className:u.a["dropInPanelContainer".concat(d?"open":"closed")]},n.a.createElement("input",{className:u.a.toggleDropIn,type:"button",onClick:function(){return m(!d)}}),n.a.createElement("div",{className:u.a.dropInPanel,style:{display:"block"}},n.a.createElement("h3",{className:u.a.sortTitle},"SORT"),n.a.createElement("div",{className:u.a.sortRow1},n.a.createElement("input",{className:u.a.sortButton,style:{color:"ALPHABETICAL"!==t?"darkgrey":"black"},type:"button",defaultValue:"A-Z",id:"ALPHABETICAL",onClick:function(e){return l(e.target.id)}})),n.a.createElement("div",{className:u.a.sortRow2},n.a.createElement("input",{className:u.a.sortIcon,style:{opacity:"HIGH-LOW"!==r||"ALPHABETICAL"===t?"0.3":"1"},type:"image",id:"HIGH-LOW",src:"icons/High-Low-Icon.png",onClick:function(e){return s(e.target.id)},alt:"High to low button"}),n.a.createElement("ul",null,n.a.createElement("input",{className:u.a.sortButton,style:{color:"TOTAL"!==t?"darkgrey":"black"},type:"button",defaultValue:"$ PRICE",id:"TOTAL",onClick:function(e){return l(e.target.id)}}),n.a.createElement("input",{className:u.a.sortButton,style:{color:"PERCENT_SAVED"!==t?"darkgrey":"black"},type:"button",defaultValue:"% SAVED",id:"PERCENT_SAVED",onClick:function(e){return l(e.target.id)}})),n.a.createElement("input",{className:u.a.sortIcon,style:{opacity:"LOW-HIGH"!==r||"ALPHABETICAL"===t?"0.4":"1"},type:"image",id:"LOW-HIGH",src:"icons/Low-High-Icon.png",onClick:function(e){return s(e.target.id)},alt:"Low to high button"})),n.a.createElement("h3",{className:u.a.filterTitle},"Filter"),n.a.createElement("ul",{className:u.a.filterRow},n.a.createElement("input",{className:u.a.filterButton,type:"button",style:{opacity:"ACTIVE"!==o?"0.4":"1"},defaultValue:"ACTIVE",onClick:function(e){return c(e.target.value)}}),n.a.createElement("input",{className:u.a.filterButton,type:"button",style:{opacity:"ALL"!==o?"0.4":"1"},defaultValue:"ALL",onClick:function(e){return c(e.target.value)}}),n.a.createElement("input",{className:u.a.filterButton,type:"button",style:{opacity:"PAUSED"!==o?"0.4":"1"},defaultValue:"PAUSED",onClick:function(e){return c(e.target.value)}}))))},O=function(e){function t(){return Object(p.a)(this,t),Object(m.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(e){return n.a.createElement("div",null,n.a.createElement(I,{sortType:this.props.sortType,direction:this.props.direction,filter:this.props.filter,updateSortDirection:this.props.updateSortDirection,updateSortType:this.props.updateSortType,updateFilter:this.props.updateFilter}))}}]),t}(n.a.Component),S=Object(c.b)(function(e){return{sortType:e.sort.type,direction:e.sort.direction,filter:e.filter}},function(e){return{updateSortDirection:function(t){return e(function(e){return{type:"UPDATE_SORT_DIRECTION",direction:e}}(t))},updateSortType:function(t){return e(function(e){return{type:"UPDATE_SORT_TYPE",sort:e}}(t))},updateFilter:function(t){return e(function(e){return{type:"UPDATE_FILTER",filter:e}}(t))}}})(O);var N=function(){return n.a.createElement("div",{className:u.a.app},n.a.createElement(T,null),n.a.createElement(v,null),n.a.createElement(S,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=[{brand:"ACNE",name:"Bryz Velcro-strap suede trainers",paused:!1,percentSaved:30,total:1e3,url:"images/Acne-Placeholder.png"},{brand:"GUCCI",name:"GG Marmont mini quilted-leather cross-body bag",paused:!1,percentSaved:50,total:900,url:"images/Gucci-Placeholder.jpg"},{brand:"FENDI ",name:"X FILA Logo Sneakers",paused:!1,percentSaved:40,total:250,url:"images/Fendi-Placeholder.jpg"},{brand:"FENDI",name:"Mon Tresor perforated-logo leather bucket bag",paused:!1,percentSaved:25,total:500,url:"https://images.ctfassets.net/ljoz65y94szt/7E3wKXRFUOy8D0kEgRFodA/3f45dc8a37144d52136ae25ecce42af1/Isabel_Marant.jpg"},{brand:"ALBUS LUMEN ",name:"Safi striped single-breasted blazer",paused:!1,percentSaved:100,total:1e3,url:"https://images.ctfassets.net/ljoz65y94szt/1eeYjBEsGcKzr7vZRBNLe0/01ca498a0918a68079844a1578f0d892/Gucci.jpg"},{brand:"VETEMENTS ",name:"Embroidered-logo denim cap",paused:!1,percentSaved:50,total:1500,url:"https://images.ctfassets.net/ljoz65y94szt/6V8mSNDehSzpxU1s5ylFZ5/401c5843ad19191257aef24b3bf03137/GRLFRND.jpg"},{brand:"ROKSANDA ",name:"Aulna floral-print silk-satin blouse",paused:!1,percentSaved:80,total:3e3,url:"https://images.ctfassets.net/ljoz65y94szt/7EAfiInQqobvWzWy94zF2J/d9e2f27f51c62482d9d3b94e63d87472/Loewe.jpg"},{brand:"ROKSANDA ",name:"Aulna floral-print silk-satin blouse",paused:!1,percentSaved:80,total:3e3,url:"https://images.ctfassets.net/ljoz65y94szt/7EAfiInQqobvWzWy94zF2J/d9e2f27f51c62482d9d3b94e63d87472/Loewe.jpg"}],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_REEL_PAUSE":return e.map(function(e){return e.name===t.name?(e.paused=!e.paused,e):e});default:return e}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"ALL",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_FILTER":return t.filter;default:return e}},j=r(81);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(r,!0).forEach(function(t){Object(j.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{type:"ALPHABETICAL",direction:"LOW-HIGH"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SORT_TYPE":return k({},e,{type:t.sort});case"UPDATE_SORT_DIRECTION":return k({},e,{direction:t.direction});default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SEARCH_QUERY":return t.query;default:return e}},H=Object(s.b)({reels:L,filter:R,sort:D,search:B}),U=Object(s.c)(H);l.a.render(n.a.createElement(c.a,{store:U},n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},83:function(e,t,r){e.exports=r(217)}},[[83,1,2]]]);
//# sourceMappingURL=main.0c435be7.chunk.js.map