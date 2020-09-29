import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Meta, Story } from "@storybook/react";
import { Accordion, StyledAccordionProps } from "../src";

const Template: Story<StyledAccordionProps> = args => {
	return <Accordion {...args} />;
};

const MultipleTemplate: Story = ({ items }) => {
	return items.map((args, i) => <Accordion key={i} {...args} />);
};

export const Simple = Template.bind({});
export const Multiple = MultipleTemplate.bind({});

Simple.args = {
	title: "Heading",
	children: (
		<ul>
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
		</ul>
	),
};

Multiple.args = {
	items: [Simple.args, Simple.args],
};

const story: Meta = {
	component: Accordion,
	title: "Design System/Molecules/Accordion",
	decorators: [withWrapper()],
	parameters: {
		backgrounds: { default: "dark" },
		jest: ["accordion"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;
