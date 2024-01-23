"use client";

import Image, { StaticImageData } from "next/image";

import styles from "./Header.module.scss";
import Button, {ButtonTheme} from "../UI/Button/Button";

interface HeaderProps {
	mainImage: StaticImageData;
	secondImage: StaticImageData;
	aboutText: string;
}

const Header = ({ mainImage, secondImage, aboutText }: HeaderProps) => {
	return (
		<div className={styles.header}>
			<div className={styles.mainImageContainer}>
				<Image
					className={styles.mainImage}
					src={mainImage}
					alt="Header main image"
					priority={true}
				/>
			</div>
			<div className={styles.about}>
				<div className={styles.secondImageContainer}>
					<Image
						className={styles.secondImage}
						src={secondImage}
						alt="Header second image"
					/>
				</div>
				<p className={styles.aboutText}>{aboutText}</p>
				<div className={styles.buttonsContainer}>
					<Button title={"Смотреть"} theme={ButtonTheme.GRADIENT}/>
					<Button title={"О фильме"} theme={ButtonTheme.TRANSPARENT}/>
				</div>
			</div>
		</div>
	);
};

export default Header;
