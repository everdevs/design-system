import React from "react";
import { mount } from "enzyme";
import { Column, Grid, Row } from "../src";
import { createTree, Wrapper } from "@evernest/dev-helpers";

test("Grid renders Rows", () => {
	const text = "Hello Grid";
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

test("Grid allows setting classname", () => {
	const className = "test";
	const wrapper = mount(
		<Wrapper>
			<Grid className={className}>
				<Row>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(wrapper.find(Grid)).toHaveClassName(className);
});

test("Grid can show overflow or hide it", () => {
	const overflow = createTree(
		<Wrapper>
			<Grid overflow>
				<Row>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	const hidden = createTree(
		<Wrapper>
			<Grid>
				<Row>
					<Column>1</Column>
				</Row>
			</Grid>
		</Wrapper>
	);
	expect(overflow).toMatchSnapshot();
	expect(hidden).toMatchSnapshot();
});
