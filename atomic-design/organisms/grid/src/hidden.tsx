import styled from "@emotion/styled";
import { PropsWithTheme } from "@evernest/theme";
import { css } from "@emotion/react";

export interface HiddenProps extends PropsWithTheme {
	display?: string;
	s?: boolean;
	m?: boolean;
	l?: boolean;
}
export const Hidden = styled.div<HiddenProps>`
	${({ theme: { mq }, display, s, m, l }) => css`
		display: ${s ? display : "none"};
		@media ${mq.m} {
			display: ${m ? display : "none"};
		}

		@media ${mq.l} {
			display: ${l ? display : "none"};
		}
	`};
`;

Hidden.defaultProps = {
	display: "block",
};
