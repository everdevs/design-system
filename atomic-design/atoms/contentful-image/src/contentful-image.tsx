import { useTheme } from "emotion-theming";
import React from "react";
import { getImageUrl } from "./utils";
import styled from "@emotion/styled";
import { AssetFormat, BuildSrcSetParams, ImageSizes, ContentfulImageProps } from "./types";

const buildSrcSet = ({ url, sizes, fm, breakpoints }: BuildSrcSetParams): string => {
	return Object.entries(sizes)
		.map(([breakpoint, size]) => {
			const src = getImageUrl(url, {
				fm,
				fl: fm === AssetFormat.jpg ? "progressive" : undefined,
				w: breakpoints[breakpoint],
			});
			return `${src} ${breakpoints[size]}w`;
		})
		.join(",");
};

const fadeSpeed = "0.5s";

export const Placeholder = styled.img<{ loaded?: boolean }>`
	width: 100%;
	height: auto;
	visibility: ${({ loaded }) => (loaded ? "hidden" : "visible")};
	filter: blur(10px);
	transition: visibility ${fadeSpeed} ease-in-out;
	object-fit: cover;
	object-position: center center;
`;

export const Img = styled.img<{ loaded?: boolean }>`
	width: 100%;
	height: auto;
	position: absolute;
	top: 0;
	left: 0;
	visibility: ${({ loaded }) => (loaded ? "visible" : "hidden")};
	opacity: ${({ loaded }) => (loaded ? 1 : 0)};
	transition-property: opacity, visibility;
	transition-timing-function: ease-in-out;
	transition-duration: ${fadeSpeed};
	object-fit: cover;
	object-position: center center;
`;

export const Picture = styled.picture<{ loaded?: boolean }>`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	visibility: ${({ loaded }) => (loaded ? "visible" : "hidden")};
	opacity: ${({ loaded }) => (loaded ? 1 : 0)};
	transition-property: opacity, visibility;
	transition-timing-function: ease-in-out;
	transition-duration: ${fadeSpeed};
	object-fit: cover;
	object-position: center center;
`;

const ImgWrapper = styled.span`
	display: inline-block;
	width: 100%;
	position: relative;
	overflow: hidden;
	font-size: 0;
	line-height: 0;
	background: #eee;
`;

export const useImageLoaded = (): [React.RefObject<HTMLImageElement>, boolean] => {
	const [done, setDone] = React.useState(false);
	const ref = React.useRef<HTMLImageElement>();
	/* istanbul ignore next */
	const current = ref?.current;
	const complete = React.useMemo(() => current && current.complete, [current]);
	React.useEffect(() => setDone(!!complete), [setDone, complete]);
	return [ref, done];
};

export const ContentfulImage: React.FC<ContentfulImageProps> = ({
	height,
	width,
	src,
	alt,
	className,
	onLoad,
	onError,
}) => {
	const { breakpoints, mq } = useTheme();
	const placeholder = getImageUrl(src, {
		fm: AssetFormat.jpg,
		w: breakpoints.s,
		q: 10,
		fl: "progressive",
	});
	const fallback = getImageUrl(src, {
		fm: AssetFormat.jpg,
		w: breakpoints.l,
		fl: "progressive",
	});
	const [ref, done] = useImageLoaded();
	const [loaded, setLoaded] = React.useState(false);
	const handleLoad = React.useCallback(
		e => {
			setLoaded(true);
			onLoad && onLoad(e);
		},
		[setLoaded, onLoad]
	);
	React.useEffect(() => {
		/* istanbul ignore next */
		done && handleLoad({});
	}, [done, handleLoad]);

	const sizes: ImageSizes = {
		s: "s",
		m: "m",
		l: "l",
		xl: "xl",
	};
	const srcSetJpg = buildSrcSet({
		url: src,
		fm: AssetFormat.jpg,
		sizes,
		breakpoints,
	});
	const srcSetWebp = buildSrcSet({
		url: src,
		fm: AssetFormat.webp,
		sizes,
		breakpoints,
	});
	const sizeSet = Object.entries(sizes)
		.map(([key, value]) =>
			key === "s" ? `${breakpoints[value]}px` : `${mq[key]} ${breakpoints[value]}px`
		)
		.reverse()
		.join(",");
	return (
		<ImgWrapper className={className}>
			<Placeholder
				src={placeholder}
				alt={alt}
				loaded={loaded}
				loading="lazy"
				width={width}
				height={height}
			/>
			<Picture loaded={loaded}>
				<source srcSet={srcSetWebp} type="image/webp" sizes={sizeSet} />
				<source srcSet={srcSetJpg} type="image/jpeg" sizes={sizeSet} />
				<Img
					src={fallback}
					alt={alt}
					onLoad={handleLoad}
					onError={onError}
					loaded={loaded}
					loading="lazy"
					width={width}
					height={height}
					ref={ref}
				/>
			</Picture>
		</ImgWrapper>
	);
};
