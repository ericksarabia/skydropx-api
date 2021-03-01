import styled from "styled-components";

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: auto;
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
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
	text-transform: uppercase;
`;

const Group = styled.div`
	display: flex;
	flex-direction: column;
`;

export { Wrapper, Input, Button, Label, Group };
