//Normal
javascript:{function t(){if(!document.getElementById("forkstyle")){let t=document.createElement("style");t.innerText="#pitchfork{animation:whee var(--speed) linear}@keyframes whee{0%{right:-100px}100%{right:calc(100vw + 100px)}}",t.id="forkstyle",(document.head||document.body||document.documentElement).appendChild(t)}let p=new Image;p.src=e(),document.body.appendChild(p),p.id="pitchfork",p.setAttribute("style",`
    position: fixed;
    bottom: ${5*Math.random()}px;
  `),p.style.setProperty("--speed","5s");let n=!0,o=!1;setTimeout(()=>{n=!1,p.remove()},5e3);let f=()=>{if(o)return;o=!0;let t=30*Math.random()+10,e=5*t;p.style.transition=`bottom ${e}ms ease-out`,p.style.bottom=`${t}px`,setTimeout(()=>{p.style.transition=`bottom ${e}ms ease-in`,p.style.bottom=5*Math.random()+"px",setTimeout(()=>o=!1,e)},e)};setTimeout(f,2e3+300*Math.random())}function e(){let t=["jlpfp","tjpfp","dlpfp","tlpft","lwpft","dlpfp","ibpft","dlpfp","lwpft","rrpfp","nipft","cspfp","nipfp","nkpft","tjpft","nipft","tlpfp","tlpft","nipft","ibpft","ibpfp","cspfp",];return`https://ssl.gstatic.com/chat/babble/ee/pf/${t[Math.floor(Math.random()*t.length)]}.gif`}(async()=>{for(let e=0;e<35;e++)t(),await new Promise(t=>setTimeout(t,20*Math.random()+20))})()}

//School (not developed yet)
