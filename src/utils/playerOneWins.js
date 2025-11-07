export default function playerOneWins(gameScores) {
	if (
		gameScores["Player One"] >= 4 &&
		gameScores["Player One"] === gameScores["Player Two"] + 2
	) {
		return "Player One Wins!!!";
	}
}
