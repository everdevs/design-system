import { withWrapper } from "@evernest/dev-helpers";
import { Typography, TypographyVariant } from "@evernest/typography";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { Accordion, StyledAccordionProps } from "../src";

const ExampleAccordionContent = (
	<div style={{ color: "#ffffff" }}>
		<p>Some content that is now visible.</p>
		<ul>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
		</ul>
	</div>
);

const Template: Story<StyledAccordionProps> = args => {
	return (
		<div style={{ color: "#ffffff" }}>
			<Accordion title={args.title} {...args} />
		</div>
	);
};

const MultipleTemplate: Story = ({ items }) => {
	return items.map((args, i) => <Template key={i} {...args} />);
};

export const Simple = Template.bind({});
Simple.args = {
	title: "Heading",
	children: ExampleAccordionContent,
};

export const Multiple = MultipleTemplate.bind({});
Multiple.args = {
	items: [
		{
			title: "Heading",
			children: ExampleAccordionContent,
		},
		{
			title: "Another Heading",
			children: ExampleAccordionContent,
		},
	],
};

export const WithHeaderComponent = Template.bind({});
WithHeaderComponent.args = {
	title: "Heading",
	children: ExampleAccordionContent,
	headerComponent: props => <Typography {...props} variant={TypographyVariant.h4} />,
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
