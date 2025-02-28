export const tokens = {
  grey: {
    100: "#b8b8b8",
    200: "#999999",
    300: "#7f7f7f",
    400: "#666666",
    500: "#4d4d4d",
    600: "#363636",
    700: "#252525",
    800: "#181818",
    900: "#0a0a0a",
  },
  primary: {
    // Darker Burnt Orange
    100: "#f8e0c2",
    200: "#f2c999",
    300: "#eeb272",
    400: "#ea9b4b",
    500: "#e68424",
    600: "#c86f1c",
    700: "#a05915",
    800: "#78430e",
    900: "#502d08",
  },
  secondary: {
    // Deep Goldenrod Yellow
    100: "#f7e7b0",
    200: "#eecd77",
    300: "#e5b43e",
    400: "#db9b05",
    500: "#c28500",
    600: "#9a6a00",
    700: "#735000",
    800: "#4c3600",
    900: "#261b00",
  },
  tertiary: {
    // Dark Burgundy
    500: "#66001a",
  },
  background: {
    light: "#f2e1cf",
    main: "#171717",
  },
};




// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[900],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
    h1: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 32,
    },
    h2: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 24,
    },
    h3: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[900],
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[900],
    },
    h5: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[900],
    },
    h6: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 10,
      color: tokens.grey[900],
    },
  },
};