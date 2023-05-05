import React, { useState, useEffect } from "react"
import axios from "axios"
import { Outlet, Link, NavLink } from "react-router-dom"
const url = "https://pokeapi.co/api/v2/pokemon"

function Pokemons() {
	const [pokemons, setPokemons] = useState([])

	async function fetchPokemons() {
		const response = await axios.get(url)
		console.log(response)
		setPokemons(response.data.results)
	}

	useEffect(() => {
		fetchPokemons()
	}, [])
	return (
		<>
			<ol>
				{pokemons.map((pokemon) => {
					return (
						<li key={pokemon.name}>
							<NavLink to={`/pokemons/${pokemon.name}`}>{pokemon.name}</NavLink>
						</li>
					)
				})}
			</ol>
			<Outlet />
		</>
	)
}

export default Pokemons
