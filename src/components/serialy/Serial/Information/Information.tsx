import styles from "./Information.module.scss";

interface InformationProps {}

const Information = (props: InformationProps) => {
	return (
		<div className={styles.information}>
			<h2 className={styles.title}>Информация</h2>
			<div className={styles.container}>
				<p className={styles.infoTitle}>Премьера в мире</p>
				<p className={styles.infoText}>31 октября 2022</p>
				<p className={styles.infoTitle}>Оригинальное название</p>
				<p className={styles.infoText}>Wednesday</p>
			</div>
			<div className={styles.container}>
				<p className={styles.infoTitle}>Страна</p>
				<p className={styles.infoText}>США</p>
				<p className={styles.infoTitle}>Жанры</p>
				<p className={styles.infoText}>
					Фентези, Комедия, Криминал, Детектив
				</p>
			</div>
			<div className={styles.container}>
				<p className={styles.infoTitle}>Язык аудиодорожки</p>
				<p className={styles.infoText}>Rus, Eng</p>
				<p className={styles.infoTitle}>Качество</p>
				<p className={`${styles.infoText} ${styles.infoTextBack}`}>
					Full HD
				</p>
			</div>
		</div>
	);
};

export default Information;
