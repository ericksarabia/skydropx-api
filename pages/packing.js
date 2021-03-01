import { useState } from "react";
import { useRouter } from "next/router";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form";
import mock from "../mocks/shipment.json";

const Packing = ({ body }) => {
	const ROUTER = useRouter();
	const [error, setError] = useState("");

	const createShipment = () => {
		const WEIGHT = document.querySelector("#weight").value;
		const HEIGHT = document.querySelector("#height").value;
		const WIDTH = document.querySelector("#width").value;
		const LENGTH = document.querySelector("#length").value;

		if (WEIGHT && HEIGHT && WIDTH && LENGTH) {
			const BODY = Object.assign(body, {
				parcels: [
					{
						...mock.parcels[0],
						weight: WEIGHT,
						height: HEIGHT,
						width: WIDTH,
						length: LENGTH,
					},
				],
			});

			fetch("https://api-demo.skydropx.com/v1/shipments", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Token token=${process.env.NEXT_PUBLIC_SKYDROPX_TOKEN}`,
				},
				body: JSON.stringify(BODY),
			})
				.then((response) => response.json())
				.then(({ data }) => {
					ROUTER.push({
						pathname: "/shipment/[id]",
						query: { id: data.id },
					});
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
					{ id: "weight", label: "peso", placeholder: "Peso (kg)", type: "number" },
					{ id: "length", label: "largo", placeholder: "Largo (cm)", type: "number" },
					{ id: "width", label: "ancho", placeholder: "Ancho (cm)", type: "number" },
					{ id: "height", label: "altura", placeholder: "Altura (cm)", type: "number" },
				]}
			/>
		</Container>
	);
};

export const getServerSideProps = async ({ query }) => {
	const BODY = Object.assign(mock, {
		address_from: { ...mock.address_from, zip: query.origin },
		address_to: { ...mock.address_to, zip: query.destination },
	});

	return {
		props: {
			body: BODY,
		},
	};
};

export default Packing;
