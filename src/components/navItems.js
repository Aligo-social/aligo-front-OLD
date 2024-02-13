import { BiConversation, BiSolidConversation } from "react-icons/bi"
import {
	MdAddBox,
	MdHome,
	MdOutlineAddBox,
	MdOutlineHome,
	MdOutlineNotificationsNone,
	MdOutlineSearch,
} from "react-icons/md"

const user = { id: 4629, username: "camlafit" }

export const navItems = [
	{
		icon: <MdOutlineHome className="text-2xl" />,
		iconActive: <MdHome className="text-2xl" />,
		text: "Accueil",
		url: "/",
	},
	{
		icon: <MdOutlineSearch className="text-2xl" />,
		text: "Recherche",
		url: null,
	},
	{
		icon: <BiConversation className="text-2xl" />,
		iconActive: <BiSolidConversation className="text-2xl" />,
		text: "Messages",
		url: "/messages",
	},
	{
		icon: <MdOutlineAddBox className="text-2xl" />,
		iconActive: <MdAddBox className="text-2xl" />,
		text: "Poster",
		url: "/create",
	},
	{
		icon: <MdOutlineNotificationsNone className="text-2xl" />,
		text: "Notifications",
		url: null,
	},
	{
		icon: (
			<div className="bg-site-gradient avatar w-6 rounded-full p-0.5">
				<div className="rounded-full">
					<img src="https://thispersondoesnotexist.com/" alt="Photo de profil" />
				</div>
			</div>
		),
		text: user.username,
		url: "/profile/" + user.id,
	},
]
