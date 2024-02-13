import { StaticImageData } from "next/image";
import styles from "./Episodes.module.scss";
import Episode from "./Episode/Episode";
import Swiper from "@/components/UI/Swiper/Swiper";

interface EpisodesProps {
	episodes: {
		image: StaticImageData;
		length: number;
		episodeNumber: number;
	}[];
}

const Episodes = ({ episodes }: EpisodesProps) => {
	const swiperEpisodes = episodes.map((episode) => {
		return {
			element: (
				<Episode
					episodeImage={episode.image}
					length={episode.length}
					episodeNumber={episode.episodeNumber}
				/>
			),
			key: episode.episodeNumber,
		};
	});
	return (
		<div className={styles.episodes}>
			<Swiper
				slides={swiperEpisodes}
				slidesPerView={3}
				slidesPerGroup={3}
				spaceBetween={-40}
			/>
		</div>
	);
};

export default Episodes;
