import { resizeWindow } from "../src";

test("Test passes", () => {
	const height = 100;
	const width = 200;
	resizeWindow({ height, width });
	const { innerHeight, innerWidth } = window;
	expect(innerHeight).toEqual(height);
	expect(innerWidth).toEqual(width);
});
