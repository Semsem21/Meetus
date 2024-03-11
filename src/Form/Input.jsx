import { ErrorMessage } from "@hookform/error-message";
import { useFormContext } from "react-hook-form";

export default function Input({ label, id, type, name, placeholder, icon }) {
	const {
		register,
		formState: { errors },
	} = useFormContext();

	return (
		<main className="flex flex-col gap-y-1 mb-3 mt-2">
			<label htmlFor={id} className="xs:text-sm ml-2">
				{label}
			</label>

			<section className="relative">
				<input
					type={type}
					id={id}
					{...register(`${name}`)}
					placeholder={placeholder}
					className="w-full border border-gray-300 outline-cyan-400 py-2 rounded-lg placeholder:text-center pl-10 placeholder:text-sm xs:placeholder:text-xs"
				/>
				<span className="absolute top-1/2 -translate-y-1/2 left-1 ps-3 text-gray-400">
					{icon}
				</span>

				<summary className="absolute top-[-19px] left-1/2 -translate-x-1/2 text-red-700 list-none select-none capitalize">
					<ErrorMessage errors={errors} name={name} />
				</summary>
			</section>
		</main>
	);
}
