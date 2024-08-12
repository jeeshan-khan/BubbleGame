
let gameboard = document.querySelector(".gameboard");
let scorediv = document.querySelector("#score");
let hitdiv = document.querySelector("#hit");
let timerdiv = document.querySelector("#timer");
let restartpopup = document.querySelector("#gameoverpopup");
let restartbutton = document.querySelector("#restartButton");
let hitvalue = Math.floor( Math.random()*10);
let welcomepopup =  document.querySelector("#welcomepopup");
let startbutton = document.querySelector("#startButton");
let timer = 60;
let score = 0;
let interval;

hitdiv.innerText = hitvalue;
timerdiv.innerText = timer;
scorediv.innerText = score;

function checkovertime()
{
    if (timer<=0)
        {
            clearInterval(interval);
            restartpopup.style.top = "50%";
            timer = 60;
        }
        
}

function timerfunction()
{
    checkovertime();
    timer--;
    timerdiv.innerText = timer;
}

function buttongenerator(number){
    let button = document.createElement("button");
    button.innerText = number;
    gameboard.appendChild(button);
    }
    function buttonfiller(){
    
    for (let i=1;i<180;i++)
        {
            let randomnumber = Math.floor( Math.random()*10);
            
            buttongenerator(randomnumber);
        }
}
gameboard.addEventListener("click", (e) =>{
    if (e.target.tagName == "BUTTON")
    {
        let buttonValue = e.target.innerText;
        if (buttonValue == hitvalue){
            score++;
            scorediv.innerText = score;
            hitvalue = Math.floor( Math.random()*10);
            hitdiv.innerText = hitvalue;
        }
        gameboard.innerHTML = "";
        buttonfiller();
    }
})
function restartgame()
{
    timer = 60;
    hitvalue = Math.floor( Math.random()*10);
    score = 0;
    scorediv.innerText = score;
    hitdiv.innerText = hitvalue;
    timerdiv.innerText = timer;
    restartpopup.style.top = "-50%";
    interval = setInterval(timerfunction, 1000);
}
restartbutton.addEventListener("click", restartgame);

startbutton.addEventListener("click" , ()=>
{
    buttonfiller();
    welcomepopup.style.top = "-50%";
    interval = setInterval(timerfunction, 1000);
})




