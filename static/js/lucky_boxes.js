// ==========================
// Lucky Gift Box Game
// ==========================

// Random correct box

const winningBox =
Math.floor(Math.random()*4)+1;

const funnyMessages=[

"😂 Oops! Better luck next time!",

"🍕 You won a virtual pizza!",

"🤣 Try another gift!",

"😜 That box was empty!",

"🎈 Only happiness inside!",

"😂 Nice choice... but not this one!"

];

let finished=false;

function checkGift(box){

if(finished) return;

const result=document.getElementById("result");

if(box===winningBox){

finished=true;

confetti({

particleCount:250,

spread:180,

origin:{y:.6}

});

result.innerHTML=

"🎉 Congratulations!<br>You found the real surprise ❤️";

setTimeout(function(){

smoothRedirect("/balloons");

},2500);

}

else{

const random=

funnyMessages[

Math.floor(

Math.random()*funnyMessages.length

)

];

result.innerHTML=random;

}

}