import React from "react";
import { mount } from "enzyme";
import { Typography, TypographyVariant } from "../src";
import { Wrapper, createTree } from "@evernest/dev-helpers";

const text = "Hello World!";

test("Typography renders children", () => {
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.body}>{text}</Typography>
		</Wrapper>
	);
	expect(wrapper.find(Typography).text()).toEqual(text);
});

test("Typography allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.body} className={className} />
		</Wrapper>
	);
	expect(wrapper.find(Typography)).toHaveClassName(className);
});

test("Typography renders h1", () => {
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.h1}>{text}</Typography>
		</Wrapper>
	);
	expect(wrapper.find("h1").length).toEqual(1);
});

test("Typography renders h2", () => {
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.h2}>{text}</Typography>
		</Wrapper>
	);
	expect(wrapper.find("h2").length).toEqual(1);
});

test("Typography renders h3", () => {
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.h3}>{text}</Typography>
		</Wrapper>
	);
	expect(wrapper.find("h3").length).toEqual(1);
});

test("Typography renders h4", () => {
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.h4}>{text}</Typography>
		</Wrapper>
	);
	expect(wrapper.find("h4").length).toEqual(1);
});

test("Typography renders body as p", () => {
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.body}>{text}</Typography>
		</Wrapper>
	);
	expect(wrapper.find("p").length).toEqual(1);
});

test("Typography renders body2 as p", () => {
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.body2}>{text}</Typography>
		</Wrapper>
	);
	expect(wrapper.find("p").length).toEqual(1);
});

test("Typography renders h2 with component h1", () => {
	const wrapper = mount(
		<Wrapper>
			<Typography variant={TypographyVariant.h2} component="h1">
				{text}
			</Typography>
		</Wrapper>
	);
	expect(wrapper.find("h1").length).toEqual(1);
});
