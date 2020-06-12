import { Wrapper } from "@evernest/storybook";
import { icons } from "@evernest/icons";
import { withA11y } from "@storybook/addon-a11y";
import { select, withKnobs } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";
import React from "react";
import humanize from "humanize-string";
import { Icon, IconName, Size } from "../src";
import results from "./icon.testresults.json";

export default {
	component: Icon,
	title: "Atoms/Icon",
	decorators: [withA11y, withKnobs, withTests({ results })],
	parameters: {
		jest: ["icon"],
	},
};

const iconOptions = Object.keys(icons["24"]).reduce((previousValue, currentValue) => {
	return { ...previousValue, [humanize(currentValue)]: currentValue };
}, {});

const sizeOptions = Object.entries(Size)
	.filter(([, value]) => typeof value === "number")
	.reduce((previousValue, [key, value]) => {
		return { ...previousValue, [humanize(key)]: value };
	}, {});

export const simple: React.FC = () => {
	const icon = select("Icon Name", iconOptions, "accessibility") as IconName;
	const size = select("Icon Size", sizeOptions, Size.medium) as Size;
	return (
		<Wrapper>
			<Icon icon={icon} size={size} />
		</Wrapper>
	);
};

export const allSizes: React.FC = () => {
	const icon = select("Icon Name", iconOptions, "accessibility") as IconName;
	return (
		<Wrapper>
			{Object.entries(Size)
				.filter(([, value]) => typeof value === "number")
				.map(([size]) => {
					return <Icon icon={icon} size={Size[size]} />;
				})}
		</Wrapper>
	);
};

export const allIcons: React.FC = () => {
	const size = select("Icon Size", sizeOptions, Size.medium) as Size;
	return (
		<Wrapper>
			{Object.keys(icons[size]).map((icon: IconName) => (
				<Icon icon={icon} size={size} />
			))}
		</Wrapper>
	);
};
