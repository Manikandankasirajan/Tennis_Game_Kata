export default function playerTwoWins(gameScores) {
	if (
		gameScores["Player Two"] >= 4 &&
		gameScores["Player Two"] === gameScores["Player One"] + 2
	) {
		return "Player Two Wins!!!";
	}
}
