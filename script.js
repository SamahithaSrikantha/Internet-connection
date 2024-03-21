let msg=document.getElementById("msg")
function U_online(){
msg.textContent="You are ONLINE"
msg.style.cssText= "color:green; background-color:rgb(170, 199, 172)"
}

function U_offline(){
    msg.textContent="You are OFFLINE"
    msg.style.cssText= "color:red; background-color:rgb(221, 164, 164)"
}
if (window.navigator.onLine){
U_online();
}
else{
    U_offline();
}

window.addEventListener("online",U_online);
window.addEventListener("offline",U_offline);
