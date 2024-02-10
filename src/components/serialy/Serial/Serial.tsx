import { StaticImageData } from "next/image";

import styles from "./Serial.module.scss";
import Header from "@/components/serialy/Serial/Header/Header";
import { start } from "repl";

interface pageProps {
	mainImage: StaticImageData;
	secondImage: StaticImageData;
}

const Serial = ({ mainImage, secondImage }: pageProps) => {
	return (
		<main>
			<Header
				mainImage={mainImage}
				secondImage={secondImage}
				rating={10}
				years={{ start: 2022, end: "..." }}
				seasons={1}
				country="США"
				genre="Ужасы"
				ageCategory={0}
			/>
		</main>
	);
};

export default Serial;
