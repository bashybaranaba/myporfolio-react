import { createTheme } from "@mui/material/styles";

const chakraPetch = {
  style: {
    fontFamily: "Chakra Petch",
    fontStyle: "normal",
    fontWeight: "normal",
    src: `
        local('Chakra Petch'),
        url('./fonts/ChakraPetch-Regular.ttf')
        `,
  },
};

export const mainTheme = createTheme({
  palette: {
    primary: {
      main: "#0097a7",
    },
    secondary: {
      main: "#fff",
      contrastText: "#0097a7",
    },
    error: {
      main: "#ff1744",
    },
  },
  typography: {
    fontFamily: chakraPetch.style.fontFamily,
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
