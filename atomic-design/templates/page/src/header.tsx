import styled from "@emotion/styled";
import { PropsWithTheme } from "@evernest/theme";

export const Header = styled.header<PropsWithTheme>`
	grid-area: Header;
	top: 0;
	left: 0;
	right: 0;
	height: var(--header-height-ref);
`;
