import { useState } from "react"
import { Link } from "react-router-dom"
import { useSignup } from "../hooks/useSignup";

const Signup = () => {


	const [email, setEmail] = useState("");
	const [password, setPassowrd] = useState("");
	const [name, setName] = useState("");

	const { isPending, error, signup } = useSignup()

	const handleSubmit = (e) => {
		e.preventDefault();
		signup(email, password, name);
	}

	return (
		<div className="flex items-center justify-center mt-36">
			<form
				onSubmit={handleSubmit}
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
				<div class="mb-6">
					<label for="email" class="text-xl">Display Name</label>
					<input
						onChange={(e) => {
							setName(e.target.value);
						}}
						type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Karimov Muhammaddiyor" />
				</div>
				<div class="flex items-center mb-6">
					<div class="flex items-center h-5">
						<input id="remember" type="checkbox" class="w-4 h-4" />
					</div>
					<label for="remember" class="ml-2 text-xl font-medium text-gray-900">Remember me</label>
					<Link class="mx-[50px] inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">Forgot Password?</Link>
				</div>
				{ !isPending && 
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>}
				{isPending &&
					<button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center">Sending...</button>}
				{error && <p>{error}</p>}
			</form>

		</div>
	)
}

export default Signup