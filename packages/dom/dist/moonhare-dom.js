var e=function(e,n){return e+"{"+n+"}"};exports.render=function(n){document.head.appendChild(Object.assign(document.createElement("style"),{textContent:n.sheet.map(function(n){var t=n.a,r=e(n.s,n.p+":"+n.v);return t.forEach(function(n){return r+=e(n,r)}),r}).join("")}))};
//# sourceMappingURL=moonhare-dom.js.map
