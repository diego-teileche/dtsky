import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--fontSize"?: string
	"--color"?: string
}

type Props = Readonly<{
	text?: string
	style?: CustomStyle
}>

export const DTGlitchText = ({ text, style }: Props) => {
	return (
		<div style={style} className={`${styles["container"]}`}>
			<div title={text} className={`${styles["div"]}`}>
				{text}
			</div>
		</div>
	)
}
