import Image from "next/image";

import styles from "./Description.module.scss";
import Exclamation from "@/assets/images/serialy/wednesday/description/Exclamation.png";

interface DescriptionProps {
	text: string;
	hasDisclaimer: boolean;
}

const Description = ({ text, hasDisclaimer }: DescriptionProps) => {
	return (
		<div className={styles.description}>
			<h2 className={styles.title}>Описание</h2>
			<p className={styles.text}>{text}</p>
			{hasDisclaimer && (
				<div className={styles.disclaimer}>
					<Image
						className={styles.disclaimerImage}
						src={Exclamation}
						alt="exclamation-mark"
						width={30}
						height={30}
					/>
					<p className={styles.disclaimerText}>
						Контент может содержать сцены курения и употребления
						спиртных напитков. Курение и чрезмерное употребление
						алкоголя вредит вашему здоровью.
					</p>
				</div>
			)}
		</div>
	);
};

export default Description;
