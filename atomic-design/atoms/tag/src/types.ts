import { PropsWithTheme } from "@evernest/theme";

export type TagElement = HTMLSpanElement;

export interface StyledTagProps extends PropsWithTheme<TagElement> {}

export interface TagProps extends PropsWithTheme {
	text: string;
}
