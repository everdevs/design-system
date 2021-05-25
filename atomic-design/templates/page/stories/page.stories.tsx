import React from "react";
import { withWrapper } from "@evernest/dev-helpers";
import { Footer } from "@evernest/footer";
import { Hidden } from "@evernest/grid";
import { Header } from "@evernest/header";
import { ClassNames } from "@emotion/react";
import { Anchor, Panel, Toggle } from "@evernest/panel";
import { Meta, Story } from "@storybook/react";
import {
	Footer as FooterArea,
	Header as HeaderArea,
	Main as MainArea,
	PageWithStyles as Page,
} from "../src";
import { Theme } from "@evernest/theme";

export const PageLayout: Story = () => {
	return (
		<>
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

export const WithTranslucentHeader: Story = () => {
	return (
		<ClassNames>
			{({ css, cx }) => (
				<Page
					className={css`
						--header-height-ref: 0;
					`}
				>
					<HeaderArea>
						<Hidden s m>
							<Header fixed translucent fadeOffset={200} />
						</Hidden>
						<Hidden l>
							<Header fixed />
						</Hidden>
					</HeaderArea>
					<MainArea>
						<img
							src="//images.ctfassets.net/vij0xfkj6nfm/65B2DBSyhcTksD4H9nuGds/a3be81862610240ee35085e63835f531/007-web-1000px.jpg"
							alt="placeholder image"
							style={{ width: "100%", height: "100vh", objectFit: "cover" }}
						/>
						<div style={{ height: "100vh" }} />
					</MainArea>
					<FooterArea>
						<Footer />
					</FooterArea>
				</Page>
			)}
		</ClassNames>
	);
};

export const WithResponsiveTranslucentHeader: Story = () => {
	return (
		<ClassNames>
			{({ css, theme }) => (
				<Page
					className={css`
						--header-height-ref: 0;
						@media ${(theme as Theme).mq.l} {
							--header-height-ref: var(--header-height);
						}
					`}
				>
					<HeaderArea>
						<Hidden s m>
							<Header fixed translucent fadeOffset={200} />
						</Hidden>
						<Hidden l>
							<Header fixed />
						</Hidden>
					</HeaderArea>
					<MainArea>
						<img
							src="//images.ctfassets.net/vij0xfkj6nfm/65B2DBSyhcTksD4H9nuGds/a3be81862610240ee35085e63835f531/007-web-1000px.jpg"
							alt="placeholder image"
							style={{ width: "100%", height: "100vh", objectFit: "cover" }}
						/>
						<div style={{ height: "100vh" }} />
					</MainArea>
					<FooterArea>
						<Footer />
					</FooterArea>
				</Page>
			)}
		</ClassNames>
	);
};

export const WithMobileMenu: Story = () => {
	const [open, setOpen] = React.useState(false);
	return (
		<>
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
	component: Page,
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
