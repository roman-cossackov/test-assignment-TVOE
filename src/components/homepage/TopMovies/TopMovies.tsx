"use client";
import { StaticImageData } from "next/image";

import styles from "./TopMovies.module.scss";
import TopMoviesItem, {
	TopMoviesItemProps,
} from "./TopMoviesItem/TopMoviesItem";
import Swiper from "@/components/UI/Swiper/Swiper";

interface TopMoviesProps {
	movies: TopMoviesItemProps[];
}

const TopMovies = ({ movies }: TopMoviesProps) => {
	const swiperMovies = movies.map((movie) => {
		return {
			element: (
				<TopMoviesItem
					movieImage={movie.movieImage}
					topNumber={movie.topNumber}
				/>
			),
			key: movie.topNumber,
		};
	});

	return (
		<div className={styles.topMovies}>
			<h2 className={styles.title}>
				<span className={styles.top}>топ-10</span> просмотров за неделю
			</h2>
			<div className={styles.moviesWrapper}>
				<div className={styles.moviesWrapper}>
					<Swiper
						slides={swiperMovies}
						slidesPerView={3}
						slidesPerGroup={3}
						spaceBetween={-50}
					/>
				</div>
			</div>
		</div>
	);
};

export default TopMovies;
