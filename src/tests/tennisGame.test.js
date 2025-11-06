import tennisGame from "../tennisGame";

test("return 'New Game! Love All' when game starts", () => {
	const gameProgress = [];
	expect(tennisGame(gameProgress)).toBe("New Game! Love All");
});
