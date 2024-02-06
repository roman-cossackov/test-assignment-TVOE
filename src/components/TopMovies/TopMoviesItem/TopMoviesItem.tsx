import Image, { StaticImageData } from "next/image";

import styles from "./TopMoviesItem.module.scss";

export interface TopMoviesItemProps {
	movieImage: StaticImageData;
	topNumber: number;
}

const TopMoviesItem = ({ movieImage, topNumber }: TopMoviesItemProps) => {
	return (
		<div className={styles.topMovieItem}>
			<div className={styles.topNumberWrapper}>
				<div
					className={`${styles.topNumber} ${styles[`top${topNumber}`]}`}
				></div>
			</div>
			<div className={styles.movieImageWrapper}>
				<Image
					className={styles.movieImage}
					src={movieImage}
					alt="Movie image"
				/>
			</div>
		</div>
	);
};

export default TopMoviesItem;
