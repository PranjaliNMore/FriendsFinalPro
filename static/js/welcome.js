const username = document.querySelector(".name").innerText;

const message =

"Hello " + username + " ❤️\n\n" +

"I've been waiting for you.\n\n" +

"This little website wasn't made for everyone...\n\n" +

"It was created especially for YOU.\n\n" +

"I hope it makes you smile today. 🌸\n\n" +

"Whenever you're ready...\n\n" +

"Let's begin our little adventure together. ✨";

typeWriter("typingText", message,40);

// ============================
// MUSIC
// ============================

const music=document.getElementById("music");

const musicBtn=document.getElementById("musicBtn");

musicBtn.onclick=function(){

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();

musicBtn.innerHTML="▶ Play Music";

}

}

// ============================
// START BUTTON
// ============================

document.getElementById("startBtn").onclick=function(){

smoothRedirect("/question");

}