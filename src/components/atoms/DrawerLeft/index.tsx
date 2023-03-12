import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Icon } from "@iconify/react";

import logo from "../../../assets/logo.svg";
import { getOptionsDrawer } from "../../../utils/functions/GetOptionsDrawer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import TitleText from "../TitleText";
import { getFristName } from "../../../utils/functions/GetFristName";
import { Stack } from "@mui/material";
import { getUserID } from "../../../utils/functions/getUserId";

const drawerWidth = 240;

interface DrawerLeftProps {
  children: React.ReactElement;
}

export default function DrawerLeft({ children }: DrawerLeftProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const options = getOptionsDrawer(pathname);

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img src={logo} alt="iCER" width={"50%"} />
        </Toolbar>
        <Divider />
        <Toolbar>
          <Stack spacing={2}>
            <TitleText variant="body1" color="primary.main">
              Seja Bem-vindo, {getFristName()}
            </TitleText>
            <Link
              to={`${pathname?.split("/")[1]}/update-password/${getUserID()}`}
              style={{
                display: "flex",
                gap: ".5rem",
                alignItems: "center",
                textDecoration: "none",
                color: "#F84B5A",
              }}
            >
              Redefinir senha{" "}
              <Icon icon="material-symbols:arrow-right-alt-rounded" />
            </Link>
          </Stack>
        </Toolbar>
        <Divider />
        <List>
          {options &&
            options.map((option: any, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton onClick={() => navigate(option.link)}>
                  <ListItemIcon>
                    <Icon icon={option.icon} />
                  </ListItemIcon>
                  <ListItemText primary={option.name} />
                </ListItemButton>
              </ListItem>
            ))}
        </List>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>
                <Icon icon="ic:baseline-logout" />
              </ListItemIcon>
              <ListItemText primary={"Sair"} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          width: "100%",
          height: "100vh",
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
