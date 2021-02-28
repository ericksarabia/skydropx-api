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
	margin: 2rem;
`;

const Input = styled.input`
	width: 20rem;
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
	width: 20rem;
	height: 3rem;
	border: 1px solid #4e34e1;
	color: #fff;
	border-radius: 4px;
	margin-top: 1rem;
	&:focus {
		outline: none;
	}
`;

const Label = styled.label`
	color: #04142a;
	width: 20rem;
	font-weight: bold;
	margin-bottom: 0.5rem;
	text-transform: uppercase;
`;

const Group = styled.div`
	display: flex;
	flex-direction: column;
`;

const Message = styled.span`
	color: #e56475;
	font-weight: bold;
	margin-top: 1rem;
	text-transform: uppercase;
	font-size: 1rem;
	font-size: 0.9rem;
`;

export { Wrapper, Image, Input, Button, Label, Group, Message };
