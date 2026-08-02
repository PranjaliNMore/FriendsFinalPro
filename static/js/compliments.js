const compliments=[

username+", you're my favorite human. ❤️",

username+", you're officially the Best Friend Award Winner! 🏆",

username+", friendship with you is my favorite adventure. 🌍",

username+", you make every day brighter. ☀️",

username+", you're one of the kindest people I've ever met. 🌸",

username+", you're a limited edition person. ✨",

username+", you deserve unlimited happiness. 💖",

username+", thank you for always being there. ❤️",

username+", you're the reason so many memories are unforgettable. 📸",

username+", you're simply amazing. 😊"

];

const box=document.getElementById("complimentBox");

const btn=document.getElementById("complimentBtn");

const finalBtn=document.getElementById("finalBtn");

btn.onclick=function(){

const random=

compliments[

Math.floor(

Math.random()*compliments.length

)

];

box.style.transform="scale(.9)";

setTimeout(function(){

box.innerHTML=random;

box.style.transform="scale(1)";

},200);

};

finalBtn.onclick=function(){

smoothRedirect("/final");

};