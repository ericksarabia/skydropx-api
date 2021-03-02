import styled from "styled-components";

const List = styled.ul`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;

	> li {
		margin: 0.2rem 1rem;
	}

	@media (max-width: 768px) {
		padding: 0;
		width: 100%;
		justify-content: center;
	}
`;

export default List;
