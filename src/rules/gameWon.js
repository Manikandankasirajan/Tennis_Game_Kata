import playerOneWins from "../utils/playerOneWins";
import playerTwoWins from "../utils/playerTwoWins";

export default function gameWon(
	playerOneScore,
	playerTwoScore,
	lastPointScored
) {
	return (
		playerOneWins(playerOneScore, playerTwoScore, lastPointScored) ||
		playerTwoWins(playerOneScore, playerTwoScore, lastPointScored)
	);
}
