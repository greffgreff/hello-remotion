import {SkiaCanvas} from '@remotion/skia';
import {Paint, Path, Skia} from '@shopify/react-native-skia';
import {interpolate, useCurrentFrame, useVideoConfig} from 'remotion';

const defaultPath =
	'm350 633.4c39.5-44 334.8-339.3 238.3-379.2-122.8-50.8-175.8 374.2-162.8 468.2 24-44.1 50-161 134-179 80 5-24 164 50.5 176.8 66.7 11.5 249.5-153.8 182.6-193.6-79.1-47-170.1 118.8-66.1 183.8 135 107 449.8-463.7 311-456-90 5-176 453-68.6 467.3 67.6 2.7 340.5-405.7 259-464.1-78.4-56.2-216.3 452.1-77.4 465.4 111.1 15.4 83.1-214.6 248.1-204.6 0 0-153-5-127 151 8 28 30 54 91 51 70-.9 120-81 106-137-4-14-14-61-66-65-47 1-54 171 124 129';

const defaultColors = [
	'#8eec6b',
	'#feee1d',
	'#ffaf4e',
	'#ff5e62',
	'#f24faa',
	'#d943ef',
	'#b663ee',
	'#9077ee',
	'#539fef',
	'#00c5f3',
	'#01d7c4',
	'#00e793',
	'#ffffff',
];

export const SkiaNeon: React.FC = () => {
	const frame = useCurrentFrame();
	const {height, width} = useVideoConfig();

	const progress = interpolate(
		frame,
		[0, 500],
		[0, 1 + 0.1 * defaultColors.length],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const path = Skia.Path.MakeFromSVGString(defaultPath);

	return (
		path && (
			<SkiaCanvas height={height} width={width}>
				{defaultColors.map((c, i) => (
					<Path path={path} end={progress - 0.01 * i} color={'transparent'}>
						<Paint
							style={'stroke'}
							strokeWidth={40}
							strokeCap={'round'}
							strokeJoin={'round'}
							color={c}
						/>
					</Path>
				))}
			</SkiaCanvas>
		)
	);
};
