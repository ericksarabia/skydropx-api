import Container from "../../components/Container";
import Logo from "../../components/Logo";
import Card from "../../components/Card";

const Shipment = ({ rates }) => (
	<Container>
		<Logo alt="skydropx" src="/logo.svg" />
		<ul>
			{rates.map((rate) => (
				<li>
					<Card rate={rate} />
				</li>
			))}
		</ul>
	</Container>
);

export const getServerSideProps = async ({ query }) => {
	const RESPONSE = await fetch(`https://api-demo.skydropx.com/v1/shipments/${query.id}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Token token=${process.env.NEXT_PUBLIC_SKYDROPX_TOKEN}`,
		},
	});
	const SHIPMENT = await RESPONSE.json();
	let rates = SHIPMENT.included.filter((item) => item.type === "rates");
	rates = rates.map(({ attributes }) => ({
		...attributes,
		average: attributes.days * Number(attributes.total_pricing),
		best: false,
	}));
	rates.sort((a, b) => (a.average > b.average ? 1 : -1));
	rates[0].best = true;

	return {
		props: {
			rates,
		},
	};
};

export default Shipment;
