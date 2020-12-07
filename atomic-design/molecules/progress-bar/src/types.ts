import { PropsWithTheme } from "@evernest/theme";

export type ProgressBarElement = HTMLDivElement;

export interface StyledProgressBarProps extends PropsWithTheme<ProgressBarElement> {}

export interface ProgressBarProps extends PropsWithTheme<ProgressBarElement> {
	label: string;
	current: number;
	segments: number;
}
