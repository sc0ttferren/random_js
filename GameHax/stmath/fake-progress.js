//Fake progress lol

javascript:stcrap:var ex=prompt("How much (can be above 100%)");localStorage.setItem("lxs-8100:rndjs",ex);var wid=document.querySelector("tuxedo-app").children[0].children[1].shadowRoot.children[1].children[0].children[0].children[4].children[0].children[0].shadowRoot.children[1].children[1].children[0].style.width,originalScore=wid.substring(0,wid.length-1);function exa(){localStorage.getItem("lxs-8100:rndjs")==ex?document.querySelector("tuxedo-app").children[0].children[1].shadowRoot.children[1].children[0].children[0].children[4].children[0].children[1].children[0].shadowRoot.children[1].children[0].children[0].children[1].children[4].shadowRoot.children[1].children[3].children[0].children[0].innerHTML=ex+"% Completed":error("Script stopped. Running new ver")}document.querySelector("tuxedo-app").children[0].children[1].shadowRoot.children[1].children[0].children[0].children[4].children[0].children[0].shadowRoot.children[1].children[1].children[1].style.width=ex+"%",wid<new Number(ex)&&(document.querySelector("tuxedo-app").children[0].children[1].shadowRoot.children[1].children[0].children[0].children[4].children[0].children[0].shadowRoot.children[1].children[1].children[0].style.width=ex+"%"),setInterval(exa,10);
