import getPointsForScore from "../utils/getPointsForScore";

export default function pointScored(
	playerOneScore,
	playerTwoScore,
	lastPointScored
) {
	if (playerOneScore < 3 && playerTwoScore < 3) {
		return `${lastPointScored} Scores! and the score is ${getPointsForScore(
			playerOneScore
		)} : ${getPointsForScore(playerTwoScore)}`;
	} else {
		return null;
	}
}
