import createPlayerAndScoreMapObject from "../utils/createPlayerAndScoreMapObject";
import { POINTS } from "../constants";

export default function pointScored(gameProgress) {
	const playerAndScoreMap = createPlayerAndScoreMapObject(gameProgress);
	if (
		playerAndScoreMap["Player One"] < 3 &&
		playerAndScoreMap["Player Two"] < 3
	) {
		return `${gameProgress.pop()} Scores! and the score is ${
			POINTS[playerAndScoreMap["Player One"]]
		} : ${POINTS[playerAndScoreMap["Player Two"]]}`;
	} else {
		return null;
	}
}
