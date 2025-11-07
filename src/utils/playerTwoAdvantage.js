export default function playerTwoAdvantage(gameScores) {
	if (
		gameScores["Player One"] >= 3 &&
		gameScores["Player Two"] >= 3 &&
		gameScores["Player Two"] === gameScores["Player One"] + 1
	) {
		return "Player Two in Advantage! player two needs one more point to win the match";
	}
}
