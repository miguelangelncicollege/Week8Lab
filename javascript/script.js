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
	
		if (inputPlayer1 == "rock" && inputPlayer2 == "rock")
		{
			alert (player1 + " and " + player2 + " chose the same, this is a tie");
		}
		else if (inputPlayer1 == "paper" && inputPlayer2 == "paper")
		{
			alert (player1 + " and " + player2 + " chose the same, this is a tie");
		}
		else if (inputPlayer1 == "scissors" && inputPlayer2 == "scissors")
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
		
		
		
		
		
		
		/*if (inputPlayer1 && inputPlayer2 === "rock" && "rock" || "scissors" && "scissors" || "paper" && "paper"/*&& inputPlayer2 == "rock")
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
		*/
