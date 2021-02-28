import { Button, Wrapper, Image, Caption, Thumbnail } from "./styled";

const Card = ({ rate }) => {
	const PROVIDER = rate.provider.toLowerCase();

	return (
		<Wrapper best={rate.best}>
			<Thumbnail>
				<Image src={`/${PROVIDER}.png` || `/${PROVIDER}.svg`} />
			</Thumbnail>
			<Caption>
				<h1>{rate.service_level_name}</h1>
				<p>
					Entrega estimada: <span>{rate.days} dias</span>
				</p>
				<Button best={rate.best}>
					{rate.currency_local} {rate.total_pricing}
				</Button>
			</Caption>
			{rate.best && <h3>mejor opción</h3>}
		</Wrapper>
	);
};

export default Card;
