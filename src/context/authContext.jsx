import { createContext, useReducer } from "react";
import { projectAuth } from "../firebase/config";




const AuthProvider = createContext();

const AuthContext = ({ children }) => {

	const changeContext = (state, action) => {
		switch (action.type) {
			case "LOGIN":
				return {...state, user: action.payload}
			case "LOGOUT":
				return { ...state, user: null }
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(changeContext, {
		name: "Muhammaddiyor",
		// isReady: false,
	})

	// useEffect(() => {
	// 	const ready = projectAuth.onAuthStateChanged((user) => {
	// 		dispatch ({
	// 			type: "READY",
	// 			payload: user,
	// 		})
	// 		ready()
	// 	})
	// }, [])


	return (
		<AuthProvider.Provider value={{ ...state }}>
			{children}
		</AuthProvider.Provider>
	)
}

export { AuthProvider, AuthContext }

