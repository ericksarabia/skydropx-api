import { useRouter } from "next/router";
import { useState } from "react";
import { createLabel, readShipment } from "../../utils/skydropx";
import Alert from "../../components/Alert";
import Container from "../../components/Container";
import List from "../../components/List";
import Logo from "../../components/Logo";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

const Shipment = ({ rates }) => {
	const [feedback, setFeedback] = useState("");
	const [loader, setLoader] = useState(false);
	const ROUTER = useRouter();

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
				<List>
					{rates.map((rate, index) => (
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

export default Shipment;
