import { useFormContext } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Submit({ value }) {
	const {
		formState: { isSubmitting },
	} = useFormContext();

	return (
		<>
			<section className="text-sm my-2 py-2 flex justify-between items-center xs:text-xs xs:py-0.5">
				<figure className="gap-x-2 flex justify-between items-center">
					<input
						type="checkbox"
						id="remember"
						className="cursor-pointer"
					/>
					<label htmlFor="remember" className="cursor-pointer">
						Remember Me
					</label>
				</figure>

				<Link to="/none" className="text-emerald-500 capitalize">
					Forget password?
				</Link>
			</section>

			<input
				type="submit"
				value={value}
				disabled={isSubmitting}
				className="transition duration-150 ease-in-out py-2 text-base font-semibold rounded-lg text-center border w-full bg-emerald-600 border-emerald-600 text-white hover:bg-emerald-800 hover:border-emerald-800 block xs:py-1 xs:text-sm"
			/>
		</>
	);
}
