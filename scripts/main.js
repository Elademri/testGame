let gameData = {}

initGame();
setInterval(updateGraphics, 100);
setInterval(gameLoop, 1000);


function gameLoop(){
	gameData.resource.charbon.amount += gameData.resource.charbon.gain();
	gameData.resource.fer.amount += gameData.resource.fer.gain;
	gameData.resource.monnaie.amount += gameData.resource.monnaie.gain;
	gameData.resource.energie.amount += gameData.resource.energie.gain;
	return;
}

function updateGraphics(){
	updateResBar();
	return;
}

function updateResBar(){
	document.querySelector('#charbon').innerHTML = gameData.resource.charbon.amount;
	document.querySelector('#fer').innerHTML = gameData.resource.fer.amount;
	document.querySelector('#monnaie').innerHTML = gameData.resource.monnaie.amount;
	document.querySelector('#energie').innerHTML = gameData.resource.energie.amount;
	return;
}

function updateToolBar(evt){
	switch(evt.target.id){
		case "mineCharbon":
			evt.target.title = "Mine de charbon possédées";
			break;
		case "mineFer":
			break;
		case "mineMonnaie":
			break;
		case "mineEnergie":
			break;
		default:
			break;
	}
	return;
}

function initGame(){
	gameData.resource = {};
	gameData.resource.charbon = {};
	gameData.resource.charbon.amount = 100;
	gameData.resource.charbon.gain = getGain;
	gameData.resource.charbon.mines = 1;
	gameData.resource.fer = {};
	gameData.resource.fer.amount = 100;
	gameData.resource.fer.gain = 0;
	gameData.resource.fer.mines = 0;
	gameData.resource.monnaie = {};
	gameData.resource.monnaie.amount = 100;
	gameData.resource.monnaie.gain = 0;
	gameData.resource.monnaie.mines = 0;
	gameData.resource.energie = {};
	gameData.resource.energie.amount = 500;
	gameData.resource.energie.gain = 0;
	gameData.resource.energie.mines = 0;
	
	
	document.querySelector('#mineCharbon').onmouseover = updateToolBar;
	document.querySelector('#mineFer').onmouseover = updateToolBar;
	document.querySelector('#mineMonnaie').onmouseover = updateToolBar;
	document.querySelector('#mineEnergie').onmouseover = updateToolBar;
	return;
}

function getGain(){
	let gain;
	gain = this.mines*2;
	alert(gain);
	return gain;
}


