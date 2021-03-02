import styled from "styled-components";

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	background: rgba(255, 255, 255, 0.9);
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Loader = styled.div`
	border: 4px solid rgba(0, 0, 0, 0.1);
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border-left-color: #4e34e1;
	animation: spin 1s ease infinite;

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
`;

export { Wrapper, Loader };
