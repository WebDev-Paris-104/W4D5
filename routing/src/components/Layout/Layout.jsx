import React from "react"
import { Link, Outlet } from "react-router-dom"
import Main from "../../pages/Main"

function Layout() {
	return (
		<>
			<header>
				<nav>
					<ul>
						<li>
							<Link to={LINKS.MAIN}>Main page</Link>
						</li>
						<li>
							<Link to="/about">About page</Link>
						</li>
						<li>
							<Link to="/pokemons">Pokemons page</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main
				style={{
					display: "flex",
					width: "100vw",
					justifyContent: "space-evenly",
				}}>
				<Outlet />
			</main>

			<footer>Made with Jordan coffee !!</footer>
			{/* <About />
			<Main /> */}
		</>
	)
}

const LINKS = {
	MAIN: "/",
	ABOUT: "/about",
}

export default Layout
