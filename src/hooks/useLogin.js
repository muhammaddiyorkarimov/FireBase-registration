import { useState } from "react";
import { projectAuth } from "../firebase/config";

export const useLogin = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);

	const login = async (email, password) => {
		try {
			setError(null)
			setIsPending(true);
			const req = await projectAuth.signInWithEmailAndPassword(email, password)
			console.log(req);
			setIsPending(false);
		} catch (err) {
			setError(err.message);
			setIsPending(false);
		}
	}

	return {isPending, error, login}
}