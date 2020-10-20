import styled from "@emotion/styled";
import { PropsWithTheme } from "@evernest/theme";

export const Main = styled.main<PropsWithTheme>`
	display: flex;
	flex-direction: column;
	flex: 1;
	min-height: calc(100vh - var(--header-height-ref));
`;
