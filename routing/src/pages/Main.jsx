import React, { useState, useEffect } from "react"
import axios from "axios"
import Spinner from "../components/Spinner/Spinner"
const url = "https://pokeapi.co/api/v2/pokemon"
import Timer from "../components/Timer/Timer"
import { Link } from "react-router-dom"
function Main() {
	const [showTimer, setShowTimer] = useState(false)
	const [pokemons, setPokemons] = useState([])

	async function fetchPokemons() {
		const response = await axios.get(url)
		console.log(response)
		setPokemons(response.data.results)
	}

	useEffect(() => {
		fetchPokemons()
	}, [])

	/**
	 * - npm i react-router-dom
	 * - Configuring the BrowserRouter
	 * - Defining Routes (And Route)
	 * - Handling navigation with Link
	 *
	 * - Advanced Routes:
	 *  - Dynamic Routing and params
	 *  - Routing priority
	 *  - Not Found Route
	 *  - Nested Routes
	 *  - Shared Layout(s) and Outlet
	 *  - Link and NavLink
	 */

	if (!pokemons.length) {
		return <Spinner />
	}

	return (
		<div>
			{/* <button onClick={() => setShowTimer(!showTimer)}>
				{" "}
				{showTimer ? "Hide" : "Show"} Timer
			</button>

			{showTimer && <Timer />} */}

			<h2>Pokemons</h2>

			<ol>
				{pokemons.map((pokemon) => {
					return (
						<li key={pokemon.name}>
							<Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
						</li>
					)
				})}
			</ol>
			{/* {showTimer ? <Timer /> : <div>Nothing to see here</div>} */}
		</div>
	)
}

export default Main
