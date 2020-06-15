import { Wrapper } from "@evernest/dev-helpers";
import { icons } from "@evernest/icons";
import { select } from "@storybook/addon-knobs";
import { withTests } from "@storybook/addon-jest";
import React from "react";
import humanize from "humanize-string";
import { Icon, IconName, Size } from "../src";
import results from "./icon.testresults.json";

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
					return <Icon key={icon} icon={icon} size={Size[size]} />;
				})}
		</Wrapper>
	);
};

export const allIcons: React.FC = () => {
	const size = select("Icon Size", sizeOptions, Size.medium) as Size;
	return (
		<Wrapper>
			{Object.keys(icons[size]).map((icon: IconName) => (
				<Icon key={icon} icon={icon} size={size} />
			))}
		</Wrapper>
	);
};

const story = {
	component: Icon,
	title: "Design System/Atoms/Icon",
	decorators: [withTests({ results })],
	parameters: {
		jest: ["icon"],
	},
};

export default story;
