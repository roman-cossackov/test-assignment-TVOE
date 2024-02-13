import Image, { StaticImageData } from "next/image";

import styles from "./Epiosode.module.scss";

interface EpisodeProps {
	episodeImage: StaticImageData;
	episodeNumber: number;
	length: number;
}

const Episode = ({ episodeImage, episodeNumber, length }: EpisodeProps) => {
	const getMinutesEnding = (number: number): string => {
		const mod10 = number % 10;
		const mod100 = number % 100;

		if (mod10 === 1 && mod100 !== 11) {
			return "минута";
		} else if (
			[2, 3, 4].includes(mod10) &&
			![12, 13, 14].includes(mod100)
		) {
			return "минуты";
		} else {
			return "минут";
		}
	};

	return (
		<div className={styles.episode}>
			<Image
				className={styles.image}
				src={episodeImage}
				alt="episode-img"
			/>
			<p className={styles.number}>{episodeNumber} серия</p>
			<p className={styles.length}>
				{length} {getMinutesEnding(length)}
			</p>
		</div>
	);
};

export default Episode;
