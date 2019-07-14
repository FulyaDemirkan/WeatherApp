/* JS codes unique to index.html page of Tic Tac Toe Game*/		

	// player is a human that is identified by token X or O (for PvsC games X by default.)
	var player = "X";
	// there are 9 empty cells to start with
	var empty = 9;
	// gameOver is true, otherwise game is in progress it is false
	var gameOver = false;
	// winning combinations are 3 rows, 3 cols, 2 diags
	var winCombo = [
			[0,1,2], [3,4,5], [6,7,8],
			[0,3,6], [1,4,7], [2,5,8],
			[0,4,8], [2,4,6]
		];
	// board is a collection of 9 cells
	var board = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
	var gameMode = "";
	var playerTurn = "You";

	/*
		Creates a button for Player vs. Player game and adds a listener.
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
		Creates a button for Player vs. Computer game and adds a listener.
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
		Gives an unique id to every td element.
	*/
	function createBoard(){
		gameMode = "";
		var mainBoard, gameTable, gameRow, gameCell, gameText;
		var cellNumber = 0;
		var gameTitle = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
		
		mainBoard = document.getElementById("mainTag");
		message = document.createElement("p");
		message.id = "message";
		mainBoard.appendChild(message);
		gameTable = document.createElement("table");
		mainBoard.appendChild(gameTable);
		for(var i = 0; i < 3 ; i++)
		{
			gameRow = document.createElement("tr");
			gameTable.appendChild(gameRow);
			for(var j = 0; j < 3; j++)
			{
				gameCell = document.createElement("td");
				gameRow.appendChild(gameCell);
				gameCell.setAttribute("class", "gameCells");
				gameCell.id = ("td"+cellNumber);
				gameText = document.createTextNode(gameTitle[i + (j*3)]);
				gameCell.appendChild(gameText);
				cellNumber++;
			}
		}
		document.getElementById("message").innerHTML = "<br/>";
	}
		
	/*
		function GamePlay() stores all td's and converts them to cell numbers.
		Listener sends cell numbers to index function.
	*/	
	function gamePlay()
	{
		var tdList = document.getElementsByClassName("gameCells");
		for(var cellNumber = 0; cellNumber < 9; cellNumber++)
		{
			tdList[cellNumber].addEventListener("click", index(cellNumber), false);
		}
	}

	/*
		function index(cellNumber) sends cell (td) numbers(indexes) to placeToken function if game mode is chosen.		
	*/
	function index(cellNumber)
	{
		return function() 
		{
			if(gameMode != "")
				placeToken(cellNumber);
		}
	}

	/*
		function placeToken(cellNumber)
		- For Player vs Player games: For each player to place their tokens, token changes after every turn.
		- For Player vs Computer games: Player places a token and computer chooses a random cell (if empty is not equal to zero.)
		
		For each game modes:
		- Empty cell counter decreases by one.
		- Board is drawn after every turn if there is no winning condition.
		- Checks if there is a winning condition.
	*/
	function placeToken(cellNumber)
	{
		if(gameMode == "PvsP")
		{
			if((board[cellNumber] == " ") && !gameOver)
			{
				board[cellNumber] = player;
				(player == "X") ? player = "O" : player = "X";
				empty--;
				redrawBoard();
				checkWinner();
			}
		}
		else if(gameMode == "PvsC")
		{
			if((board[cellNumber] == " ") && !gameOver)
			{
				player = "X";
				board[cellNumber] = player;
				checkWinnerPvsC("You");
				empty--;
				//If winner of the previous board is computer, then computer plays first.
				if(empty != 0 && !gameOver)
				{
					computerPlay();
				}
				(player == "O") ? player = "X" : player = "O";
				redrawBoard(cellNumber);
			}
		}	
	}

	/*
		function computerPlay() chooses a random cell.
		TODO: develop an alghoritm to make computer's moves smarter.
	*/
	function computerPlay()
	{
		var cp = false;
		player = "O";
		while (!cp)
		{
			var number = randomNumber(9);
			if((board[number] == " ") && empty != 0)
			{
				board[number] = player;
				redrawBoard();
				empty--;
				cp = true;
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
		function redrawBoard() refreshes the board after each token is placed.
		For Player vs Computer games if there is no empty cell left in the current board then displays draw message.
	*/
	function redrawBoard()
	{
		for (var cellNumber = 0; cellNumber < 9; cellNumber++) 
		{
			var cellName = document.getElementById("td" + cellNumber);
			cellName.innerHTML = board[cellNumber]; 
		}
		if(empty == 0 && !gameOver)
		{
			document.getElementById("message").innerHTML = "Draw!";
		}
	}
	
	/*
		Function checkWinner() for Player vs Player games.
			- Checks all possible winning combos.
			- If there is a winning combo then displays winning message.
			- Displays a message to show which player's turn.	
			- For Player vs Player games if there is no empty cell left in the current board then displays draw message.
	*/
	function checkWinner()
	{	
		for (var i = 0; i < winCombo.length; i++)
		{
			var check = winCombo[i];
			if (board[check[0]] != " " && (board[check[0]] == board[check[1]]) &&  (board[check[0]] == board[check[2]]))  
			{
				gameOver = true;
				(player == "X") ? player = "O" : player = "X";
				highlight(check);
				winnerMessage(player);
				break;
			}
		}
		// draw check
		if(empty == 0 && !gameOver)
		{
			document.getElementById("message").innerHTML = "Draw!"
		}
		else if(!gameOver)
			document.getElementById("message").innerHTML = "Player " + player + " Go!";
	}

	/*
		Function checkWinnerPvsC(playerTurn) for Player vs Computer games.
			- Checks all possible winning combos.
		TODO: Modify and merge to checkWinner functions.
	*/
	function checkWinnerPvsC(playerTurn)
	{
		for (var i = 0; i < winCombo.length; i++)
		{
			var check = winCombo[i];
			if (board[check[0]] != " " && (board[check[0]] == board[check[1]]) &&  (board[check[0]] == board[check[2]]))
			{
				gameOver = true;
				highlight(check);
				winnerMessage(playerTurn);
				break;
			} 
		}
	}

	/*
		function resetGame() resets the board, related variables and styles with default values.
	*/
	function resetGame()
	{
		gameOver = false;
		gameMode = "";
		player = "X";
		empty = 9;
		
		document.getElementById("message").innerHTML = "";
		document.getElementById("message").style["color"] = "";
		
		for (var i = 0; i < board.length; i++)
		{
			board[i] = " ";
			document.getElementById("td"+i).style["color"] = "";
			document.getElementById("td"+i).style.backgroundColor = "";
			redrawBoard();
		}
	}

	/*
		function winnerMessage() changes the default "player turn" message with winner message.
		Changes the token value because after winning move, token changes to other one. (For message it must return to previous value.)
	*/
	function winnerMessage(playerTurn)
	{
		if(gameMode == "PvsP")
		{
			document.getElementById("message").innerHTML = "Player "+ player + " Won!";
			console.log(document.getElementById("message"));
		}
		else{
			if (playerTurn == "You")
		{
			document.getElementById("message").innerHTML = "You Won The Game!";
			document.getElementById("message").style["color"] = "red";
		}
			else if (playerTurn == "Computer")
			{
				document.getElementById("message").innerHTML = "Computer Won :(";
				document.getElementById("message").style["color"] = "red";
			}
		}
	}

	/*
		function highlight() highlights the winning combination.
	*/
	function highlight(check)
	{
		for(var i = 0; i < check.length; i++)
		{
			document.getElementById("td"+check[i]).style["color"] = "red";
			document.getElementById("td"+check[i]).style.backgroundColor = "#a4a4a4";
		}
	}