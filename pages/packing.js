import { useState } from "react";
import { useRouter } from "next/router";
import { shape } from "prop-types";
import { createShipment } from "../utils/skydropx";
import Container from "../components/Container";
import Logo from "../components/Logo";
import Form from "../components/Form";
import Spinner from "../components/Spinner";
import mock from "../mocks/shipment.json";

const Packing = ({ body }) => {
	const [error, setError] = useState("");
	const [loader, setLoader] = useState(false);
	const ROUTER = useRouter();

	const handleClick = () => {
		setLoader(true);
		const WEIGHT = Number(document.querySelector("#weight").value);
		const HEIGHT = Number(document.querySelector("#height").value);
		const WIDTH = Number(document.querySelector("#width").value);
		const LENGTH = Number(document.querySelector("#length").value);

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

			createShipment(BODY)
				.then((response) => response.json())
				.then(({ data }) => {
					ROUTER.push({
						pathname: `/shipment/${[data.id]}`,
					});
				});
		} else {
			setError("Todos los campos son obligatorios");
		}
	};

	return (
		<>
			<Container>
				<Logo alt="skydropx" src="/logo.svg" />
				<Form
					handleClick={handleClick}
					message={error}
					inputs={[
						{ id: "weight", label: "peso", placeholder: "Peso (kg)", type: "number" },
						{ id: "length", label: "largo", placeholder: "Largo (cm)", type: "number" },
						{ id: "width", label: "ancho", placeholder: "Ancho (cm)", type: "number" },
						{
							id: "height",
							label: "altura",
							placeholder: "Altura (cm)",
							type: "number",
						},
					]}
				/>
			</Container>
			{loader && <Spinner />}
		</>
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

Packing.propTypes = {
	body: shape(),
};

Packing.defaultProps = {
	body: {},
};

export default Packing;
