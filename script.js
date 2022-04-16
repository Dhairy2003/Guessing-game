document.querySelector('.right').style.color="yellow";
function message(message){document.querySelector(".message").textContent=message;}
function scoreupdate(sc){document.querySelector('.score').textContent=sc}
function highscore(high){document.querySelector('.highscore').textContent=high;}
function numberchange(number){document.querySelector('.number').textContent=number}
function far(a,b){
    let c=a-b;
    if(c<0)  message('📈 Too High!')
    if(c>0) message('📉 Too Low!')
}

var score= 10;
var highscor=0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener('click', function(){

    scoreupdate(score)
    if(score<=0){score=1;document.querySelector('body').style.background="red"; message("😨 YOU LOST!");}
   
    else{
     const guess=Number(document.querySelector(".guess").value);

     if(!guess) {message("⛔ No Number");score--;}
     
     else if(guess==secretNumber) {message("🎊 Correct number 🎉");
     document.querySelector('body').style.background="green";
     numberchange(secretNumber)
     if(highscor<score) highscor=score; highscore(highscor); }

     else {far(secretNumber,guess);score--; }
}})

document.querySelector('.again').addEventListener('click',function(){
    score=10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    message("Start guessing...")
    scoreupdate(score)
    numberchange("?")
    document.querySelector('body').style.background="rgb(23, 169, 214)";
})



