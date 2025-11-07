import { GAME_POINT } from "../constants";

export default function playerTwoAdvantage(
	playerOneScore,
	playerTwoScore,
	lastPointScored
) {
	if (
		playerOneScore >= GAME_POINT &&
		playerTwoScore >= GAME_POINT &&
		playerTwoScore === playerOneScore + 1
	) {
		return `${lastPointScored} Scores..., Player Two in Advantage! player two needs one more point to win the match`;
	}
}
