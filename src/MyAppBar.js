import * as React from "react";
import {
  AppBar,
  ToggleThemeButton,
  defaultTheme,
  LocalesMenuButton,
} from "react-admin";
import Logo from "./Logo.svg";
import { createTheme, Box } from "@mui/material";
import { useTranslate } from "react-admin";

const darkTheme = createTheme({
  palette: { mode: "dark" },
  sidebar: {
    width: 220,
    closedWidth: 55,
  },
});

const theme = {
  ...defaultTheme,
  sidebar: {
    width: 220,
    closedWidth: 55,
  },
};

export const MyAppBar = (props) => {
  const translate = useTranslate();
  return (
    <AppBar {...props}>
      <Box display="flex" alignItems="center" justifyContent="center" flex="1">
        <Logo height="30" width="150" />
      </Box>
      <LocalesMenuButton
        languages={[
          { locale: "en", name: "English" },
          { locale: "fr", name: "Français" },
        ]}
      />
      <ToggleThemeButton lightTheme={theme} darkTheme={darkTheme} />
    </AppBar>
  );
};
