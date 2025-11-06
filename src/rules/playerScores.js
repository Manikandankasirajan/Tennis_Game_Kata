import createPlayerAndScoreMapObject from "../utils/createPlayerAndScoreMapObject";

const GAME_POINTS = { 0: "Love", 1: 15, 2: 30, 3: 40 };

export default function playerScores(gameProgress) {
	const playerAndScoreMap = createPlayerAndScoreMapObject(gameProgress);
	return `${gameProgress.pop()} Scores! and the score is ${
		GAME_POINTS[playerAndScoreMap["Player One"]]
	} : ${GAME_POINTS[playerAndScoreMap["Player Two"]]}`;
}
