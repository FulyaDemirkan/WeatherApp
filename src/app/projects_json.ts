import { Project } from './project';

export const Projects: Project[] = [
    {
        id: 20,
        type: "webProject",
        name: "Voting System",
        shortDescription: "Web Application for Voting",
        fullDescription: "<p>A web application for a Voting system with adding a voter, voting, displaying all registered voters and displaying statistics features. Even though validation was not a requirement for this assignment, application has validation for SIN number (must be 9-digit), birthday (must be 18+), and for other required fields.</p><p>For database and statistics purposes, application also has a dummy data entry feature. With using buttons on the home page, 200-350 voters (with using Faker) and votes for 60%-80% of the registered voters can be added.</p>",
        technologies: "J2EE, Hibernate, MySql, Lombok",
        links: [
            { url: "https://github.com/FulyaDemirkan/VotingApp", name: "Source Code on GitHub" }
        ],
        screenshots: [
            { url: "assets/images/votingSystem/homePage.png", alt: "Home Page with dummy entry options" },
            { url: "assets/images/votingSystem/addVoter.png", alt: "Adding a voter, if only that SIN is not registered yet" },
            { url: "assets/images/votingSystem/registeredVoters.png", alt: "Displaying all registered voters and the vote status" },
            { url: "assets/images/votingSystem/voting.png", alt: "Voting page, which only allows an already registered and not voted yet voter to vote" },
            { url: "assets/images/votingSystem/stats.png", alt: "Several voting statistics" }
        ]
    },
    {
        id: 21,
        type: "webProject",
        name: "Weather Application",
        shortDescription: "Mobile Application for Weather",
        fullDescription: "<p>A mobile application for a checking the weather of the current location with using geoLocation, or a place with using Google Places API. Also, has a feature to compare up to three cities. Application displays temperature forecast as a chart and also current weather details.</p>",
        technologies: "jQuery, GeoLocation, Google Places API, Google AutoComplete",
        links: [
            { url: "https://fulya.demirkan.info/assets/content/weatherApp/index.html", name: "Weather Application" },
            { url: "https://github.com/FulyaDemirkan/WeatherApp", name: "Source Code on GitHub" }
        ],
        screenshots: [
            { url: "assets/images/weatherApp/geolocation.png", alt: "Application uses GeoLocation upon user permission" },
            { url: "assets/images/weatherApp/localWeather.png", alt: "Displaying the temperature and rainfall forecast and weather details of a single place" },
            { url: "assets/images/weatherApp/autoComplete.png", alt: "Application uses Google Places API for getting location coordinates" },
            { url: "assets/images/weatherApp/comparisonChart.png", alt: "Compare temperature forecast of (up to) three places" },
            { url: "assets/images/weatherApp/comparisonData.png", alt: "Display weather details of (up to) three places" }
        ]
    },
    { id: 11,
        type: "webProject",
        name: "Game Store Inventory",
        shortDescription: "A web application for a game store inventory management using .Net Framework with additional .Net EF Core features and SQL DB",
        fullDescription: "<p>This project is a web application for a video game store inventory management and developed as a final group project for the .Net course. Users can </p><ul><li>Add a new game and edit an existing game,</li><li>Display all games in the inventory and search for a game by title,</li><li>Sell games,</li><li>Display invoices and search for an invoice by invoice number,</li></ul><p>This application is mainly build on .Net Framework but it also uses some .Net EF Core features. For example, Code First approach is used for creating and updating the DB. All of the functions have several validations to prevent users to enter invalid, out of range or no values.</p><p>My contributions to the project consist of inital creation of the DB and all relational tables, and Add/Edit/Delete Game functions. Edit and Delete functions can only be reached via Inventory page.<p>",
        technologies: ".Net Framework, .Net EF Core, Site.Master, SQL, LINQ",
        links: [
            { url: "https://github.com/FulyaDemirkan/GameStoreStockManagement", name: "Source Code on GitHub" }
        ],
        screenshots: [
            { url: "assets/images/gameStore/addGame.png", alt: "Add Game" },
            { url: "assets/images/gameStore/validation1.png", alt: "Add Game ClientSide Validations" },
            { url: "assets/images/gameStore/validation2.png", alt: "Add Game ServerSide Validations" },
            { url: "assets/images/gameStore/editGame.png", alt: "Edit Game" },
            { url: "assets/images/gameStore/deleteGame.png", alt: "Delete Game" },
            { url: "assets/images/gameStore/inventory.png", alt: "Inventory" },
            { url: "assets/images/gameStore/inventorySearch.png", alt: "Inventory Search" }
        ],
    },
    { id: 12,
        type: "webProject",
        name: "Hydro Bill Payment",
        shortDescription: "A web application for hydro bill payment using .Net Framework with SQL DB",
        fullDescription: "<p>This project is a web application for Hydro Bill Payment with adding a bill and displaying a list of all paid bills features. This application is build with .Net Framework. All the fields on Add Bill feature have several validations to prevent users to enter invalid, out of range or no values.</p>",
        technologies: ".Net Framework, Site.Master, SQL",
        links: [],
        screenshots: [
            { url: "assets/images/hydroBill/addBill.png", alt: "Add Bill"},
            { url: "assets/images/hydroBill/validation1.png", alt: "Add Bill ClientSide Validations"},
            { url: "assets/images/hydroBill/validation2.png", alt: "Add Bill ServerSide Validations"},
            { url: "assets/images/hydroBill/paidBills.png", alt: "Paid Bills"}
        ]
    },
    { id: 13,
        type: "webProject",
        name: "Sign Up Application",
        shortDescription: "A login-based web application using MVC, Servlet, JSP with EL, JSTL and JavaBean",
        fullDescription: "<p>The purpose of this application is to construct a wireframe of a login-based web application using MVC, Servlet, JSP with EL, JSTL and JavaBean. Home page allows user to login to the member’s main page, or to go to registration form page to sign up. When a user registers the signup form successfully (already existing userID cannot be used), the user’s information is stored in database. When a user logins successfully, the user is redirected to the member’s main page. Main page shows a greeting message, the member’s profile, a link to logout and the list of all registered members.</p><p>Also, as an additional feature, this application allows users to update their information in the database.</p><ul>Security features used in this application:<li>MainPage and Update page are NOT accessible without authentication or after logging out due to session and cache management.</li><li>Passwords are stored using jBCrypt password hashing.</li><li>Session timeout has set to 10 minutes.</li></ul>",
        technologies: "J2EE, MVC, Servlet, JSP with EL, JSTL, JavaBean, HTML5, CSS3, SQL",
        links: [
            { url: "http://fulya.demirkan.info:8080/SignupApplication/", name: "Sign Up Application" }
        ],
        screenshots: [
            { url: "assets/images/signupApplication/homePage.png", alt: "Homepage"},
            { url: "assets/images/signupApplication/registration.png", alt: "Registration Page"},
            { url: "assets/images/signupApplication/registerFail.png", alt: "User is informed if User ID is already existed in database."},
            { url: "assets/images/signupApplication/mainPage.png", alt: "Main Page"},
            { url: "assets/images/signupApplication/update.png", alt: "Update Page"},
            { url: "assets/images/signupApplication/updateFail.png", alt: "User is informed if new passwords are not matching."},
            { url: "assets/images/signupApplication/updateFail2.png", alt: "User is informed if current password is not matches with the database."}
        ]
    },
    { id: 14,
        type: "webProject",
        name: "Game Console Sales",
        shortDescription: "A web application to show the statistics of game console sales.",
        fullDescription: "<p>This project is a web application to show the statistics of game console sales; the number of hardware, software and game titles of game consoles. This application uses JavaScript XMLHttpRequest object to request JSON data from server. Also, as an additional feature, sales data is displayed on a chart. Data on the table and the chart changes based on the user selection.</p><p>This assignment has been awarded with a bonus mark after getting 2nd place out of 26 projects from the class voting for the best design.</p>",
        technologies: "J2EE, Servlet, MVC, HTML5, CSS3, JavaScript, JSON, SQL",
        links: [
            { url: "http://fulya.demirkan.info:8080/GameConsoleSales/consoleSales.html", name: "Game Console Sales" }
        ],
        screenshots: [
            { url: "assets/images/consoleSales/consoleSales4.png", alt: "Hardware Sales"},
            { url: "assets/images/consoleSales/consoleSales2.png", alt: "Number of Game Title Sales"},
            { url: "assets/images/consoleSales/consoleSales3.png", alt: "Software Sales"}
        ]
    },
    { id: 15,
        type: "webProject",
        name: "Gaming Website",
        shortDescription: "Gaming Website with a variety of games and member login feature",
        fullDescription: "<p>This project is a website which contains a variety of games written with JavaScript and/or PHP. Website also has a member log in/sign up feature. Games can be played as Player vs. Player or Player vs. Computer (Some of the games are Player vs. Computer only.) All pages are responsive for both small and medium devices.</p><ul>JavaScript Games<li>Rock - Paper - Scissors (JS) - PvC</li><li>Tic - Tac - Toe (JS) - PvP / PvC</li><li>Ultimate Tic - Tac - Toe (JS) (Nine tic-tac-toe boards) - PvP / PvC</li></ul>	<ul>PHP Games</li><li>Tic - Tac - Toe (Hybrid PHP) - PvP</li><li>Rock - Paper - Scissors (Hybrid PHP) - PvC</li></ul>",
        technologies: "HTML5, CSS3, JavaScript, PHP, SQL",
        links: [
            { url: "assets/content/gamesite/index.php", name: "Gaming Website" },
            { url: "https://github.com/FulyaDemirkan/GamingWebsite", name: "Source Code on GitHub" }
        ],
        screenshots: [
            { url: "assets/images/gaming/index.png", alt: "Index page before user login"},
            { url: "assets/images/gaming/index2.png", alt: "Index page after user login"},
            { url: "assets/images/gaming/signup.png", alt: "User registration page"},
            { url: "assets/images/gaming/rpsls.png", alt: "Rock Paper Scissors Lizard Spock game"},
            { url: "assets/images/gaming/ttt.png", alt: "Classic Tic Tac Toe game"},
            { url: "assets/images/gaming/uttt.png", alt: "Ultimate Tic Tac Toe game"}
        ]
    },
    { id: 16,
        type: "desktopProject",
        name: "PetBook",
        shortDescription: "Pet database for veterinaries",
        fullDescription: "<p>This project has been created as a Final Project of Object Oriented Programming 2 course at Sheridan College. Purpose of this application is creating a patient database for veterinaries and application uses delimited data file for keeping pet data.</p>",
        technologies: "Java, JavaFX, MVC",
        links: [
            {url: "assets/content/petbook/PetBook.rar", name: "Download Petbook.jar"},
            {url: "https://github.com/FulyaDemirkan/PetBook", name: "Source Code on GitHub"}
        ],
        screenshots: [
            { url: "assets/images/petbook/petbook1.png", alt: "Main screen displays pet data with add/delete options"},
            { url: "assets/images/petbook/petbook2.png", alt: "Main screen displays pet data with add/delete options"},
            { url: "assets/images/petbook/petbook3.png", alt: "New pet entry screen"},
            { url: "assets/images/petbook/petbook4.png", alt: "New pet entry screen with user input check"},
            { url: "assets/images/petbook/petbook5.png", alt: "Search screen with pet/owner name options"},
        ]
    },
    { id: 17,
        type: "desktopProject",
        name: "Movie Database",
        shortDescription: "Movie database displays title, year, running time and genre information",
        fullDescription: "<p>A stand-alone Java application to display all the movies which are stored in SQL DB by selected year, genre or name.</p>",
        technologies: "Java, JavaFX, MVC, SQL",
        links: [
            { url: "https://github.com/FulyaDemirkan/MovieDatabase", name: "Source Code on GitHub" }
        ],
        screenshots: [
            { url: "assets/images/moviedb/mdb1.png", alt: "Main screen of the application"},
            { url: "assets/images/moviedb/mdb3.png", alt: "Name and year based search"},
            { url: "assets/images/moviedb/mdb4.png", alt: "Year and genre based search"}
        ]
    },
    { id: 18,
        type: "desktopProject",
        name: "JDBC Helper",
        shortDescription: "JDBC Helper Library",
        fullDescription: "<p>A simple, light-weight JDBC utility class to interact with database which supports both Static and Prepared statements and automatically loads proper JDBC driver based on URL given.</p>",
        technologies: "Java, SQL",
        links: [
            { url: "assets/content/jdbchelper/jdbchelper.rar", name: "Download JDBCHelper Library" },
            { url: "https://github.com/FulyaDemirkan/JDBCHelper", name: "Source Code on GitHub" }
        ],
        screenshots: [
            { url: "assets/images/jdbchelper/jdbc.png", alt: "Supports PreparedStatement"},
            { url: "assets/images/jdbchelper/params.png", alt: "Accepts preparedStatement parameters as an ArrayList and casts them into proper data type"},
            { url: "assets/images/jdbchelper/drivers.png", alt: "Loads proper JDBC driver"}
        ]
    },
    { id: 19,
        type: "desktopProject",
        name: "Rock-Paper-Scissors",
        shortDescription: "Rock Paper Scissors game",
        fullDescription: "<p>This application is a Rock Paper Scissors game which can be played against computer. Player can see or reset current play session's scores.</p>",
        technologies: "Java, JavaFX, MVC",
        links: [
            { url: "assets/content/rps/rps.rar", name: "Download Rock Paper Scissors" },
            { url: "https://github.com/FulyaDemirkan/RockPaperScissors", name: "Source Code on GitHub" }
        ],
        screenshots: [
            { url: "assets/images/rps/rps2.png", alt: "Main screen before game"},
            { url: "assets/images/rps/rps1.png", alt: "Main screen during game"}
        ]
    }
];