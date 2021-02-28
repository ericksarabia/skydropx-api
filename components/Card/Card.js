import { Children } from "react";
import { Button, Wrapper, Image, Caption, Thumbnail } from "./styled";

const Card = ({ rate }) => {
	const PROVIDER = rate.provider.toLowerCase();
	console.log(rate);

	return (
		<Wrapper>
			<Thumbnail>
				<Image src={`/${PROVIDER}.png` || `/${PROVIDER}.svg`} />
			</Thumbnail>
			<Caption>
				<h1>{rate.service_level_name}</h1>
				<p>
					Entrega estimada: <span>{rate.days} dias</span>
				</p>
				<Button>
					{rate.currency_local} {rate.total_pricing}
				</Button>
			</Caption>
		</Wrapper>
	);
};

export default Card;
