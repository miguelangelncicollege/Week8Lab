//var player = ["player1", "player2"]; //This is an array
var player1;
var player2;
var inputPlayer1;
var inputPlayer2;

function startButton()
{
	player1 = prompt ("Hello, Player 1, please enter your name");
	alert ("Thank you very much, " + player1);
	player2 = prompt ("Hello, Player 2, please enter your name");
	alert ("Thank you very much, " + player2);
	alert (player1 + " is going to compete against " + player2 + ", best of luck to everybody!");
}

function game()
{
	inputPlayer1 = prompt (player1 + " enter your choice of rock, scissors or paper.");
	inputPlayer2 = prompt (player2 + " enter your choice of rock, scissors or paper.");
	
		if (inputPlayer1 == inputPlayer2)
		{
			alert (player1 + " and " + player2 + " chose the same, this is a tie");
		}
		else if (inputPlayer1 == "rock" && inputPlayer2 == "scissors")
		{
			alert (inputPlayer1 + " wins against " + inputPlayer2 + ", " + player1 + " wins.");
		}
		
		else if (inputPlayer1 == "paper" && inputPlayer2 == "rock")
		{
			alert (inputPlayer1 + " wins against " + inputPlayer2 + ", " + player1 + " wins.");
		}
		
		else if (inputPlayer1 == "scissors" && inputPlayer2 == "paper")
		{
			alert (inputPlayer1 + " wins against " + inputPlayer2 + ", " + player1 + " wins.");
		}
		else
		{
			alert (player2 + " wins.");
		}
}			
		
		
/*I wanted to make the code cleaner than all the IF and IF ELSES. 
I tried first to say 		
		
		*if (inputPlayer1 && inputPlayer2 === "rock" && "rock" || "scissors" && "scissors" || "paper" && "paper"/*&& inputPlayer2 == "rock")
		{
			alert (player1 + " and " + player2 + " chose the same, this is a tie");
		}
		else 
		{
			alert ("Something else");
		}
		else if (inputPlayer1 == "rock" && inputPlayer2 == "scissors");
		{
			alert  (player1 + " wins");
		}
		else if (inputPlayer1 == "rock" && inputPlayer2 == "paper");
		{
			alert (player2 + " wins");
		}
		else if (inputPlayer1 == "paper" && inputPlaer2 == "rock");
		{
			alert (player1 + " wins");
		}
but it didn't work because it was always defaulting to "SOMETHING ELSE". 

So I decided to code it with all the IF and ELSE IF because I knew that it was going to work that way. 
I asked around and somebody mentioned that it was the INPUT that the players were entering the one that had to be the same for it to be a tie. 
I didn't get it because I thought that it meant the words I had. 
But no!, it was the inputPlayer1 and inputPlayer2!! and it makes sense because that variable is the one that we are declaring and the one
that the program is storing.

I am updating the program with that line and I will keep thinking about how to make the other IFS cleaner.
*/
