let e=(e,t)=>e+"{"+t+"}",t=t=>{document.head.appendChild(Object.assign(document.createElement("style"),{textContent:t.sheet.map(({s:t,p:n,v:a,a:o})=>{let c=e(t,n+":"+a);return o.forEach(t=>c+=e(t,c)),c}).join("")}))};export{t as render};
//# sourceMappingURL=moonhare-dom.modern.js.map
