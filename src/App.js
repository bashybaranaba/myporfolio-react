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
import { Helmet } from "react-helmet";

const SpaceBox = styled(Box)({
  height: "20vh",
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={mainTheme}>
        <Helmet>
          <title>Baranaba Mugabane| React Portfolio</title>
          <meta property="title" content="Baranaba Mugabane| React Portfolio" />
          <meta
            property="description"
            content="Baranaba Mugabane| React Portfolio"
          />
          <meta
            property="url"
            content="https://bashybaranaba.github.io/myporfolio-react"
          />
        </Helmet>
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
