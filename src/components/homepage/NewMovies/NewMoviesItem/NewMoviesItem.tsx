import Image, { StaticImageData } from "next/image";
import Link from "next/link";

import styles from "./NewMoviesItem.module.scss";

export interface NewMoviesItemProps {
	movieImage: StaticImageData;
	title: string;
	rating: number;
	isLastItem?: boolean;
}

const NewMoviesItem = ({ movieImage, title, rating }: NewMoviesItemProps) => {
	return (
		<Link href="/serialy/wednesday">
			<div className={styles.newMoviesItem}>
				<p className={styles.rating}>{rating}</p>
				<Image
					className={styles.movieImage}
					src={movieImage}
					alt="Movie image"
				/>
				<h3 className={styles.title}>{title}</h3>
			</div>
		</Link>
	);
};

export default NewMoviesItem;
