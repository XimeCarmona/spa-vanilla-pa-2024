!function(n){var e={};function t(a){if(e[a])return e[a].exports;var r=e[a]={i:a,l:!1,exports:{}};return n[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,a){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:a})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(a,r,function(e){return n[e]}.bind(null,r));return a},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var a=()=>'\n        <div class="Header-main">\n            <div class="Header-logo">\n                <h1 />\n                    <a href="/">\n                    SpaceX\n                    </a>  \n                </h1>\n            </div>\n        </div>\n    ';var r=async(n=null)=>{try{const e=await fetch("https://api.spacexdata.com/v5/launches"),t=await e.json();if(n){const e=t.find(e=>e.id===n);return e?(console.log(e),e):(console.log("No se encontró un elemento con el id: "+n),null)}return console.log(t),t}catch(n){return console.log("Fetch Error..!!",n),null}};var l=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var o=()=>'\n        <div class="Error404">\n            <h2> Error 404 </>\n         </div>   \n    ';var i=n=>"/"===n?n:"/:id";const c={"/":async()=>{const n=await r();console.log(n);return`\n        <div class="Characters">\n        ${n.map(n=>`\n            <article class="Character-item">\n                <a href="#/${n.id}">\n                    <img src="${n.links.patch.small}" alt="${n.name}">\n                    <h2>${n.name}</h2>\n                </a>\n            </article>\n        `).join("")}\n       `},"/:id":async()=>{const n=l();let e=await r(n);console.log(e);return`\n        <div class="Characters-inner">\n            <article class="Character-card">\n                <img src="${e.links.patch.small}" alt="${e.name}">\n                <h2>${e.name}</h2>\n            </article>\n\n            <article class="Characters-card">\n                <h3>Fallas:</h3>\n                <ul>\n                    ${e.failures.map(n=>`\n                        <li>\n                            Tiempo: ${n.time} segundos, \n                            Altitud: ${null!==n.altitude?n.altitude:"N/A"}, \n                            Razón: ${n.reason}\n                        </li>\n                    `).join("")}\n                </ul>\n                <h3>Detalles: <span>${e.details}</span></h3>\n                <h3>Numero de vuelo: <span>${e.flight_number}</span></h3>\n                <h3>Fecha y hora de despegue: <span>${e.date_utc}</span></h3>\n            </article>\n        </div> \n    `}};var s=async()=>{const n=document.getElementById("header"),e=document.getElementById("content");n.innerHTML=await a();let t=l(),r=await i(t),s=c[r]?c[r]:o;e.innerHTML=await s()};window.addEventListener("load",s),window.addEventListener("hashchange",s)}]);