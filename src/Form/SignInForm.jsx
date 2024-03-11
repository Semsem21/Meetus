import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "./Input";
import { Mail, Security } from "../assets/Icons";
import Submit from "./Submit";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

export default function SignInForm({ className }) {
	const signInSchema = z.object({
		email: z.string().email({ message: "Invalid email address" }),
		password: z.string().min(6, { message: "At Least 6 Chars" }),
	});

	const methods = useForm({
		mode: "onChange",
		resolver: zodResolver(signInSchema),
	});

	const { handleSubmit } = methods;

	const onSubmit = async ({ email, password }) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredential.user;
			localStorage.setItem("token", user.accessToken);
			localStorage.setItem("user", JSON.stringify(user));
			navigate("/manage");
		} catch {
			alert("Please, Enter Correct Email and Password");
		}
	};

	const navigate = useNavigate();

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`${className} my-5`}>
				<Input
					label="Mail :"
					id="email"
					type="email"
					name="email"
					placeholder="Enter Your E.Mail"
					icon={<Mail className="w-5" />}
				/>

				<Input
					label="Password :"
					id="password"
					type="password"
					name="password"
					placeholder="Enter Your Password"
					icon={<Security className="w-5" />}
				/>

				<Submit value="Sign In" />
			</form>
		</FormProvider>
	);
}
