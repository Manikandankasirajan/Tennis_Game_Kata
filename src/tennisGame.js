import newGameRule from "./rules/newGameRule";

const GAME_POINTS = { 0: "Love", 1: 15, 2: 30, 3: 40 };

export default function tennisGame(gameProgress) {
	const rules = [newGameRule];
	for (const rule of rules) {
		const result = rule(gameProgress);
		if (result) {
			return result;
		}
	}
}
