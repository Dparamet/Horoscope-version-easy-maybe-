let player = 3;
//input value on Player
//Rock = 0 Paper = 1 Scissors = 2

let computer = 0;
let result = "";

        //Rock = 0 Paper = 1 Scissors = 2
const choice = ["Rock","Paper","Scissors"]

//Computer Random System
computer = Math.floor(Math.random()*3);


//Player & Computer Setting System Winner 

if(player == 0 && computer == 2) //Rock Scissors
{
    result = "Player Won!!";
    
}else if(player == 0 && computer == 1) //Rock Paper
{
     result = "Computer Won!!";
}else if (player == 0 && computer == 0)//Rock Rock
{
     result = "Player & Computer Tie!?";
}else if(player == 1 && computer == 2) //Paper Scissors
{
     result = "Computer Won!!";
}else if(player == 1 && computer == 1) //Paper Paper
{
     result = "Player & Computer Tie!?";
}else if(player == 1 && computer == 0) //Paper Rock
{
     result = "Player Won!!";

}else if(player == 2 && computer == 2) //Scissors Scissors
{
     result = "Player & Computer Tie!?";
}else if(player == 2 && computer == 1)  //Scissors Paper
{
     result = "Player Won!!";
    
}else if(player == 2 && computer == 0)  //Scissors Rock
{
     result = "Computer Won!!";

}
else
{
    console.log("Please Try Again!");
}


console.log("  Rock Paper Scissors! ")
console.log("+-------------------------------------------+")
console.log("| Player Pick : "+ choice[player] );
console.log("| Computer Pick : "+ choice[computer]);
console.log("| Result : "+ result);
console.log("+-------------------------------------------+")