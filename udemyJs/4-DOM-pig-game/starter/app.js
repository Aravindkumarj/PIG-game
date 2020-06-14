/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [90, 90];
roundScore = 0;
activePlayer = 0;

//set initial dice image to none
document.querySelector('.dice').style.display = 'none';

// set initial values to 0

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

//event listener

//Initialization function

function initialize(){
	
	//initialize all variables
	scores = [90 , 90]
	roundScore = 0;
	activePlayer = 0;
	
//	document.getElementById('score-0').textContent = '0';
//	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	
	//set initial dice image to none
	document.querySelector('.dice').style.display = 'none';
	
	// set active panel to player 0
	//remove active panel from current player
	document.querySelector('.player-1-panel').classList.remove('active');
		
	//switch player
	activePlayer = 0;
		
	// add active panel to the current player
	document.querySelector('.player-0-panel').classList.add('active');
}

function newGame(){
	
	//initialize all variables
	scores = [90 , 90]
	roundScore = 0;
	activePlayer = 0;
	
	document.getElementById('score-0').textContent = '0';
	document.getElementById('score-1').textContent = '0';
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';
	
	//set initial dice image to none
	document.querySelector('.dice').style.display = 'none';
	
	// set active panel to player 0
	//remove active panel from current player
	document.querySelector('.player-1-panel').classList.remove('active');
		
	//switch player
	activePlayer = 0;
		
	// add active panel to the current player
	document.querySelector('.player-0-panel').classList.add('active');
	
	// reset 'Winner' to player
	document.querySelector('#name-0').textContent = 'Player 1';
	document.querySelector('#name-1').textContent = 'Player 2';
	
	//set the roll dice button active
	document.querySelector('.btn-roll').disabled = false;
}

//anonymous function
document.querySelector('.btn-roll').addEventListener('click', function(){
	
	// 1. random number
	var dice = Math.floor(Math.random() * 6) + 1;
	
	// 2. display result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';
	
	// 3. Update round score only if the rolled number is not equal to 1
	if (dice != 1){
		//calculate round score
		roundScore = roundScore + dice;
		
		// show round score on the page
		document.querySelector('#current-'+activePlayer).textContent = roundScore;
		
	}
	else {
		
		//reset round score
		roundScore = 0;
	
		//add current score to total score
		scores[activePlayer] = scores[activePlayer] + roundScore;
	
		//reset current score to 0
		document.querySelector('#current-'+activePlayer).textContent = '0';
	
		//reset dice image to none.
		//document.querySelector('.dice').style.display = 'none'; 
		
		//remove active panel from current player
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		
		//switch player
		activePlayer = 1 - activePlayer;
		
		// add active panel to the current player
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
	}
	
	// activate hold button
	document.querySelector('.btn-hold').disabled = false;

		
});

// pushing the hold button
document.querySelector('.btn-hold').addEventListener('click',function(){
	
	//add current score to total score
	scores[activePlayer] = scores[activePlayer] + roundScore;
	
	//reset current score to 0
	roundScore = 0;
	var currentDom = document.querySelector('.player-current-score');
		currentDom.textContent = 0;
	
	//reset dice image to none.
	document.querySelector('.dice').style.display = 'none';
	
	// display total score 
	document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
	
	// check if total score is 100
	if (scores[activePlayer] >= 100){
		document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
		document.querySelector('.player-0-panel').classList.remove('active');
		document.querySelector('.player-1-panel').classList.remove('active');
		
		document.getElementById('current-0').textContent = '0';
		document.getElementById('current-1').textContent = '0';
		
		//set initial dice image to none
		document.querySelector('.dice').style.display = 'none';
		
		// set active panel to player 0
		//remove active panel from current player
		document.querySelector('.player-1-panel').classList.remove('active');
			
		//switch player
		activePlayer = 0;
			
		// deactivate roll button
		document.querySelector('.btn-roll').disabled = true;
		
	}
	else {
		
		//remove active panel from current player
		document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
		
		//switch player
		// can be written as 
		// activePlayer === 0? activePlayer = 1
		activePlayer = 1 - activePlayer;
		
		// add active panel to the current player
		document.querySelector('.player-'+activePlayer+'-panel').classList.add('active');
		
		
	}
	
	//you can press hold only once in a turn
	document.querySelector('.btn-hold').disabled = true;
	
	
});

// pushing new game buttom
document.querySelector('.btn-new').addEventListener('click',newGame);