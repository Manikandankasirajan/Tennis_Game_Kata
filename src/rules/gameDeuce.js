export default function gameDeuce(
	playerOneScore,
	playerTwoScore,
	lastPointScored
) {
	if (
		playerOneScore >= 3 &&
		playerTwoScore >= 3 &&
		playerOneScore === playerTwoScore
	) {
		return `${lastPointScored} Scores... , Game in Deuce! player who wins the next point gets the advantage`;
	}
}
