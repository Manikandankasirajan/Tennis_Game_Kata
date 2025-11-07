export default function playerOneAdvantage(gameScores) {
	if (
		gameScores["Player One"] >= 3 &&
		gameScores["Player Two"] >= 3 &&
		gameScores["Player One"] === gameScores["Player Two"] + 1
	) {
		return "Player one in Advantage! player one needs one more point to win the match";
	}
}
