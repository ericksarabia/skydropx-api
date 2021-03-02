import { string, func, shape, arrayOf } from "prop-types";
import Alert from "../Alert";
import { Wrapper, Input, Button, Label, Group } from "./styled";

const Form = ({ handleClick, inputs, message }) => (
	<Wrapper>
		{inputs.map((input) => (
			<Group key={input.label}>
				{input.label && <Label>{input.label}</Label>}
				<Input type={input.type} placeholder={input.placeholder} id={input.id} />
			</Group>
		))}
		{message && <Alert>ERROR: Todos los campos son obligatorios</Alert>}
		<Button onClick={handleClick}>Aceptar</Button>
	</Wrapper>
);

Form.propTypes = {
	handleClick: func,
	inputs: arrayOf(shape()),
	message: string,
};

Form.defaultProps = {
	handleClick: null,
	inputs: [],
	message: "",
};

export default Form;
