import "./styles/App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ScreenContextProvider } from "./components/context/ScreenContext"
import Template from "./components/Template"
import Call from "./pages/Call"
import Chat from "./pages/Chat"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"

function App() {
	return (
		<ScreenContextProvider>
			<BrowserRouter>
				<Template>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/signin" element={<Login />} />
						<Route path="/messages" element={<Chat />} />
						<Route path="/call" element={<Call />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Template>
			</BrowserRouter>
		</ScreenContextProvider>
	)
}

export default App
