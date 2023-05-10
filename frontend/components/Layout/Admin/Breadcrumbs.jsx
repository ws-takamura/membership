import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// パンくず用
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function Breadcrumbs() {
    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }

    const getObjectByTextTitle = () => {
        const obj = menuList.find((item) => item.path === router.pathname);
        return obj !== undefined ? obj.text : null;
    };
    const currentTextTitle = getObjectByTextTitle();

    useEffect(() => {
        const text = ["", "会員一覧", "会員詳細"];

        let breadcrumbsComponents = [{}];
        breadcrumbsComponents = text.map((value, index) => {
            if (index === 0) {
                return (
                    <Link
                        underline="hover"
                        key={index}
                        color="inherit"
                        href="/"
                        onClick={handleClick}
                    >
                        {currentTextTitle}
                    </Link>
                );
            }
            if (index === text.length - 1) {
                return (
                    <Typography
                        key={index}
                        color="text.primary"
                        fontWeight="bold"
                    >
                        {value}
                    </Typography>
                );
            }
            return (
                <Link
                    underline="hover"
                    key={index}
                    color="inherit"
                    href="/"
                    onClick={handleClick}
                >
                    {value}
                </Link>
            );
        });

        setBreadcrumbsText(
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbsComponents}
            </Breadcrumbs>
        );
    }, [router.pathname]);

    return (
        <>
            {breadcrumbsText}
            <Typography variant="h6" fontWeight="bold">
                会員一覧
            </Typography>
        </>
    );
}
