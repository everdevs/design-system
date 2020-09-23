import React from "react";
import renderer from "react-test-renderer";

export function createTree(component: React.ReactNode): JSON {
	return renderer.create(component).toJSON();
}

export function withTheme<T = {}>(Component, theme) {
	const ThemedComponent: React.FC<T> = props => <Component {...props} theme={theme} />;
	return ThemedComponent;
}
