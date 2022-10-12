import { createTheme } from "@mui/material";
import { red, common, grey, cyan } from "@mui/material/colors";
import { ColorPartial } from "@mui/material/styles/createPalette";

declare module '@mui/material/styles' {
  interface PaletteOptions {
    cyan?: ColorPartial;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
    common: {
      black: common.black,
      white: common.white
    },
    grey: {
      100: grey[100],
      200: grey[200],
      400: grey[400],
      800: grey[800],
      900: grey[900],
    },
    cyan: {
      100: cyan[500],
    }
  }
});