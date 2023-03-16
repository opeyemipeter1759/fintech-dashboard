import { createContext, useState, useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

export const tokens = ( mode ) => ( {
    ...( mode === "dark" ?
        {
        blue: {
            100: "#CCE4FE",
            200: "#99C9FD",
            300: "#67ADFD",
            400: "#3492FC",
            500: "#0177FB",
            600: "#015FC9",
            700: "#014797",
            800: "#003064",
            900: "#001832"
        },
        black: {
            100: "#CCCCCC",
            200: "#999999",
            300: "#666666",
            400: "#333333",
            500: "#000000",
            600: "#000000",
            700: "#000000",
            800: "#000000",
            900: "#000000"
        },
        grey: {
            100: "#D6D7DA",
            200: "#AEAFB4",
            300: "#85878F",
            400: "#5D5F69",
            500: "#343744",
            600: "#2A2C36",
            700: "#1F2129",
            800: "#15161B",
            900: "#0A0B0E"
        },
        white: {
            100: "#FFFFFF",
            200: "#FFFFFF",
            300: "#FFFFFF",
            400: "#FFFFFF",
            500: "#FFFFFF",
            600: "#CCCCCC",
            700: "#999999",
            800: "#666666",
            900: "#333333"
        },
        primary: {
            100: "#FBFFFD",
            200: "#F7FFFA",
            300: "#F3FFF8",
            400: "#EFFFF5",
            500: "#EBFFF3",
            600: "#BCCCC2",
            700: "#8D9992",
            800: "#5E6661",
            900: "#2F3331"
        },
        secondary: {
            100: "#FFFCFB",
            200: "#FFF9F8",
            300: "#FFF7F4",
            400: "#FFF4F1",
            500: "#FFF1ED",
            600: "#CCC1BE",
            700: "#99918E",
            800: "#66605F",
            900: "#33302F"
        }
    } : {
        blue: {
            900: "#CCE4FE",
            800: "#99C9FD",
            700: "#67ADFD",
            600: "#3492FC",
            500: "#0177FB",
            400: "#015FC9",
            300: "#014797",
            200: "#003064",
            100: "#001832"
        },
        black: {
            900: "#CCCCCC",
            800: "#999999",
            700: "#666666",
            600: "#333333",
            500: "#000000",
            400: "#000000",
            300: "#000000",
            200: "#000000",
            100: "#000000"
        },
        grey: {
            900: "#D6D7DA",
            800: "#AEAFB4",
            700: "#85878F",
            600: "#5D5F69",
            500: "#343744",
            400: "#2A2C36",
            300: "#1F2129",
            200: "#15161B",
            100: "#0A0B0E"
        },
        white: {
            100: "#FFFFFF",
            200: "#FFFFFF",
            300: "#FFFFFF",
            400: "#FFFFFF",
            500: "#FFFFFF",
            600: "#CCCCCC",
            700: "#999999",
            800: "#666666",
            900: "#333333"
        },
        primary: {
            100: "#FBFFFD",
            200: "#F7FFFA",
            300: "#F3FFF8",
            400: "#EFFFF5",
            500: "#EBFFF3",
            600: "#BCCCC2",
            700: "#8D9992",
            800: "#5E6661",
            900: "#2F3331"
        },
        secondary: {
            900: "#FFFCFB",
            800: "#FFF9F8",
            700: "#FFF7F4",
            600: "#FFF4F1",
            500: "#FFF1ED",
            400: "#CCC1BE",
            300: "#99918E",
            200: "#66605F",
            100: "#33302F"
        }
        
    })
})

// mui theme settings
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                main: colors.primary[500],
              },
              secondary: {
                main: colors.blue[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: colors.white[500],
              },
            }
          : {
              // palette values for light mode
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.blue[500],
              },
              neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
              },
              background: {
                default: "#fcfcfc",
              },
            }),
      },
      typography: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
};
  

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {},
  });
  
  export const useMode = () => {
    const [mode, setMode] = useState("dark");
  
    const colorMode = useMemo(
      () => ({
        toggleColorMode: () =>
          setMode((prev) => (prev === "light" ? "dark" : "light")),
      }),
      []
    );
  
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
  };

