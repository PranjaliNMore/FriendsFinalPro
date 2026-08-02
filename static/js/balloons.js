const container=document.getElementById("balloonContainer");

const counter=document.getElementById("counter");

let popped=0;

const surprises=[

"😂 You're awesome!",

"🌸 Keep smiling!",

"🍕 Virtual Pizza!",

"💖 Best Friend Ever!",

"🤣 You're amazing!",

"🎉 Friends Forever!",

"✨ You're Special!",

"🌈 Have a wonderful day!",

"😎 Certified Legend!",

"❤️ Smile!"

];

for(let i=0;i<10;i++){

const balloon=document.createElement("div");

balloon.className="balloon";

balloon.innerHTML="🎈";

balloon.onclick=function(){

alert(surprises[i]);

balloon.remove();

popped++;

counter.innerHTML=popped+" / 10 Popped";

if(popped===10){

confetti({

particleCount:300,

spread:180

});

counter.innerHTML=

"🎉 Amazing! You popped every balloon! ❤️";

setTimeout(function(){

smoothRedirect("/gift");

},2500);

}

}

container.appendChild(balloon);

}