"use client";

import styles from "./NewMovies.module.scss";
import NewMoviesItem, {
	NewMoviesItemProps,
} from "./NewMoviesItem/NewMoviesItem";
import Swiper from "@/components/UI/Swiper/Swiper";

interface NewMoviesProps {
	movies: NewMoviesItemProps[];
}

const NewMovies = ({ movies }: NewMoviesProps) => {
	const swiperMovies = movies.map((movie) => {
		return {
			element: (
				<NewMoviesItem
					movieImage={movie.movieImage}
					title={movie.title}
					rating={movie.rating}
				/>
			),
			key: movie.title,
		};
	});
	return (
		<div className={styles.newMovies}>
			<h2 className={styles.title}>Новинки</h2>
			<div className={styles.moviesWrapper}>
				<Swiper
					slides={swiperMovies}
					slidesPerView={5}
					slidesPerGroup={5}
					spaceBetween={0}
				/>
			</div>
		</div>
	);
};

export default NewMovies;
