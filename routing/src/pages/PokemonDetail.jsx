import React, { useEffect, useState } from "react"
import axios from "axios"
const url = "https://pokeapi.co/api/v2/pokemon"
import { useParams } from "react-router-dom"
import Spinner from "../components/Spinner/Spinner"

function PokemonDetail() {
	const [pokemon, setPokemon] = useState(null)
	// const params = useParams()
	const { pokemonName } = useParams()

	async function fetchOnePokemon() {
		try {
			const response = await axios.get(`${url}/${pokemonName}`)
			console.log(response)
			setPokemon(response.data)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchOnePokemon()
	}, [pokemonName])

	if (!pokemon) {
		return <Spinner />
	}
	return (
		<div>
			<h2>{pokemon.name}</h2>
			<img
				src={pokemon.sprites.front_shiny}
				alt="Shiny front picture of a wild pokemon"
			/>
		</div>
	)
}

export default PokemonDetail
