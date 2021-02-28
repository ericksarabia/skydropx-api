import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
`;

const Image = styled.img`
	width: 15rem;
	margin: 1rem;
`;

const Input = styled.input`
	width: 18rem;
	height: 3.5rem;
	border: 2px solid #4e34e1;
	border-radius: 4px;
	text-align: center;
	margin-bottom: 1rem;
	&:focus {
		outline: none;
	}
`;

const Button = styled.button`
	background: #4e34e1;
	width: 18rem;
	height: 3rem;
	border: 1px solid #4e34e1;
	color: #fff;
	border-radius: 4px;
	margin-top: 1rem;
`;

const Label = styled.label`
	color: #04142a;
	width: 18rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
	text-transform: uppercase;
	margin-top: 1rem;
`;

const Group = styled.div`
	display: flex;
	flex-direction: column;
`;

export { Wrapper, Image, Input, Button, Label, Group };
