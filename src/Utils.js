const CLASSNAME = 'mathematics';

const LANGUAGE = {
	back: 'back',
	errors: 'errors',
	hits: 'hits',
	next: 'next',
	ops: '🤦 Ops, try again!',
	totalErrors: 'total erros',
	totalHits: 'total hits',
	yeah: '👏 Yeah, congratulations!',
	initGame: '🎮 Mathematics',
	startGame: '🏁 Start game',
	finishGame: '🎯 Game Over',
	startGameAgain: '🏁 Start game again',
	time: '🕑'
};

const CALCULATE = (n1, n2, operator) => {
	let result = 0;

	switch(operator) {
		case '+': result = n1 + n2; break;
		case '-': result = n1 - n2; break;
		case 'x': result = n1 * n2; break;
		case '÷': result = n1 / n2; break;
		default: result = null; break;
	}

	return result.toFixed(0);
};

const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {CLASSNAME, LANGUAGE, CALCULATE, getRandomNumber};
