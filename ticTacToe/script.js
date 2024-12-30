const resetBtn=document.querySelector('.reset-btn');
const gameBox=document.querySelector('.game');
const boxes=document.querySelectorAll('.box');
const msg=document.querySelector('.msg');

let turn=0;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


function disableBtns()
{
    for(box of boxes){
        box.disabled=true;
    }
    newGame();
}

function enableBtns()
{
    for(box of boxes){
        box.disabled=false;
        box.innerHTML='';
    }
}

function drawGame(){
    if(turn===9){
        msg.innerHTML="Game Draw";
        newGame(); 
    }
}

function newGame()
{
    resetBtn.innerHTML='New Game';
}


resetBtn.addEventListener('click',function(){
    turn=0;
    msg.innerHTML='';
    resetBtn.innerHTML='Reset Game';
    enableBtns();
});

gameBox.addEventListener('click',function(e){
    e.target.innerHTML=turn%2==0?'X':'O';
    e.target.disabled=true;
    turn++;
    checkWinner();
    drawGame();
})

function checkWinner(){
    for(pattern of winPattern){
        if((boxes[pattern[0]].innerHTML)==='X'&&boxes[pattern[1]].innerHTML==='X'&&boxes[pattern[2]].innerHTML==='X')
        {
            msg.innerHTML='Congratulations, Winner is X';
            disableBtns();
        }
        else if((boxes[pattern[0]].innerHTML)==='O'&&boxes[pattern[1]].innerHTML==='O'&&boxes[pattern[2]].innerHTML==='O')
        {
            msg.innerHTML='Congratulations, Winner is O';
            disableBtns();
        }
    }
}

