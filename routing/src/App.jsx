import "./App.css"
import { Routes, Route } from "react-router-dom"
import Main from "./pages/Main"
import About from "./pages/About"
import Layout from "./components/Layout/Layout"
import Oopsies from "./pages/Oopsies"
import PokemonDetail from "./pages/PokemonDetail"
import Home from "./pages/Home"
import Pokemons from "./pages/Pokemons"
function App() {
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

	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="/about/something" element={<h1>Priority</h1>} />
					<Route path="/about" element={<About />} />
					<Route path="/pokemons" element={<Pokemons />}>
						<Route path=":pokemonName" element={<PokemonDetail />} />
					</Route>

					<Route path="*" element={<Oopsies />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
