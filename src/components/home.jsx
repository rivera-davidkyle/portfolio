import React from "react";
import "../static/css/home.css";
import pfp from "../static/img/pfp.png";
import { Box, Container, Grid, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

const styles = {
  grid:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
  },
  container:{
    padding:"20px"
  }
}

function home() {
  return (
    <Box className="home">
      <Container>
        <Container>
          <img className="pfp" alt="" src={pfp}></img>
        </Container>
        <Grid container sx={styles.grid}>
          <Grid item xs={6}>
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
                      .typeString("Web Developer.")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Tech Enthusiast.")
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore
                consectetur, neque doloribus, cupiditate numquam dignissimos
                laborum fugiat deleniti? Eum quasi quidem quibusdam.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default home;
