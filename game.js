
const getUserChoice=userInput=>{
    userInput=userInput.toLowerCase();
    if(userInput==='rock'){
      return userInput;
    }else if(userInput==='paper'){
      return userInput;
    }else{return userInput;}
  
  }
  let getComputerChoice=()=>{
   let rand=Math.floor(Math.random()*3); 
  if(rand===0){
    return "rock";
  }else if(rand===2){return "paper";}
  else{return "scissors";}
  }
  let determineWinner=(userChoice, computerChoice)=>{
     if(userChoice===computerChoice){
       return "The game is tie!";
     }
      if(userChoice==="rock"){
       if(computerChoice==="paper"){
         return "The computer won!";
     }else{return "The user won!";}
     }
  if(userChoice==="paper"){
    if(computerChoice==="rock"){
      return "The computer has won!"
    }else{return "The user has won!"}
  }
  if(userChoice==="scissors"){
    if(computerChoice==="paper"){
      return "The computer has won again!";
    }else{return "The user has won again!"}
  }
  }
  let playGame=()=>{
    var arr=["rock", "paper", "scissors"];
    var rand=Math.floor(Math.random()*3);
    for(var i=0; i<arr.length; i++){
      if(arr[i]==arr[rand]){
        var comparison=arr[i];
    }}
   var  userChoice=getUserChoice(comparison);
    let computerChoice=getComputerChoice();
   console.log(determineWinner(userChoice, computerChoice));
  }
  playGame();
  
  
  
  