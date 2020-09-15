import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { ColorBox, withWrapper } from "@evernest/dev-helpers";
import { PropsWithTheme } from "@evernest/theme";
import { HeaderLink } from "@evernest/header-link";
import { Menu } from "@evernest/menu";
import { withTests } from "@storybook/addon-jest";
import { Meta, Story } from "@storybook/react";
import {
	Column,
	Footer,
	Grid,
	GridOverlay,
	Header,
	Main,
	PageWithStyles as Page,
	Row,
} from "../src";
import results from "./grid.testresults.json";

const LogoL = props => {
	return (
		<svg {...props} width="130" height="34">
			<path
				fill="currentColor"
				fillRule="nonzero"
				d="M12.489 18.373H0V.385h12.31v1.979H2.287v5.702h9.329v1.982H2.287v6.347h10.201zM23.659 18.373h-2.571L14.279.385h2.445l5.701 15.391L28.129.385h2.339zM45.389 18.373H32.9V.385h12.309v1.979H35.187v5.702h9.329v1.982h-9.329v6.347h10.2zM51.375 10.896v7.472h-2.26V.385h7.528c4.009 0 5.91 2.261 5.91 5.22 0 2.903-1.798 4.573-4.06 5.036v.026c.231.385.385.617.669 1.13l3.803 6.579h-2.647l-4.033-7.092c-.205-.309-.256-.386-.693-.386l-4.217-.002zm0-1.954h5.085c2.518 0 3.776-1.361 3.776-3.289 0-1.952-1.284-3.289-3.802-3.289h-5.06v6.578zM68.625 3.289v15.084h-2.236V.385h2.93l9.765 15.085V.385h2.261v17.988H78.39zM97.845 18.373H85.356V.385h12.309v1.979H87.643v5.702h9.328v1.982h-9.328v6.347h10.201zM100.163 12.823h2.262c.333 2.57 2.26 3.906 4.882 3.906 2.39 0 4.472-1.105 4.472-3.11 0-1.824-1.646-2.595-4.087-3.16l-1.952-.437c-3.29-.771-5.011-2.21-5.011-4.831 0-3.084 2.93-5.191 6.45-5.191 3.622 0 6.215 1.952 6.578 5.37h-2.26c-.283-2.08-1.876-3.392-4.317-3.392-2.262 0-4.214 1.234-4.214 3.033 0 1.644 1.156 2.338 3.392 2.827l2.184.514c3.315.744 5.525 2.158 5.525 5.036 0 3.572-3.34 5.294-6.761 5.294-3.854 0-6.809-1.958-7.143-5.859zM121.417 2.364h-6.296V.385H130v1.979h-6.27v16.013h-2.313zM20.97 31.007v-3.638h.864v3.595c0 1.095.634 1.728 1.532 1.728.916 0 1.532-.625 1.532-1.72V27.37h.865v3.628c0 1.567-.993 2.466-2.406 2.466-1.412 0-2.387-.882-2.387-2.456zM28.159 30.912v2.448h-.847v-5.991h2.55c1.352 0 1.986.761 1.986 1.754 0 .968-.593 1.524-1.305 1.687v.008c.077.136.128.214.223.386l1.232 2.156h-.984l-1.305-2.31c-.069-.12-.085-.138-.237-.138h-1.313zm0-.736h1.626c.804 0 1.198-.42 1.198-1.027 0-.625-.402-1.044-1.198-1.044h-1.626v2.071zM33.355 27.369h2.448c1.326 0 1.935.66 1.935 1.549 0 .693-.403 1.155-.942 1.305v.016c.616.146 1.078.676 1.078 1.456 0 1.052-.77 1.669-2.113 1.669h-2.406v-5.995zm.848.711v1.84h1.542c.753 0 1.139-.341 1.139-.916 0-.556-.386-.924-1.139-.924h-1.542zm0 2.55v2.017h1.505c.873 0 1.305-.368 1.305-1.001 0-.633-.445-1.019-1.305-1.019l-1.505.004zM42.92 31.794h-2.772l-.608 1.566h-.864l2.413-5.991h.942l2.413 5.99h-.913l-.61-1.565zm-.29-.736l-1.095-2.816-1.096 2.816h2.19zM46.378 28.455v4.905h-.839v-5.991h1.095l3.09 4.904v-4.904h.838v5.991h-1.1zM55.37 30.912v2.448h-.847v-5.991h2.55c1.352 0 1.986.761 1.986 1.754 0 .968-.593 1.524-1.305 1.687v.008c.077.136.13.214.223.386l1.232 2.156h-.984l-1.305-2.31c-.069-.12-.085-.138-.237-.138H55.37zm0-.736h1.626c.805 0 1.2-.42 1.2-1.027 0-.625-.404-1.044-1.2-1.044H55.37v2.071zM64.581 33.36h-4.207v-5.991h4.152v.742h-3.299v1.771h3.061v.745h-3.061v1.992h3.354zM69.644 31.794H66.87l-.608 1.566H65.4l2.413-5.991h.94l2.416 5.99h-.916l-.608-1.565zm-.292-.736l-1.095-2.816-1.096 2.816h2.19zM72.137 27.369h.855v5.25h2.928v.736h-3.783zM83.005 33.36h-4.202v-5.991h4.143v.742h-3.295v1.771h3.064v.745h-3.064v1.992h3.354zM83.816 31.502h.848c.102.822.727 1.233 1.557 1.233.77 0 1.412-.356 1.412-.975 0-.566-.522-.822-1.305-.993l-.642-.146c-1.104-.248-1.677-.753-1.677-1.626 0-1.036.975-1.754 2.165-1.754 1.215 0 2.105.65 2.217 1.797h-.84c-.093-.65-.606-1.062-1.377-1.062-.72 0-1.326.386-1.326.949 0 .514.355.728 1.067.881l.727.164c1.113.248 1.85.735 1.85 1.702 0 1.208-1.113 1.79-2.269 1.79-1.296.001-2.296-.642-2.407-1.96zM91.021 28.111h-2.054v-.736h4.964v.736h-2.046v5.255h-.864zM97.795 31.794h-2.773l-.606 1.566h-.866l2.414-5.991h.943l2.414 5.99h-.916l-.61-1.565zm-.295-.736l-1.091-2.816-1.096 2.816H97.5zM101.117 28.111h-2.054v-.736h4.961v.736h-2.043v5.255h-.864zM109.03 33.36h-4.202v-5.991h4.142v.742h-3.295v1.771h3.065v.745h-3.065v1.992h3.355z"
			/>
		</svg>
	);
};

