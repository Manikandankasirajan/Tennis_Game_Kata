import { MATCH_POINT } from "../constants";

export default function playerTwoWins(gameScores) {
	if (
		gameScores["Player Two"] >= MATCH_POINT &&
		gameScores["Player Two"] === gameScores["Player One"] + 2
	) {
		return "Player Two Wins!!!";
	}
}
