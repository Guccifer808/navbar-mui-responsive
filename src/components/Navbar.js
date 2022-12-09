import React from "react";
import { useState } from "react";
import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Button,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import DrawerComp from "./DrawerComp";
import AcUnitRoundedIcon from "@mui/icons-material/AcUnitRounded";

const Navbar = ({ links }) => {
  const [value, setValue] = useState();
  //using theme and mediaquery for responsive
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  //console.log(isMatch);
  return (
    <AppBar
      sx={{
        backgroundImage:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 10%, rgba(0,194,255,1) 100%);",
      }}
    >
      <Toolbar>
        {isMatch ? (
          <>
            <Typography>
              <AcUnitRoundedIcon />
            </Typography>
            <DrawerComp links={links} />
          </>
        ) : (
          <Grid sx={{ placeItems: "center" }} container>
            <Grid item xs={2}>
              <Typography>
                <AcUnitRoundedIcon />
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Tabs
                value={value}
                textColor="inherit"
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}
              >
                {links.map((link, index) => (
                  <Tab key={index} label={link} />
                ))}
              </Tabs>
            </Grid>
            <Grid item xs={1} />
            <Grid item xs={3}>
              <Box display="flex">
                <Button
                  sx={{ marginLeft: "auto", background: "rgba(9,9,121,1)" }}
                  variant="contained"
                >
                  Login
                </Button>
                <Button
                  sx={{ marginLeft: 1, background: "rgba(9,9,121,1)" }}
                  variant="contained"
                >
                  Sign-up
                </Button>
              </Box>
            </Grid>
          </Grid>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
