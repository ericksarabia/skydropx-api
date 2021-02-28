import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	height: 20rem;
	width: 22rem;
	margin: 2rem;
	border-radius: 4px;
	border: 2px solid #4e34e1;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
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
`;

export { Wrapper, Button, Image, Thumbnail, Caption };
