import React from "react";
import { mount } from "enzyme";
import { Alignment, Column, Grid, Row } from "../src";
import { createTree, Wrapper } from "@evernest/dev-helpers";

test("Rows renders columns", () => {
	const text = "Hello Row";
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

test("Row allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Grid>
				<Row className={className}>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(wrapper.find(Row)).toHaveClassName(className);
});

test("Row can be raw", () => {
	const tree = createTree(
		<Wrapper>
			<Grid>
				<Row raw>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("Row can be noWrap", () => {
	const tree = createTree(
		<Wrapper>
			<Grid>
				<Row noWrap>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("Row can be reverse", () => {
	const tree = createTree(
		<Wrapper>
			<Grid>
				<Row reverse>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(tree).toMatchSnapshot();
});

test("Row can have different alignment", () => {
	const start = createTree(
		<Wrapper>
			<Grid>
				<Row justify={Alignment.start}>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	const end = createTree(
		<Wrapper>
			<Grid>
				<Row justify={Alignment.end}>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	const center = createTree(
		<Wrapper>
			<Grid>
				<Row justify={Alignment.center}>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(start).toMatchSnapshot();
	expect(end).toMatchSnapshot();
	expect(center).toMatchSnapshot();
});
