import React from "react";
import renderer from "react-test-renderer";

export function createTree(component: React.ReactNode): JSON {
	return renderer.create(component).toJSON();
}

export function withTheme<T = {}>(Component, theme): React.FC<T> {
	const ThemedComponent: React.FC<T> = props => <Component {...props} theme={theme} />;
	return ThemedComponent;
}

export function resizeWindow({ height, width }): void {
	Object.defineProperty(window, "innerWidth", {
		writable: true,
		configurable: true,
		value: width,
	});
	Object.defineProperty(window, "innerHeight", {
		writable: true,
		configurable: true,
		value: height,
	});
}
