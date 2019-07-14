/* JS codes unique to index.html page of Rock Paper Scissors Lizard Spock Game*/		
	
	// computer choses one of the 5 icons randomly
	var computer = "";
	// there are 5 different choices for both player and computer to choose. 
	var options = ["rock", "paper", "scissors", "lizard", "spock"];
	// links are used for chosen icons to appear inside of proper boxes.
	var imageLinks = ["images/rock.png", "images/paper.png", "images/scissors.png", "images/lizard.png", "images/spock.png"];
	// there are 2 winning conditions for every choice
	var winCombo = 
	{
		paper: ["spock", "rock"],
		rock: ["scissors", "lizard"],
		scissors: ["paper", "lizard"],
		spock: ["rock", "scissors"],
		lizard: ["spock", "paper"]
	};
	// phrase shows winning relation between two choices
	var phrase = "";
	// there are 2 winning relations for every choice
	var winPhrases = 
	{
		paper: ["disproves", "covers"],
		rock: ["crushes", "crushes"],
		scissors: ["cuts", "decapitates"],
		spock: ["vaporizes", "smashes"],
		lizard: ["poisons", "eats"]
	};

	var btnReset = document.getElementsByTagName("button")[0];
	btnReset.addEventListener("click", function()
	{
		reload();
	});
	
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

	
	createBoard();

	/* 
		function createBoard() creates game board (table), adds game play images and placeholder image for result display area.
		Gives an unique id to td elements.
	*/
	function createBoard() 
	{
		var gameBoard, gameTable, gameRow, gameCell;
		
		gameBoard = document.getElementById("mainTag");
		gameTable = document.createElement("table");
		gameBoard.appendChild(gameTable);
		for (var i = 0; i < 4 ; i++) 
		{
			gameRow = document.createElement("tr");
			gameTable.appendChild(gameRow);
			gameRow.id = "row_" + i;
			for(var j = 0; j < 3; j++)
			{
				gameCell = document.createElement("td");
				gameRow.appendChild(gameCell);
				gameCell.id = "gameCell_" + i + "_" + j;
			}
		}
		
		// Set span for necessary columns and rows. Delete necessary cells for span. 
		document.getElementById("gameCell_0_1").rowSpan = "2";
		var firstSpan = document.getElementById("row_1").deleteCell(1);
		document.getElementById("gameCell_2_0").colSpan = "3";
		var secondSpan = document.getElementById("row_2").deleteCell(2);
		var secondSpan = document.getElementById("row_2").deleteCell(1);
		document.getElementById("gameCell_3_0").colSpan = "3";
		var thirdSpan = document.getElementById("row_3").deleteCell(2);
		var thirdSpan = document.getElementById("row_3").deleteCell(1);
		document.getElementById("gameCell_3_0").appendChild(document.createElement("p")).id = "winnerMessage";
		document.getElementById("gameCell_3_0").appendChild(document.createElement("p")).id = "message";
		
		// first row spans
		document.getElementById("gameCell_0_0").appendChild(document.createElement("span")).innerHTML = "You";
		document.getElementById("gameCell_0_2").appendChild(document.createElement("span")).innerHTML = "Computer";
		
		// playerBox (display area for the image player selected)
		var playerBox = document.getElementById("gameCell_1_0").appendChild(document.createElement("img"));
		playerBox.src = "images/placeholder.png";
		playerBox.id = "playerBox";
		document.getElementById("gameCell_1_0").appendChild(document.createElement("span")).id = "playerImageName";

		// computerBox (display area for randomly selected image for computer)
		var computerBox = document.getElementById("gameCell_1_2").appendChild(document.createElement("img"));
		computerBox.src = "images/placeholder.png";
		computerBox.id = "computerBox";
		document.getElementById("gameCell_1_2").appendChild(document.createElement("span")).id = "computerImageName";
		
		// user selection area message
		document.getElementById("gameCell_2_0").appendChild(document.createElement("span")).innerHTML = "Select One";
			
		// adds images to user selection area.
		for(var k = 0; k < 5; k++){
			var icon = document.createElement("img");
			document.getElementById("gameCell_2_0").appendChild(icon);
			icon.id = options[k];
			icon.setAttribute("class", "token");
			icon.src = imageLinks[k];
			icon.alt = options[k];
		}
	}

	/*
		Stores all image id's.
		Listener sends image id to getPlayer function.
	*/
	var tokens = document.getElementsByClassName("token");
	for(var i = 0; i < 5; i++) 
	{
		tokens[i].addEventListener("click", getPlayer(tokens[i].id));
	}

	/*
		function getPlayer(player) sends id of player's choice to gamePlay function.
	*/
	function getPlayer(player)
	{
		return function()
		{
			gamePlay(player);
		}	
	}

	/*
		function computerPlay() randomly generates a number between 0 and 4 then calls an icon from options array.
	*/ 
	function computerPlay()
	{
		return options[Math.floor((Math.random() * 4) + 0)];
	}

	/* 
		function gamePlay(player) decides if game is won according to player's and computer's choice	
	*/	
	function gamePlay(player)
	{ 
		computer = computerPlay();
		// changes player box with proper image of player's choice
		document.getElementById("playerBox").src = "images/" + player + ".png";
		// adds image's name below image
		document.getElementById("playerImageName").innerHTML = player;
		// changes computer box with proper image of computer's randomly generated choice
		document.getElementById("computerBox").src = "images/" + computer + ".png";
		// adds image's name below image
		document.getElementById("computerImageName").innerHTML = computer;
		
		// if choices are same then game is declared as Tie.
		// also clears any message or color change from previous game.
		if (computer == player)
		{
			document.getElementById("message").innerHTML = "Tie!";
			document.getElementById("winnerMessage").innerHTML = "";
			document.getElementById("message").style.color = "";
		}
		// if computer's choise is one of the 2 winning conditions described in winCombo.player then game is declared as player's win.
		// relation between choices and winning message appears. Winning message color changes to red.
		else if ((winCombo[player]).indexOf(computer) != -1)
		{
			phrase = (winPhrases[player])[(winCombo[player]).indexOf(computer)];
			
			document.getElementById("winnerMessage").innerHTML = player + " " + phrase + " " + computer;
			document.getElementById("message").innerHTML = "You Win!";
			document.getElementById("message").style.color = "red";
		}
		// if computer's choise is NOT one of the 2 winning conditions described in winCombo.player then game is declared as computer'a win.
		// relation between choices and winning message appears.
		// clears any color change from previous game.
		else
		{
			phrase = (winPhrases[computer])[(winCombo[computer]).indexOf(player)];
			
			document.getElementById("winnerMessage").innerHTML = computer + " " + phrase + " " + player;
			document.getElementById("message").innerHTML = "Machine Wins!";
			document.getElementById("message").style.color = "blue";
		}	
	}

	// resetGame replace images with 1px transparent placeholder image in boxes, removes messages and changes message color to default.
	function reload()
	{
		document.getElementById("playerBox").src = "images/placeholder.png";
		document.getElementById("computerBox").src = "images/placeholder.png";
		document.getElementById("winnerMessage").innerHTML = "";
		document.getElementById("message").innerHTML = "";
		document.getElementById("playerImageName").innerHTML = "";
		document.getElementById("computerImageName").innerHTML = "";
	}