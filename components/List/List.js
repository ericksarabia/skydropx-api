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
		width: 22rem;
	}

	@media (max-width: 768px) {
		padding: 0;
		width: 100%;
		justify-content: center;

		> li {
			margin: 0;
			width: 86%;
		}
	}
`;

export default List;
