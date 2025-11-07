import gameAdvantage from "./rules/gameAdvantage";
import gameDeuce from "./rules/gameDeuce";
import newGame from "./rules/newGame";
import gameWon from "./rules/gameWon";
import pointScored from "./rules/pointScored";
import createPlayerAndScoreMapObject from "./utils/createPlayerAndScoreMapObject";

export default function tennisGame(gameProgress) {
	if (!Array.isArray(gameProgress)) {
		throw new TypeError("Invalid Input Type");
	}
	const gameScores = createPlayerAndScoreMapObject(gameProgress);
	const playerOneScore = gameScores["Player One"];
	const playerTwoScore = gameScores["Player Two"];
	const lastPointScored = gameProgress.pop();
	const rules = [newGame, pointScored, gameDeuce, gameAdvantage, gameWon];
	for (const rule of rules) {
		const result = rule(playerOneScore, playerTwoScore, lastPointScored);
		if (result) {
			return result;
		}
	}
}
