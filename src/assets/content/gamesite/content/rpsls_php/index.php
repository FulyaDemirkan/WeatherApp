<?php 
	if(isset($_GET['reset']))  
		{
			header('Location: index.php');
		}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Rock Paper Scissors Lizard Spock</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--
		Name:Fulya Demirkan
		Date created: 25/July/2017
		Date updated: 16/August/2017
		Version: 1.1
		Description: This page contains a Rock Paper Scissors Lizard Spock game works on hybrid php and responsive to small and medium devices.
			
		For main page layout and responsiveness I used the template Ellen Bajcar shared with us.
		
		First section gives validation error because there is no header;
		**Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.
	-->
	<link href="https://fonts.googleapis.com/css?family=Baloo%7cChewy%7cFredoka+One%7cKaushan+Script%7cModak%7cPacifico%7cRock+Salt%7cRusso+One" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="http://gc.kis.v2.scr.kaspersky-labs.com/7B37347D-8510-7E40-9572-91875F13D1F9/main.js" charset="UTF-8"></script>
	<link rel="stylesheet" crossorigin="anonymous" href="http://gc.kis.v2.scr.kaspersky-labs.com/B6C874E9-D3FA-824B-BF65-3794B393B5FC/abn/main.css"/>
	<link href="../../css/games.css" rel="stylesheet" type="text/css">
	<link href="css/rpsls.css" rel="stylesheet" type="text/css">
</head>
<body>
	<header>
		<h3>Rock Paper Scissors Lizard Spock</h3>
	</header>
	<main>
		<section id="mainTag" class="result">
		<?php
			// placeholder image link token for player
			$player = "placeholder";
			// placeholder image link token for computer
			$computer = "placeholder";
			// phrase shows winning relation between two choices
			$phrase = "";
			
			if($_SERVER["REQUEST_METHOD"]=="GET" && isset($_GET["player"])) 
			{
				// sets player token to actual game token
				$player = $_GET["player"];

				// function computerPlay() generates a random token for computer
				function computerPlay()
				{
					// there are 5 different choices for both player and computer to choose. 
					$options = array("rock", "paper", "scissors", "lizard", "spock");
					// chose one of the 5 icons for computer randomly
					return $options[array_rand($options)];
				}
				
				// set computer to randomly generated token
				$computer = computerPlay();

				/*
					function CheckWinner($player, $computer) decides if game is a win, lose or tie according to player's and computer's choice	
				*/
				function checkWinner($player, $computer)
				{		
					// there are 2 winning conditions for every choice
					$winCombo = array
					(
						"paper" => array("spock", "rock"),
						"rock" => array("scissors", "lizard"),
						"scissors" => array("paper", "lizard"),
						"spock" => array("rock", "scissors"),
						"lizard" => array("spock", "paper")
					);
					// there are 2 winning relations for every choice
					$winPhrases = array
					(
						"paper" => array("disproves", "covers"),
						"rock" => array("crushes", "crushes"),
						"scissors" => array("cuts", "decapitates"),
						"spock" => array("vaporizes", "smashes"),
						"lizard" => array("poisons", "eats")
					);
					
					// if choices are same then game is declared as Tie.
					if ($computer == $player)
					{
						$phrase = "It's a Tie!";
						return $phrase;
					}
					// if computer's choise is NOT one of the 2 winning conditions described in winCombo[$player], then game is declared as computer'a win.
					// relation between choices and winning message appears.
					elseif (array_search($computer, $winCombo[$player], true) === false)
					{
						// retrieves the winning relations array for computer's token.
						$winP = $winPhrases[$computer];
						// retrieves the index for correct winning relation
						$index = array_search($player, $winCombo[$player], true);
						// winning message
						$phrase = "Computer Wins! <br> $computer $winP[$index] $player";
						return $phrase;
					}
					// if computer's choise is one of the 2 winning conditions described in winCombo[player] then game is declared as player's win.
					// relation between choices and winning message appears.
					elseif (array_search($computer, $winCombo[$player], true) >= 0)
					{
						// retrieves the winning relations array for player's token.
						$winP = $winPhrases[$player];
						// retrieves the index for correct winning relation
						$index = array_search($computer, $winCombo[$player], true);
						// winning message
						$phrase = "You Won! <br> $player $winP[$index] $computer";
						return $phrase;
					};
				}
			
				// sets game message with checkWinner function's returned parameter
				$phrase = checkWinner($player, $computer);
			}
		?>
				<form action="index.php" method="GET" >
					<table>
						<tr>
							<td><span>You</span></td>
							<td rowspan="2">vs</td>
							<td><span>Computer</span></td>
						</tr>
						<tr>
							<td>
								<?php
									// create img tag and set image according to the value of $player
									echo "<img class='token' id='playerBox' src='images/$player.png'  alt='player'>";
									// show $player's token name, if value of $computer is placeholder then display empty String
									if($player == "placeholder")
									{
										echo "";
									}
									else {
										echo "<br><p>$player</p>";
									}
								?>
							</td>
							<td>
								<?php 
									// create img tag and set image according to the value of $computer
									echo "<img class='token' id='computerBox' src='images/$computer.png'  alt='computer'>";
									// show $computer's token name, if value of $computer is placeholder then display empty String
									if($computer == "placeholder")
									{
										echo "";
									}
									else {
										echo "<br><p>$computer</p>";
									}
								?>
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<span>Your move!</span>
								<!-- When user selects one of the images, value of the image passes with GET method-->
								<button class="inputButton" type="submit" name="player" value="rock"><img class="token" src="images/rock.png" alt="rock"></button>
								<button class="inputButton" type="submit" name="player" value="paper"><img class="token" src="images/paper.png" alt="paper"></button>
								<button class="inputButton" type="submit" name="player" value="scissors"><img class="token" src="images/scissors.png" alt="scissors"></button>
								<button class="inputButton" type="submit" name="player" value="lizard"><img class="token" src="images/lizard.png" alt="lizard"></button>
								<button class="inputButton" type="submit" name="player" value="spock"><img class="token" src="images/spock.png" alt="spock"></button>
							</td>
						</tr>
						<tr>
							<td colspan="3">
								<?php
									// show game result message
									echo "<p>$phrase</p>";
								?>
							</td>
						</tr>
					</table>
				</form>			
		</section>	
		<form action="index.php" method="GET">
			<button class="greset" name="reset" value="reset" title="Click on the button to start a new game.">NEW GAME</button>
		</form>		
	</main>
	<nav>
		<button class="navBtn">stats</button>
		<button class="navBtn">help</button>
		<button class="navBtn">close</button>
	</nav>	
	<footer>
		<address>Fulya Demirkan, SYST10199 Web Programming &copy; Sheridan College</address>
		<small>ver.0.0.0</small>
	</footer>
	<section id="messg" class="stats">
		<h5>stats display here</h5>
		<p></p>
	</section>
	<section id="help" class="help">
		<h5>How To Play?</h5>
		<p>	* Rock crushes Scissors<br/>
			* Scissors cuts Paper<br/>
			* Paper covers Rock<br/>
			* Rock crushes Lizard<br/>
			* Lizard Poisons Spock<br/>
			* Spock smashes Scissors<br/>
			* Scissors decapitates Lizard<br/>
			* Lizard eats Paper<br/>
			* Paper Disproves Spock<br/>
			* Spock vaporizes Rock<br/><br/>
			<em>(Tap again to hide rules)</em>
		</p>
	</section>	
	<script src="js/rpsls.js"></script>	
</body>
</html>
