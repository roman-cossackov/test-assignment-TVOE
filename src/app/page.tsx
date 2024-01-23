import styles from "./page.module.scss";
import Header from "./components/Header/Header";
import image3 from "@/app/assets/images/image3.jpg";
import image4 from "@/app/assets/images/image4.png";

export default function Home() {
	return (
		<main className={styles.main}>
			<Header
				mainImage={image3}
				secondImage={image4}
				aboutText={
					"Неувядающий авантюрист и пытливый археолог-исследователь по‑прежнему в седле."
				}
			/>
		</main>
	);
}
