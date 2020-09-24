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
import { PropsWithTheme } from "@evernest/theme";
import { css } from "@emotion/core";
import { Typography, TypographyVariant } from "@evernest/typography";
import { Meta, Story } from "@storybook/react";
import {
	Footer as FooterArea,
	Header as HeaderArea,
	Main as MainArea,
	PageWithStyles as Page,
} from "../src";

const IconGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, 24px);
	grid-gap: 16px;
	margin: var(--spacing-s) 0 0;
`;

const NavLink = styled.a`
	display: block;
	color: currentColor;
	font-size: 20px;
	line-height: 30px;
	padding: var(--spacing-xxs) 24px;
	font-weight: lighter;
	text-decoration: none;
`;

const Separator = styled.span<PropsWithTheme>`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	display: block;
	color: currentColor;
	height: 1px;
	margin: 0 24px;
	${({ theme: { palette } }) => css`
		background: ${palette.brightGrey.css};
	`};
`;

const Spacer = styled.span<PropsWithTheme>`
	display: block;
	height: var(--spacing-xs);
`;

const HeaderContent = styled.div`
	display: flex;
	padding: 0 24px;
`;

export const PageLayout: Story = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
			<GridOverlay toggle />
			<Page>
				<HeaderArea>
					<Header fixed>
						<Grid overflow>
							<Row>
								<Column raw>
									<Flex>
										<EvernestLogo />
										<Hidden l>
											<Menu aria-label="desktop-navigation-1">
												<HeaderLink href="#">Link 1</HeaderLink>
												<HeaderLink href="#">Link 2</HeaderLink>
												<HeaderLink href="#">Link 3</HeaderLink>
												<HeaderLink href="#">Link 4</HeaderLink>
												<HeaderLink href="#">Link 5</HeaderLink>
											</Menu>
										</Hidden>
									</Flex>
								</Column>
							</Row>
						</Grid>
					</Header>
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
					>
						<Header plain sticky>
							<HeaderContent>
								<EvernestLogo />
							</HeaderContent>
							<Separator />
						</Header>
						<Spacer />
						<Menu aria-label="mobile-navigation-1" direction={MenuDirection.vertical}>
							<NavLink href="#">Link 1</NavLink>
							<NavLink href="#">Link 2</NavLink>
							<NavLink href="#">Link 3</NavLink>
							<NavLink href="#">Link 4</NavLink>
							<NavLink href="#">Link 5</NavLink>
						</Menu>
					</Panel>
				</Hidden>
				<MainArea />
				<FooterArea>
					<Footer>
						<Grid overflow>
							<Row>
								<Column l={3} raw>
									<Typography variant={TypographyVariant.h3}>
										Section 1
									</Typography>
									<Menu
										direction={MenuDirection.vertical}
										aria-label="footer-navigation-1"
									>
										<FooterLink href="#">Link 1</FooterLink>
										<FooterLink href="#">Link 2</FooterLink>
										<FooterLink href="#">Link 3</FooterLink>
										<FooterLink href="#">Link 4</FooterLink>
									</Menu>
								</Column>
								<Column l={3} raw>
									<Typography variant={TypographyVariant.h3}>
										Section 2
									</Typography>
									<Menu
										direction={MenuDirection.vertical}
										aria-label="footer-navigation-2"
									>
										<FooterLink href="#">Link 1</FooterLink>
										<FooterLink href="#">Link 2</FooterLink>
									</Menu>
								</Column>
								<Column l={3} raw>
									<Typography variant={TypographyVariant.h3}>
										Section 3
									</Typography>
									<Menu
										direction={MenuDirection.vertical}
										aria-label="footer-navigation-3"
									>
										<FooterLink href="#">Link 1</FooterLink>
										<FooterLink href="#">Link 2</FooterLink>
										<FooterLink href="#">Link 3</FooterLink>
										<FooterLink href="#">Link 4</FooterLink>
										<FooterLink href="#">Link 5</FooterLink>
									</Menu>
								</Column>
								<Column l={3} raw>
									<Typography variant={TypographyVariant.h3}>
										Section 4
									</Typography>
									<Typography variant={TypographyVariant.body}>
										This is a text-section.
									</Typography>
									<Typography variant={TypographyVariant.body}>
										This is a text-section.
									</Typography>

									<IconGrid>
										<a
											href="https://www.instagram.com/evernest.official/"
											target="_blank"
										>
											<Icon size={Size.medium} icon="instagram" />
										</a>
										<a
											href="https://www.facebook.com/Evernest.Official"
											target="_blank"
										>
											<Icon size={Size.medium} icon="facebook" />
										</a>
										<a
											href="https://www.linkedin.com/company/42171409"
											target="_blank"
										>
											<Icon size={Size.medium} icon="linkedIn" />
										</a>
										<a
											href="https://www.xing.com/companies/evernest"
											target="_blank"
										>
											<Icon size={Size.medium} icon="xing" />
										</a>
									</IconGrid>
								</Column>
							</Row>
						</Grid>
					</Footer>
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
