import React from "react"
import { Link } from "react-router-dom"
function Home() {
	return (
		<>
			<div>
				<h1>Welcome to our website</h1>

				<p>
					You can go here if you want to check some pokemons:{" "}
					<Link to={"/pokemons"}>Here</Link>
				</p>
			</div>
		</>
	)
}

export default Home
