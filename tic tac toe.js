const buttons=document.querySelectorAll(".box");
const message=document.querySelector(".new-msg");
const startbtn=document.querySelector(".new-btn");
const restart=document.querySelector(".restart");
 turn0=true;
let count =0;
const winPatterns=[
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];
startbtn.addEventListener("click",()=>{
  startbtn.classList.add("hide");
 turn0=true;
enabled();
message.classList.add("hide");
});

restart.addEventListener("click",()=>{
turn0=true;
enabled();
message.classList.add("hide");
});

  const disabled=()=>{
    for(let button of buttons){
      button.disabled=true;
    }
  }

  const enabled=()=>{
    for(let button of buttons){
      button.disabled=false;
      button.innerText="";
    }
    count=0;
  }

 const msgFn=(msg)=>{
  message.innerText=`Congragulations winner is ${msg}`;
  message.classList.remove("hide");
  disabled();
  startbtn.classList.remove("hide");
 }

buttons.forEach((button)=>{
button.addEventListener("click",()=>{
  if(turn0){
    button.textContent="0";
    button.style.color="green"
    turn0=false;
  }else{
    button.textContent="X";
     button.style.color="red";
    turn0=true;
  }
  
  button.disabled=true;
  checkWinner();
  count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
  
});

const gameDraw = () => {
//   message.innerText = `Game was a Draw.`;
//  message.classList.remove("hide")
//   disabled();
  message.innerText="Game is draw";
  message.classList.remove("hide");
  disabled();
  startbtn.classList.remove("hide");
};


const checkWinner=()=>{
  for(let patterns of winPatterns){
  let pos1val=buttons[patterns[0]].innerText;
  let pos2val=buttons[patterns[1]].innerText;
  let pos3val=buttons[patterns[2]].innerText;

  if(pos1val!="" &&pos2val!="" &&pos3val!="") {
    if(pos1val===pos2val &&pos2val===pos3val){
      msgFn(pos1val);
      return true;
   
    }
  }
}
return false;
};