const LogoS = props => {
	return (
		<svg {...props} width="100" height="16">
			<path
				d="M82.445 0c2.787 0 4.781 1.541 5.06 4.24h-1.739c-.217-1.643-1.442-2.678-3.32-2.678-1.74 0-3.242.974-3.242 2.394 0 1.298.89 1.846 2.61 2.232l1.68.405c2.55.588 4.25 1.705 4.25 3.976 0 2.82-2.57 4.18-5.201 4.18-2.965 0-5.237-1.545-5.495-4.625h1.74c.257 2.028 1.74 3.083 3.756 3.083 1.838 0 3.44-.872 3.44-2.455 0-1.44-1.266-2.049-3.144-2.496l-1.501-.344c-2.532-.609-3.855-1.745-3.855-3.814C77.484 1.663 79.737 0 82.445 0zM43.571.304c3.084 0 4.547 1.785 4.547 4.12 0 2.293-1.384 3.611-3.123 3.977v.02c.177.305.296.487.514.893l2.925 5.193H46.4l-3.102-5.599c-.158-.243-.198-.304-.534-.304l-3.244-.002v5.9H37.78V.303h5.791zm56.429 0v1.562h-4.823v12.642h-1.78V1.866h-4.842V.304H100zm-90.531 0v1.562h-7.71v4.502h7.176v1.564H1.76v5.011h7.847v1.562H0V.305h9.469zm3.396 0l4.385 12.15L21.638.304h1.799l-5.238 14.201h-1.977L10.984.305h1.881zm21.911 0v1.562h-7.71v4.502h7.177v1.564h-7.176v5.011h7.846l.001 1.562h-9.607V.305h9.47zm18.546 0l7.512 11.909V.304h1.739v14.201H60.3L52.788 2.597v11.908h-1.72V.305h2.254zm21.805 0v1.562h-7.71v4.502h7.176v1.564h-7.175v5.011h7.847v1.562H65.66V.305h9.468zM43.41 1.866h-3.892V7.06h3.912c1.937 0 2.905-1.075 2.905-2.597 0-1.541-.988-2.597-2.925-2.597z"
				fill="#FFF"
				fillRule="evenodd"
			/>
		</svg>
	);
};

