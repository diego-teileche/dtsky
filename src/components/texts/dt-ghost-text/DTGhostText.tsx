import { CSSProperties } from "react"
import styles from "./styles.module.sass"

interface CustomStyle extends CSSProperties {
	"--fontSize"?: string
	"--color"?: string
}

type Props = Readonly<{
	text1?: string
	text2?: string
	style?: CustomStyle
}>

export const DTGhostText = ({ text1, text2, style }: Props) => {
	return (
		<div style={style} className={`${styles["container"]}`}>
			<h1 className={`${styles["h1"]}`}>{text1}</h1>
			<h1 className={`${styles["h1"]}`}>{text2}</h1>
		</div>
	)
}
