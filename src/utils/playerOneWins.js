import { MATCH_POINT } from "../constants";

export default function playerOneWins(gameScores) {
	if (
		gameScores["Player One"] >= MATCH_POINT &&
		gameScores["Player One"] === gameScores["Player Two"] + 2
	) {
		return "Player One Wins!!!";
	}
}
