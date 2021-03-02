import Link from "next/link";
import { string, shape } from "prop-types";
import { readLabel } from "../../utils/skydropx";
import Anchor from "../../components/Anchor";
import Container from "../../components/Container";
import Logo from "../../components/Logo";

const Label = ({ attributes }) => (
	<Container padding="3rem" border>
		<Logo alt="skydropx" src="/logo.svg" />
		<h1>Listo! tu guía se ha generado con éxito.</h1>
		{attributes.label_url && (
			<Anchor href={attributes.label_url} target="_blank" rel="noopenner noreferrer">
				Descargar guía
			</Anchor>
		)}
		<Link href="/">
			<Anchor>Volver al inicio</Anchor>
		</Link>
	</Container>
);

export const getServerSideProps = async ({ query }) => {
	const RESPONSE = await readLabel(query.id);
	const LABEL = await RESPONSE.json();
	const DATA = LABEL.data || {};

	return {
		props: {
			attributes: DATA.attributes,
		},
	};
};

Label.propTypes = {
	attributes: shape({
		label_url: string,
	}),
};

Label.defaultProps = {
	attributes: {
		label_url: "",
	},
};

export default Label;
