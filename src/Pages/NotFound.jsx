import { motion } from "framer-motion";
import notFound from "../assets/NotFound.gif";
import { Link } from "react-router-dom";

const MotionLink = motion(Link);

export default function NotFound() {
	return (
		<section className="min-h-dvh flex flex-col items-center justify-center text-center">
			<h2 className="text-7xl font-bold md:text-6xl">404</h2>

			<img src={notFound} className="m-5 max-h-full max-w-full" />

			<article>
				<h3 className="font-bold text-4xl sm:text-3xl xs:text-2xl">
					It Seems You are Lost
				</h3>

				<p className="mt-1 mb-9 text-lg font-medium md:text-base xs:text-sm capitalize">
					The Page You Are Looking For Is Not Available
				</p>

				<MotionLink
					to="/"
					className="bg-green-400 py-2 px-4 rounded-tl-full rounded-tr-full font-bold text-xl relative z-20 text-black before:absolute before:top-0 before:left-0 before:w-full before:h-full before:!-z-10 before:bg-green-400 before:rounded-bl-full before:rounded-br-full hover:bg-cyan-300 before:hover:bg-cyan-300 "
					whileHover={{
						color: [
							"#121212",
							"rgba(131,58,180,1)",
							"rgba(253,29,29,1)",
							"rgba(252,176,69,1)",
							"rgba(131,58,180,1)",
							"#121212",
						],
						transition: { duration: 1.3, repeat: Infinity },
					}}>
					Back To Home
				</MotionLink>
			</article>
		</section>
	);
}
