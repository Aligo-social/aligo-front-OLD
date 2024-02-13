import { MdLogout } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

import { navItems } from "../navItems"

const BottomNavigation = ({ isBottomNavHidden }) => {
	const location = useLocation()

	const isCurrentPage = (itemUrl) => {
		return location.pathname === itemUrl
	}

	if (isBottomNavHidden) {
		return null
	}

	return (
		<nav className="btm-nav z-10 border-t md:hidden">
			{navItems.map((item, index) => {
				if (item.url) {
					return (
						<Link key={index} to={item.url} className={`${isCurrentPage(item.url) && "active"}`}>
							{isCurrentPage(item.url) ? item.iconActive || item.icon : item.icon}
						</Link>
					)
				}
			})}
			<Link to="/signin">
				<MdLogout className="text-2xl" />
			</Link>
		</nav>
	)
}

export default BottomNavigation
