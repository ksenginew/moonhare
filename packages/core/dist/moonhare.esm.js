var r=["^:h","^:f","^:a"],n=["^@media"],e=function r(n,e){void 0===e&&(e="{:}");var t=[],a=function(a){var o=n[a],u=function(r){null!=r&&(a=a.replace(/[A-Z]/g,"-$&").toLowerCase()),t.push({s:e,p:a,v:r+"",a:[]})};if(Array.isArray(o))o.map(u);else if("@"==a[0])r(o,"k"==a[1]?"":e).forEach(function(r){r.a.push(a),t.push(r)});else if("object"==typeof o){var i=e?e.replace(/([^,])+/g,function(r){return c=a,a.replace(/(^:.*)|([^,])+/g,function(n){return/&/.test(n)?(c=a,n.replace(/&/g,r)):(c=a,r?r+" "+n:n)})}):a;t=t.concat(r(o,i))}else u(o);c=a};for(var c in n)a(c);return t},t=function(t,a){void 0===t&&(t=r),void 0===a&&(a=n);var c=0,o=[],u=o.push,i={};return{render:function(r){return e(r).map(function(r){var n=r.s,e=r.a,o=n+r.p+r.v+e;if(!i[o]){var f=r.c="_"+(c++).toString(36);r.r=function(r,n){var e=0;return r.forEach(function(r,t){n.forEach(function(n,a){r&&r.match(n)&&(e+=(a+1)*(t+1))})}),e}(e,a),r.r=function(r,n){var e=0;return n.forEach(function(n,t){r.match(n)&&(e+=t+1)}),e}(n.replace(/^\{:\}/,""),t),r.s=n.replace(/{:}/g,"."+f),u(r),i[o]=f}return i[o]}).join(" ")},cache:i,sheet:o,listen:function(r){return u=r}}},a=t(),c=a.render,o=a.sheet;export{c as render,t as setup,o as sheet};
//# sourceMappingURL=moonhare.esm.js.map
