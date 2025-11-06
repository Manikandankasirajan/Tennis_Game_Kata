export default function newGameRule(gameProgress) {
	return gameProgress.length === 0 ? "New Game! Love All" : null;
}
