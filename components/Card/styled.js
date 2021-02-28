import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 20rem;
	width: 22rem;
	margin-bottom: 2rem;
	border-radius: 4px;
	border: ${(props) => (props.best ? "2px solid #60d192" : "2px solid #4e34e1")};
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	h3 {
		color: #60d192;
		text-transform: uppercase;
	}
`;

const Thumbnail = styled.section`
	display: flex;
	align-items: center;
	height: 50%;

	img {
		width: 10rem;
	}
`;

const Caption = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	height: 40%;

	h1,
	p {
		width: 100%;
	}

	span {
		font-weight: bold;
		width: 100%;
	}
`;

const Image = styled.img`
	width: 10rem;
`;

const Button = styled.button`
	width: 100%;
	height: 3rem;
	font-size: 1.5rem;
	background: ${(props) => (props.best ? "#60d192" : "#4e34e1")};
`;

export { Wrapper, Button, Image, Thumbnail, Caption };
