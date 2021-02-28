import { useState } from "react";
import { useRouter } from "next/router";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form";

const Home = () => {
	const ROUTER = useRouter();
	const [error, setError] = useState("");

	const createShipment = () => {
		const ORIGIN = document.querySelector("#origin").value;
		const DESTINATION = document.querySelector("#destination").value;

		if (ORIGIN && DESTINATION) {
			ROUTER.push({
				pathname: "/packing",
				query: { origin: ORIGIN, destination: DESTINATION },
			});
		} else {
			setError("Todos los campos son obligatorios");
		}
	};

	return (
		<Container>
			<Logo alt="skydropx" src="/logo.svg" />
			<Form
				handleClick={createShipment}
				message={error}
				inputs={[
					{ id: "origin", label: "origen", placeholder: "Código postal", type: "text" },
					{
						id: "destination",
						label: "destino",
						placeholder: "Código postal",
						type: "text",
					},
				]}
			/>
		</Container>
	);
};

export default Home;
