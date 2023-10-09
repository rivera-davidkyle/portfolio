import React from "react";
import "../static/css/home.css";
import pfp from "../static/img/pfp.png";
import { Box, Container, Grid, Typography } from "@mui/material";
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
                      .typeString("Software Developer.")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Lifelong Learner.")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Product Focused.")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                />
              </Typography>
            </Container>
            <Container sx={styles.container}>
              <Typography variant="body1" align="center">
                I think that achieving effective production requires the ability
                to constantly adapt. With a drive for innovation, I pursue
                challenging opportunities to contribute and expand my skillset.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default home;
