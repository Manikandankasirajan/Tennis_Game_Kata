export default function createPlayerAndScoreMapObject(gameProgress) {
	const playerAndScoreMap = { "Player One": 0, "Player Two": 0 };
	for (const player of gameProgress) {
		playerAndScoreMap[player] = playerAndScoreMap[player] + 1;
	}
	return playerAndScoreMap;
}
