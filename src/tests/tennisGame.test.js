import tennisGame from "../tennisGame";

test("return 'New Game! Love All' when game starts", () => {
	const gameProgress = [];
	expect(tennisGame(gameProgress)).toBe("New Game! Love All");
});

test("return 'Player One Scores! and the score is 15 : 0' when player one scores", () => {
	const gameProgress = ["Player One"];
	expect(tennisGame(gameProgress)).toBe(
		"Player One Scores! and the score is 15 : Love"
	);
});
test("return 'Player One Scores! and the score is Love : 15' when player two scores", () => {
	const gameProgress = ["Player Two"];
	expect(tennisGame(gameProgress)).toBe(
		"Player Two Scores! and the score is Love : 15"
	);
});
