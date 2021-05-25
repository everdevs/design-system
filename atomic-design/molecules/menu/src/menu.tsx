import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { MenuDirection, MenuElement, StyledMenuProps } from "./types";

export const StyledMenuTpl = styled.nav<StyledMenuProps>`
	display: flex;
	${({ direction }) => css`
		flex-direction: ${direction === MenuDirection.vertical ? "column" : "row"};
	`};
`;

export const Menu = React.forwardRef<MenuElement, StyledMenuProps>((props, ref) => (
	<StyledMenuTpl {...props} ref={ref} />
));
