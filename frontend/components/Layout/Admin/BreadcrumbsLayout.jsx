import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BreadcrumbsLayout({ breadcrumbsText }) {
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState([]);
    const [lastText, setLastText] = useState([]);

    function handleClick(event) {
        event.preventDefault();
        console.info("You clicked a breadcrumb.");
    }

    useEffect(() => {
        const breadcrumbsComponents = breadcrumbsText.map((value, index) => {
            if (index === breadcrumbsText.length - 1) {
                setLastText(value);
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

        setBreadcrumbs(
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbsComponents}
            </Breadcrumbs>
        );
    }, [router.pathname, breadcrumbsText]);

    return (
        <>
            {breadcrumbs}
            <Typography variant="h6" fontWeight="bold" sx={{
                marginBottom: 3,
            }}>
                {lastText}
            </Typography>
        </>
    );
}
