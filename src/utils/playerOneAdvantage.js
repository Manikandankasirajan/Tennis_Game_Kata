import { GAME_POINT } from "../constants";

export default function playerOneAdvantage(gameScores) {
	if (
		gameScores["Player One"] >= GAME_POINT &&
		gameScores["Player Two"] >= GAME_POINT &&
		gameScores["Player One"] === gameScores["Player Two"] + 1
	) {
		return "Player one in Advantage! player one needs one more point to win the match";
	}
}

