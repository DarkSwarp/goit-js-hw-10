var e={fetchCountries:function(e){return fetch(`https://restcountries.com/v3.1/name/${e}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}};let t="";document.querySelector("input").addEventListener("keyup",(r=>{t=r.currentTarget.value,e.fetchCountries(t).then((e=>{})).catch((e=>{console.log(e)}))}));
//# sourceMappingURL=index.ff77e1f1.js.map
