javascript:const colors=["#ffbf00","red","green","blue","yellow","purple","orange","white","gray","lime"];function addLight(){let o=document.createElement("div"),e=colors[Math.floor(Math.random()*colors.length)];Object.assign(o.style,{position:"absolute",width:"10px",height:"10px",borderRadius:"50%",backgroundColor:e,boxShadow:`0px 0px 10px 3px ${e}`}),Object.assign(o.style,{left:Math.floor(Math.random()*window.innerWidth)+"px",top:Math.floor(Math.random()*window.innerHeight)+"px"}),o.onclick=function(){o.remove();for(let t=0;t<50;t++){let $=document.createElement("div"),p=360*Math.random(),l=40*Math.random(),n=l*Math.cos(p),i=l*Math.sin(p),s=parseInt(o.style.left)+n,x=parseInt(o.style.top)+i;Object.assign($.style,{position:"absolute",width:"20px",height:"20px",borderRadius:"50%",backgroundColor:e,boxShadow:`0px 0px 10px 5px ${e}`,left:o.style.left,top:o.style.top,transition:"all 1000ms ease-out"}),document.body.appendChild($),setTimeout(function(){Object.assign($.style,{left:s+"px",top:x+"px",opacity:0,boxShadow:`0px 0px 30px 5px ${e}, 0px 0px 50px 10px ${e}`}),setTimeout(function(){$.remove()},1e3)},0)}},document.body.appendChild(o),setTimeout(()=>{o.style.opacity=0,o.style.transition="opacity 1s ease-out",o.style.boxShadow=`0px 0px 30px 5px ${e}, 0px 0px 50px 10px ${e}`,setTimeout(()=>o.remove(),1e3)},Math.floor(5e3*Math.random())+1e3)}setInterval(addLight,200);

//Click the lights, they explode.  This is a basic edition of it.