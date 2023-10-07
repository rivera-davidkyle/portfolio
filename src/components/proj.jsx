import React, { useEffect, useState } from "react";
import "../static/css/proj.css";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Chip,
  Container,
} from "@mui/material";

const styles = {
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    borderBottom: "1px solid #f702d3",
    padding: "10px",
    fontSize: "2",
    color: "#fff9fe",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "start",
  },
  container: {
    display: "flex",
    justifyContent: "start",
    alignItems: "start",
    padding: "0",
    margin: "0",
  },
};
const gitRepos = "https://api.github.com/users/rivera-davidkyle/repos";
const chipColor = {
  html: "#E34C26",
  css: "#264de4",
  javascript: "#ba9730",
  python: "#306998",
  django: "#092E20",
  aws: "#FF9900",
  cpp: "#00599C",
  assembly: "#6E4C13",
  react: "#2e6878",
  drf: "#008899",
  java: "#007396",
  mui: "#0081CB",
  numpy: "#013243",
  pandas: "#150458",
  scikitlearn: "#F7931E",
  bootstrap: "#7952B3",
};
function RenderProjects() {
  const [data, setData] = useState(null);
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

  function formatName(name) {
    return name
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  return (
    <List component="div">
      {data &&
        data.map((item, index) => (
          <ListItemButton sx={styles.listItem} key={index} href={item.url}>
            <ListItemText
              primary={
                <Typography variant="h5">{formatName(item.name)}</Typography>
              }
              secondary={
                <Typography variant="body2">{item.description}</Typography>
              }
            />
            <Container disableGutters sx={styles.container}>
              {item.topics &&
                item.topics.map((topic, topicIndex) => (
                  <Chip
                    key={topicIndex}
                    label={topic}
                    sx={{
                      backgroundColor: chipColor[topic] || "transparent",
                      color: "#fff9fe",
                      margin: "3px",
                    }}
                  />
                ))}
            </Container>
          </ListItemButton>
        ))}
    </List>
  );
}
function proj() {
  return (
    <Box className="proj">
      <Grid container sx={styles.grid}>
        <Grid item xs={12}>
          <RenderProjects />
        </Grid>
      </Grid>
    </Box>
  );
}

export default proj;
