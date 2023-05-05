import React, { useState, useEffect } from "react"

function Timer() {
	const [count, setCount] = useState(30)
	const [color, setColor] = useState("white")

	useEffect(() => {
		console.log("ComponentDidMount")
		// Use effect syntax:
		/**
		 * useEffect(callback, arrayOfDeps)
		 */
		// console.log("THIS IS THE COUNT: ", count)
		let interValId = setInterval(() => {
			console.log("updating counter")
			setCount((toto) => toto - 1)
		}, 1000)
		/**
		 * An empty array of deps allow us to execute this useEffect
		 * only when the component did mount
		 */

		return () => clearInterval(interValId)
	}, [])

	useEffect(() => {
		console.log("ComponentDidUpdate")
		if (count <= 20 && count > 10) {
			setColor("orange")
		}
		if (count <= 10) {
			setColor("red")
		}

		return () => console.log("Bye bye component")
	}, [count])

	return (
		<div>
			<h1 style={{ color }}>{count}</h1>
		</div>
	)
}

export default Timer
