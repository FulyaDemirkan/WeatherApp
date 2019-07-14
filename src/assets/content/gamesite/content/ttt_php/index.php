<?php
	session_start();
?>
<?php
	if(isset($_GET['close']))  
		{
			session_destroy();
			header('Location: ../../index.php');
		}
	if(isset($_POST['reset']))  
		{
			session_destroy();
			header('Location: index.php');
		}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Tic Tac Toe</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<!--
		Author: F. Fulya Demirkan
		Date created: 06/August/2017
		Date updated: 16/August/2017
		Version: 1.1
		Description:
			A two-player game. 
			The players are presented with a board of three-by-three table and a reset button.
			The reset button starts a game where players take turns selecting one of the nine available cells
			with the goal of completing a row, a column, or a diagonal to win the game.			
			
		For main page layout and responsiveness I used the template Ellen Bajcar shared with us.
		
		First section gives validation error because there is no header;
		**Warning: Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections.
	-->
	<link href="https://fonts.googleapis.com/css?family=Baloo%7cChewy%7cFredoka+One%7cKaushan+Script%7cModak%7cPacifico%7cRock+Salt%7cRusso+One" rel="stylesheet" type="text/css">
	<script type="text/javascript" src="http://gc.kis.v2.scr.kaspersky-labs.com/7B37347D-8510-7E40-9572-91875F13D1F9/main.js" charset="UTF-8"></script>
	<link rel="stylesheet" crossorigin="anonymous" href="http://gc.kis.v2.scr.kaspersky-labs.com/B6C874E9-D3FA-824B-BF65-3794B393B5FC/abn/main.css"/>
	<link href="../../css/games.css" rel="stylesheet" type="text/css">
	<link href="css/ttt.css" rel="stylesheet" type="text/css">
</head>
<body>
	<header>
		<h3>Tic Tac Toe</h3>
	</header>
	<main>
	<!-- flex container for main game screen & buttons -->
		<section id="mainTag" class="result">
				<?php
					// array for holding game variables
					$context = array();

					if(isset($_SESSION['player']))
					{
						$context['player'] = $_SESSION['player'];
					}
					
					if(!isset($context['player'])) 
					{
						$context['player'] = "X"; // X starts the game
						//SESSION variables
						$_SESSION['board']  = array(" ", " ", " ", " ", " ", " ", " ", " ", " ");// current cell values on the board array
						$_SESSION['gameOver']  = 0; // 0: no winner, 1: game is over
						$_SESSION['empty']  = 9; // total number of empty cells
						$_SESSION['message']  = " "; // game message
						$_SESSION['winCombo'] = array(
												array(0,1,2), array(3,4,5), array(6,7,8), 
												array(0,3,6), array(1,4,7), array(2,5,8), 
												array(0,4,8), array(2,4,6)
												); // possible winning conditions - 3 row, 3 column, 2 diagonal
					}
					//game variables
					$context['gameOver'] = $_SESSION['gameOver'];
					$context['board'] = $_SESSION['board'];
					$context['winCombo'] = $_SESSION['winCombo'];
					$context['empty'] = $_SESSION['empty'];
					$context['message'] = $_SESSION['message'];
					
					if(!isset($_POST['reset']))
					{
						// if game is not over, call functions in game order
						if($context['gameOver'] == 0){
							$context = getIndex($context);
							$context = updateBoard($context);
							$context = checkWinner($context);
							updateState($context);
						}
					}
					
					/* 
						function getIndex($context) gets the value of the button clicked and changes board array using value as index.
						returns $context with current values.
					*/ 
					function getIndex($context)
					{
						if(isset($_POST['curCell']))
							$data = $_POST['curCell']; //identify which button was submitted
						
						if(isset($data)) {
							$curPos = $data[0]; // get the actual button clicked. 0 to 8 correspond to respective cell
							$context['board'][$curPos] = $context['player']; // set our game's data with player mark		
							($context['player'] == "X") ? $context['player'] = "O" : $context['player'] = "X"; // switch the player turn
						}
						return $context;
					}

					/* 
						function updateBoard($context) creates game table and assigns $board values to each td then prints the table.
						returns $context with current values.
					*/ 
					function updateBoard($context)
					{
						$output = '<form action="index.php" method="post"> 
									<table><tr>';
						for($i = 0; $i < 9; $i++) {
							$curCell = $i;
							
							//adds "</tr><tr>" if $i or mod of $i is not 0 
							if($i != 0 && ($i)%3 == 0)
								$output .= "</tr><tr>";		
							
							// reads $board and creates content each td according to each index's content. (if content is not X or O, creates button)
							switch ($context['board'][$i]) {
								case " ":
									// using <input type=submit> for each cell
									$output .= '<td><input class="cell" type="submit" name="curCell[]" value="' . $i . '"></td>';
									break;
								case "X":
									//TODO: the text can be replaced by an image
									$output .= "<td class='token'>X</td>";	
									break;
								case "O":
									//TODO: the text can be replaced by an image
									$output .= "<td class='token'>O</td>";	
									break;			
							}		
						}
						$output .= "</table></form>";	
						echo $output;
						return $context;
					}
					
					/* 
						function checkWinner($context) checks all possible winning combos if there is a winning one and displays message (win, current player or draw)
						returns $context with current values.
					*/
					function checkWinner($context)
					{
						for($j = 0; $j < count($context['winCombo']); $j++)
						{
							$check = $context['winCombo'][$j];

							// any of the combos match with the board then change game message to winner message and change gameOver to 1
							if($context['board'][$check[0]] != " " && $context['board'][$check[0]] == $context['board'][$check[1]] &&  $context['board'][$check[0]] == $context['board'][$check[2]])
							{
								$context['gameOver'] = 1;
								$context['message'] = ($context['player'] == "X") ? "Player O wins." : "Player X wins.";
								break;
							}
						}
						//$context['empty']--;		
						
						// if there is no empty cell left then change game message to draw message
						if($context['empty'] == 0)
						{
							$context['message'] = "Draw!";
						}	
						
						// if empty cell is not 0 and game is not over then change game message to current player message				
						if($context['empty'] != 0 && $context['gameOver'] == 0)
						{
							$context['message'] = $context['player'] . " is playing";
						}
						return $context;
					}
					
					/* 
						function updateState($context) update session variables with current game state
					*/ 
					function updateState($context)
					{
						$_SESSION['board'] = $context['board'];
						$_SESSION['player'] = $context['player'];
						$_SESSION['gameOver'] = $context['gameOver'];
						$_SESSION['empty'] = $context['empty'] - 1;
						$_SESSION['message'] = $context['message'];
					}
				?>
				<!-- display game message -->
				<p><?= $context['message'] ?></p>
		</section>	
		<form action="index.php" method="POST">
		<button class="greset"  name="reset" value="Reset" title="Click on the button to start a new game.">NEW GAME</button></form>	
	</main>
	<nav>
		<button class="navBtn">stats</button>
		<button class="navBtn">help</button>
		<form action="index.php" method="GET">
			<button class="navBtn" name="close" value="close">close</button>
		</form>
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
		<h5>HOW TO PLAY?</h5>
		<p>"You shall not play without knowing the rules!<br/><br/>
		* Each player can place a token to any of the nine cells.<br/>
		* First player who places their token to any row, any column or either diagonal cells wins the board.<br/>
		<br/>
		<em>(Tap again to hide rules)</em>
		</p>
	</section>	
	<script src="js/ttt.js"></script>	
</body>
</html>
