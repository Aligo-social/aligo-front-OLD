import { FaRegCommentAlt, FaRegHeart } from "react-icons/fa"
import { Link } from "react-router-dom"

const Post = () => {
	const users = [
		{ id: 5678, username: "johndoe" },
		{ id: 9101, username: "sarah_smith" },
		{ id: 1121, username: "alex123" },
		{ id: 3141, username: "janedoe" },
		{ id: 5161, username: "mike_87" },
	]
	const postUser = users[Math.floor(Math.random() * users.length)]
	const hourPasts = Math.floor(Math.random() * 100)
	const isImage = Math.floor(Math.random() * 2)
	const likes = Math.floor(Math.random() * 10000)

	return (
		<article className="mx-auto mb-10 w-full rounded border shadow-md xs:w-8/12 md:w-6/12">
			<header className="flex items-center justify-between p-3">
				{postUser && (
					<>
						<Link
							to={"/profile/" + postUser.id}
							className="link mr-3 flex flex-nowrap items-center justify-center text-lg no-underline transition-all hover:scale-110"
						>
							<div className="bg-site-gradient avatar mr-1 w-8 rounded-full p-0.5 sm:mr-3">
								<div className="rounded-full">
									<img src="https://thispersondoesnotexist.com/" alt="Photo de profil" />
								</div>
							</div>
							{postUser.username}
						</Link>
						<p className="italic">il y a {hourPasts} h</p>
					</>
				)}
			</header>

			<main>
				{isImage === 1 && (
					<figure className="mb-3">
						<img src="https://picsum.photos/600/200" alt="Image du post sans description" />
					</figure>
				)}
				<p className="mb-5 px-3 text-justify">
					lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. Accusamus, quia fugiat.
					Quisquam, voluptatum. Accusamus, quia fugiat.
				</p>
			</main>

			<footer className="flex items-center justify-between border-t p-3">
				<div className="flex items-center text-neutral-500">
					<div className="mr-3">{likes} j'aime(s)</div>
				</div>
				<div className="flex items-center">
					<button className="btn btn-circle btn-ghost btn-sm transition-all hover:scale-110 hover:bg-transparent">
						<FaRegHeart className="text-lg xl:text-2xl" />
					</button>
					<button className="btn btn-circle btn-ghost btn-sm ml-1 transition-all hover:scale-110 hover:bg-transparent md:ml-3">
						<FaRegCommentAlt className="text-lg xl:text-2xl" />
					</button>
				</div>
			</footer>
		</article>
	)
}

export default Post
