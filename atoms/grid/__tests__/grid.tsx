import React from "react";
import { mount } from "enzyme";
import { Column, Grid, Row } from "../src";
import { Wrapper } from "@evernest/dev-helpers";

test("Grid only renders Rows", () => {
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
	expect(wrapper.find(Grid).text()).toEqual(text);
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
