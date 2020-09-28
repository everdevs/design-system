import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { EvernestLogo } from "@evernest/evernest-logo";
import { Footer } from "@evernest/footer";
import { FooterLink } from "@evernest/footer-link";
import { Column, Flex, Grid, GridOverlay, Hidden, Row } from "@evernest/grid";
import { Header } from "@evernest/header";
import { HeaderLink } from "@evernest/header-link";
import { Menu, MenuDirection } from "@evernest/menu";
import { Icon, Size } from "@evernest/icon";
import styled from "@emotion/styled";
import { Anchor, Panel, Toggle } from "@evernest/panel";
import { Typography, TypographyVariant } from "@evernest/typography";
import { Meta, Story } from "@storybook/react";
import {
	Footer as FooterArea,
	Header as HeaderArea,
	Main as MainArea,
	PageWithStyles as Page,
} from "../src";

export const PageLayout: Story = () => {
	return (
		<>
			<GridOverlay toggle />
			<Page>
				<HeaderArea>
					<Header fixed />
				</HeaderArea>
				<MainArea />
				<FooterArea>
					<Footer />
				</FooterArea>
			</Page>
		</>
	);
};

export const WithMobileMenu: Story = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<GridOverlay toggle />
			<Page>
				<HeaderArea>
					<Header fixed />
					<Hidden s m>
						<Toggle
							open={open}
							onClick={() => {
								setOpen(state => !state);
							}}
						/>
					</Hidden>
				</HeaderArea>
				<Hidden s m>
					<Panel
						anchor={Anchor.left}
						open={open}
						onClose={() => {
							setOpen(state => !state);
						}}
					/>
				</Hidden>
				<MainArea />
				<FooterArea>
					<Footer />
				</FooterArea>
			</Page>
		</>
	);
};

const story: Meta = {
	component: Grid,
	title: "Design System/Templates/Page",
	decorators: [withWrapper()],
	parameters: {
		jest: ["page"],
		docs: {
			inlineStories: false,
			iframeHeight: 500,
		},
	},
};

export default story;
