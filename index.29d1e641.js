!function(){var t={fetchCountries:function(t){return fetch("".concat("https://restcountries.com/v3.1/name/").concat(t)).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()}))}};var n="";document.querySelector("input").addEventListener("keyup",(function(e){n=e.currentTarget.value,t.fetchCountries(n).then((function(t){})).catch((function(t){console.log(t)}))}))}();
//# sourceMappingURL=index.29d1e641.js.map
