import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 1100px;
	background: grey;
	border-radius: 8px;
	border: 2px solid whitesmoke;
	padding: 20px;
	box-shadow: 0px 5px 10px white;
	text-align: center;

	p {
		font-size: 1rem;
	}
`;

type ButtonWrapperProps = {
	correct: boolean;
	userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;

	:hover {
		opacity: 0.8;
	}

	button {
		cursor: pointer;
		user-select: none;
		font-size: 0.8rem;
		width: 100%;
		margin: 5px 0;
		background: ${({ correct, userClicked }) =>
			correct
				? "linear-gradient(90deg, #56ffa4, #59bc86)"
				: !correct && userClicked
				? "linear-gradient(90deg, #ff5656, #c16868)"
				: "linear-gradient(90deg, #99aaaa, #6eafb4)"};
		border: 3px solid black;
		color: whitesmoke;
	}
`;
