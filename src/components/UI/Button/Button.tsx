import { ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
	theme: ButtonTheme;
	children: ReactNode;
	width: number;
	height: number;
}

export enum ButtonTheme {
	GRADIENT = "gradient",
	TRANSPARENT = "transparent",
}

const Button = ({
	theme = ButtonTheme.TRANSPARENT,
	children,
	width,
	height,
}: ButtonProps) => {
	return (
		<button
			className={`${styles.Button} ${styles[theme]}`}
			style={{ width: `${width}px`, height: `${height}px` }}
		>
			{children}
		</button>
	);
};

export default Button;
