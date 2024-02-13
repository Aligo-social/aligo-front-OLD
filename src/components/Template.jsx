import { useLocation } from "react-router-dom"

import BottomNavigation from "./Template/BottomNavigation"
import Header from "./Template/Header"

const Template = ({ children }) => {
	const location = useLocation()
	const smallHeaderPages = ["/messages"]
	const noHeaderPages = ["/signin", "/signup", "/call"]
	const noBottomNavPages = ["/signin", "/signup", "/call"]

	return (
		<div className="flex min-h-screen md:flex-row">
			<Header
				isHeaderSmall={smallHeaderPages.some((page) => location.pathname.includes(page))}
				isHeaderHidden={noHeaderPages.some((page) => location.pathname.includes(page))}
			/>
			<BottomNavigation isBottomNavHidden={noBottomNavPages.some((page) => location.pathname.includes(page))} />
			{children}
		</div>
	)
}

export default Template
