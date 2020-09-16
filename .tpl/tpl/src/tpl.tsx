import styled from "@emotion/styled";
import React from "react";
import { StyledTplProps, TplProps } from "./types";

export const StyledTpl = styled.div<StyledTplProps>``;

export const Tpl = React.forwardRef<TplProps, StyledTplProps>((props, ref) => (
	<StyledTpl {...props} ref={ref} />
));
