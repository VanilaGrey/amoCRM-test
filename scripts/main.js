!function(){"use strict";const e=document.querySelector("input"),t=document.querySelector("button"),r=document.querySelector("span"),n=e=>{const t=setInterval((()=>{e--,r.innerHTML=e,0===e&&clearInterval(t)}),1e3)};e.addEventListener("input",(e=>{e.currentTarget.value=e.currentTarget.value.replace(/\D/g,"").replace(/(\d\d)/g,"$1:").replace(/:$/g,"")})),t.addEventListener("click",(()=>{const t=Number(e.value);n(t),e.value=" "}))}();