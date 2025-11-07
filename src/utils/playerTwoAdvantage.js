import { GAME_POINT } from "../constants";

export default function playerTwoAdvantage(gameScores) {
	if (
		gameScores["Player One"] >= GAME_POINT &&
		gameScores["Player Two"] >= GAME_POINT &&
		gameScores["Player Two"] === gameScores["Player One"] + 1
	) {
		return "Player Two in Advantage! player two needs one more point to win the match";
	}
}
