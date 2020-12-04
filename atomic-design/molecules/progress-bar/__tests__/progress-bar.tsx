import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import React from "react";
import { ProgressBar, ProgressBarProps } from "../src";

const ThemedProgressBar = withTheme<ProgressBarProps>(ProgressBar, theme);

test("ProgressBar matches the snapshot", () => {
	const tree = createTree(<ThemedProgressBar ariaLabel="Step 1 of 3" current={2} segments={3} />);
	expect(tree).toMatchSnapshot();
});
