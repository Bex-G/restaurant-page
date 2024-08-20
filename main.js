(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>x});var o=n(81),r=n.n(o),i=n(645),a=n.n(i),c=n(667),d=n.n(c),s=new URL(n(640),n.b),l=new URL(n(136),n.b),p=new URL(n(966),n.b),u=new URL(n(305),n.b),m=new URL(n(212),n.b),h=a()(r()),f=d()(s),g=d()(l),b=d()(p),C=d()(u),v=d()(m);h.push([e.id,`* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n@font-face {\n  font-family: "MyFont";\n  src: url(${f}) format("woff2"),\n    url(${g}) format("woff");\n  font-weight: 600;\n  font-style: normal;\n}\n\nbody {\n  font-family: "MyFont";\n  background-color: black;\n}\n\n.header-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.header-container img {\n  height: 100px;\n  margin-top: 5px;\n}\n\n.menu-name {\n  font-size: 4rem;\n}\n\n#tabContainer {\n  display: flex;\n  justify-content: flex-end;\n  background-color: rgb(215, 215, 205);\n}\n\n.tabs {\n  color: black;\n  font-family: "MyFont";\n  font-size: 1.5rem;\n  padding: 5px 20px;\n  text-align: center;\n  border: none;\n}\n\n#activeTab {\n  background-color: rgb(240, 240, 230);\n}\n\n#inactiveTab {\n  background-color: rgb(215, 215, 205);\n}\n\nbutton {\n  cursor: pointer;\n}\n\n.citation {\n  font-size: 0.8rem;\n  text-align: center;\n  padding: 5px;\n  color: white;\n}\n\n/* homePage */\n\n#homePage {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(${b});\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: top;\n  text-align: center;\n  font-size: 2rem;\n  color: white;\n}\n\n#logoContainer {\n  display: flex;\n  justify-content: center;\n  font-size: 5rem;\n  margin-bottom: 30px;\n}\n\n#logoContainer img {\n  height: 100px;\n  filter: invert(100%);\n}\n\n#welcome {\n  padding: 30px;\n}\n\n#buttonContainer {\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  margin-top: 50px;\n}\n\n.menuButton {\n  padding: 10px;\n  border-radius: 4px;\n  border-style: none;\n  font-family: "myFont";\n  font-size: 2rem;\n  background-color: goldenrod;\n}\n\n/* drink menu */\n\n#pageOne {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(${C});\n  background-size: 725px;\n  background-repeat: no-repeat;\n  background-position: right;\n  font-size: 1.5rem;\n}\n\n#drinkMenuContainer {\n  background-color: rgb(240, 240, 230);\n  height: 100%;\n  width: 55%;\n}\n\n#tableContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 15px;\n  padding: 15px;\n}\n\nth {\n  height: 50px;\n  color: goldenrod;\n}\n\n.row {\n  height: 45px;\n}\n\n.drink-size {\n  letter-spacing: 0.1rem;\n}\n\n/* food menu */\n\n#pageTwo {\n  height: 100vh;\n  width: 100vw;\n  background-image: url(${v});\n  background-repeat: no-repeat;\n  background-position: right;\n}\n\n#foodMenuContainer {\n  background-color: rgb(240, 240, 230);\n  height: 100%;\n  width: 55%;\n}\n\n#foodList {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 3fr 1fr;\n  grid-template-rows: repeat(5, 1fr);\n  row-gap: 20px;\n  align-items: center;\n  padding: 15px;\n  margin-top: 25px;\n}\n\n.menu-left {\n  grid-column: 1 / 2;\n}\n\n.menu-right {\n  grid-column: 2 / 3;\n}\n\n.food-item {\n  font-weight: bold;\n  font-size: 2rem;\n  color: goldenrod;\n}\n\n.food-description,\n.food-price {\n  font-size: 1.5rem;\n}\n`,""]);const x=h},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(a[d]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);o&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),t.push(l))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},a=[],c=0;c<e.length;c++){var d=e[c],s=o.base?d[0]+o.base:d[0],l=i[s]||0,p="".concat(s," ").concat(l);i[s]=l+1;var u=n(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=r(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var d=o(e,r),s=0;s<i.length;s++){var l=n(i[s]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}i=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},305:(e,t,n)=>{e.exports=n.p+"f65809f756276fff752a.jpg"},966:(e,t,n)=>{e.exports=n.p+"1de52549bedca662f984.jpg"},136:(e,t,n)=>{e.exports=n.p+"a8a37ac490030890f91c.woff"},640:(e,t,n)=>{e.exports=n.p+"a8a37ac490030890f91c.woff"},212:(e,t,n)=>{e.exports=n.p+"ac138c2d0ccb020823ed.jpg"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),r=n.n(o),i=n(569),a=n.n(i),c=n(565),d=n.n(c),s=n(216),l=n.n(s),p=n(589),u=n.n(p),m=n(28),h={};h.styleTagTransform=u(),h.setAttributes=d(),h.insert=a().bind(null,"head"),h.domAPI=r(),h.insertStyleElement=l(),t()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;const f=n.p+"706ba9f19dd2f99fc385.png",g=[{item:"stuffed eggs",description:"prepared in the style of the devil",price:"1 firstborn"},{item:"leafy green salad",description:"freshly forraged by a strange man in the woods",price:"4 copper"},{item:"countryman's platter",description:"a fine assortment of bread, cheese, nuts and fruits",price:"6 copper"},{item:"meat stew",description:"a hearty stew of roast beast and root vegetables",price:"1 silver"},{item:"nutty butter cake",description:"a rich cake with candied nuts and jam",price:"your figure"}],b=function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","pageTwo");const n=document.createElement("div");n.setAttribute("id","foodMenuContainer");const o=document.createElement("div");o.setAttribute("id","tabContainer");const r=document.createElement("button");r.setAttribute("id","inactiveTab"),r.setAttribute("class","tabs"),r.textContent="drink",r.addEventListener("click",(()=>{e.removeChild(t),e.removeChild(l),E()}));const i=document.createElement("button");i.setAttribute("id","activeTab"),i.setAttribute("class","tabs"),i.textContent="food",o.appendChild(r),o.appendChild(i),n.appendChild(o);const a=document.createElement("div");a.setAttribute("class","header-container");const c=document.createElement("img");c.src=f,c.setAttribute("id","icon"),a.appendChild(c);const d=document.createElement("h1");d.setAttribute("class","menu-name"),d.textContent="PROVISIONS",a.appendChild(d),n.appendChild(a);const s=document.createElement("div");s.setAttribute("id","foodList");for(let e=0;e<g.length;e++){let t=document.createElement("div");t.setAttribute("class","menu-left");let n=document.createElement("p");n.setAttribute("class","food-item"),n.textContent=g[e].item;let o=document.createElement("p");o.setAttribute("class","food-description"),o.textContent=g[e].description,t.appendChild(n),t.appendChild(o),s.appendChild(t)}for(let e=0;e<g.length;e++){let t=document.createElement("div");t.setAttribute("class","menu-right");let n=document.createElement("p");n.setAttribute("class","food-price"),n.textContent="cost: "+g[e].price,t.appendChild(n),s.appendChild(t)}n.appendChild(s),t.appendChild(n),e.appendChild(t);const l=document.createElement("div");l.setAttribute("class","citation"),l.textContent="image from https://www.diceanddragons.com/post/a-feast-for-adventurers-the-100-fantastical-foods-you-can-order-from-a-tavern",e.appendChild(l)},C=[{item:"latté",small:"$3.25",large:"$4.00"},{item:"americano",small:"$2.75",large:"$3.50"},{item:"mocha",small:"$3.75",large:"$4.50"},{item:"cappuccino",small:"$3.00",large:"$3.50"},{item:"chai",small:"$3.00",large:"$3.75"},{item:"hot chocolate",small:"$3.25",large:"$4.00"}],v=[{item:"cold brew",small:"$3.75",large:"$4.25"},{item:"iced tea",small:"$2.50",large:"$3.00"},{item:"italian soda",small:"$3.00",large:"$3.75"},{item:"lemonade",small:"$3.00",large:"$3.75"},{item:"fresh orange juice",small:"$4.00",large:"$5.00"}],x=[{item:"doppio espresso",price:"$1.75"},{item:"cortado",price:"$2.25"},{item:"macchiato",price:"$3.25"}],y=[{item:"add flavor",price:"$0.50"},{item:"add doubleshot",price:"$0.75"}],E=function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","pageOne");const n=document.createElement("div");n.setAttribute("id","drinkMenuContainer");const o=document.createElement("div");o.setAttribute("id","tabContainer");const r=document.createElement("button");r.setAttribute("id","activeTab"),r.setAttribute("class","tabs"),r.textContent="drink";const i=document.createElement("button");i.setAttribute("id","inactiveTab"),i.setAttribute("class","tabs"),i.textContent="food",i.addEventListener("click",(()=>{e.removeChild(t),e.removeChild(L),b()})),o.appendChild(r),o.appendChild(i),n.appendChild(o);const a=document.createElement("div");a.setAttribute("class","header-container");const c=document.createElement("img");c.src=f,a.appendChild(c);const d=document.createElement("h1");d.setAttribute("class","menu-name"),d.textContent="LIBATIONS",a.appendChild(d),n.appendChild(a);const s=document.createElement("div");s.setAttribute("id","tableContainer");const l=document.createElement("table"),p=document.createElement("tr"),u=document.createElement("th");u.textContent="hot or iced";const m=document.createElement("th");m.textContent="12 oz";const h=document.createElement("th");h.textContent="16 oz",p.appendChild(u),p.appendChild(m),p.appendChild(h),l.appendChild(p);for(let e=0;e<C.length;e++){let t=l.insertRow();t.setAttribute("class","row"),t.insertCell().textContent=C[e].item;let n=t.insertCell();n.setAttribute("class","drink-size"),n.textContent=C[e].small;let o=t.insertCell();o.setAttribute("class","drink-size"),o.textContent=C[e].large}s.appendChild(l);const g=document.createElement("table"),E=document.createElement("tr"),w=document.createElement("th");w.textContent="served over ice";const A=document.createElement("th");A.textContent="12 oz";const k=document.createElement("th");k.textContent="16 oz",E.appendChild(w),E.appendChild(A),E.appendChild(k),g.appendChild(E);for(let e=0;e<v.length;e++){let t=g.insertRow();t.setAttribute("class","row"),t.insertCell().textContent=v[e].item;let n=t.insertCell();n.setAttribute("class","drink-size"),n.textContent=v[e].small;let o=t.insertCell();o.setAttribute("class","drink-size"),o.textContent=v[e].large}s.appendChild(g);const $=document.createElement("table");$.setAttribute("id","espressoTable");const T=document.createElement("tr"),z=document.createElement("th");z.textContent="keep it classic",T.appendChild(z),$.appendChild(T);for(let e=0;e<x.length;e++){let t=$.insertRow();t.setAttribute("class","row"),t.insertCell().textContent=x[e].item;let n=t.insertCell();n.setAttribute("class","drink-size"),n.textContent=x[e].price}s.appendChild($);const M=document.createElement("table");M.setAttribute("id","addOnTable");const j=document.createElement("tr"),I=document.createElement("th");I.textContent="extras",j.appendChild(I),M.appendChild(j);for(let e=0;e<y.length;e++){let t=M.insertRow();t.setAttribute("class","row"),t.insertCell().textContent=y[e].item;let n=t.insertCell();n.setAttribute("class","drink-size"),n.textContent=y[e].price}s.appendChild(M),n.appendChild(s),t.appendChild(n),e.appendChild(t);const L=document.createElement("div");L.setAttribute("class","citation"),L.textContent="image from https://www.enterthearcverse.com/post/101-d-d-tavern-ideas",e.appendChild(L)};!function(){const e=document.getElementById("content"),t=document.createElement("div");t.setAttribute("id","homePage");const n=document.createElement("p");n.setAttribute("id","welcome"),n.textContent="Welcome, weary traveler, to the";const o=document.createElement("div");o.setAttribute("id","logoContainer");const r=document.createTextNode("Black ");o.appendChild(r);const i=document.createElement("img");i.src=f,o.appendChild(i);const a=document.createTextNode("at Café");o.appendChild(a),e.appendChild(o);const c=document.createElement("p");c.textContent="Might I offer you...";const d=document.createElement("div");d.setAttribute("id","buttonContainer");const s=document.createElement("button");s.setAttribute("class","menuButton"),s.textContent="something to drink",s.addEventListener("click",(()=>{e.removeChild(t),e.removeChild(p),E()})),d.appendChild(s);const l=document.createElement("button");l.setAttribute("class","menuButton"),l.textContent="something to eat",l.addEventListener("click",(()=>{e.removeChild(t),e.removeChild(p),b()})),d.appendChild(l),t.appendChild(n),t.appendChild(o),t.appendChild(c),t.appendChild(d);const p=document.createElement("div");p.setAttribute("class","citation"),p.textContent="background by Stéphane Juban Unsplash + icon by juicy_fish on flaticon",e.appendChild(t),e.appendChild(p)}()})()})();