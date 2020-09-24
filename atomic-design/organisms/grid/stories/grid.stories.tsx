import React from "react";
import { withWrapper, range } from "@evernest/dev-helpers";
import { Meta } from "@storybook/react";
import { Box, Column, Grid, GridOverlay, Row, Stage } from "../src";
import { CustomColorBox } from "./shared";

export const Simple: React.FC = () => {
	return (
		<>
			<GridOverlay toggle />
			<Grid overflow>
				<Row>
					<Column s={4}>
						<CustomColorBox />
					</Column>
					<Column s={4}>
						<CustomColorBox />
					</Column>
					<Column s={4}>
						<CustomColorBox />
					</Column>
				</Row>
			</Grid>
		</>
	);
};

export const RawColumns: React.FC = () => (
	<>
		<GridOverlay toggle />
		<Grid>
			<Row>
				{range(12).map(x => (
					<Column key={x} s={1} raw>
						<CustomColorBox />
					</Column>
				))}
			</Row>
		</Grid>
	</>
);

export const HideColumns: React.FC = () => (
	<>
		<GridOverlay toggle />
		<Grid>
			<Row>
				{range(12).map((x, i) => (
					<Column key={x} s={i % 3} m={i % 4} raw>
						<CustomColorBox>
							{x}, s: {Boolean(i % 3).toString()}, m: {Boolean(i % 4).toString()}
						</CustomColorBox>
					</Column>
				))}
			</Row>
		</Grid>
	</>
);

export const WithStage: React.FC = () => (
	<>
		<GridOverlay toggle />
		<Grid>
			<Row>
				<Column>
					<Stage>
						<CustomColorBox />
					</Stage>
				</Column>
				<Column raw>
					<Stage>
						<CustomColorBox />
					</Stage>
				</Column>
			</Row>
		</Grid>
	</>
);

export const WithBox: React.FC = () => {
	return (
		<>
			<GridOverlay toggle />
			<Grid overflow>
				<Row>
					<Column>Remove Padding</Column>
				</Row>
				<Row>
					<Column>
						<Box removePadding>
							<CustomColorBox />
						</Box>
					</Column>
				</Row>
				<Row>
					<Column>Remove Gutter</Column>
				</Row>
				<Row>
					<Column raw>
						<Box removeGutter>
							<CustomColorBox />
						</Box>
					</Column>
				</Row>
				<Row>
					<Column>Add Gutter</Column>
				</Row>
				<Row>
					<Column raw>
						<Box removeGutter>
							<CustomColorBox>
								<Box addGutter>
									<CustomColorBox />
								</Box>
							</CustomColorBox>
						</Box>
					</Column>
				</Row>
			</Grid>
		</>
	);
};

export const Nesting: React.FC = () => {
	return (
		<>
			<GridOverlay toggle />
			<Grid overflow>
				<Row>
					<Column m={4}>
						<CustomColorBox>
							<Row>
								<Column s={2}>
									<CustomColorBox>
										<Row>
											<Column s={1}>
												<CustomColorBox />
											</Column>
											<Column s={1}>
												<CustomColorBox />
											</Column>
										</Row>
									</CustomColorBox>
								</Column>
								<Column s={2}>
									<CustomColorBox />
								</Column>
							</Row>
						</CustomColorBox>
					</Column>
					<Column m={4} l={8} raw>
						<CustomColorBox>
							<Row raw>
								<Column>
									<CustomColorBox>
										<Row>
											<Column raw>
												<CustomColorBox>
													<Row raw>
														<Column>
															<CustomColorBox>
																<Row>
																	<Column raw>
																		<CustomColorBox />
																	</Column>
																</Row>
															</CustomColorBox>
														</Column>
													</Row>
												</CustomColorBox>
											</Column>
										</Row>
									</CustomColorBox>
								</Column>
							</Row>
						</CustomColorBox>
					</Column>
				</Row>
			</Grid>
		</>
	);
};

const story: Meta = {
	component: Grid,
	title: "Design System/Organisms/Grid",
	decorators: [withWrapper()],
	parameters: {
		jest: ["grid"],
		docs: {
			inlineStories: false,
			iframeHeight: 500,
		},
	},
};

export default story;
