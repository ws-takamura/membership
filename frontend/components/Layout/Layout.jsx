import { useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "@/components/Layout/Header/Header";
import SideBar from "@/components/Layout/Side/SideBar";
import Toolbar from "@mui/material/Toolbar";

export default function Layout({ children }) {
    const [drawerOpen, setDrawerOpen] = useState(true);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Header
                    handleDrawerToggle={handleDrawerToggle}
                />
                <SideBar
                    drawerOpen={drawerOpen}
                />
                <Container maxWidth="xl">
                    <Toolbar />
                    {children}
                </Container>
            </Box>
        </>
    );
}
