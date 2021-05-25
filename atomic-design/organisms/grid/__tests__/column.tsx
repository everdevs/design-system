import React from "react";
import { mount } from "enzyme";
import { Column, Grid, Row } from "../src";
import { createTree, Wrapper } from "@evernest/dev-helpers";

test("Column renders children", () => {
	const text = "Hello Column";
	const wrapper = mount(
		<Wrapper>
			<Grid>
				<Row>
					<Column>{text}</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(wrapper.text()).toEqual(text);
});

test("Column allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Grid>
				<Row>
					<Column className={className}>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(wrapper.find(Column)).toHaveClassName(className);
});

test("Column can be raw", () => {
	const tree = createTree(
		<Wrapper>
			<Grid>
				<Row>
					<Column raw>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("Column can be flex", () => {
	const tree = createTree(
		<Wrapper>
			<Grid>
				<Row>
					<Column flex>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("Column can have colspan", () => {
	const tree = createTree(
		<Wrapper>
			<Grid>
				<Row>
					<Column s={1} m={2} l={3}>
						1
					</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("Column can be hidden", () => {
	const tree = createTree(
		<Wrapper>
			<Grid>
				<Row>
					<Column s={0}>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("Column have order", () => {
	const tree = createTree(
		<Wrapper>
			<Grid>
				<Row>
					<Column order={-1}>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});
