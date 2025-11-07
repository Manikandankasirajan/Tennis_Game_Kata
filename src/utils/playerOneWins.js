import { MATCH_POINT } from "../constants";

export default function playerOneWins(
	playerOneScore,
	playerTwoScore,
	lastPointScored
) {
	if (playerOneScore >= MATCH_POINT && playerOneScore === playerTwoScore + 2) {
		return `${lastPointScored} Scores..., Player One Wins!!!`;
	}
}
