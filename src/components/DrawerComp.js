import { useState } from "react";
import React from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer
        PaperProps={{ sx: { backgroundColor: "rgba(9,9,121,1)" } }}
        open={open}
        onClick={() => setOpen(false)}
      >
        <List>
          {links.map((links, index) => (
            <ListItemButton onclick={() => setOpen(false)} key={index} divider>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{links}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default DrawerComp;
