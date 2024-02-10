import Image, { StaticImageData } from "next/image";
import styles from "./Header.module.scss";
import Button from "@/components/UI/Button/Button";
import { ButtonTheme } from "@/components/UI/Button/Button";
import Bookmark from "@/assets/icons/serial/Bookmark.svg";
import Heart from "@/assets/icons/serial/Heart.svg";

interface HeaderProps {
	rating: number;
	years: { start: number; end: number | "..." };
	seasons: number;
	country: string;
	genre: string;
	ageCategory: number;
	mainImage: StaticImageData;
	secondImage: StaticImageData;
}

const Header = ({
	rating,
	years,
	seasons,
	country,
	genre,
	ageCategory,
	mainImage,
	secondImage,
}: HeaderProps) => {
	return (
		<header className={styles.header}>
			<div className={styles.mainImageContainer}>
				<Image
					className={styles.mainImage}
					src={mainImage}
					alt="main-img"
				/>
			</div>
			<div className={styles.description}>
				<div className={styles.info}>
					<div className={styles.secondImageContainer}>
						<Image
							className={styles.secondImage}
							src={secondImage}
							alt="second-img"
						/>
					</div>
					<div className={styles.infoTags}>
						<div className={styles.rating}>{rating}</div>
						<div
							className={styles.years}
						>{`${years.start}-${years.end}`}</div>
						<div className={styles.seasons}>{seasons} сезон</div>
						<div className={styles.country}>{country}</div>
						<div className={styles.genre}>{genre}</div>
						<div className={styles.ageCategory}>{ageCategory}+</div>
					</div>
					<div className={styles.infoText}>
						<p>
							Уэнсдэй предстоит освоить экстрасенсорные
							cпособности, чтобы остановить местного серийного
							убийцу и раскрыть тайну родителей.
						</p>
					</div>
				</div>
				<div className={styles.buttons}>
					<Button
						theme={ButtonTheme.GRADIENT}
						width={150}
						height={60}
					>
						Смотреть
					</Button>
					<Button
						theme={ButtonTheme.TRANSPARENT}
						width={150}
						height={60}
					>
						Трейлер
					</Button>
					<Button
						theme={ButtonTheme.TRANSPARENT}
						width={70}
						height={60}
					>
						<Bookmark viewBox="-4 -2 30 30" />
					</Button>
					<Button
						theme={ButtonTheme.TRANSPARENT}
						width={70}
						height={60}
					>
						<Heart viewBox="0 -2 30 30" />
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
