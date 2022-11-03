import {Composition} from 'remotion';
import {SkiaNeon} from './SkiaNeon';

export const RemotionVideo: React.FC = () => {
	return (
		<Composition
			id="video"
			component={SkiaNeon}
			durationInFrames={300}
			fps={60}
			width={1920}
			height={1080}
		/>
	);
};
