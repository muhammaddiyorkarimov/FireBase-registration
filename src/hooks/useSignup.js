import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useSignup = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	const signup = async (email, password, name) => {
		try {
			setError(null)
			setIsPending(true);
			const req = await projectAuth.createUserWithEmailAndPassword(email, password)
			await req.user.updateProfile({displayName: name});
			console.log(req);
			setIsPending(false);
		} catch (err) {
			setError(err.message);
			setIsPending(false);
		}
	}

	return {
		isPending, error, signup
	}
}