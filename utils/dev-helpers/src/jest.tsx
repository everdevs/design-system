import React from "react";
import renderer from "react-test-renderer";

export function createTree(component: React.ReactNode): JSON {
	return renderer.create(component).toJSON();
}

export function withTheme(Component, theme) {
	return props => <Component {...props} theme={theme} />;
}
