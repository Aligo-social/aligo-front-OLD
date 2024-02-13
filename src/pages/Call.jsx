import { useState } from "react"
import { FaMicrophoneAlt, FaMicrophoneAltSlash } from "react-icons/fa"
import { IoVideocam, IoVideocamOff } from "react-icons/io5"
import { MdCallEnd } from "react-icons/md"

const Call = () => {
	const [isMuted, setIsMuted] = useState(false)
	const [isVideo, setIsVideo] = useState(false)

	return (
		<main className="flex min-h-full w-screen flex-col items-center justify-between">
			<header className="flex h-14 w-full items-center justify-between px-4">
				<div className="flex flex-nowrap items-center justify-center text-lg">
					<div className="bg-site-gradient avatar w-8 rounded-full p-0.5 xs:w-10 md:mr-1">
						<div className="rounded-full">
							<img src="https://thispersondoesnotexist.com/" alt="Photo de profil" />
						</div>
					</div>
					<div className="hidden md:inline">
						<h2 className="text-left font-bold">camlafit</h2>
					</div>
				</div>
			</header>
			<div className="bg-site-gradient avatar w-52 rounded-full p-1.5">
				<div className="rounded-full">
					<img src="https://thispersondoesnotexist.com/" alt="Photo de profil" />
				</div>
			</div>
			<div className="mb-5 flex w-full items-center justify-evenly md:mb-10 md:w-96">
				<button
					className={`btn btn-neutral ${isMuted ? "opacity-20" : ""} size-16 rounded-full hover:scale-105`}
					onClick={() => setIsMuted(!isMuted)}
				>
					{isMuted ? <FaMicrophoneAltSlash className="text-3xl" /> : <FaMicrophoneAlt className="text-3xl" />}
				</button>
				<button
					className={`btn btn-neutral ${!isVideo ? "opacity-20" : ""} size-16 rounded-full hover:scale-105`}
					onClick={() => setIsVideo(!isVideo)}
				>
					{isVideo ? <IoVideocam className="text-3xl" /> : <IoVideocamOff className="text-3xl" />}
				</button>
				<button className="btn btn-error size-16 rounded-full hover:scale-105">
					<MdCallEnd className="text-3xl" />
				</button>
			</div>
		</main>
	)
}

export default Call
