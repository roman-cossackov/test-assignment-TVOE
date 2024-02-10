import Image, { StaticImageData } from "next/image";

import styles from "./NewMoviesItem.module.scss";

export interface NewMoviesItemProps {
	movieImage: StaticImageData;
	title: string;
	rating: number;
}

const NewMoviesItem = ({ movieImage, title, rating }: NewMoviesItemProps) => {
	return (
		<div className={styles.newMovieItem}>
			<p className={styles.rating}>{rating}</p>
			<Image
				className={styles.movieImage}
				src={movieImage}
				alt="Movie image"
			/>
            <h3 className={styles.title}>{title}</h3>
		</div>
	);
};

export default NewMoviesItem;
