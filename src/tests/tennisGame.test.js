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
		expect(tennisGame(gameProgress)).toBe(
			"Player One Scores..., Player One Wins!!!"
		);
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
		expect(tennisGame(gameProgress)).toBe(
			"Player Two Scores..., Player Two Wins!!!"
		);
	});
});

describe("test cases to validate when the game is deuce", () => {
	test("return 'Game in Deuce! player wins the next point gets the advantage' when both player gets atleast three poins and scores are equal", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
		];
		expect(tennisGame(gameProgress)).toBe(
			"Player Two Scores... , Game in Deuce! player who wins the next point gets the advantage"
		);
	});
	test("return 'Game in Deuce! player wins the next point gets the advantage' when both player gets atleast three poins and scores are equal", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player Two",
			"Player One",
		];
		expect(tennisGame(gameProgress)).toBe(
			"Player One Scores... , Game in Deuce! player who wins the next point gets the advantage"
		);
	});
});

describe("test cases to validate game in advantage scenarios", () => {
	test("return 'Player one in Advantage! player one needs one more point to win the match' when player one scores after deuce", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
		];
		expect(tennisGame(gameProgress)).toBe(
			"Player One Scores..., Player one in Advantage! player one needs one more point to win the match"
		);
	});
	test("return 'Player Two in Advantage! player two needs one more point to win the match' when player two scores after deuce", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player Two",
		];
		expect(tennisGame(gameProgress)).toBe(
			"Player Two Scores..., Player Two in Advantage! player two needs one more point to win the match"
		);
	});
});

describe("test cases to validate when game goes back to deuce after advantage", () => {
	test("return 'Game in Deuce! player wins the next point gets the advantage' when player without advantage score the points and scores are equal again", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
		];
		expect(tennisGame(gameProgress)).toBe(
			"Player Two Scores... , Game in Deuce! player who wins the next point gets the advantage"
		);
	});
	test("return 'Game in Deuce! player wins the next point gets the advantage' when player without advantage score the points and scores are equal again", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player Two",
			"Player One",
		];
		expect(tennisGame(gameProgress)).toBe(
			"Player One Scores... , Game in Deuce! player who wins the next point gets the advantage"
		);
	});
});

describe("test cases to validate when player with advantage scored a point to win the match", () => {
	test("return 'Player One Wins!!!' when player one scored after having an advantage", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player One",
		];
		expect(tennisGame(gameProgress)).toBe(
			"Player One Scores..., Player One Wins!!!"
		);
	});
	test("return 'Player Two Wins!!!' when player two scored after having an advantage", () => {
		const gameProgress = [
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player One",
			"Player Two",
			"Player Two",
			"Player Two",
		];
		expect(tennisGame(gameProgress)).toBe(
			"Player Two Scores..., Player Two Wins!!!"
		);
	});
});

describe("test cases to validate for invalid inputs", () => {
	test("to throw error for invalid input", () => {
		const gameProgress = null;
		expect(() => tennisGame(gameProgress)).toThrow();
		expect(() => tennisGame(gameProgress)).toThrow(TypeError);
		expect(() => tennisGame(gameProgress)).toThrow("Invalid Input Type");
	});
	test("to throw error for incorrect input", () => {
		const gameProgress = ["Player One", "Player Two", "Player Three"];
		expect(() => tennisGame(gameProgress)).toThrow();
		expect(() => tennisGame(gameProgress)).toThrow(Error);
		expect(() => tennisGame(gameProgress)).toThrow(
			"Incorrect/Unexpected Input"
		);
	});
});
