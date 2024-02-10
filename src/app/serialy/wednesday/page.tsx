import styles from "./page.module.scss";
import Serial from "@/components/Serialy/Serial/Serial";
import mainImage from "@/assets/images/serialy/wednesday/mainImage.png";
import secondImage from "@/assets/images/serialy/wednesday/secondImage.png";
interface pageProps {}

const page = ({}: pageProps) => {
	return (
		<main className={styles.main}>
			<Serial mainImage={mainImage} secondImage={secondImage} />;
		</main>
	);
};

export default page;
