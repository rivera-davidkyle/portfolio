import React from "react";
import "../static/css/info.css";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Chip,
  Container,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

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
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  listText: {
    "&:hover": {
      color: "#f702d3",
    },
  },
};

function info() {
  return (
    <Box className="info">
      <Grid container sx={styles.grid}>
        <Grid item xs={12}>
          <List>
            <ListItemButton disableRipple sx={styles.listButton}>
              <ListItemText
                sx={styles.listText}
                primary={
                  <Typography variant="h4">
                    Resume
                    <LaunchIcon sx={styles.icon} />
                  </Typography>
                }
              />
            </ListItemButton>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}

export default info;
