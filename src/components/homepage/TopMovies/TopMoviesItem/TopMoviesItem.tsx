import Image, { StaticImageData } from "next/image";

import styles from "./TopMoviesItem.module.scss";
import Link from "next/link";

export interface TopMoviesItemProps {
	movieImage: StaticImageData;
	topNumber: number;
}

const TopMoviesItem = ({ movieImage, topNumber }: TopMoviesItemProps) => {
	return (
		<Link href="/serialy/wednesday">
			<div className={styles.topMovieItem}>
				<div className={styles.topNumberWrapper}>
					<div
						className={`${styles.topNumber} ${
							styles[`top${topNumber}`]
						}`}
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
		</Link>
	);
};

export default TopMoviesItem;
