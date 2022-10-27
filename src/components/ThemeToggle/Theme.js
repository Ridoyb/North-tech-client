import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#fff",
  fontColor: "#000",
};

export const darkTheme = {
  body: "#000",
  fontColor: "#FFFFFF",
  h1: "#FFFFFF",
  h2: "#FFFFFF",
  h3: "#FFFFFF",
  h4: "#FFFFFF",
  h5: "#FFFFFF",
  h6: "#FFFFFF",
  p: "#FFFFFF",
  
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
	fontColor {
		font-color: ${(props) => props.theme.fontColor};
	}
`;