import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
	html,
	body {
	padding: 0;
	margin: 0;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	h1 {
		margin: 0;
		font-size: 1.5rem;
	}

	p, span, a, b {
		font-size: 1.4rem;
		margin: 0;
	}

	* {
		box-sizing: border-box;
	}

	ul, li {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	input {
		font-size: 1.2rem;
		color: #04142a;
	}

	button {
		text-transform: uppercase;
		font-weight: bold;
		font-size: 1.5rem;
		background: #4e34e1;
		color: #fff;
		border: 0;
		border-radius: 4px;
		cursor: pointer;
	}
`;

export default GlobalStyles;
