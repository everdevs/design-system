import { PropsWithTheme } from "@evernest/theme";

export enum Size {
	small = "small",
	medium = "medium",
	large = "large",
}

export enum Variation {
	primary = "primary",
	secondary = "secondary",
	tertiary = "tertiary",
	default = "default",
}

export interface ButtonProps extends PropsWithTheme<HTMLButtonElement> {
	variation?: Variation;
	size?: Size;
}
