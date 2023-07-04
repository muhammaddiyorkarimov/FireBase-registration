import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {

	const [email, setEmail] = useState("");
	const [password, setPassowrd] = useState("");

	const { isPending, error, login } = useLogin();

	const handleLogin = (e) => {
		e.preventDefault();
		login(email, password);
	}

	return (
		<div className="flex items-center justify-center mt-36">
			<form
				onSubmit={handleLogin}
				className="w-full max-w-[600px]">
				<div class="mb-6">
					<label for="email" class="text-xl">Your email</label>
					<input
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="karimov@gmail.com" />
				</div>
				<div class="mb-6">
					<label for="password" class="text-xl">Your password</label>
					<input
						onChange={(e) => {
							setPassowrd(e.target.value);
						}}
						type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" />
				</div>
				<div class="flex items-center mb-6">
					<div class="flex items-center h-5">
						<input id="remember" type="checkbox" class="w-4 h-4" />
					</div>
					<label for="remember" class="ml-2 text-xl font-medium text-gray-900">Remember me</label>
				</div>
				{ !isPending && 
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center">Login</button>}
				{isPending &&
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center">Sending...</button>}
				{error && <p>{error}</p>}
			</form>

		</div>
	)
}

export default Login