const StyledLogoS = styled(LogoS)<PropsWithTheme>`
	display: inline-block;
	${({ theme: { mq } }) => css`
		@media ${mq.l} {
			display: none;
		}
	`};
`;

const StyledLogoL = styled(LogoL)<PropsWithTheme>`
	display: none;
	${({ theme: { mq } }) => css`
		@media ${mq.l} {
			display: inline-block;
		}
	`};
`;

const Logo = () => (
	<>
		<StyledLogoS />
		<StyledLogoL />
	</>
);

const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	align-content: center;
	align-items: center;
`;

const FixedHeader = styled.div<PropsWithTheme>`
	height: inherit;
	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	top: 0;
	left: 0;
	right: 0;
	${({ theme: { palette } }) => css`
		background: #232324;
		color: ${palette.white.css};
	`};
`;

const DemoFooter = styled.div`
	height: 300px;
`;

export const WithGrid: React.FC = () => {
	return (
		<>
			<GridOverlay toggle />
			<Grid overflow>
				<Row>
					<Column s={4} raw>
						<ColorBox />
					</Column>
					<Column s={4} raw>
						<ColorBox />
					</Column>
					<Column s={4} raw>
						<ColorBox />
					</Column>
				</Row>
				<Row>
					<Column s={3} raw>
						<ColorBox />
					</Column>
					<Column s={3} raw>
						<ColorBox />
					</Column>
					<Column s={3} raw>
						<ColorBox />
					</Column>
					<Column s={3} raw>
						<ColorBox />
					</Column>
				</Row>
			</Grid>
		</>
	);
};

export const WithLayout: Story = () => {
	return (
		<>
			<GridOverlay toggle />
			<Page>
				<Header>
					<FixedHeader>
						<Grid overflow>
							<Row>
								<Column raw>
									<Flex>
										<Logo />
										<Menu>
											<HeaderLink href="#">Verkaufen</HeaderLink>
											<HeaderLink href="#">Kaufen</HeaderLink>
											<HeaderLink href="#">Makler werden</HeaderLink>
											<HeaderLink href="#">Unsere Makler</HeaderLink>
											<HeaderLink href="#">Kontakt</HeaderLink>
										</Menu>
									</Flex>
								</Column>
							</Row>
						</Grid>
					</FixedHeader>
				</Header>
				<Main>
					<br />
					<br />
					<Grid>
						<Row>
							<Column l={6} raw>
								<ColorBox />
							</Column>
							<Column l={6} raw>
								<ColorBox />
							</Column>
						</Row>
						<Row>
							<Column>
								<br />
								<br />
							</Column>
						</Row>
						<Row>
							<Column l={4} raw>
								<ColorBox />
							</Column>
							<Column l={4} raw>
								<ColorBox />
							</Column>
							<Column l={4} raw>
								<ColorBox />
							</Column>
						</Row>
						<Row>
							<Column>
								<br />
								<br />
							</Column>
						</Row>
						<Row>
							<Column l={3} raw>
								<ColorBox />
							</Column>
							<Column l={3} raw>
								<ColorBox />
							</Column>
							<Column l={3} raw>
								<ColorBox />
							</Column>
							<Column l={3} raw>
								<ColorBox />
							</Column>
						</Row>
						<Row>
							<Column>
								<br />
								<br />
							</Column>
						</Row>
						<Row>
							<Column l={2} raw>
								<ColorBox />
							</Column>
							<Column l={2} raw>
								<ColorBox />
							</Column>
							<Column l={2} raw>
								<ColorBox />
							</Column>
							<Column l={2} raw>
								<ColorBox />
							</Column>
							<Column l={2} raw>
								<ColorBox />
							</Column>
							<Column l={2} raw>
								<ColorBox />
							</Column>
						</Row>
						<Row>
							<Column>
								<br />
								<br />
							</Column>
						</Row>
						<Row>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
							<Column l={1} raw>
								<ColorBox />
							</Column>
						</Row>
					</Grid>
				</Main>
				<Footer>
					<DemoFooter>
						<ColorBox />
					</DemoFooter>
				</Footer>
			</Page>
		</>
	);
};

const story: Meta = {
	component: Grid,
	title: "Design System/Layout/Grid",
	decorators: [withTests({ results }), withWrapper()],
	parameters: {
		jest: ["grid"],
		docs: {
			inlineStories: false,
			story: {
				iframeHeight: 500,
			},
		},
	},
};

export default story;
