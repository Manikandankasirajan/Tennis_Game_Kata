import { MATCH_POINT } from "../constants";

export default function playerTwoWins(
	playerOneScore,
	playerTwoScore,
	lastPointScored
) {
	if (playerTwoScore >= MATCH_POINT && playerTwoScore === playerOneScore + 2) {
		return `${lastPointScored} Scores..., Player Two Wins!!!`;
	}
}
