import { Breakpoints } from "@evernest/theme";
import React from "react";

export interface ContentfulImageProps extends React.HTMLProps<HTMLDivElement> {}

export type ImageSizes = {
	[key in keyof Breakpoints]: keyof Breakpoints;
};

export enum AssetFit {
	pad = "pad",
	fill = "fill",
	scale = "scale",
	crop = "crop",
	thumb = "thumb",
}

export enum AssetFocus {
	center = "center",
	top = "top",
	right = "right",
	left = "left",
	bottom = "bottom",
	"top_right" = "top_right",
	"top_left" = "top_left",
	"bottom_right" = "bottom_right",
	"bottom_left" = "bottom_left",
	face = "face",
	faces = "faces",
}

export enum AssetFormat {
	jpg = "jpg",
	png = "png",
	webp = "webp",
}

export interface AssetOptions {
	fm?: AssetFormat;
	fl?: "progressive";
	h?: number;
	w?: number;
	q?: number;
	f?: AssetFocus;
	fit?: AssetFit;
}

export interface BuildSrcSetParams {
	url: string;
	sizes: ImageSizes;
	fm: AssetFormat;
	breakpoints: Breakpoints;
}
