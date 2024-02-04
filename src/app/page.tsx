import styles from "./page.module.scss";
import Header from "@/components/Header/Header";
import NewMovies from "@/components/NewMovies/NewMovies";

import image3 from "@/assets/images/header/image3.jpg";
import image4 from "@/assets/images/header/image4.png";
import Card1 from "@/assets/images/new-movies/Card1.png";
import Card2 from "@/assets/images/new-movies/Card2.png";
import Card3 from "@/assets/images/new-movies/Card3.png";
import Card4 from "@/assets/images/new-movies/Card4.png";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header
				mainImage={image3}
				secondImage={image4}
				aboutText={
					"Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле."
				}
			/>
			<NewMovies
				movies={[
					{ movieImage: Card1, title: "Синий жук", rating: 10 },
					{ movieImage: Card2, title: "Домашняя игра", rating: 6.9 },
					{ movieImage: Card3, title: "Салют 7", rating: 5.8 },
					{
						movieImage: Card4,
						title: "Поймай, меня если сможешь",
						rating: 7.0,
					},
					{ movieImage: Card1, title: "Синий жук 2", rating: 10 },
					{
						movieImage: Card2,
						title: "Домашняя игра 2",
						rating: 6.9,
					},
					{ movieImage: Card3, title: "Салют 7 2", rating: 5.8 },
					{
						movieImage: Card4,
						title: "Поймай, меня если сможешь 2",
						rating: 7.0,
					},
					{ movieImage: Card1, title: "Синий жук 3", rating: 10 },
					{
						movieImage: Card2,
						title: "Домашняя игра 3",
						rating: 6.9,
					},
					{ movieImage: Card3, title: "Салют 7 3", rating: 5.8 },
					{
						movieImage: Card4,
						title: "Поймай, меня если сможешь 3",
						rating: 7.0,
					},
				]}
			/>
		</main>
	);
}
