import React from "react"
import "./Spinner.css"

function Spinner() {
	// Many thanks to epic spinner <3
	return (
		<div className="circles-to-rhombuses-spinner">
			<div className="circle"></div>
			<div className="circle"></div>
			<div className="circle"></div>
		</div>
	)
}

export default Spinner
