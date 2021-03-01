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
					Entrega estimada: <span>{rate.days} dias</span>
				</p>
				<Button onClick={() => handleClick(rate.id)} best={best}>
					{rate.currency_local} {rate.total_pricing}
				</Button>
			</Caption>
			{best && <h3>mejor opción</h3>}
		</Wrapper>
	);
};

export default Card;
