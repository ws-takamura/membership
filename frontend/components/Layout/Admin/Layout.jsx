import { useState } from "react";
import { useRouter } from "next/router";

// Compornents
import Header from "@/components/Layout/Admin/Header/Header";
import SideBar from "@/components/Layout/Admin/Side/SideBar";
import BreadcrumbsLayout from "@/components/Layout/Admin/BreadcrumbsLayout";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

// Icon
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MailIcon from "@mui/icons-material/Mail";
import TimelineIcon from "@mui/icons-material/Timeline";

export default function Layout({ children }) {
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(true);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuList = [
        { text: "会員管理", icon: <ListAltIcon />, path: "/members" },
        { text: "グループ管理", icon: <GroupIcon />, path: "/groups" },
        { text: "タグ管理", icon: <LocalOfferIcon />, path: "/tags" },
        { text: "メール管理", icon: <MailIcon />, path: "/mails" },
        { text: "アクセス解析", icon: <TimelineIcon />, path: "/accesses" },
    ];

    const breadcrumbs_text = [
        { text: ["トップページ"], path: "/" },
        { text: ["会員管理", "会員一覧"], path: "/members" },
        { text: ["会員管理", "会員新規作成"], path: "/members/new" },
        { text: ["グループ管理", "グループ一覧"], path: "/groups" },
        { text: ["グループ管理", "グループ新規作成"], path: "/groups/new" },
        { text: ["タグ管理", "タグ一覧"], path: "/tags" },
        { text: ["メール管理", "メール一覧"], path: "/mails" },
        { text: ["アクセス解析", "アクセス一覧"], path: "/accesses" },
    ];

    // 現在のページ
    const getObjectByTextTitle = () => {
        const obj = breadcrumbs_text.find((item) => item.path === router.pathname);
        return obj !== undefined ? obj.text : null;
    };

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Header handleDrawerToggle={handleDrawerToggle} />
                <SideBar drawerOpen={drawerOpen} menuList={menuList} />
                <Container sx={{ minWidth: 1200 }} maxWidth={false}>
                    <Toolbar />
                    <Box sx={{ my: 3 }}>
                        <BreadcrumbsLayout
                            breadcrumbsText={getObjectByTextTitle()}
                        />
                    </Box>
                    {children}
                </Container>
            </Box>
        </>
    );
}
