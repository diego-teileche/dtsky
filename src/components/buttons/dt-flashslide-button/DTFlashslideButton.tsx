import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--size"?: string
	"--bg"?: string
	"--arrow-bg"?: string
	"--arrow-color"?: string
}

type Props = Readonly<{
	text: string
	href?: string
	style?: CustomStyle
}>

export const DTFlashslideButton = ({ text, href, style }: Props) => {
	return (
		<a href={href} style={style} className={`${styles["button"]}`}>
			{text}
			<span className={`${styles["span"]}`}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className={`${styles["svg"]}`}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
					/>
				</svg>
			</span>
		</a>
	)
}
