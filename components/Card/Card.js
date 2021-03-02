import { string, bool, func, shape, number } from "prop-types";
import { Button, Wrapper, Image, Caption, Thumbnail } from "./styled";

const Card = ({ rate, best, handleClick }) => {
	const PROVIDER = rate.provider.toLowerCase();

	return (
		<Wrapper best={best}>
			<Thumbnail>
				<Image src={`/${PROVIDER}.png` || `/${PROVIDER}.svg`} />
			</Thumbnail>
			<Caption>
				<h1>{rate.service_level_name}</h1>
				<p>
					Entrega estimada: <span>{rate.days} días</span>
				</p>
				<Button onClick={() => handleClick(rate.id)} best={best}>
					{rate.currency_local} {rate.total_pricing}
				</Button>
			</Caption>
			{best && <h3>mejor opción</h3>}
		</Wrapper>
	);
};

Card.propTypes = {
	rate: shape({
		provider: string,
		service_level_name: string,
		days: number,
		id: string,
		currency_local: string,
		total_pricing: string,
	}),
	best: bool,
	handleClick: func,
};

Card.defaultProps = {
	rate: {
		provider: "",
		service_level_name: "",
		days: 0,
		id: "",
		currency_local: "",
		total_pricing: "",
	},
	best: false,
	handleClick: null,
};

export default Card;
