const noBtn = document.getElementById("noBtn");

const yesBtn = document.getElementById("yesBtn");

const funnyTexts = [

"Are you sure? 😅",

"Think Again 😂",

"Nice Try 🤭",

"Not Happening 😎",

"Click YES ❤️",

"You Can't Catch Me 😜",

"Friendship Forever! 💖"

];

let textIndex = 0;

noBtn.addEventListener("mouseover", function(){

const x = Math.random() * (window.innerWidth - 180);

const y = Math.random() * (window.innerHeight - 100);

noBtn.style.position = "fixed";

noBtn.style.left = x + "px";

noBtn.style.top = y + "px";

noBtn.innerHTML = funnyTexts[textIndex];

textIndex++;

if(textIndex >= funnyTexts.length){

textIndex = 0;

}

});

yesBtn.addEventListener("click", function(){

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

setTimeout(function(){

smoothRedirect("/lucky_boxes");

},1200);

});