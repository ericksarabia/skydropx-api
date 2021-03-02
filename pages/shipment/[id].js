import { useRouter } from "next/router";
import { useState } from "react";
import { string, shape, arrayOf } from "prop-types";
import { createLabel, readShipment } from "../../utils/skydropx";
import Tabs from "../../components/Tabs";
import Alert from "../../components/Alert";
import Container from "../../components/Container";
import List from "../../components/List";
import Logo from "../../components/Logo";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

const Shipment = ({ rates }) => {
	const [feedback, setFeedback] = useState("");
	const [loader, setLoader] = useState(false);
	const [items, setItems] = useState(rates);
	const [filter, setFilter] = useState("");
	const ROUTER = useRouter();

	const applyFilter = (value, id) => {
		setFilter(id);
		const RATES = items.sort((a, b) => (a[value] > b[value] ? 1 : -1));
		setItems(id === 2 ? RATES.reverse() : RATES);
	};

	const handleClick = (id) => {
		setLoader(true);
		setFeedback("");
		createLabel(id)
			.then((response) => response.json())
			.then(({ data, message }) => {
				if (data) {
					setLoader(false);
					const STATUS = data?.attributes?.status ?? "";

					if (STATUS === "ERROR") {
						setFeedback(data.attributes.error_message[0].message);
					} else {
						ROUTER.push(`/label/${[data.id]}`);
					}
				} else {
					setLoader(false);
					setFeedback(message);
				}
			})
			.catch((error) => {
				setLoader(false);
				setFeedback(error);
			});
	};

	return (
		<>
			<Container>
				<Logo alt="skydropx" src="/logo.svg" />
				<Tabs
					handleClick={applyFilter}
					items={{
						"Más relevante": "average",
						"Más rápido": "days",
						"Menor Precio": "total_pricing",
						"Mayor Precio": "total_pricing",
					}}
				/>
				<List keys={filter}>
					{items.map((rate, index) => (
						<li key={rate.id}>
							<Card handleClick={handleClick} rate={rate} best={index === 0} />
						</li>
					))}
				</List>
				{feedback && (
					<Alert>ERROR: {feedback} Intenta eligiendo otro servicio de la lista.</Alert>
				)}
			</Container>
			{loader && <Spinner />}
		</>
	);
};

export const getServerSideProps = async ({ query }) => {
	const RESPONSE = await readShipment(query.id);
	const SHIPMENT = await RESPONSE.json();
	let rates = SHIPMENT.included.filter((item) => item.type === "rates");
	rates = rates.map(({ id, attributes }) => ({
		...attributes,
		id,
		average: attributes.days * Number(attributes.total_pricing),
	}));
	rates.sort((a, b) => (a.average > b.average ? 1 : -1));

	return {
		props: {
			rates,
		},
	};
};

Shipment.propTypes = {
	rates: arrayOf(
		shape({
			id: string,
		}),
	),
};

Shipment.defaultProps = {
	rates: [],
};

export default Shipment;
