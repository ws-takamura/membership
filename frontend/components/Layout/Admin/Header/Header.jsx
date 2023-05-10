// Components
import HeaderSetting from "./Setting";

// MUI
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

// Icon
import MenuIcon from "@mui/icons-material/Menu";

export default function Header({ handleDrawerToggle }) {
    return (
        <AppBar
            position="fixed"
            color="white"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={handleDrawerToggle}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, fontWeight: "bold" }}
                >
                    Membership
                </Typography>

                <HeaderSetting />
            </Toolbar>
        </AppBar>
    );
}
