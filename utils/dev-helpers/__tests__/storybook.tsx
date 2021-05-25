import React from "react";
import { mount } from "enzyme";
import { ColorBox, createTree, random, randomColor, range, Wrapper } from "../src";

test("random generates an integer", () => {
	const r = random(10);
	const int = Math.round(r);
	expect(r).toEqual(int);
});

test("random has a max value", () => {
	const max = 10;
	const r = random(max);
	expect(r).toBeLessThanOrEqual(max);
});

test("random has a min value", () => {
	const max = 10;
	const min = 5;
	const r = random(max, min);
	expect(r).toBeGreaterThanOrEqual(min);
});

test("range generates an array", () => {
	const length = 10;
	const arr = range(length);
	expect(arr.length).toEqual(length);
	expect(Array.isArray(arr)).toEqual(true);
});

test("randomColor generates a random color", () => {
	const color = randomColor();
	expect(color).toMatch(/hsla\(\d{0,3},50%,50%,0\.5\)/);
});

test("Wrapper renders children", () => {
	const text = "Hello Button";
	const wrapper = mount(<Wrapper>{text}</Wrapper>);
	expect(wrapper.text()).toEqual(text);
});

test("Wrapper renders correctly", () => {
	const tree = createTree(<Wrapper />);
	expect(tree).toMatchSnapshot();
});

test("ColorBox can change the background", () => {
	const tree = createTree(<ColorBox background="red" />);
	expect(tree).toMatchSnapshot();
});

test("ColorBox can change the color", () => {
	const tree = createTree(<ColorBox color="red" />);
	expect(tree).toMatchSnapshot();
});

test("ColorBox can change the height", () => {
	const tree = createTree(<ColorBox height="10px" />);
	expect(tree).toMatchSnapshot();
});

test("ColorBox can change have top/bottom margins", () => {
	const tree = createTree(<ColorBox margin="10px" />);
	expect(tree).toMatchSnapshot();
});

test("ColorBox renders children", () => {
	const text = "Hello Button";
	const wrapper = mount(<ColorBox>{text}</ColorBox>);
	expect(wrapper.text()).toEqual(text);
});

test("ColorBox allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ColorBox className={className} />);
	expect(wrapper).toHaveClassName(className);
});
