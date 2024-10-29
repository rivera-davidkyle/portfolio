import {
  AppBar,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  Container,
  Button,
  IconButton,
} from "@mui/material";
import { CSSTransition } from "react-transition-group";
import "./App.css";
import Home from "./components/home.jsx";
import Projects from "./components/proj.jsx";
import Info from "./components/info.jsx";
import React, { useEffect, useState } from "react";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

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
    backgroundColor: "#1c1c1c",
  },
  icon: {
    color: "#f702d3",
    transition: "color 0.3s",
    "&:hover": {
      color: "#fff9fe",
    },
  },
};

const gitRepos = "https://api.github.com/users/rivera-davidkyle/repos";

function App() {
  const [active, setActive] = useState("Home");
  const [transition, setTransition] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(gitRepos)
      .then((response) => response.json())
      .then((json) => {
        const filteredData = json
          .filter(
            (item) =>
              item.name !== "my-website" && item.name !== "rivera-davidkyle"
          )
          .map((item) => ({
            name: item.name || "",
            description:
              item.description ||
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            topics: item.topics || [],
            url: item.html_url || "",
          }));

        setData(filteredData);
      })
      .catch((error) => console.error(error));
  }, []);

  const navSite = {
    Home: <Home />,
    Projects: <Projects data={data} />,
    Info: <Info />,
  };

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
        <AppBar elevation={0} sx={appStyles.navbar} position="fixed">
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
        <Container sx={{ marginTop: "auto", padding: "10px" }}>
          <IconButton
            sx={appStyles.icon}
            onClick={() => window.open("https://github.com/rivera-davidkyle")}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            sx={appStyles.icon}
            onClick={() =>
              window.open("https://www.linkedin.com/in/rivera-davidkyle/")
            }
          >
            <LinkedInIcon sx={appStyles.icon} />
          </IconButton>
          <IconButton
            sx={appStyles.icon}
            onClick={() => window.open("mailto:rivera.davidkyle@gmail.com")}
          >
            <EmailIcon sx={appStyles.icon} />
          </IconButton>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
