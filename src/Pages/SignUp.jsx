import { Link } from "react-router-dom";
import SignUpForm from "../Form/SignUpForm";

export default function SignUp() {
	return (
		<main className="min-h-dvh flex justify-center items-center">
			<section className="flex flex-col z-50 w-[40%] xl:w-[60%] lg:w-[75%] px-7 py-3  bg-white rounded-xl shadow-lg shadow-gray-500 lg:px-5">
				<h2 className="text-2xl text-center py-2 mb-2 md:text-lg md:mb-0.5 md:py-0.5 xs:text-base">
					Create an account
				</h2>

				<p className="text-sm text-center xs:text-xs capitalize">
					Enter your credentials to access your account
				</p>

				<SignUpForm />

				<p className="text-sm text-gray-400 text-center xs:text-xs capitalize ">
					Already Have an account ? ..&nbsp;
					<Link
						to="/login"
						className="text-cyan-500 hover:scale-[1.2] transition-all ease-in-out duration-200 inline-block">
						Click Here
					</Link>
					&nbsp;Then !
				</p>
			</section>
		</main>
	);
}
