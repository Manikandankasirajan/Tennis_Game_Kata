import createPlayerAndScoreMapObject from "../utils/createPlayerAndScoreMapObject";

export default function gameDeuce(gameProgress) {
	const gameScores = createPlayerAndScoreMapObject(gameProgress);
	if (
		gameScores["Player One"] >= 3 &&
		gameScores["Player Two"] >= 3 &&
		gameScores["Player One"] === gameScores["Player Two"]
	) {
		return "Game in Deuce! player wins the next point gets the advantage";
	}
}
