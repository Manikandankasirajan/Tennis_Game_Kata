import gameDeuce from "./rules/gameDeuce";
import gameStarts from "./rules/gameStarts";
import gameWon from "./rules/gameWon";
import playerScores from "./rules/playerScores";

export default function tennisGame(gameProgress) {
	const rules = [gameStarts, playerScores, gameWon, gameDeuce];
	for (const rule of rules) {
		const result = rule(gameProgress);
		if (result) {
			return result;
		}
	}
}
