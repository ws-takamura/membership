import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        text: {
            primary: "#344767",
        },
        background: {
            default: "#F0F2F5",
            paper: "#ffffff",
        },
        white: {
            main: "#ffffff",
        },
    },
    typography: {
        fontFamily:
            '"游ゴシック", "Yu Gothic UI", "ヒラギノ角ゴ ProN", "Hiragino Kaku Gothic ProN", "メイリオ", Meiryo, sans-serif',
    },
});

export default theme;
