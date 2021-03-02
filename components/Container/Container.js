import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	padding: ${(props) => props.padding || "0"};
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: left;
	border: ${(props) => (props.border ? "5px solid #4e34e1" : "0")};

	h1,
	a {
		text-align: center;
	}
`;

export default Container;
