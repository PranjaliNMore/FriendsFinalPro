// ============================
// Show / Hide Password
// ============================

function togglePassword(){

const input=document.getElementById("password");

if(input.type==="password"){

input.type="text";

}else{

input.type="password";

}

}

// ============================
// Lock Animation
// ============================

const lock=document.querySelector(".lock-icon");

if(lock){

setInterval(function(){

lock.animate([

{transform:"rotate(0deg)"},

{transform:"rotate(-10deg)"},

{transform:"rotate(10deg)"},

{transform:"rotate(0deg)"}

],{

duration:600

});

},5000);

}