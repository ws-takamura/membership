import { useRouter } from "next/router";
import NextLink from "next/link";

// MUI Components
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const drawerWidth = 240;
const miniDrawerWidth = 60;

export default function SideBar({ drawerOpen, menuList }) {
    const router = useRouter();

    return (
        <Box
            component="nav"
            sx={{
                width: { sm: drawerOpen ? drawerWidth : miniDrawerWidth },
                flexShrink: 0,
                transition: "0.3s",
            }}
        >
            <Drawer
                variant="permanent"
                open={drawerOpen}
                sx={{
                    display: { xs: "none", sm: "block" },
                    width: drawerOpen ? drawerWidth : miniDrawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: {
                        width: drawerOpen ? drawerWidth : miniDrawerWidth,
                        boxSizing: "border-box",
                        transition: "width 0.3s",
                    },
                }}
            >
                <Toolbar />
                <Box
                    sx={{
                        height: "100%",
                        overflow: "hidden",
                    }}
                >
                    <List>
                        {menuList.map((list, index) => (
                            <NextLink
                                key={list.text}
                                href={list.path}
                                style={{
                                    textDecoration: "none",
                                    color: "inherit",
                                }}
                            >
                                <ListItem disablePadding>
                                    <ListItemButton
                                        sx={{
                                            backgroundColor:
                                                router.pathname.startsWith(
                                                    list.path
                                                )
                                                    ? "primary.main"
                                                    : "transparent",
                                            "&:hover": {
                                                backgroundColor:
                                                    router.pathname.startsWith(
                                                        list.path
                                                    ) && "primary.main",
                                            },
                                        }}
                                    >
                                        <ListItemIcon
                                            sx={{
                                                color: router.pathname.startsWith(
                                                    list.path
                                                )
                                                    ? "text.white"
                                                    : "inherit",
                                            }}
                                        >
                                            {list.icon}
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    fontWeight="bold"
                                                    noWrap
                                                    sx={{
                                                        whiteSpace: "nowrap",
                                                        overflow: "hidden",
                                                        textOverflow:
                                                            "ellipsis",
                                                        transition:
                                                            "opacity 0.3s",
                                                        opacity: drawerOpen
                                                            ? 1
                                                            : 0,
                                                        color: router.pathname.startsWith(
                                                            list.path
                                                        )
                                                            ? "text.white"
                                                            : "inherit",
                                                    }}
                                                >
                                                    {list.text}
                                                </Typography>
                                            }
                                        />
                                    </ListItemButton>
                                </ListItem>
                            </NextLink>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
}
