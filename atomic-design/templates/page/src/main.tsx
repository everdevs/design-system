import styled from "@emotion/styled";
import { PropsWithTheme } from "@evernest/theme";

export const Main = styled.main<PropsWithTheme>`
	grid-area: Main;
	min-height: calc(100vh - var(--header-height-ref));
`;
