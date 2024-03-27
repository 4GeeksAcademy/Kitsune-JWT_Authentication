import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import "../../styles/signup.css";
import "../../styles/login.css";
import "../../styles/private.css";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			<h1>Rigo dice:</h1>
			<p className="display-6">{store.authentication === true ? "Ya estás logeado, puedes acceder a la zona privada" : "No estás logueado, accede a tu cuenta o regístrate"}</p>
			<p>
				<img src={rigoImageUrl} />
			</p>
			{/* <div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p> */}
		</div>
	);
};
