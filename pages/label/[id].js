import Link from "next/link";
import Anchor from "../../components/Anchor";
import Container from "../../components/Container";
import Logo from "../../components/Logo";

const Label = ({ attributes }) => (
	<Container padding="3rem" border>
		<Logo alt="skydropx" src="/logo.svg" />
		<h1>Listo! tu guía se ha generado con éxito.</h1>
		<Anchor href={attributes.label_url} target="_blank" rel="noopenner noreferrer">
			Descargar guía
		</Anchor>
		<Link href="/">
			<Anchor>Volver al inicio</Anchor>
		</Link>
	</Container>
);

export const getServerSideProps = async ({ query }) => {
	const RESPONSE = await fetch(`https://api-demo.skydropx.com/v1/labels/${query.id}`, {
		headers: {
			"Content-Type": "application/json",
			Authorization: `Token token=${process.env.NEXT_PUBLIC_SKYDROPX_TOKEN}`,
		},
	});
	const LABEL = await RESPONSE.json();
	const DATA = LABEL.data || {};

	return {
		props: {
			attributes: DATA.attributes,
		},
	};
};

export default Label;
