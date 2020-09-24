import React from "react";
import { mount } from "enzyme";
import { EvernestLogo, LogoSize, StyledEvernestLogoProps } from "../src";
import { createTree, withTheme } from "@evernest/dev-helpers";
import { theme } from "@evernest/theme";

const ThemedLogo = withTheme<StyledEvernestLogoProps>(EvernestLogo, theme);

test("EvernestLogo allows setting classname", () => {
	const className = "test";
	const wrapper = mount(<ThemedLogo className={className} />);
	expect(wrapper).toHaveClassName(className);
});

test("EvernestLogo can be responsive, small or large", () => {
	const small = createTree(<ThemedLogo size={LogoSize.small} />);
	const responsive = createTree(<ThemedLogo size={LogoSize.responsive} />);
	const large = createTree(<ThemedLogo size={LogoSize.large} />);
	expect(small).toMatchSnapshot();
	expect(responsive).toMatchSnapshot();
	expect(large).toMatchSnapshot();
});
