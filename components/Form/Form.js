import { Wrapper, Image, Input, Button, Label, Group } from "./styled";

const Form = ({ handleClick, inputs }) => {
	return (
		<Wrapper>
			<Image alt="skydropx" src="/logo.svg" />
			{inputs.map((input) => (
				<Group>
					{input.label && <Label>{input.label}</Label>}
					<Input type="text" placeholder={input.placeholder} id={input.origin} />
				</Group>
			))}
			<Button onClick={handleClick}>Aceptar</Button>
		</Wrapper>
	);
};

export default Form;
