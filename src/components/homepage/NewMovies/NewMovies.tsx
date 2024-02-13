"use client";

import styles from "./NewMovies.module.scss";
import NewMoviesItem, {
	NewMoviesItemProps,
} from "./NewMoviesItem/NewMoviesItem";
import Swiper from "@/components/UI/Swiper/Swiper";

interface NewMoviesProps {
	movies: NewMoviesItemProps[];
	title: string;
	itemHasTitle: boolean;
}

const NewMovies = ({ movies, title, itemHasTitle }: NewMoviesProps) => {
	const swiperMovies = movies.map((movie) => {
		return {
			element: (
				<NewMoviesItem
					movieImage={movie.movieImage}
					title={itemHasTitle ? movie.title : ''}
					rating={movie.rating}
				/>
			),
			key: movie.title,
		};
	});
	return (
		<div className={styles.newMovies}>
			<h2 className={styles.title}>{title}</h2>
			<div className={styles.moviesWrapper}>
				<Swiper
					slides={swiperMovies}
					slidesPerView={4}
					slidesPerGroup={5}
					spaceBetween={-180}
				/>
			</div>
		</div>
	);
};

export default NewMovies;
