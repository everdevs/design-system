import { withWrapper, ColorBox } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import { Typography, TypographyVariant } from "@evernest/typography";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { Accordion, StyledAccordionProps } from "../src";

const ExampleAccordionContent = (
	<div>
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
		<ColorBox background={theme.palette.darkGrey.css} color={theme.palette.white.css}>
			<Accordion title={args.title} {...args} />
		</ColorBox>
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
		jest: ["accordion"],
	},
	argTypes: {
		children: { control: "text" },
		theme: { control: false },
	},
};

export default story;