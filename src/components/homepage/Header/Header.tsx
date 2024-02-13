"use client";

import Image, { StaticImageData } from "next/image";

import styles from "./Header.module.scss";
import Button, { ButtonTheme } from "../../UI/Button/Button";
import Link from "next/link";

interface HeaderProps {
	mainImage: StaticImageData;
	secondImage: StaticImageData;
	aboutText: string;
}

const Header = ({ mainImage, secondImage, aboutText }: HeaderProps) => {
	return (
		<header className={styles.header}>
			<div className={styles.mainImageContainer}>
				<Image
					className={styles.mainImage}
					src={mainImage}
					alt="main-img"
					priority
				/>
			</div>
			<div className={styles.about}>
				<div className={styles.secondImageContainer}>
					<Image
						className={styles.secondImage}
						src={secondImage}
						alt="second-img"
					/>
				</div>
				<p className={styles.aboutText}>{aboutText}</p>
				<div className={styles.buttonsContainer}>
					<Link href="/serialy/wednesday">
						<Button
							theme={ButtonTheme.GRADIENT}
							width={210}
							height={65}
						>
							Смотреть
						</Button>
					</Link>
					<Link href="/serialy/wednesday">
						<Button
							theme={ButtonTheme.TRANSPARENT}
							width={210}
							height={65}
						>
							О фильме
						</Button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
