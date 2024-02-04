import styles from './Button.module.scss'

interface ButtonProps {
    title: string;
    theme: ButtonTheme;
}

export enum ButtonTheme {
    GRADIENT = "gradient",
    TRANSPARENT = "transparent"
}

const Button = ({title, theme = ButtonTheme.TRANSPARENT}: ButtonProps) => {
  return (
    <button className={`${styles.Button} ${styles[theme]}`}>{title}</button>
  )
}

export default Button