import React from "react";
import "../static/css/home.css";
import { Box, Container, Typography } from "@mui/material";
import Typewriter from "typewriter-effect";

function home() {
  return (
    <Box className="home">
      <Container>
        <Container>Image</Container>
        <Container>
          <Container>
            <Typography variant="h5">David Rivera</Typography>
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
          </Container>
          <Container>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Typography>
          </Container>
        </Container>
      </Container>
    </Box>
  );
}

export default home;
