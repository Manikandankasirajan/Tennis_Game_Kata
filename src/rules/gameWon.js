import createPlayerAndScoreMapObject from "../utils/createPlayerAndScoreMapObject";
import playerOneWins from "../utils/playerOneWins";
import playerTwoWins from "../utils/playerTwoWins";

export default function gameWon(gameProgress) {
	const gameScores = createPlayerAndScoreMapObject(gameProgress);
	return playerOneWins(gameScores) || playerTwoWins(gameScores);
}
