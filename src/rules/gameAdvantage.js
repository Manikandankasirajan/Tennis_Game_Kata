import playerOneAdvantage from "../utils/playerOneAdvantage";
import playerTwoAdvantage from "../utils/playerTwoAdvantage";

export default function gameAdvantage(
	playerOneScore,
	playerTwoScore,
	lastPointScored
) {
	return (
		playerOneAdvantage(playerOneScore, playerTwoScore, lastPointScored) ||
		playerTwoAdvantage(playerOneScore, playerTwoScore, lastPointScored)
	);
}
