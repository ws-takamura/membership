import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import MembersTable from "@/components/Pages/Members/MembersTable";

import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
        </div>
    );
}

export default function MembersIndex() {
    const router = useRouter();
    const [urlQuery, setUrlQuery] = useState(0);

    // 初期ロード時にタブに移動する
    useEffect(() => {
        const query = router.query.tab;
        if (query === "tentative") {
            setUrlQuery(1);
        } else if (query === "unauthorized") {
            setUrlQuery(2);
        } else {
            setUrlQuery(0);
        }
    }, [router.query]);

    const handleChangeUrlQuery = (event, newValue) => {
        setUrlQuery(newValue);
        const query =
            newValue === 0
                ? "main"
                : newValue === 1
                ? "tentative"
                : "unauthorized";
        window.history.pushState(null, "main", `?tab=${query}`);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box>
                <Tabs
                    value={urlQuery}
                    onChange={handleChangeUrlQuery}
                    aria-label="nav tabs example"
                >
                    <Tab label="会員" />
                    <Tab label="仮会員" />
                    <Tab label="非認証会員" />
                </Tabs>
            </Box>
            <Box
                sx={{
                    backgroundColor: "background.paper",
                }}
            >
                <TabPanel value={urlQuery} index={0}>
                    <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                        会員一覧
                    </Typography>
                    <MembersTable />
                </TabPanel>
                <TabPanel value={urlQuery} index={1}>
                    <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                        仮会員一覧
                    </Typography>
                </TabPanel>
                <TabPanel value={urlQuery} index={2}>
                    <Typography sx={{ mb: 2, fontWeight: "bold" }}>
                        非認証会員一覧
                    </Typography>
                </TabPanel>
            </Box>
        </Box>
    );
}
