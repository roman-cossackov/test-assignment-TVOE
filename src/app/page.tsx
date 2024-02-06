import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import NewMovies from "@/components/NewMovies/NewMovies";
import TopMovies from "@/components/TopMovies/TopMovies";

import image3 from "@/assets/images/header/image3.jpg";
import image4 from "@/assets/images/header/image4.png";
import CardN1 from "@/assets/images/new-movies/Card1.png";
import CardN2 from "@/assets/images/new-movies/Card2.png";
import CardN3 from "@/assets/images/new-movies/Card3.png";
import CardN4 from "@/assets/images/new-movies/Card4.png";
import CardT1 from "@/assets/images/top-movies/cards/Card1.png";
import CardT2 from "@/assets/images/top-movies/cards/Card2.png";
import CardT3 from "@/assets/images/top-movies/cards/Card3.png";
import CardT4 from "@/assets/images/top-movies/cards/Card4.png";
import CardT5 from "@/assets/images/top-movies/cards/Card5.png";
import CardT6 from "@/assets/images/top-movies/cards/Card6.png";
import CardT7 from "@/assets/images/top-movies/cards/Card7.png";
import CardT8 from "@/assets/images/top-movies/cards/Card8.png";
import CardT9 from "@/assets/images/top-movies/cards/Card9.png";
import CardT10 from "@/assets/images/top-movies/cards/Card10.png";

export default function Home() {
	const newMovies = [
		{ movieImage: CardN1, title: "Синий жук", rating: 10 },
		{ movieImage: CardN2, title: "Домашняя игра", rating: 6.9 },
		{ movieImage: CardN3, title: "Салют 7", rating: 5.8 },
		{
			movieImage: CardN4,
			title: "Поймай, меня если сможешь",
			rating: 7.0,
		},
		{ movieImage: CardN1, title: "Синий жук 2", rating: 10 },
		{
			movieImage: CardN2,
			title: "Домашняя игра 2",
			rating: 6.9,
		},
		{ movieImage: CardN3, title: "Салют 7 2", rating: 5.8 },
		{
			movieImage: CardN4,
			title: "Поймай, меня если сможешь 2",
			rating: 7.0,
		},
		{ movieImage: CardN1, title: "Синий жук 3", rating: 10 },
		{
			movieImage: CardN2,
			title: "Домашняя игра 3",
			rating: 6.9,
		},
		{ movieImage: CardN3, title: "Салют 7 3", rating: 5.8 },
		{
			movieImage: CardN4,
			title: "Поймай, меня если сможешь 3",
			rating: 7.0,
		},
	];

	const topMovies = [
		{
			movieImage: CardT1,
			topNumber: 1,
		},
		{
			movieImage: CardT2,
			topNumber: 2,
		},
		{
			movieImage: CardT3,
			topNumber: 3,
		},
		{
			movieImage: CardT4,
			topNumber: 4,
		},
		{
			movieImage: CardT5,
			topNumber: 5,
		},
		{
			movieImage: CardT6,
			topNumber: 6,
		},
		{
			movieImage: CardT7,
			topNumber: 7,
		},
		{
			movieImage: CardT8,
			topNumber: 8,
		},
		{
			movieImage: CardT9,
			topNumber: 9,
		},
		{
			movieImage: CardT10,
			topNumber: 10,
		},
	];

	return (
		<main className={styles.main}>
			<Header
				mainImage={image3}
				secondImage={image4}
				aboutText={
					"Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле."
				}
			/>
			<NewMovies movies={newMovies} />
			<TopMovies movies={topMovies} />
		</main>
	);
}
