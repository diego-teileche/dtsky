import "./Dbutton.css"
import type { ReactNode } from "react"

interface DbuttonType {
	children: ReactNode
}

const Dbutton = ({ children }: DbuttonType): ReactNode => {
	return (
		<button
			style={{
				width: "90px",
				height: "30px",
				background: "blue",
				color: "white",
				border: "none",
				borderRadius: "8px",
			}}
		>
			{children}
		</button>
	)
}

export default Dbutton
