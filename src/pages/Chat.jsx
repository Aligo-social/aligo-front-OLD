import { BiEdit } from "react-icons/bi"
import { LuSendHorizonal } from "react-icons/lu"
import { MdCall } from "react-icons/md"
import { Link } from "react-router-dom"

import AutoResizeTextarea from "../components/AutoResizeTextarea"

const testScroll = []
for (let i = 0; i < 200; i++) {
	testScroll.push(i)
}
const testScroll2 = []
for (let i = 0; i < 20; i++) {
	testScroll2.push(i)
}

const users = [
	{ id: 5678, username: "johndoe" },
	{ id: 9101, username: "sarah_smith" },
	{ id: 1121, username: "alex123" },
	{ id: 3141, username: "janedoe" },
	{ id: 5161, username: "mike_87" },
]

const conversation = [
	{
		sender: 1,
		name: "camlafit",
		message: "Salut ! Comment ça va aujourd'hui ?",
		timestamp: "2024-01-21T12:00:00",
	},
	{
		sender: 2,
		name: "johndoe",
		message: "Salut ! Ça va super, merci ! J'ai eu une matinée productive. Et toi ?",
		timestamp: "2024-01-21T12:05:00",
	},
	{
		sender: 1,
		name: "camlafit",
		message:
			"Ça va bien aussi. J'ai pris un café et je me prépare pour la journée. Tu as des projets pour cet après-midi ?",
		timestamp: "2024-01-21T12:10:00",
	},
	{
		sender: 2,
		name: "johndoe",
		message:
			"Oui, je vais rencontrer des amis pour déjeuner. On va probablement aller voir un film après. Tu veux te joindre à nous ?",
		timestamp: "2024-01-21T12:15:00",
	},
	{
		sender: 1,
		name: "camlafit",
		message:
			"Ça a l'air tentant ! Malheureusement, j'ai une réunion cet après-midi. On pourrait peut-être planifier quelque chose ce week-end ?",
		timestamp: "2024-01-21T12:20:00",
	},
	{
		sender: 2,
		name: "johndoe",
		message:
			"Absolument ! Samedi pourrait être bien. On pourrait aller faire du shopping ou essayer ce nouveau restaurant dont tout le monde parle. Qu'en dis-tu ?",
		timestamp: "2024-01-21T12:25:00",
	},
	{
		sender: 1,
		name: "camlafit",
		message:
			"Je suis partant pour le restaurant ! J'ai entendu de bonnes critiques à son sujet. On se retrouve là-bas vers 19h ?",
		timestamp: "2024-01-21T12:30:00",
	},
	{
		sender: 2,
		name: "johndoe",
		message:
			"Parfait ! 19h, ça me va. N'oublie pas de me faire signe si quelque chose change. J'ai hâte de passer un bon moment !",
		timestamp: "2024-01-21T12:35:00",
	},
	{
		sender: 1,
		name: "camlafit",
		message: "Pas de souci, je te tiendrai au courant. À samedi alors !",
		timestamp: "2024-01-21T12:40:00",
	},
	{
		sender: 2,
		name: "johndoe",
		message: "À samedi ! Passe une excellente journée en attendant, mon ami !",
		timestamp: "2024-01-21T12:45:00",
	},
	{
		sender: 1,
		name: "camlafit",
		message:
			"Tu as des recommandations pour ce restaurant ? Je n'y suis jamais allé, mais j'ai entendu dire qu'ils ont une cuisine incroyable.",
		timestamp: "2024-01-21T12:50:00",
	},
	{
		sender: 2,
		name: "johndoe",
		message:
			"Absolument ! Leur spécialité est le plat de pâtes aux fruits de mer. C'est délicieux. Et si tu aimes les desserts, ne manque pas leur tiramisu.",
		timestamp: "2024-01-21T12:55:00",
	},
	{
		sender: 1,
		name: "camlafit",
		message: "Ça semble délicieux ! J'ai hâte d'essayer. Merci pour les recommandations !",
		timestamp: "2024-01-21T13:00:00",
	},
]

const Chat = () => {
	return (
		<main className="flex min-h-full w-screen items-start justify-center pb-16 md:pb-0">
			<aside className="sticky top-0 h-screen w-max border-r md:w-[300] lg:flex lg:flex-col">
				<div className="flex h-14 items-center justify-center border-b px-3 md:justify-between">
					<h2 className="hidden font-semibold sm:text-xl md:inline">Conversations</h2>
					<button className="btn btn-circle btn-ghost btn-sm hover:scale-110 hover:bg-transparent">
						<BiEdit className="text-2xl" />
					</button>
				</div>
				<ul className="overflow-y-auto">
					{users.map((user, index) => (
						<li key={index}>
							<button className="btn btn-ghost flex flex-nowrap items-center justify-center text-lg hover:bg-transparent md:py-8">
								<div className="bg-site-gradient avatar w-8 rounded-full p-0.5 xs:w-10 md:mr-1">
									<div className="rounded-full">
										<img src="https://thispersondoesnotexist.com/" alt="Photo de profil" />
									</div>
								</div>
								<div className="hidden md:inline">
									<h3 className="text-left font-bold">{user.username}</h3>
									<p className="text-xs italic text-gray-400">dernière connexion il y a 2h</p>
								</div>
							</button>
						</li>
					))}
				</ul>
			</aside>
			<div className="flex-1">
				<div className="sticky top-0 z-10 flex h-14 items-center justify-between border-b bg-white px-4">
					<div className="flex flex-nowrap items-center justify-center text-lg">
						<div className="bg-site-gradient avatar w-8 rounded-full p-0.5 xs:w-10 md:mr-1">
							<div className="rounded-full">
								<img src="https://thispersondoesnotexist.com/" alt="Photo de profil" />
							</div>
						</div>
						<div className="hidden md:inline">
							<h2 className="text-left font-bold">johndoe</h2>
							<p className="text-xs italic text-gray-400">dernière connexion il y a 2h</p>
						</div>
					</div>
					<div>
						<Link to="/call" className="btn btn-circle btn-ghost btn-sm hover:scale-110 hover:bg-transparent">
							<MdCall className="text-2xl" />
						</Link>
					</div>
				</div>
				<ul className="p-3">
					{conversation.map((message, index) => (
						<li key={index}>
							<div className={`chat ${message.sender === 1 ? "chat-start" : "chat-end"}`}>
								<div className="bg-site-gradient avatar chat-image w-8 rounded-full p-0.5 xs:w-10 md:mr-1">
									<div className="rounded-full">
										<img src="https://thispersondoesnotexist.com/" alt="Photo de profil" />
									</div>
								</div>
								<div className="chat-header font-bold">{message.name}</div>
								<div className={`chat-bubble ${message.sender !== 1 && "chat-bubble-secondary"}`}>
									{message.message}
								</div>
								<time className="chat-footer text-xs opacity-50">
									le {new Date(message.timestamp).toLocaleDateString()} à{" "}
									{new Date(message.timestamp).toLocaleTimeString()}
								</time>
							</div>
						</li>
					))}
				</ul>
				<form
					className="sticky bottom-16 flex w-full items-center justify-between border-t bg-white p-3 md:bottom-0"
					onSubmit={(e) => e.preventDefault()}
				>
					<AutoResizeTextarea />
					<button className="btn btn-circle btn-ghost hover:scale-110 hover:bg-transparent">
						<LuSendHorizonal className="text-4xl" />
					</button>
				</form>
			</div>
		</main>
	)
}

export default Chat
