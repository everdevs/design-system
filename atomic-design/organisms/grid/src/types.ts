import React from "react";
import { GridConfig, PropsWithTheme } from "@evernest/theme";

export type ColSpanValue = string | number;

export interface ColSpan {
	xs?: ColSpanValue;
	s?: ColSpanValue;
	m?: ColSpanValue;
	l?: ColSpanValue;
}

export interface ColumnProps extends ColSpan, PropsWithTheme {
	raw?: boolean;
	flex?: boolean;
	order?: number;
}
export type ColumnType = React.ReactElement<ColumnProps> | React.ReactElement<ColumnProps>[];

export enum Alignment {
	start = "flex-start",
	end = "flex-end",
	center = "center",
}

export interface RowProps extends PropsWithTheme {
	children?: ColumnType;
	raw?: boolean;
	noWrap?: boolean;
	reverse?: boolean;
	justify?: Alignment;
}

export type RowType = React.ReactElement<RowProps> | React.ReactElement<RowProps>[];

export interface GridProps extends PropsWithTheme {
	children?: RowType;
	overflow?: boolean;
}

export type GridOverlayPosition = "fixed" | "absolute";

export interface GridOverlayGridProps extends GridProps {
	position?: GridOverlayPosition;
}

export interface GridOverlayProps extends GridOverlayGridProps {
	initialActive?: boolean;
	toggle?: boolean;
}

export interface GridContextProps {
	grid: GridConfig;
}

export interface BoxProps extends PropsWithTheme {
	removePadding?: boolean;
	addPadding?: boolean;
	removeGutter?: boolean;
	addGutter?: boolean;
	flex?: boolean;
}
