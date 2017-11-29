var p1button=  document.querySelector("#button1")
var p2button=  document.querySelector("#button2")
var reset=  document.querySelector("#reset")
var p1display=document.querySelector(".p1score")
var p2display=document.querySelector(".p2score")
var winningscoreDisplay = document.querySelector("#playingnumber");
var numinput = document.querySelector("input");
var winningmessage=document.querySelector("#winningmessage");
var p1score=0; var p2score=0; var winningScore=5; var gameOver=false;


p1button.addEventListener("click",function(){
    if(!gameOver){
    p1score++;
    if(p1score===winningScore){
        gameOver=true;
        p1display.classList.add("winner");
        winningmessage.textContent="Player 1 Wins !!!";
        winningmessage.classList.add("winner");
    }
    p1display.textContent=p1score;
     console.log(p1score)}
})

p2button.addEventListener("click",function(){
    if(!gameOver){
        p2score++;
        if(p2score===winningScore){
            gameOver=true;
            p2display.classList.add("winner");
            winningmessage.textContent="Player 2 Wins !!!";
            winningmessage.classList.add("winner");
        }
        p2display.textContent=p2score;
         console.log(p2score)}
})

reset.addEventListener("click",resetvalue)

function resetvalue(){
    p1score=0; p2score=0; p1display.textContent=0; p2display.textContent=0;
    p1display.classList.remove("winner"); p2display.classList.remove("winner");
    winningmessage.textContent="";winningmessage.classList.remove("winner");
    gameOver=false;
};


numinput.addEventListener("change",function(){
    winningscoreDisplay.textContent=this.value;
    winningScore=Number(this.value);
    resetvalue();
})


