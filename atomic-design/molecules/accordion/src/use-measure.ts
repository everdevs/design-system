import React from "react";

export interface Measurements {
	contentRect: Pick<
		DOMRectReadOnly,
		"x" | "y" | "top" | "left" | "right" | "bottom" | "height" | "width"
	>;
	borderBoxSize: ResizeObserverSize;
	contentBoxSize: ResizeObserverSize;
}

const intialState = {
	contentRect: {
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
	borderBoxSize: {
		inlineSize: 0,
		blockSize: 0,
	},
	contentBoxSize: {
		inlineSize: 0,
		blockSize: 0,
	},
};

/* @todo: revisit testing when ResizeObserver is better implemented */
/* istanbul ignore next */
const useMeasure = <T extends Element = HTMLDivElement>(): [
	React.MutableRefObject<T>,
	Measurements
] => {
	const [bounds, setBounds] = React.useState<Measurements>(intialState);
	const ref = React.useRef<T>();

	React.useLayoutEffect(() => {
		let animationFrameId: number;

		const measure: ResizeObserverCallback = ([entry]) => {
			animationFrameId = window.requestAnimationFrame(() => {
				setBounds({
					contentRect: entry.contentRect,
					borderBoxSize: entry.borderBoxSize[0],
					contentBoxSize: entry.contentBoxSize[0],
				});
			});
		};

		const resizeObserver = new ResizeObserver(measure);
		resizeObserver.observe(ref.current);

		return () => {
			window.cancelAnimationFrame(animationFrameId);
			resizeObserver.disconnect();
		};
	}, []);

	return [ref, bounds];
};

export default useMeasure;
