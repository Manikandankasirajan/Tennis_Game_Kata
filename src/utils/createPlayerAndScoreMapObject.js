import { PLAYER_LIST } from "../constants";
export default function createPlayerAndScoreMapObject(gameProgress) {
	const playerAndScoreMap = { "Player One": 0, "Player Two": 0 };
	for (const player of gameProgress) {
		if (PLAYER_LIST.find((PLAYER) => PLAYER === player)) {
			playerAndScoreMap[player] = playerAndScoreMap[player] + 1;
		} else {
			throw new Error("Incorrect/Unexpected Input");
		}
	}
	return playerAndScoreMap;
}
