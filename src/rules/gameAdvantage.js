import createPlayerAndScoreMapObject from "../utils/createPlayerAndScoreMapObject";
import playerOneAdvantage from "../utils/playerOneAdvantage";
import playerTwoAdvantage from "../utils/playerTwoAdvantage";

export default function gameAdvantage(gameProgress) {
	const gameScores = createPlayerAndScoreMapObject(gameProgress);
	return playerOneAdvantage(gameScores) || playerTwoAdvantage(gameScores);
}
