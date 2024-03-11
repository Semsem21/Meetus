import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
	const MotionLink = motion(Link);

	return (
		<main className="min-h-dvh flex flex-col justify-center items-center">
			<section className="border border-gray-400 rounded-full w-max mx-auto px-4 py-1.5 my-2 sm:text-sm xs:text-xs xs:px-2.5">
				<p className="flex items-center gap-5 text-black xs:gap-3">
					Check Out My Latest Projects
					<a
						href="https://islam-mohamed.vercel.app/projects"
						target="_blank"
						className="font-semibold text-cyan-400 text-xs cursor-pointer animate-bounce">
						Find It Out&ensp;
						<span aria-hidden="true">&rarr;</span>
					</a>
				</p>
			</section>

			<section className="text-center flex flex-col gap-3 items-center my-4 capitalize">
				<h1 className="text-black font-bold text-5xl py-2 px-5 sm:text-4xl tracking-tight wordspace">
					Manage Your Time With Us
				</h1>

				<p className="px-4 py-1 sm:text-sm capitalize">
					Start
					<span className="text-cyan-500 smallcaps"> Organize </span>
					your monthly plans &ldquo;Add, Delete, Manage&rdquo; Your Own
					Tasks ..
					<br />
					<span className="text-cyan-500 animate-pulse block mt-2">
						- Be Organized -
					</span>
				</p>

				<MotionLink
					to="/login"
					className="flex gap-5 rounded-lg border border-gray-500 py-1 px-5 bg-gray-500 text-white outline-none"
					whileHover={{
						scale: 1.1,
						backgroundColor: "#22d3ee",
						borderColor: "#22d3ee",
					}}>
					Start Now
					<motion.article
						aria-hidden="true"
						animate={{ x: [-3, 7, -3] }}
						transition={{ duration: 1.5, repeat: Infinity }}
						className="px-1">
						→
					</motion.article>
				</MotionLink>
			</section>
		</main>
	);
}
