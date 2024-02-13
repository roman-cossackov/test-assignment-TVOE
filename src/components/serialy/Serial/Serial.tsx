"use client";

import { StaticImageData } from "next/image";
import { ReactNode, useState } from "react";

import styles from "./Serial.module.scss";
import Header from "@/components/serialy/Serial/Header/Header";
import { start } from "repl";
import Episodes from "./Episodes/Episodes";
import Button, { ButtonTheme } from "@/components/UI/Button/Button";
import Description from "./Description/Description";
import NewMovies from "@/components/homepage/NewMovies/NewMovies";

import Information from "./Information/Information";

interface pageProps {
	mainImage: StaticImageData;
	secondImage: StaticImageData;
	seasons: {
		image: StaticImageData;
		length: number;
		episodeNumber: number;
	}[][];
	descriptionText: string;
	semilarMovies: {
		movieImage: StaticImageData;
		title: string;
		rating: number;
	}[];
}

const Serial = ({
	mainImage,
	secondImage,
	seasons,
	descriptionText,
	semilarMovies,
}: pageProps) => {
	const [curSeason, setCurSeason] = useState(seasons[0]);
	const seasonButtons: ReactNode[] = [];
	seasons.forEach((season, index) => {
		seasonButtons.push(
			<div
				key={index}
				className={styles.buttonWrapper}
				onClick={() => {
					if (seasons[index].length > 0) {
						setCurSeason(seasons[index]);
					}
				}}
			>
				<Button theme={ButtonTheme.ROUND} width={30} height={30}>
					<div className={styles.seasonsButtonsNumber}>
						{index + 1}
					</div>
				</Button>
			</div>
		);
	});

	return (
		<>
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
			<div>
				<h2 className={styles.seasonsTitle}>Сезоны</h2>
				<div className={styles.seasonsButtons}>{seasonButtons}</div>
				<Episodes episodes={curSeason} />
			</div>
			<Description text={descriptionText} hasDisclaimer={true} />
			<NewMovies
				movies={semilarMovies}
				title={"Похожее"}
				itemHasTitle={false}
			/>
			<Information />
		</>
	);
};

export default Serial;
