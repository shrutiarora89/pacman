
			<!-- //make the maze a lot more interesting/bigger! -->
			<!-- //do not let the pacman go through the wall! -->
			<!-- //have a cherry appear. cherry is worth 50 pts -->
			 // support two players 
			 // have two ghosts appear and have them move around 
			<!-- //when the ghost meets/hits the pacman, display an alert that says 'Game Over!!!' -->


		var score = 0; //counting the score
        var player2score =0;
//Object pacman
		var pacman={
			x: 1,
			y: 1
		};

		var player2={
			x: 10,
			y: 1
		};

//Ghost Object
		var ghost={
			x:3,
			y:8
		}

//2 Dimensional Array [0 == Empty, 1 == Coin,2 == Brick, 3 ==cherry, 4 == ghost ]
		var world = [
			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
			[2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,0,1,2],
			[2,1,1,1,1,1,1,1,2,2,1,2,2,1,1,1,1,1,1,1,1,2],
			[2,1,2,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,2],
			[2,0,2,1,1,2,1,1,1,1,1,1,1,1,1,2,1,1,1,2,1,2],
			[2,1,3,1,1,2,1,1,2,2,2,2,2,1,1,3,1,1,1,2,1,2],
			[2,1,2,2,1,2,1,1,1,1,1,1,1,1,1,2,1,1,2,2,1,2],
			[2,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,2],
			[2,1,1,1,1,1,1,1,2,1,1,1,2,1,1,1,1,1,1,1,1,2],
			[2,1,2,2,1,1,1,1,2,2,1,2,2,1,1,1,1,1,2,2,1,2],
			[2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
		];

// function for display-Pacman-Style top Property
		function displayPacman(){
			document.getElementById('pacman').style.top = pacman.y*32;
			document.getElementById('pacman').style.left = pacman.x*32;
		}

// function for display-Pacman-Style top Property
		function displayPlayer2(){
			document.getElementById('player2').style.top = player2.y*32;
			document.getElementById('player2').style.left = player2.x*32;
		}
// _________________________________________________________

// _________________________________________________________

// Created two variable for ghost directions and moveCount
		var direction = 1;
		var moveCount = 4;

//a function that tells the ghost Object location
		function displayGhost() {
			var location = {
				x: ghost.x,
				y: ghost.y
			}
// if the object moves one block
			if (direction == 1) {
				ghost.y++;
			}
// if the object moves two block
			else if (direction == 2) {
				ghost.x++;
			}
// if the object moves three block
			else if (direction == 3) {
				ghost.y--;
			}
// if the object moves four block
			else if (direction == 4) {
				ghost.x--;
			}
// if the it touches the wall or moveCount is greater
			if (world[ghost.y][ghost.x] == 2 || moveCount >= Math.floor(Math.random() * (10))) {
				ghost.x = location.x;
				ghost.y = location.y;
				moveCount = 0;
				direction = Math.floor(Math.random() * (4)) + 1;
			}
			moveCount++;

			document.getElementById('ghost').style.top  = ghost.y*32;
			document.getElementById('ghost').style.left = ghost.x*32;
			setTimeout(displayGhost,300);
		}
// ________________________________________________________________________

//Function to print Score on the Screen by using innerHTML
		function updateScore(){
			document.getElementById('score').innerHTML = score;
			document.getElementById('player2score').innerHTML = player2score;

		}
// ________________________________________________________________________


//Display of the World		
		function displayWorld(){
			var output = '';
			for(var i=0; i<world.length; i++){
				output += "\n<div class='row'>";
				for(var j=0; j<world[i].length; j++){
					if(world[i][j] == 2){
						output += "<div class='brick'></div>";
					}
					else if(world[i][j] == 1){
						output += "<div class='coin'></div>";
					}
					else if(world[i][j] == 0){
						output += "<div class='empty'></div>";
					}
					else if(world[i][j] == 3){
						output += "<div class='cherry'></div>";
					}
					else if(world[i][j] == 4){
						output += "<div class='ghost'></div>";
					}
				}
				output += "</div>";
			}

			// console.log(output);
			document.getElementById('world').innerHTML = output;
		}
		displayWorld();
		displayPacman();
		displayGhost();
		displayPlayer2();
// _________________________________________________________

//Prevent-pacman to hit the BRICKS
		document.onkeydown = function(e){
			if(e.keyCode == 37 && world[pacman.y][pacman.x - 1] != 2){
	 		pacman.x--;
		} 
		//D 68 x++
	 	else if(e.keyCode == 39 && world[pacman.y][pacman.x + 1] != 2){
	  		pacman.x++;
		} 
		//87 W
	 	else if(e.keyCode == 38 && world[pacman.y -1][pacman.x]!=2){
	 		pacman.y--;
	 	} 
	 	//83 S
	 	else if(e.keyCode == 40 && world[pacman.y +1][pacman.x]!=2){
	 		pacman.y++;
	 	}
			// _________________________________________________________
					// player2
			// _________________________________________________________

	        if(e.keyCode == 65 && world[player2.y][player2.x - 1] != 2){
		 		player2.x--;
		    } 
		    //Right 39 x++
	 	    else if(e.keyCode == 68 && world[player2.y][player2.x + 1] != 2){
		  		player2.x++;
		    } 
		    // Up 38 y--
	 	    else if(e.keyCode == 87 && world[player2.y -1][player2.x]!=2){
		 		player2.y--;
	 	    } 
	 	    //down 40 y++
	 	    else if(e.keyCode == 83  && world[player2.y +1][player2.x]!=2){
		 		player2.y++;
		 	}

	 		if(world[pacman.y][pacman.x] == 1){
				world[pacman.y][pacman.x] = 0;
				score += 10;
			}
			else if(world[pacman.y][pacman.x] == 3){
				world[pacman.y][pacman.x] = 0;
				score+=50;
			} 
			
			if(pacman.x === ghost.x && pacman.y === ghost.y){
				alert('Game Over!');
			}


			if(world[player2.y][player2.x] == 1){
				world[player2.y][player2.x] = 0;
				player2score += 10;
			}
			else if(world[player2.y][player2.x] == 3){
				world[player2.y][player2.x] = 0;
				player2score+=50;
			} 
			
			if(player2.x === ghost.x && player2.y === ghost.y){
				alert('Game Over!');
			}


			displayWorld();
		    displayPacman();
		    displayPlayer2();
		    updateScore();
		}
// _________________________________________________________

			// console.log(e.keyCode);

// _________________________________________________________



	