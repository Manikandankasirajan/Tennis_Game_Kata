export default function newGame(playerOneScore, playerTwoScore) {
	return playerOneScore === 0 && playerTwoScore === 0
		? "New Game! Love All"
		: null;
}
