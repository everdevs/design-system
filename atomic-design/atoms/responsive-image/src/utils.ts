import { stringify as queryStringify } from "query-string";

export const isContentType = (obj: any): boolean =>
	typeof obj === "object" && "fields" in obj && "sys" in obj;

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

interface AssetOptions {
	fm?: AssetFormat;
	fl?: "progressive";
	h?: number;
	w?: number;
	q?: number;
	f?: AssetFocus;
	fit?: AssetFit;
}

export const getImageUrl = (url: string, options?: AssetOptions): string => {
	if (options) {
		return `${url}?${queryStringify(options)}`;
	}
	return url;
};
