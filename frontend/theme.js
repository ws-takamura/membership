import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        text: {
            primary: "#344767",
            white: "#FFFFFF"
        },
        background: {
            default: "#F0F2F5",
            paper: "#ffffff",
        },
        white: {
            main: "#ffffff",
        },
        secondary: {
            main: "#344767",
        },
    },
    typography: {
        fontFamily:
            '"游ゴシック", "Yu Gothic UI", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif',
    },
});

export default theme;
