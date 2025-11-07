import tennisGame from "../tennisGame";

test("return 'New Game! Love All' when game starts", () => {
	const gameProgress = [];
	expect(tennisGame(gameProgress)).toBe("New Game! Love All");
});

describe("test cases to validate when player scored a point", () => {
	test("return 'Player One Scores! and the score is 15 : 0' when player one scores", () => {
		const gameProgress = ["Player One"];
		expect(tennisGame(gameProgress)).toBe(
			"Player One Scores! and the score is 15 : Love"
		);
	});
	test("return 'Player Two Scores! and the score is Love : 15' when player two scores", () => {
		const gameProgress = ["Player Two"];
		expect(tennisGame(gameProgress)).toBe(
			"Player Two Scores! and the score is Love : 15"
		);
	});
});

describe("test cases to validate when a player wins the match", () => {
	test("return Player One Wins!!! if player one reach 4 ppints and has atleast 2 point more than oppenent", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player One",
		];
		expect(tennisGame(gameProgress)).toBe("Player One Wins!!!");
	});
	test("return Player Two Wins!!! if player two reach 4 ppints and has atleast 2 point more than oppenent", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player Two",
			"Player Two",
		];
		expect(tennisGame(gameProgress)).toBe("Player Two Wins!!!");
	});
});
