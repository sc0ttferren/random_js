//This uses localStorage to set it to the last name.  IDK Why, but it took forever for me to make this..
var STMath={},lastCustomName=localStorage.getItem("fake-stmath-name");function newName(){var e=prompt("Last username ("+lastCustomName+" Restored (or set). What do you want to do: {Set | Continue } (say it exactly how i did)");if("Set"==e|"set"==e|"SET"==e|"Set."==e){var r=prompt("What name?");STMath.Editor(r)}}console.log(lastCustomName),!lastCustomName&document.querySelectorAll("span")[0]&&(lastCustomName=document.querySelectorAll("span")[0].innerHTML),STMath.Editor=function(e){var r=document.querySelectorAll("span")[0];r&&(r.innerHTML=e);var t=document.querySelector("tuxedo-app").children[0].children[1].shadowRoot.children[1].children[0].children[0].children[2].children[0].children[1].children[0].shadowRoot.children[1].children[0].children[0].children[1].children[3].shadowRoot.children[1].children[0].children[0].children[0].children[0],n=document.querySelector("tuxedo-app").children[0].children[1].shadowRoot.children[1].children[0].children[0].children[2].children[0].children[1].children[0].shadowRoot.children[1].children[0].children[0].children[1].children[0].children[0];n&&(n.innerHTML=e),t&&(t.textContent="Teacher Id"),localStorage.setItem("fake-stmath-name",e)},STMath.Editor(lastCustomName),setTimeout(newName,250);
