import { MdLogout } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

import { navItems } from "../navItems"

const Header = ({ isHeaderSmall, isHeaderHidden }) => {
	const location = useLocation()

	const isCurrentPage = (itemUrl) => {
		return location.pathname === itemUrl
	}

	if (isHeaderHidden) {
		return null
	}

	return (
		<header
			className={`sticky top-0 hidden h-screen flex-col items-start border-r md:flex ${!isHeaderSmall ? "w-[220px]" : "md:w-max"}`}
		>
			<h1 className="mb-8 mt-4 hidden items-end justify-start self-center md:flex">
				<img src="/images/logo.svg" alt="Logo du site Aligo" width="50" />
				{!isHeaderSmall && <img src="/images/name.svg" alt="Nom du site Aligo" width="100" className="ml-2" />}
			</h1>
			<nav className="mb-auto">
				<ul className="menu menu-vertical flex-nowrap">
					{navItems.map((item, index) => (
						<li
							key={index}
							className={`transition-all hover:scale-105 hover:font-bold ${isCurrentPage(item.url) ? "active font-bold" : "font-normal"}`}
						>
							{item.url ? (
								<Link to={item.url} className={`w-full ${isHeaderSmall ? "flex justify-center " : ""}md:py-3`}>
									{isCurrentPage(item.url) ? item.iconActive || item.icon : item.icon}
									{!isHeaderSmall && <span className="hidden md:block">{item.text}</span>}
								</Link>
							) : (
								<button className={`w-full ${isHeaderSmall ? "flex justify-center " : ""}md:py-3`}>
									{item.icon}
									{!isHeaderSmall && <span className="hidden md:block">{item.text}</span>}
								</button>
							)}
						</li>
					))}
				</ul>
			</nav>

			<Link
				to="/signin"
				className={`btn btn-ghost m-2 hidden self-center hover:scale-105 hover:font-bold ${isHeaderSmall ? "flex justify-center " : ""}md:flex md:py-3`}
			>
				<MdLogout className="text-2xl" />
				{!isHeaderSmall && <span className="hidden text-sm md:block">Déconnexion</span>}
			</Link>
		</header>
	)
}

export default Header
