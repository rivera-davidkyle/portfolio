import React from "react";
import "../static/css/home.css";
import pfp from "../static/img/pfp.png";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import Typewriter from "typewriter-effect";

const styles = {
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: "20px",
  },
};

function home() {
  return (
    <Box className="home">
      <Container>
        <Container>
          <img className="pfp" alt="" src={pfp}></img>
        </Container>
        <Grid container sx={styles.grid}>
          <Grid item xs={12} md={6}>
            <Container sx={styles.container}>
              <Typography variant="h4">David Rivera</Typography>
              <Typography variant="h5">
                <Typewriter
                  options={{
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Software Engineer.")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Product Focused.")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Lifelong Learner.")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </Typography>
            </Container>
            <Container sx={styles.container}>
              <Typography variant="body1" align="center">
                Based in District of Columbia, developing for both embedded and
                full-stack software for{" "}
                <Link
                  href="https://www.hughes.com/"
                  target="_blank"
                  rel="noopener"
                  sx={{ color: "#f702d3", textDecoration: "none" }}
                >
                  next-gen satellite broadband.
                </Link>{" "}
                Driven to transform ideas into action.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default home;
