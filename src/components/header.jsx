import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { AuthProvider } from "../context/authContext"

const Header = () => {


	const { name } = useContext(AuthProvider);

	console.log(name);


	return (
		<div>
			<header className="bg-slate-500 w-full h-[72px] flex items-center justify-between px-16">
				<div>
					<NavLink to="/" className="text-4xl tracking-wide font-bold">MyMoney</NavLink>
				</div>



				<div className="flex gap-4">
					<NavLink className="text-2xl font-semibold" to="/signup">Sign up</NavLink>
					<NavLink className="text-2xl font-semibold" to="/login">Login</NavLink>
				</div>
			</header>
		</div>
	)
}

export default Header