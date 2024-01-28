import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import { mainTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <ThemeProvider theme={mainTheme}>
        <header>
          <Navbar />
        </header>
        <div>
          <Box sx={{ height: "12vh" }} />
          <About />
          <Box sx={{ height: "10vh" }} />
          <Skills />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
