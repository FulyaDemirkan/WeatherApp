<?php
	session_start();
	if(isset($_SESSION['isLoggedIn']))
	{
		$isLoggedIn = $_SESSION['isLoggedIn'];
		$user = $_SESSION['firstName'];
	}
	if(!isset($isLoggedIn))
	{
		$isLoggedIn = false;
	}
?>
<!DOCTYPE html>
<html lang="en">
<!--
	Author: F. Fulya Demirkan
	Date created: 16/August/2017
	Date updated: -
	Version: 0.1
	Description: This is an index page for a members only web site which contains a variety of games. Games can be played as Player vs. Player or Player vs. Computer (Some of the games are Player vs. Computer only.) Until further update, web site doesn't provide networking to different machines.
		
	I used the codes Ellen Bajcar shared with us as a base.
-->
	<title>Games & Other Apps</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="This is an index page for a members only web site which contains a variety of games. Games can be played as Player vs. Player or Player vs. Computer (Some of the games are Player vs. Computer only.)">
	<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" type="text/css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway" >
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" type="text/css">
	<link href="css/main.css" rel="stylesheet" type="text/css">
	<link rel="stylesheet" crossorigin="anonymous" href="http://gc.kis.v2.scr.kaspersky-labs.com/B6C874E9-D3FA-824B-BF65-3794B393B5FC/abn/main.css">
	<body class="w3-light-grey w3-content">
		<!-- Sidebar/menu -->
		<nav class="w3-sidebar w3-collapse w3-black w3-animate-left" id="mySidebar"><br>
			<div class="w3-container">
				<a href="#" class="w3-hide-large w3-right w3-padding w3-hover-grey" id="closeMenu" title="close side menu"><i class="fa fa-remove"></i></a>
				<canvas height="160" id="myCanvas" width="280"></canvas>
				<hr>
				<a class="w3-button w3-black" <?= $isLoggedIn ? 'href="content/login_logout/logout.php"' : 'href="content/login_logout/loginForm.html"'?>><?= $isLoggedIn ? "LOGOUT" : "LOGIN" ?></a>
				<a class="w3-button w3-gray" href="content/login_logout/register.html"><i class="fa fa-address-card w3-margin-right" title="Membership"></i>Membership</a>
			</div>
			<div class="w3-bar-block w3-text-orange">
				<a href="#jsgames" class="w3-bar-item w3-button w3-padding"><i class="fa fa-gamepad fa-fw w3-margin-right"></i>JAVASCRIPT GAMES</a> 
				<a href="#phpgames" class="w3-bar-item w3-button w3-padding"><i class="fa fa-gamepad fa-fw w3-margin-right"></i>PHP GAMES</a> 
				<a href="#contact" class="w3-bar-item w3-button w3-padding"><i class="fa fa-gamepad fa-fw w3-margin-right"></i>NOTEWORTHY</a>
			</div>
			<!-- Social media icons have no functionality for now. -->
			<div class="w3-panel w3-wide w3-text-gray">
				<i class="fa fa-facebook-official w3-hover-opacity"></i>
				<i class="fa fa-instagram w3-hover-opacity"></i>
				<i class="fa fa-snapchat w3-hover-opacity"></i>
				<i class="fa fa-pinterest-p w3-hover-opacity"></i>
				<i class="fa fa-twitter w3-hover-opacity"></i>
				<i class="fa fa-linkedin w3-hover-opacity"></i>
			</div>
		</nav>

		<!-- Overlay effect when opening sidebar on small screens -->
		<div class="w3-overlay w3-hide-large w3-animate-opacity" title="close side menu" id="myOverlay"></div>

		<!-- !PAGE CONTENT! -->
		<main class="w3-main">
			<header id="portfolio">
				<span class="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey" id="barMenu"><i class="fa fa-bars"></i></span>
				<div class="w3-container">
					<h1><b><?php if($isLoggedIn) { echo "Welcome back, " . $user . "!"; } else { echo "Games & Other Web Apps"; } ?> </b></h1>
				</div>
			</header>
			<!-- First Game Grid-->
			<div class="w3-row-padding" id="jsgames">
				<div class="w3-third w3-container w3-margin-bottom">
					<div class="meme">  
						<a href="content/ttt_js/index.html" target="_self">
							<img alt="Play Tic Tac Toe! (Javascript version)" class="w3-hover-opacity" src="images/bg3.jpg">
							<h1>classic<sub>js</sub></h1> 		     
							<h2>tic-tac-toe</h2>				
						</a>
					</div>		           
					<section class="w3-container w3-white">
						<h6>Play Tic Tac Toe!</h6>
						<p>A game with Player vs Player & Player vs. Computer modes. Place your tokens in a row, a column, or a diagonal to win the game.</p>
						<!-- Five-star rating and stats link are not functional for now -->
						<p class="w3-text-orange w3-right-align">
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star-half-o w3-hover-opacity"></i>
							<i class="fa fa-star-o w3-hover-opacity last-star"></i>
							<a href="content/blog/newPost.html"><i class="fa fa-comments-o w3-hover-opacity w3-text-gray"></i></a>
							<i class="fa fa-bar-chart w3-hover-opacity w3-right-align w3-text-gray last"></i>
						</p>
					</section>
				</div>
				<div class="w3-third w3-container w3-margin-bottom">
					<div class="meme">  
						<a href="content/tttUlt_js/index.html" target="_self">
							<img alt="Ultimate Tic Tac Toe" class="w3-hover-opacity" src="images/bg3.jpg">
							<h1>ultimate<sub>js</sub></h1> 		     
							<h2>tic-tac-toe</h2>	
						</a>							
					</div>
					<section class="w3-container w3-white">
						<h6>Play Ultimate Tic Tac Toe!</h6>
						<p>Win any row, column or either diagonal boards against your friend or computer to be The Ultimate Winner!</p>
						<!-- Five-star rating and stats link are not functional for now -->
						<p class="w3-text-orange w3-right-align">
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star-o w3-hover-opacity last-star"></i>
							<a href="content/blog/newPost.html"><i class="fa fa-comments-o w3-hover-opacity w3-text-gray"></i></a>
							<i class="fa fa-bar-chart w3-hover-opacity w3-right-align w3-text-gray last"></i>
						</p>
					</section>
				</div>
				<div class="w3-third w3-container">
					<div class="meme"> 
						<a href="content/rpsls_js/index.html" target="_self">
							<img alt="Rock Paper Scissors Lizard Spock" class="w3-hover-opacity" src="images/bg3.jpg">
							<h1>Extended<sub>js</sub></h1> 		     
							<h2>rock-paper-scissors</h2>
						</a>
					</div>
					<section class="w3-container w3-white">
						<h6>Play Rock Paper Scissors Lizard Spock!</h6>
						<p>Make a decision, select one of the tokens and see if you are lucky enough to win against computer!</p>
						<!-- Five-star rating and stats link are not functional for now -->
						<p class="w3-text-orange w3-right-align">
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<a href="content/blog/newPost.html"><i class="fa fa-comments-o w3-hover-opacity w3-text-gray"></i></a>
							<i class="fa fa-bar-chart w3-hover-opacity w3-right-align w3-text-gray last"></i>
						</p>
					</section>
				</div>
			</div>
			<!-- Second Game Grid-->
			<div class="w3-row-padding" id="phpgames">
				<div class="w3-third w3-container w3-margin-bottom">
					<div class="meme">  
						<a href="content/ttt_php/index.php" target="_self">
							<img alt="Play Tic Tac Toe! (PHP version)" class="w3-hover-opacity" src="images/bg3.jpg">
							<h1>classic<sub>php</sub></h1> 		     
							<h2>tic-tac-toe</h2>				
						</a>
					</div>		           
					<section class="w3-container w3-white">
						<h6>Play Tic Tac Toe!</h6>
						<p>(PHP Version) A game with Player vs Player & Player vs. Computer modes. Place your tokens in a row, a column, or a diagonal to win the game.</p>
						<!-- Five-star rating and stats link are not functional for now -->
						<p class="w3-text-orange w3-right-align">
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star-half-o w3-hover-opacity"></i>
							<i class="fa fa-star-o w3-hover-opacity last-star"></i>
							<a href="content/blog/newPost.html"><i class="fa fa-comments-o w3-hover-opacity w3-text-gray"></i></a>
							<i class="fa fa-bar-chart w3-hover-opacity w3-right-align w3-text-gray last"></i>
						</p>
					</section>
				</div>
				<div class="w3-third w3-container w3-margin-bottom">
					<div class="meme">  
						<a href="content/rpsls_php/index.php" target="_self">
							<img alt="Ultimate Tic Tac Toe" class="w3-hover-opacity" src="images/bg3.jpg">
							<h1>Extended<sub>php</sub></h1> 		     
							<h2>rock-paper-scissors</h2>	
						</a>							
					</div>
					<section class="w3-container w3-white">
						<h6>Play Rock Paper Scissors Lizard Spock!</h6>
						<p>(PHP Version) Make a decision, select one of the tokens and see if you are lucky enough to win against computer in this game!</p>
						<!-- Five-star rating and stats link are not functional for now -->
						<p class="w3-text-orange w3-right-align">
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star-o w3-hover-opacity last-star"></i>
							<a href="content/blog/newPost.html"><i class="fa fa-comments-o w3-hover-opacity w3-text-gray"></i></a>
							<i class="fa fa-bar-chart w3-hover-opacity w3-right-align w3-text-gray last"></i>
						</p>
					</section>
				</div>
				<div class="w3-third w3-container">
						<img alt="More To Come Soon!" class="w3-hover-opacity" src="images/bg3.jpg">
					<section class="w3-container w3-white">
						<h6>More To Come Soon!</h6>
						<p>MPraesent tincidunt sed tellus ut rutrum. Sed vitae condimentum, porta lectus vitae, ultricies porta lectus congue gravida diam non fringilla. </p>
						<!-- Five-star rating and stats link are not functional for now -->
						<p class="w3-text-orange w3-right-align">
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<i class="fa fa-star w3-hover-opacity"></i>
							<a href="content/blog/newPost.html"><i class="fa fa-comments-o w3-hover-opacity w3-text-gray"></i></a>
							<i class="fa fa-bar-chart w3-hover-opacity w3-right-align w3-text-gray last"></i>
						</p>
					</section>
				</div>
			</div>
			<!-- Footer -->
			<footer class="w3-container w3-padding-32 w3-dark-grey">
				<div class="w3-row-padding">
					<div id="contact" class="w3-third">
						<h3>NOTEWORTHY</h3>
						<img src="images/39547184_phaser.png" alt="phaser" class="noteworthy">
						<p>Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. </p>
						<p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
					</div>
					<div class="w3-twothird">
						<h3>BLOG POSTS</h3>
						<ul class="w3-ul w3-hoverable">
							<li class="w3-padding-16">
								<h3>Lorem</h3>
								<p>
									<span class="w3-tag w3-black w3-margin-bottom">Play</span> 
									<span class="w3-tag w3-grey w3-small w3-margin-bottom">News</span>
									<span class="w3-small w3-margin-bottom">Games</span><br>
									<span>Sed mattis nunc</span>
								</p>
							</li>
							<li class="w3-padding-16">
								<span class="w3-large">Ipsum</span><br>
								<span>Praes tinci sed</span>
							</li> 
						</ul>
					</div>
				</div>
			</footer>

			<address class="w3-black w3-center w3-padding-24">Fulya Demirkan SYST10199 Web Programming @<a href="http://www.sheridancollege.ca" title="Sheridan College" target="_blank">Sheridan College</a>
			<br>
			Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></address>
		</main>
		<script src="js/canvasLogo.js"></script>
	</body>
</html>
