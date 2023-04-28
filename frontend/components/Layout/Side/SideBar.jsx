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

// MUI Icon
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MailIcon from "@mui/icons-material/Mail";
import TimelineIcon from "@mui/icons-material/Timeline";

const drawerWidth = 240;
const miniDrawerWidth = 60;

export default function SideBar({ drawerOpen }) {
    const router = useRouter();

    const menuList = [
        { text: "会員管理", icon: <ListAltIcon />, path: "/" },
        { text: "グループ管理", icon: <GroupIcon />, path: "/groups" },
        { text: "タグ管理", icon: <LocalOfferIcon />, path: "/tags" },
        { text: "メール管理", icon: <MailIcon />, path: "/mails" },
        { text: "アクセス解析", icon: <TimelineIcon />, path: "/access" },
    ];

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
                                        selected={
                                            router.pathname === list.path
                                                ? true
                                                : false
                                        }
                                    >
                                        <ListItemIcon
                                            style={{ color: "inherit" }}
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
