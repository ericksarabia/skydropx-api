import { Wrapper, Image, Input, Button, Label, Group, Message } from "./styled";

const Form = ({ handleClick, inputs, message }) => (
	<Wrapper>
		<Image alt="skydropx" src="/logo.svg" />
		{inputs.map((input) => (
			<Group>
				{input.label && <Label>{input.label}</Label>}
				<Input type={input.type} placeholder={input.placeholder} id={input.id} />
			</Group>
		))}
		{message && <Message>Todos los campos son obligatorios</Message>}
		<Button onClick={handleClick}>Aceptar</Button>
	</Wrapper>
);

export default Form;
