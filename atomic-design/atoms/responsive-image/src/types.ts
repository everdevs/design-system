import { AssetFormat } from "./utils";
import { Breakpoints } from "@evernest/theme";
import React from "react";

export interface ImageProps {
	height: number;
	width: number;
	title: string;
	url: string;
}

export interface ResponsiveImageProps extends React.HTMLProps<HTMLDivElement> {
	image: ImageProps;
}

export type ImageSizes = {
	[key in keyof Breakpoints]: keyof Breakpoints;
};

export interface BuildSrcSetParams {
	url: string;
	sizes: ImageSizes;
	fm: AssetFormat;
	breakpoints: Breakpoints;
}
