var rollDice;
rollDice=prompt("How many Times wanna roll the Dice: ", 10);
var i;
for( i=1;i<rollDice;i++){
var randomNumber = Math.ceil((Math.random()*6));
if (randomNumber==6){
    console.log("No. of times dice rolled is: "+ i);
    document.writeln(i);
}

}