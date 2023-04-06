import { Icon } from "@iconify/react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import * as React from "react";

import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { getFristName } from "../../../utils/functions/GetFristName";
import { getOptionsDrawer } from "../../../utils/functions/GetOptionsDrawer";
import { getUserID } from "../../../utils/functions/getUserId";
import TitleText from "../TitleText";

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
            "::-webkit-scrollbar": {
              width: "5px",
            },
            "::-webkit-scrollbar-track": {
              background: "transparent",
            },
            "::-webkit-scrollbar-thumb": {
              background: "#F84B5A",
              borderRadius: "30px",
            },
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <img src={logo} alt="iCER" width={"50%"} />
        </Toolbar>
        <Divider />
        <Toolbar
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            gap: "1rem",
            fontSize: "1rem",
            [theme.breakpoints.down("xl")]: {
              fontSize: ".8rem",
            },
          })}
        >
          <TitleText variant="body1" color="primary.main">
            Seja Bem-vindo, <b>{getFristName()}</b>
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
                  <ListItemText
                    primary={option.name}
                    sx={(theme) => ({
                      span: {
                        fontSize: "1rem",
                        [theme.breakpoints.down("xl")]: {
                          fontSize: ".8rem",
                        },
                      },
                    })}
                  />
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
              <ListItemText
                primary={"Sair"}
                sx={(theme) => ({
                  span: {
                    fontSize: "1rem",
                    [theme.breakpoints.down("xl")]: {
                      fontSize: ".8rem",
                    },
                  },
                })}
              />
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
