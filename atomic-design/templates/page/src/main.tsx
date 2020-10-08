import styled from "@emotion/styled";
import { PropsWithTheme } from "@evernest/theme";

export const Main = styled.main<PropsWithTheme>`
	min-height: calc(100vh - var(--header-height-ref));
`;
