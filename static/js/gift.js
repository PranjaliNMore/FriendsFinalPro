const gift=document.getElementById("giftBox");

const surprise=document.getElementById("surpriseSection");

const giftSection=document.getElementById("giftSection");

const typing=document.getElementById("typing");

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

const continueBtn=document.getElementById("continueBtn");

const message=

"Dear "+username+",\n\n"+

"Thank you for being one of the most wonderful people in my life. ❤️\n\n"+

"Your kindness, your laughter, and every memory we've shared mean so much to me.\n\n"+

"I made this little surprise just for you because you truly deserve to feel special.\n\n"+

"Happy Friendship Day! 🌸❤️";

gift.onclick=function(){

gift.classList.add("openGift");

setTimeout(function(){

giftSection.style.display="none";

surprise.style.display="block";

typeWriter("typing",message,40);

launchSparkles();

},900);

};

// Play/Pause Music

musicBtn.onclick=function(){

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();

musicBtn.innerHTML="▶ Play Music";

}

};

// Continue

continueBtn.onclick=function(){

smoothRedirect("/compliments");

};

// Sparkles

function launchSparkles(){

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"%";

star.style.top=Math.random()*100+"%";

star.style.fontSize=(15+Math.random()*20)+"px";

star.style.pointerEvents="none";

document.body.appendChild(star);

setTimeout(()=>{

star.remove();

},2000);

}

}