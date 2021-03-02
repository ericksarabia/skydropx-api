import { shape, func } from "prop-types";
import { useEffect, useState } from "react";
import { Wrapper, Item } from "./styled";

const Tabs = ({ items, handleClick }) => {
	const [active, setActive] = useState(0);

	useEffect(() => {
		handleClick(Object.values(items)[active], active);
	}, [active]);

	return (
		<Wrapper>
			{Object.keys(items).map((item, index) => (
				<Item key={item} onClick={() => setActive(index)} active={active === index}>
					{item}
				</Item>
			))}
		</Wrapper>
	);
};

Tabs.propTypes = {
	handleClick: func,
	items: shape(),
};

Tabs.defaultProps = {
	handleClick: null,
	items: {},
};

export default Tabs;
