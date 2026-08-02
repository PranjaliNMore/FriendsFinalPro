const message=

"Dear "+username+",\n\n"+

"Thank you for taking this little journey with me. ❤️\n\n"+

"I hope this surprise made you smile and reminded you how special you truly are.\n\n"+

"May our friendship continue to grow with countless beautiful memories.\n\n"+

"Stay happy, stay healthy, and never stop smiling. 🌸\n\n"+

"Happy Friendship Day! ❤️";

typeWriter("finalMessage",message,40);

// -------------------------
// Continuous Fireworks
// -------------------------

setInterval(function(){

confetti({

particleCount:120,

spread:180,

startVelocity:50,

origin:{

x:Math.random(),

y:Math.random()-0.2

}

});

},1200);

// -------------------------
// Heart Rain
// -------------------------

setInterval(function(){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.className="heart";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"%";

heart.style.top="-50px";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation="fall 6s linear";

heart.style.pointerEvents="none";

document.body.appendChild(heart);

setTimeout(function(){

heart.remove();

},6000);

},350);

// -------------------------
// Restart
// -------------------------

document.getElementById("restartBtn").onclick=function(){

window.location="/";

};

// -------------------------
// Music Player
// -------------------------

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", function () {

    if (music.paused) {

        music.play()
            .then(() => {
                musicBtn.innerHTML = "⏸ Pause Music";
            })
            .catch(err => {
                console.log("Music couldn't play:", err);
            });

    } else {

        music.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

});