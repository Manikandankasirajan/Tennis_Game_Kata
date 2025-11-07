import createPlayerAndScoreMapObject from "../utils/createPlayerAndScoreMapObject";

const GAME_POINTS = { 0: "Love", 1: 15, 2: 30, 3: "Game" };

export default function playerScores(gameProgress) {
	const playerAndScoreMap = createPlayerAndScoreMapObject(gameProgress);
	if (
		playerAndScoreMap["Player One"] <= 3 &&
		playerAndScoreMap["Player Two"] <= 3
	) {
		return `${gameProgress.pop()} Scores! and the score is ${
			GAME_POINTS[playerAndScoreMap["Player One"]]
		} : ${GAME_POINTS[playerAndScoreMap["Player Two"]]}`;
	} else {
		return null;
	}
}
