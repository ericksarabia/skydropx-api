import { useRouter } from "next/router";
import Container from "../components/Container";
import Form from "../components/Form";

const Home = () => {
	const ROUTER = useRouter();

	const createShipment = () => {
		const ORIGIN = document.querySelector("#origin");
		const DESTINATION = document.querySelector("#destination");

		ROUTER.push({
			pathname: "/packing",
			query: { origin: ORIGIN, destination: DESTINATION },
		});
	};

	return (
		<Container>
			<Form
				handleClick={createShipment}
				inputs={[
					{ id: "origin", label: "origen", placeholder: "Código postal" },
					{ id: "destination", label: "destino", placeholder: "Código postal" },
				]}
			/>
		</Container>
	);
};

export default Home;
