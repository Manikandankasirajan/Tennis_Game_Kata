import { GAME_POINT } from "../constants";

export default function playerOneAdvantage(
	playerOneScore,
	playerTwoScore,
	lastPointScored
) {
	if (
		playerOneScore >= GAME_POINT &&
		playerTwoScore >= GAME_POINT &&
		playerOneScore === playerTwoScore + 1
	) {
		return `${lastPointScored} Scores..., Player one in Advantage! player one needs one more point to win the match`;
	}
}
