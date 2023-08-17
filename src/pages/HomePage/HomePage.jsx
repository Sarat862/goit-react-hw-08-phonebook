//MaterialUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Finger Paint, cursive',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Finger Paint';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url(https://fonts.gstatic.com/s/fingerpaint/v15/0QInMXVJ-o-oRn_7dron8YW-9JzT.woff2) format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `,
    },
  },
});

export default function HomePage() {
    return (
        <ThemeProvider theme={theme} >
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 20,
            }}
        >
            <ImportContactsTwoToneIcon color='secondary' sx={{width: 350, height: 230}} />
            <Typography
                component="h1"
                variant="h1"
                color="secondary"
            >Welcome to my phonebook
            </Typography>
            </Box>
        </ThemeProvider>
  )
}
