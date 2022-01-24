import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/randompubbg.jpg";

export const GlobalStyle = createGlobalStyle`

html {
    height: 100%;
}

body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}

* {
    box-sizing: border-box;
    font-family: 'Oswald', sans-serif;
}

`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	> p {
		font-size: 2rem;
		color: whitesmoke;
	}

	.score {
		color: whitesmoke;
		font-size: 2.5rem;
		margin: 0;
	}

	h1 {
		background-image: linear-gradient(180deg, #white, #grey);
		background-size: 100%;
		background-clip: text;
		/* --webkit-background-clip: text;
		--webkit-text-fill-color: transparent;
		--moz-background-clip: text;
		--moz-text-fill-color: transparent; */
		color: whitesmoke;
		filter: drop-shadow(2px 2px brown);
		font-size: 65px;
		font-weight: 700;
		text-align: center;
		margin: 20px;
	}

	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, whitesmoke, white);
		border: 1px solid black;
		box-shadow: 0px 5px 10px brown;
		width: 110px;
		height: 50px;
		font-size: 16px;
		font-weight: 700;
		margin-top: 15px;
	}

	.start {
		max-width: 200px;
	}
`;
