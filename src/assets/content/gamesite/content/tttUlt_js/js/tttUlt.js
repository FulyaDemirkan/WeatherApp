/* JS codes unique to index.html page of Ultimate Tic Tac Toe Game*/	

	// player is a human that is identified by token X or O
	var player = "X";
	// Player vs Player or Computer selection. Changes according to player choice from appropriate buttons.
	var gameMode = "";
	// there are 9 empty cells for each board to start with
	var empty = [9, 9, 9, 9, 9, 9, 9, 9, 9];
	// gameOver is false for start for each board, turns to true one by one when each winning game.
	var gameOver = [false, false, false, false, false, false, false, false, false];
	// if there is a winning combo from the results of boards ultimate game over turns true.
	var ultimateGameOver = false;
	// Message variable for Player vs Computer game .
	var playerTurn = "You";
	// winning combinations are 3 rows, 3 cols, 2 diags
	var winCombo = [
		[0,1,2], [3,4,5], [6,7,8],
		[0,3,6], [1,4,7], [2,5,8],
		[0,4,8], [2,4,6]
	];
	// When one board is completed(either win or draw), index with the same number as board number changes to board result.  
	var ultimateBoardChart = [" ", " ", " ", " ", " ", " ", " ", " ", " "];		
	// After each move, index of appropriate board's array changes (with X or O).
	var boardChart= [
			[" ", " ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " ", " "], 
			[" ", " ", " ", " ", " ", " ", " ", " ", " "]
		];

	/*
		Adds a listener for Player vs. Player game.
		Listener resets or creates the main board and changes the game Mode.
	*/
	document.getElementById("pvspMode").addEventListener("click", function()
		{
			if(gameMode != "")
			{
				resetGame();
			}
			else if(gameMode == "")
			{
				createBoard();
			}
			gameMode = "PvsP";
			gamePlay();
			document.getElementById("message").innerHTML = "Player " + player + " Go!";
		}
	);

	/*
		Adds a listener for Player vs. Computer game.
		Listener resets or creates the main board and changes the game Mode.
	*/
	document.getElementById("pvscMode").addEventListener("click", function()
		{
			if(gameMode != "")
			{
				resetGame();
			}
			else if(gameMode == "")
			{
				createBoard();
			}
			gameMode = "PvsC";
			gamePlay();
			document.getElementById("message").innerHTML = "Your Move!";
		}
	)
	
	/* 
	events: setup for navigation
	*/		
	var btnStats = document.getElementsByClassName("navBtn")[0];
	var btnHelp = document.getElementsByClassName("navBtn")[1];
	var btnClose = document.getElementsByClassName("navBtn")[2]; 
	btnStats.addEventListener("click", function() { (overStats.style.display == "block") ? overStats.style.display = "none" : overStats.style.display = "block"; } );
	btnHelp.addEventListener("click", function() { (overHelp.style.display == "block") ? overHelp.style.display = "none" : overHelp.style.display = "block"; } );
	btnClose.addEventListener("click", function()
	{
		window.location.href='../../index.php';
	});
	
	/* 
	events: setup overlays 
	*/		
	var overStats = document.getElementsByClassName("stats")[0];
	var overHelp = document.getElementsByClassName("help")[0];
	overStats.addEventListener("click", function() { (overStats.style.display == "block") ? overStats.style.display = "none" : overStats.style.display = "block"; } );	
	overHelp.addEventListener("click", function() { (overHelp.style.display == "block") ? overHelp.style.display = "none" : overHelp.style.display = "block"; } );
	
	/* 
		function createBoard() creates blank game board and placeholder for game play messages.
		Gives an unique id to every playable board's td elements.
	*/
	function createBoard()
	{
		gameMode = "";
		var myTable, myRow, myCell, myData, myBoard, myTitle;
		var myGameTable, myGameRow, myGameCell, myData, myGameBoard, myTitle, boardWinner, winTxt, winStatus, message;
		var gameTitle = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
		var cellNumber = 0;
		var boardNumber = 0;
		
		myBoard = document.getElementById("mainTag");
		message = document.createElement("p");
		message.id = "message";
		myBoard.appendChild(message);
		myTable = document.createElement("table");
		myTable.setAttribute("class", "bigTable");
		myBoard.appendChild(myTable);
		for (var i = 0; i < 3; i++)
		{
			myRow = document.createElement("tr");
			myTable.appendChild(myRow);
			for (var j = 0; j < 3; j++)
			{
				myCell = document.createElement("td");
				myCell.id = "smallTable" + boardNumber;
				myRow.appendChild(myCell);
				
				boardWinner = document.createElement("div");
				boardWinner.id = ("winner" + boardNumber);
				boardWinner.setAttribute("class", "winner");
				
				winTxt = document.createElement("p");
				boardWinner.appendChild(winTxt);
				winTxt.id = ("winText"+boardNumber);
				myCell.appendChild(boardWinner);
				
				winStatus = document.createElement("div");
				winStatus.id = ("winStatus"+boardNumber);
				boardWinner.appendChild(winStatus);
				
				myGameTable = document.createElement("table");
				myGameTable.setAttribute("class", "smallTable");
				myCell.appendChild(myGameTable);
				for (var k = 0; k < 3; k++)
				{
					myGameRow = document.createElement("tr");
					myGameTable.appendChild(myGameRow);
					for (var l = 0; l < 3; l++)
					{
						myGameCell = document.createElement("td");
						myGameRow.appendChild(myGameCell);
						myGameCell.setAttribute("class", "gameCells");
						myGameCell.id = "board"+boardNumber+"td"+cellNumber++;
						myData = document.createTextNode(gameTitle[k + (l*3)]);
						myGameCell.appendChild(myData);
					}
				}
				cellNumber = 0;
				boardNumber++;
			}
		}
		document.getElementById("message").innerHTML = "<br/>";
	}

	/*
		function GamePlay() stores all td's(except outer table's) and with a nested for loop,
		converts them to board and cell numbers.
		Listener sends board and cell numbers to index function.
	*/
	function gamePlay()
	{
		var tdList = document.getElementsByClassName("gameCells");
		var a = 0;
		for(var boardNumber = 0; boardNumber < 9; boardNumber++)
		{
			for(var cellNumber = 0; cellNumber < 9; cellNumber++)
			{
				tdList[a].addEventListener("click", index(boardNumber, cellNumber), false)
				a++;
			}
		}
	}
	
	/*
		function index(boardNumber, cellNumber) sends board and cell (td) numbers(indexes) to placeToken function if game mode is chosen.		
	*/
	function index(boardNumber, cellNumber)
	{
		return function() 
		{
			if(gameMode != "")
				placeToken(boardNumber, cellNumber);
		}
	}
	
	/*
		function placeToken(boardNumber, cellNumber)
		- For Player vs Player games: For each player to place their tokens, token changes after every turn.
		- For Player vs Computer games: Player places a token and computer chooses a random cell from last played board(if empty is not equal to zero.)
		
		For each game modes:
		- Empty cell counter decreases by one.
		- Board is drawn after every turn if there is no winning condition.
		- Checks if there is a winning condition.
	*/
	function placeToken(boardNumber, cellNumber)
	{
		if(gameMode == "PvsP")
		{
			if((boardChart[boardNumber][cellNumber] == " ") && !gameOver[boardNumber] && !ultimateGameOver)
			{
				boardChart[boardNumber][cellNumber] = player;
				(player == "X") ? player = "O" : player = "X";
				redrawBoard(boardNumber);
				checkWinner(boardNumber);
				empty[boardNumber]--;
			}
		}
		else if(gameMode == "PvsC")
		{
			if((boardChart[boardNumber][cellNumber] == " ") && !gameOver[boardNumber] && !ultimateGameOver)
			{
				player = "X";
				boardChart[boardNumber][cellNumber] = player;
				checkWinnerPvsC("You");
				empty[boardNumber]--;
				//If winner of the previous board is computer, then computer plays first.
				if(empty[boardNumber] != 0 && !gameOver[boardNumber] && !ultimateGameOver)
				{
					computerPlay(boardNumber);
				}
				(player == "O") ? player = "X" : player = "O";
				redrawBoard(boardNumber);
			}
		}
	}
	
	/*
		function computerPlay(boardNumber) chooses a random cell from last played board.
		If there is no empty cell on the last played board or the board has a winner then chooses another board randomly.
		TODO: develop an alghoritm to make computer's moves smarter.
	*/
	function computerPlay(boardNumber)
	{
		var cp = false;
		player = "O";
		while (!cp)
		{
			var number = randomNumber(9);
			if((boardChart[boardNumber][number] == " ") && empty[boardNumber] != 0 && ultimateBoardChart[boardNumber] == " ")
			{
				boardChart[boardNumber][number] = player;
				redrawBoard(boardNumber);
				empty[boardNumber]--;
				cp = true;
			} 
			// if there is no empty cell, choose another available board.
			if (empty[boardNumber] == 0  || ultimateBoardChart[boardNumber] != " ")
			{
				var bnum = randomNumber(9);
				if((boardChart[bnum][number] == " ") && empty[bnum] != 0  && ultimateBoardChart[bnum] == " ")
				{
					boardChart[bnum][number] = player;
					redrawBoard(bnum);
					empty[bnum]--;
					cp = true;
				}
			}
		}
		checkWinnerPvsC("Computer");
	}
	
	/*
		function randomNumber(num) generates a random number between 0 and "num" value.
	*/
	function randomNumber(num)
	{
		return Math.floor(Math.random() * num);
	}
	
	/*
		function redrawBoard(boardNumber, cellNumber) refreshes the board after each token is placed.
		For Player vs Computer games if there is no empty cell left in the current board then displays draw message.
	*/
	function redrawBoard(boardNumber)
	{
		if(gameMode == "PvsC")
		{
			for (var cellNumber = 0; cellNumber < 9; cellNumber++) 
			{
				var cellName = document.getElementById("board" + boardNumber + "td" + cellNumber);
				cellName.innerHTML = boardChart[boardNumber][cellNumber]; 
			}
			if(empty[boardNumber] == 0 && !gameOver[boardNumber])
			{
				document.getElementById("message").innerHTML = "Draw!";
				ultimateBoardChart[boardNumber] = "D";
			}
		}
		else
		{
			for (var cellNumber = 0; cellNumber < 9; cellNumber++) 
			{
				var cellName = document.getElementById("board" + boardNumber + "td" + cellNumber);
				cellName.innerHTML = boardChart[boardNumber][cellNumber]; 
			}
		}
	}
	
	/*
		Function checkWinner(boardNumber) for Player vs Player games.
			- Checks all possible winning combos.
			- If there is a winning combo then displays winning message.
			- If there is not a winning combo for Ultimate Game then displays game over message.
			- Displays a message to show which player's turn.	
			- For Player vs Player games if there is no empty cell left in the current board then displays draw message.
		
	*/
	function checkWinner(boardNumber)
	{
		var count = 0;
		// last played board winCheck
		for (var i = 0; i < winCombo.length; i++)
		{
			var check = winCombo[i];
			
			if (boardChart[boardNumber][check[0]] != " " &&
				(boardChart[boardNumber][check[0]] == boardChart[boardNumber][check[1]]) &&
				(boardChart[boardNumber][check[0]] == boardChart[boardNumber][check[2]]))  
			{
				gameOver[boardNumber] = true;
				empty[boardNumber] = 9;
				(player == "X") ? player = "O" : player = "X";
				ultimateBoardChart[boardNumber] = player;
				window.setTimeout(function()
				{
					onWinner(player, boardNumber);
				}, 400);
				break;
			} 
		}
		// draw check
		if(empty[boardNumber] == 0 && !gameOver[boardNumber])
			{
				document.getElementById("message").innerHTML = "Draw!    Player " + player + " Go!"
				ultimateBoardChart[boardNumber] = "D";
			}
		else
			document.getElementById("message").innerHTML = "Player " + player + " Go!";
		// ultimate board winCheck
		for (var i = 0; i < winCombo.length; i++)
		{	
			check = winCombo[i];
			if ((ultimateBoardChart[check[0]] != "D") &&
				(ultimateBoardChart[check[0]] != " ") &&
				(ultimateBoardChart[check[0]] == ultimateBoardChart[check[1]]) &&
				(ultimateBoardChart[check[0]] == ultimateBoardChart[check[2]]))  
			{
				document.getElementById("message").innerHTML = "Player "+ player + " Won The Game!";
				document.getElementById("message").style["color"] = "red";
				for(var j = 0; j < 3 ; j++)
				{
					document.getElementById('winner'+check[j]).style.backgroundColor= "rgba(173,216,230,0.8)";
				}
				ultimateGameOver = true;
			}
		}
		// ultimate board draw check
		for (var i = 0; i < ultimateBoardChart.length; i++)
		{
			if(ultimateBoardChart[i] == " ")
				count++;
		}
		if (count == 0 && !ultimateGameOver)
			document.getElementById("message").innerHTML = "No Winner :(  Game Over!";
	}
	
	/*
		Function checkWinnerPvsC(playerTurn) for Player vs Computer games.
			- Checks all possible winning combos.
			- If there is not a winning combo for Ultimate Game then displays game over message.
		TODO: Modify and merge to checkWinner functions.
		TODO: Adding setTimeout for onWinner gives an error (somehow boardNumber passes as "9"), 
			  find a solution and add timeout.
	*/
	function checkWinnerPvsC(playerTurn)
	{
		var count = 0;
		// winCheck for each board
		for (var i = 0; i < winCombo.length; i++)
		{
			var check = winCombo[i];
			for(var boardNumber = 0; boardNumber < 9; boardNumber++)
			{
				if ((ultimateBoardChart[boardNumber] == " ") &&
					(boardChart[boardNumber][check[0]] != " ") &&
					(boardChart[boardNumber][check[0]] == boardChart[boardNumber][check[1]]) &&
					(boardChart[boardNumber][check[0]] == boardChart[boardNumber][check[2]]))  
				{
					gameOver[boardNumber] = true;
					empty[boardNumber] = 9;
					ultimateBoardChart[boardNumber] = player;
					onWinner(player, boardNumber);
					if(gameOver[boardNumber] && player == "O")
					{
						computerPlay(boardNumber);
					}
					else if(player == "X")
					{
						(player == "X") ? player = "O" : player = "X";
					}
					break;
				} 
			}
		}
		// ultimate board winCheck
		for (var i = 0; i < winCombo.length; i++)
		{	
			check = winCombo[i];
			for(var boardNumber = 0; boardNumber < 9; boardNumber++)
			{
				if (ultimateBoardChart[check[0]] != " " &&
					(ultimateBoardChart[check[0]] == ultimateBoardChart[check[1]]) &&
					(ultimateBoardChart[check[0]] == ultimateBoardChart[check[2]]))  
				{
					ultimateGameOver = true;
					for(var j = 0; j < 3 ; j++)
					{
						document.getElementById('winner'+check[j]).style.backgroundColor= "rgba(173,216,230,0.8)";
					}
					winnerMessage(playerTurn);
				}
			}
		}
				
		// ultimate board draw check
		for (var i = 0; i < ultimateBoardChart.length; i++)
		{
			if(ultimateBoardChart[i] == " ")
				count++;
		}
		if (count == 0 && !ultimateGameOver)
			document.getElementById("message").innerHTML = "No Winner :(  Game Over!";
	}
	
	/*
		function resetGame() resets the board, related variables and styles with default values.
	*/
	function resetGame()
	{
		ultimateGameOver = false;
		gameMode = "";
		player = "X";
		offWinner();
		empty = [9, 9, 9, 9, 9, 9, 9, 9, 9];
		ultimateBoardChart = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
		document.getElementById("message").innerHTML = "";
		document.getElementById("message").style["color"] = "";
		for(boardNumber = 0; boardNumber < 9; boardNumber++)
		{
			boardChart[boardNumber] = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
			for(var cellNumber = 0; cellNumber < 9; cellNumber++)
			{
				gameOver[cellNumber] = false;
				redrawBoard(boardNumber, cellNumber);
				document.getElementById("board" + boardNumber + "td" + cellNumber).style["color"] = "";
				document.getElementById("board" + boardNumber + "td" + cellNumber).style.backgroundColor = "";
			}
		}
	}
	
	/*
		function winnerMessage(playerTurn) changes the default message with winner message for Player vs Computer games.
		TODO: Modify codes to move PvsC winning messages inside of checkWinner
	*/
	function winnerMessage(playerTurn)
	{
		if (ultimateGameOver)
		{
			if (playerTurn == "You")
			{
				document.getElementById("message").innerHTML = "You Won The Ultimate Game!";
				document.getElementById("message").style["color"] = "red";
			}
			else if (playerTurn == "Computer")
			{
				document.getElementById("message").innerHTML = "Computer Won The Ultimate Game :(";
				document.getElementById("message").style["color"] = "blue";
			}
		}
	}
	
	/*
		function onWinner(player, boardNumber) displays winner of each board as an overlay.
	*/
	function onWinner(player, boardNumber) {
		var boardD = 'winner'+boardNumber;
		var winTxt = 'winText'+boardNumber;
		
		document.getElementById(boardD).style.display = "block";
		document.getElementById(winTxt).innerHTML = player;
		document.getElementById(winTxt).style.display = "block";
	}
	
	/*
		function offWinner() hides all overlay winner messages.
	*/
	function offWinner() {
		for(var i = 0; i < 9; i++)
		{
			document.getElementById('winner'+i).style.display = "none";
			document.getElementById('winText'+i).innerHTML = "";
			document.getElementById('winText'+i).style.display = "none";
			document.getElementById('winner'+i).style.backgroundColor= "";
		}
	}