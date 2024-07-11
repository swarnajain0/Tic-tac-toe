const winPatterns = [ // array of winning patterns
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
  ];

let boxes=document.querySelectorAll(".box");
let turnO=true;
let count=0; // to find if game is a draw
let message=document.querySelector(".msg");


const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};


const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};


const gameDraw = () =>
{
  message.innerText=`It's a tie`;
  message.classList.remove("hide");
  disableBoxes();
}


const showWinner = (winner) => {
  message.innerText=`Congratulations! Player ${winner} won`
  message.classList.remove("hide");
  disableBoxes();
  }


const checkWinner = () => 
  {
    for(let pattern of winPatterns)
    {
      let pos1Val=boxes[pattern[0]].innerText;
      let pos2Val=boxes[pattern[1]].innerText;
      let pos3Val=boxes[pattern[2]].innerText;
  
      if (pos1Val!= "" && pos2Val!= "" && pos3Val!= "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) 
        {
          showWinner(pos1Val);
          return true;
        }
       }
    }
  }
  

boxes.forEach((box) => {
  box.addEventListener("click", () =>
  {
   if(turnO) // turn of player O
    {
      box.innerHTML= "O"
      turnO=false;
    }
    else{ // turn of player x
      box.innerHTML= "X"
      turnO=true;
    }

    box.disabled=true;
    count++;
    let isWinner= checkWinner();
    if(count===9 && ! isWinner)
    {
      let draw= gameDraw();
    }
  })
  })

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  message.classList.add("hide");
  };

document.querySelector(".resetBtn").addEventListener("click", resetGame);