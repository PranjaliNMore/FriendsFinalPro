const progress=document.querySelector(".progress");

const percent=document.getElementById("percentage");

const loadingText=document.getElementById("loadingText");

const messages=[

"💖 Preparing your surprise...",

"🎁 Collecting beautiful memories...",

"🌸 Adding a little magic...",

"✨ Decorating everything...",

"❤️ Almost Ready..."

];

let value=0;

let messageIndex=0;

const interval=setInterval(function(){

value++;

progress.style.width=value+"%";

percent.innerHTML=value+"%";

if(value%20===0 && messageIndex<messages.length){

loadingText.innerHTML=messages[messageIndex];

messageIndex++;

}

if(value>=100){

clearInterval(interval);

loadingText.innerHTML="🎉 Surprise Ready!";

setTimeout(function(){

smoothRedirect("/loginpage");

},1000);

}

},40);