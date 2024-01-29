import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Jokes from "./components/Jokes";
import { mainTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { BrowserRouter as Router } from "react-router-dom";

const SpaceBox = styled(Box)({
  height: "20vh",
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={mainTheme}>
        <header>
          <Navbar />
        </header>
        <div>
          <SpaceBox />
          <About />
          <SpaceBox />
          <Skills />
          <SpaceBox />
          <Projects />
          <SpaceBox />
          <Jokes />
          <SpaceBox />
          <Contacts />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
