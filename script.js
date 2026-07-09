// ==========================
// START SURPRISE
// ==========================

function startSurprise(){

    document.getElementById("welcome").style.display="none";

    document.getElementById("main").style.display="block";

    const music=document.getElementById("music");

    if(music){
        music.play().catch(()=>{
            console.log("Autoplay blocked until user interaction.");
        });
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// ==========================
// OPEN GIFT
// ==========================

function openGift(){

    const letter=document.getElementById("letter");

    letter.style.display="block";

    letter.scrollIntoView({
        behavior:"smooth"
    });

    launchConfetti();

}

// ==========================
// CONFETTI
// ==========================

function launchConfetti(){

    for(let i=0;i<120;i++){

        let confetti=document.createElement("div");

        confetti.className="confetti";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.animationDuration=
        (Math.random()*3+2)+"s";

        confetti.style.backgroundColor=
        ["gold","white","#FFD700","#ffcc00","#fff"][Math.floor(Math.random()*5)];

        document.body.appendChild(confetti);

        setTimeout(()=>{
            confetti.remove();
        },5000);

    }

}

// ==========================
// HEARTS
// ==========================

setInterval(()=>{

    let heart=document.createElement("div");

    heart.innerHTML="❤";

    heart.style.position="fixed";

    heart.style.left=Math.random()*100+"vw";

    heart.style.bottom="-30px";

    heart.style.color="gold";

    heart.style.fontSize=(20+Math.random()*20)+"px";

    heart.style.pointerEvents="none";

    heart.style.animation="floatHeart 6s linear";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

},600);

// ==========================
// FLOAT HEART ANIMATION
// ==========================

const style=document.createElement("style");

style.innerHTML=`

.confetti{

position:fixed;

width:10px;

height:10px;

top:-20px;

animation:fall linear forwards;

z-index:9999;

}

@keyframes fall{

to{

transform:translateY(110vh) rotate(720deg);

}

}

@keyframes floatHeart{

0%{

transform:translateY(0);

opacity:1;

}

100%{

transform:translateY(-110vh);

opacity:0;

}

}

`;

document.head.appendChild(style);

// ==========================
// FINAL MESSAGE
// ==========================

setTimeout(()=>{

    console.log("Happy Birthday Vihaan ❤️");

},3000);