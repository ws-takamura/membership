import { useState, useRef, useEffect } from "react";

// MUI Components
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Divider from "@mui/material/Divider";
import Grow from "@mui/material/Grow";
import IconButton from "@mui/material/IconButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import Typography from "@mui/material/Typography";

// MUI Icon
import EmailIcon from "@mui/icons-material/Email";
import HttpsIcon from "@mui/icons-material/Https";
import SecurityIcon from "@mui/icons-material/Security";
import SettingsIcon from "@mui/icons-material/Settings";

export default function HeaderSetting() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const handleMenuItemClick = (event) => {
        handleClose(event);
    };

    const handleLogoutButtonClick = (event) => {
        handleClose(event);
        // Add your logout logic here
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            <IconButton
                size="large"
                ref={anchorRef}
                id="composition-button"
                aria-controls={open ? "composition-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                color="inherit"
            >
                <SettingsIcon />
            </IconButton>
            <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                placement="bottom-start"
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === "bottom-start"
                                    ? "right bottom"
                                    : "right top",
                        }}
                    >
                        <Paper
                            sx={{
                                width: 320,
                                maxWidth: "100%",
                                padding: "30px",
                            }}
                        >
                            <ClickAwayListener onClickAway={handleClose}>
                                <div>
                                    <Typography variant="h6">
                                        管理者設定
                                    </Typography>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <MenuItem
                                            onClick={handleMenuItemClick}
                                            sx={{ p: 2 }}
                                        >
                                            <ListItemIcon>
                                                <EmailIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    fontSize: 16,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                メールアドレス再設定
                                            </ListItemText>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem
                                            onClick={handleMenuItemClick}
                                            sx={{ p: 2 }}
                                        >
                                            <ListItemIcon>
                                                <HttpsIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    fontSize: 16,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                パスワード再設定
                                            </ListItemText>
                                        </MenuItem>
                                        <Divider />
                                        <MenuItem
                                            onClick={handleMenuItemClick}
                                            sx={{
                                                p: 2,
                                                mb: 3,
                                            }}
                                        >
                                            <ListItemIcon>
                                                <SecurityIcon />
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    fontSize: 16,
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                IPアドレス管理
                                            </ListItemText>
                                        </MenuItem>
                                    </MenuList>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        sx={{
                                            width: "100%",
                                        }}
                                        onClick={handleLogoutButtonClick}
                                    >
                                        ログアウト
                                    </Button>
                                </div>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </div>
    );
}
