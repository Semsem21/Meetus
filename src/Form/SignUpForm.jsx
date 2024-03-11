import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import Input from "./Input";
import Submit from "./Submit";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";

export default function SignUpForm({ className }) {
	const signUpSchema = z
		.object({
			firstName: z.string().min(1, { message: "Can't Be Empty" }),
			lastName: z.string().min(1, { message: "Can't Be Empty" }),
			email: z.string().email({ message: "Invalid E.Mail Address" }),
			password: z.string().min(6, { message: "At Least 6 Chars" }),
			confPass: z.string().min(6, { message: "Password Not Match" }),
		})
		.refine((data) => data.password === data.confPass, {
			message: "Wronge Password",
			path: ["confPass"],
		});

	const methods = useForm({
		mode: "onChange",
		resolver: zodResolver(signUpSchema),
	});

	const { handleSubmit } = methods;

	const onSubmit = async ({ email, password }) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredential.user;
			localStorage.setItem("token", user.accessToken);
			localStorage.setItem("user", JSON.stringify(user));
			navigate("/manage");
		} catch {
			alert("This Email is Already Exist, Please Sign In WIth");
		}
	};

	const navigate = useNavigate();

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className={`${className} my-5`}>
				<Input
					label="First Name :"
					id="firstName"
					type="text"
					name="firstName"
					placeholder="Enter Your Name"
					icon=""
				/>

				<Input
					label="Last Name :"
					id="lastName"
					type="text"
					name="lastName"
					placeholder="Enter Your Last Name"
					icon=""
				/>

				<Input
					label="Mail :"
					id="email"
					type="email"
					name="email"
					placeholder="Enter New E.Mail"
					icon=""
				/>

				<Input
					label="Password :"
					id="password"
					type="password"
					name="password"
					placeholder="Enter New Password"
					icon=""
				/>

				<Input
					label="Password :"
					id="confPassword"
					type="password"
					name="confPass"
					placeholder="Re-Enter Your Password"
					icon=""
				/>

				<Submit value="Sign Up" />
			</form>
		</FormProvider>
	);
}
