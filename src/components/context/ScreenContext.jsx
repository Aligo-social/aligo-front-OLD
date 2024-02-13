import { createContext, useEffect, useState } from "react"

const ScreenContext = createContext({
	screen: { width: 0, height: 0 },
	screenSize: [],
})

export const ScreenContextProvider = ({ children }) => {
	const [screen, setScreen] = useState({ width: window.innerWidth, height: window.innerHeight })
	const screenSize = [
		{ name: "2xl", width: 1536 },
		{ name: "xl", width: 1280 },
		{ name: "lg", width: 1024 },
		{ name: "md", width: 768 },
		{ name: "sm", width: 640 },
		{ name: "", width: 0 },
	]

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => {
				setScreen({ width: window.innerWidth, height: window.innerHeight })
			},
			false,
		)
	}, [])

	return (
		<ScreenContext.Provider
			value={{
				screen,
				screenSize,
			}}
		>
			{children}
		</ScreenContext.Provider>
	)
}

export default ScreenContext
