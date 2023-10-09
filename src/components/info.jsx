import React from "react";
import "../static/css/info.css";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import resume from "../static/misc/resume.pdf";
const styles = {
  grid: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    verticalAlign: "super",
  },
  listButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  typography: {
    transition: "color 0.3s",
    "&:hover": {
      color: "#f702d3",
    },
  },
};

const infoText = {
  Resume: resume,
  "2022 Portfolio Website": "https://rivera-davidkyle.github.io/my-website/",
  UCN: "https://www.ucn-portal.org/",
};

function info() {
  return (
    <Box className="info">
      <Grid container sx={styles.grid}>
        <Grid item xs={12}>
          <List component="div">
            {Object.keys(infoText).map((info, infoIndex) => (
              <ListItemButton
                disableRipple
                sx={styles.listButton}
                href={infoText[info]}
              >
                <ListItemText
                  primary={
                    <Typography
                      variant="h4"
                      align="center"
                      sx={styles.typography}
                    >
                      {info}
                      <LaunchIcon sx={styles.icon} />
                    </Typography>
                  }
                />
              </ListItemButton>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default info;
