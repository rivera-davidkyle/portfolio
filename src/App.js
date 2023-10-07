import {
  AppBar,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  Button,
} from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Home from "./components/home.jsx";
import Projects from "./components/proj.jsx";
import Info from "./components/info.jsx";
import React, { useState } from "react";

const appTheme = createTheme({
  typography: {
    fontFamily: ["Lato", "Thin"].join(","),
    fontSize: 20,
  },
});

const childTheme = createTheme({
  typography: {
    body1: {
      color: "#fff9fe",
    },
    h4: {
      color: "#fff9fe",
    },
    fontFamily: ["Lato", "Thin"].join(","),
    fontSize: 20,
  },
});

const appStyles = {
  button: {
    padding: "20px",
    color: "#f702d3",
    position: "relative",
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height: "2px",
      background: "#f702d3",
      transition: "width 0.3s ease-in-out",
    },
    "&:hover": {
      backgroundColor: "transparent",
      "&::before": {
        width: "100%", // Expand the border to 100% on hover
      },
    },
  },
  navbar: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#f702d3",
  },
};
const navSite = {
  Home: <Home />,
  Projects: <Projects />,
  Info: <Info />,
};
function App() {
  const [active, setActive] = useState("Home");
  const [transition, setTransition] = useState(true);
  const handler = (e, view) => {
    if (view !== active) {
      setTransition(false);
      setTimeout(() => {
        setTransition(true);
        setActive(view);
      }, 200);
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <AppBar
          elevation={0}
          sx={appStyles.navbar}
          position="static"
          color="transparent"
        >
          <Toolbar sx={{ borderBottom: "2px solid #f702d3" }}>
            <Button
              variant="text"
              onClick={() => handler(null, "Home")}
              sx={appStyles.button}
            >
              <Typography>Home</Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => handler(null, "Projects")}
              sx={appStyles.button}
            >
              <Typography>Projects</Typography>
            </Button>
            <Button
              variant="text"
              onClick={() => handler(null, "Info")}
              sx={appStyles.button}
            >
              <Typography>Info</Typography>
            </Button>
          </Toolbar>
        </AppBar>
        <CSSTransition
          in={transition}
          timeout={850}
          classNames={{
            enterActive: "animate__animated animate__fadeIn",
            exitActive: "animate__animated animate__fadeOut",
          }}
          unmountOnExit
        >
          <ThemeProvider theme={childTheme}>{navSite[active]}</ThemeProvider>
        </CSSTransition>
      </ThemeProvider>
    </div>
  );
}

export default App;
