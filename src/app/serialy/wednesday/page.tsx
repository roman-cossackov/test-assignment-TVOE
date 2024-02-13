import styles from "./page.module.scss";
import Serial from "@/components/serialy/Serial/Serial";
import mainImage from "@/assets/images/serialy/wednesday/header/mainImage.png";
import secondImage from "@/assets/images/serialy/wednesday/header/secondImage.png";
import Card1 from "@/assets/images/serialy/wednesday/episodes/Card1.png";
import Card2 from "@/assets/images/serialy/wednesday/episodes/Card2.png";
import Card3 from "@/assets/images/serialy/wednesday/episodes/Card3.png";
import Card4 from "@/assets/images/serialy/wednesday/episodes/Card4.png";
import Card1S from "@/assets/images/serialy/wednesday/similar/Card1.png";
import Card2S from "@/assets/images/serialy/wednesday/similar/Card2.png";
import Card3S from "@/assets/images/serialy/wednesday/similar/Card3.png";
import Card4S from "@/assets/images/serialy/wednesday/similar/Card4.png";
import Card5S from "@/assets/images/serialy/wednesday/similar/Card5.png";
import Card6S from "@/assets/images/serialy/wednesday/similar/Card6.png";
import Card7S from "@/assets/images/serialy/wednesday/similar/Card7.png";
interface pageProps {}

const page = ({}: pageProps) => {
	const seasons = [
		[
			{ image: Card1, length: 43, episodeNumber: 1 },
			{ image: Card2, length: 41, episodeNumber: 2 },
			{ image: Card3, length: 38, episodeNumber: 3 },
			{ image: Card4, length: 43, episodeNumber: 4 },
		],
		[],
		[],
	];
	const descriptionText = `Детективная история, наполненная сверхъестественными силами. 
		Главная героиня сериала — Уэнздей Аддамс, одна из членов семейки Аддамс и единственная
		дочь Гомеса и Мортиши Аддамсов, которая становится студенткой академии «Невермор». Она
		пытается овладеть своими проявившимися экстрасенсорными способностями, помешать чудовищным
		убийствам монстра, что терроризирует местный городок Джерико, а также разгадать тайну, в
		которую были втянуты её родители 32 года назад, — и всё это на фоне её новых и очень запутанных
		отношений в академии.`;

	const semilarMovies = [
		{ movieImage: Card1S, title: "8 подруг оушена", rating: 9.1 },
		{ movieImage: Card2S, title: "Энканто", rating: 6.9 },
		{ movieImage: Card3S, title: "Красное уведомление", rating: 5.8 },
		{ movieImage: Card4S, title: "Синий жук", rating: 10 },
		{ movieImage: Card5S, title: "Мэр Кингстауна", rating: 9.9 },
		{ movieImage: Card6S, title: "Пять ночей с Фредди", rating: 6.0 },
		{ movieImage: Card7S, title: "Балерин", rating: 5.3 },
	];

	return (
		<main className={styles.main}>
			<Serial
				mainImage={mainImage}
				secondImage={secondImage}
				seasons={seasons}
				descriptionText={descriptionText}
				semilarMovies={semilarMovies}
			/>
			;
		</main>
	);
};

export default page;
