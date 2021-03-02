import styled from "styled-components";

const Wrapper = styled.ul`
	display: flex;
	scroll-snap-type: x mandatory;
	overflow-x: scroll;
	width: 87%;
	padding: 0.5rem;

	@media (min-width: 768px) {
		width: 87%;
		justify-content: center;

		::-webkit-scrollbar {
			display: none;
		}
	}
`;

const Item = styled.li`
	background: ${(props) => (props.active ? "#4e34e1" : "#fff")};
	color: ${(props) => (props.active ? "#fff" : "#4e34e1")};
	border: 2px solid #4e34e1;
	padding: 0.5rem 0.8rem;
	margin: 0 0.5rem 1rem 0;
	border-radius: 2rem;
	scroll-snap-align: start;
	white-space: nowrap;
	cursor: pointer;
`;

export { Wrapper, Item };
