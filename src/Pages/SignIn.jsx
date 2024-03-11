import { Link } from "react-router-dom";
import { Google } from "../assets/Icons";
import SignInForm from "../Form/SignInForm";

export default function SignIn() {
	return (
		<main className="min-h-dvh flex justify-center items-center">
			<section className="flex flex-col z-50 w-[40%] xl:w-[60%] lg:w-[75%] px-7 py-3 h-full bg-white rounded-xl shadow-lg shadow-gray-500 lg:px-5">
				<h2 className="text-2xl text-center py-2 mb-2 md:text-lg md:mb-0.5 md:py-0.5 xs:text-base">
					Here We Go
				</h2>

				<p className="text-sm text-center xs:text-xs capitalize">
					Enter your credentials to access your account
				</p>

				<Link
					to="/none"
					className="my-7 flex items-center justify-center gap-1.5 border py-3 rounded-xl hover:bg-emerald-100 hover:border-emerald-100 transition-all ease-in-out duration-300 xs:py-1.5 capitalize">
					<Google className="!w-[18px] !inline-block text-center " />
					Log in with Google
				</Link>

				<section className="grid grid-cols-5 items-center">
					<hr className="col-span-2" />
					<p className="text-center font-bold xs:text-sm">OR</p>
					<hr className="col-span-2" />
				</section>

				<SignInForm />

				<p className="text-sm text-gray-400 text-center xs:text-xs capitalize ">
					Can&apos;t Log In ?.. So,&nbsp;
					<Link
						to="/signup"
						className="text-cyan-500 hover:scale-[1.2] transition-all ease-in-out duration-200 inline-block">
						Create Account
					</Link>
					&nbsp;now!
				</p>
			</section>
		</main>
	);
}
