import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

import Loader from "../components/Loader"
import Post from "../components/Post"

const Home = () => {
	const recommendedUsers = [
		{ id: 5678, username: "johndoe" },
		{ id: 9101, username: "sarah_smith" },
		{ id: 1121, username: "alex123" },
		{ id: 3141, username: "janedoe" },
		{ id: 5161, username: "mike_87" },
	]

	const testScroll = []
	for (let i = 0; i < 200; i++) {
		testScroll.push(i)
	}

	const [visiblePosts, setVisiblePosts] = useState(5)
	const [loadedPosts, setLoadedPosts] = useState(testScroll.slice(0, visiblePosts))
	const [isLoading, setIsLoading] = useState(false)

	const handleScroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
			setIsLoading(true)
			setTimeout(() => {
				setVisiblePosts((prev) => prev + 5)
				setIsLoading(false)
			}, 1000)
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
	}, [])

	useEffect(() => {
		setLoadedPosts(testScroll.slice(0, visiblePosts))
	}, [visiblePosts])

	useEffect(() => {
		window.onbeforeunload = () => {
			window.scrollTo(0, 0)
		}
	}, [])

	return (
		<main className="flex min-h-full w-screen items-start justify-center pb-16 md:pb-0">
			<div className="flex-1 p-3">
				<h2 className="mb-5 text-center text-2xl font-bold">Dernière publications</h2>
				<ul>
					{loadedPosts.map((item, index) => (
						<li key={index}>
							<Post />
						</li>
					))}
					{isLoading && (
						<li>
							<Loader />
						</li>
					)}
				</ul>
			</div>
			<aside className="sticky top-0 hidden flex-col p-3 lg:flex">
				<h2 className="mb-5 w-full text-nowrap text-center text-2xl font-bold">Suggestions pour vous</h2>
				<ul className="mx-auto flex flex-col items-center justify-center">
					{recommendedUsers.map((user, index) => (
						<li key={index} className="flex w-full items-center justify-between p-2">
							<Link
								to={"/profile/" + user.id}
								className="link mr-5 flex flex-nowrap items-center justify-center text-lg font-semibold no-underline transition-all hover:scale-110"
							>
								<div className="bg-site-gradient avatar mr-3 w-10 rounded-full p-0.5">
									<div className="rounded-full">
										<img src="https://thispersondoesnotexist.com/" alt="Photo de profil" />
									</div>
								</div>
								{user.username}
							</Link>
							<button className="btn-site-gradient btn btn-sm transition-all hover:scale-110">Suivre</button>
						</li>
					))}
				</ul>
			</aside>
		</main>
	)
}

export default Home
