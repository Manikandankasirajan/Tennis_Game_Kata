import gameAdvantage from "./rules/gameAdvantage";
import gameDeuce from "./rules/gameDeuce";
import newGame from "./rules/newGame";
import gameWon from "./rules/gameWon";
import pointScored from "./rules/pointScored";

export default function tennisGame(gameProgress) {
	const rules = [newGame, pointScored, gameDeuce, gameAdvantage, gameWon];
	for (const rule of rules) {
		const result = rule(gameProgress);
		if (result) {
			return result;
		}
	}
}
