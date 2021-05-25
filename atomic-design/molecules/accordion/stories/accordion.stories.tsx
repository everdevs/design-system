import { ColorBox, withWrapper } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";
import { Typography, TypographyVariant } from "@evernest/typography";
import { Meta, Story } from "@storybook/react";
import React from "react";
import { Accordion, AccordionProps } from "../src";

const ExampleAccordionContent = (
	<>
		<p>Some content that is now visible.</p>
		<a href="#">dada</a>
		<a href="#">dada</a>
		<a href="#">dada</a>
		<ul>
			<li>List Item</li>
			<li>List Item</li>
			<li>List Item</li>
		</ul>
	</>
);

const LightTemplate: Story<AccordionProps> = args => {
	return (
		<ColorBox background={theme.palette.white.css} color={theme.palette.black.css}>
			<Accordion id={args.id} title={args.title} {...args} />
		</ColorBox>
	);
};

const DarkTemplate: Story<AccordionProps> = args => {
	return (
		<ColorBox background={theme.palette.darkGrey.css} color={theme.palette.white.css}>
			<Accordion id={args.id} title={args.title} {...args} dark />
		</ColorBox>
	);
};

const MultipleTemplate: Story = ({ items }) => {
	return items.map((args, i) => <LightTemplate key={i} {...args} />);
};

export const Simple = LightTemplate.bind({});
Simple.args = {
	id: "test-id",
	title: "Heading",
	children: ExampleAccordionContent,
};

export const Multiple = MultipleTemplate.bind({});
Multiple.args = {
	items: [
		{
			id: "test-id-1",
			title: "Heading",
			children: ExampleAccordionContent,
		},
		{
			id: "test-id-2",
			title: "Another Heading",
			children: ExampleAccordionContent,
		},
	],
};

export const WithHeaderComponent = LightTemplate.bind({});
WithHeaderComponent.args = {
	id: "test-id",
	title: "Heading",
	children: ExampleAccordionContent,
	headerComponent: props => <Typography {...props} variant={TypographyVariant.h4} />,
};

export const WithDarkBackground = DarkTemplate.bind({});
WithDarkBackground.args = {
	id: "test-id",
	title: "Elements are white",
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
