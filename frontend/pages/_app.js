import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme";
import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
    const getLayout = Component.getLayout ?? ((page) => page);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
    );
}
