/* JS codes unique to index.html page of Rock Paper Scissors Lizard Spock Game*/		
		
	/* 
	events: setup for navigation
	*/		
	var btnStats = document.getElementsByClassName("navBtn")[0];
	var btnHelp = document.getElementsByClassName("navBtn")[1];
	btnStats.addEventListener("click", function() { (overStats.style.display == "block") ? overStats.style.display = "none" : overStats.style.display = "block"; } );
	btnHelp.addEventListener("click", function() { (overHelp.style.display == "block") ? overHelp.style.display = "none" : overHelp.style.display = "block"; } );
	
	/* 
	events: setup overlays 
	*/		
	var overStats = document.getElementsByClassName("stats")[0];
	var overHelp = document.getElementsByClassName("help")[0];
	overStats.addEventListener("click", function() { (overStats.style.display == "block") ? overStats.style.display = "none" : overStats.style.display = "block"; } );	
	overHelp.addEventListener("click", function() { (overHelp.style.display == "block") ? overHelp.style.display = "none" : overHelp.style.display = "block"; } );