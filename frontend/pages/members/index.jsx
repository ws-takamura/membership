import { useEffect, useState } from "react";

import prefectures from "@/constants/prefectures";
import initSearchMembers from "@/constants/initSearchMembers";
import Layout from "@/components/Layout/Admin/Layout";
import SearchDrawer from "@/components/Pages/Members/SearchDrawer";
import MembersIndex from "@/components/Pages/Members/Index";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";

import FilterListIcon from "@mui/icons-material/FilterList";
import DeleteIcon from "@mui/icons-material/Delete";

export default function MemberIndex() {
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost/api/member");
            const data = await res.json();
            console.log(data);
        };
        fetchData();
    }, []);

    // 検索ウィンドウ
    const [open, setOpen] = useState(false);
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setOpen(open);
    };

    const [searchItems, setSearchItems] = useState(initSearchMembers);

    // defaultに戻す（単一）
    const handleDelete = (label, searchItem) => {
        setSearchItems({
            ...searchItems,
            [label]: {
                ...searchItems[label],
                value: searchItem.default,
            },
        });
    };

    const handleDeleteAll = () => {
        setSearchItems(initSearchMembers);
    };

    // 検索タグ削除（単一）
    const handleTagDelete = (label, searchItem) => {
        const updatedItems = searchItems[label].value.filter(
            (item) => item !== searchItem
        );

        setSearchItems({
            ...searchItems,
            [label]: {
                ...searchItems[label],
                value: updatedItems,
            },
        });
    };

    return (
        <>
            {/* <NextLink href="/members/new">新規作成</NextLink> */}
            <Button
                variant="text"
                endIcon={<FilterListIcon />}
                onClick={toggleDrawer(true)}
                sx={{ mb: 1, fontWeight: "bold" }}
            >
                絞り込み検索
            </Button>
            <SearchDrawer
                open={open}
                toggleDrawer={toggleDrawer}
                searchItems={searchItems}
                setSearchItems={setSearchItems}
            />
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    borderRadius: 16,
                    "& > :not(style)": {
                        mr: 1,
                        p: 1,
                    },
                }}
            >
                {Object.keys(searchItems).map(
                    (searchItem) =>
                        searchItems[searchItem].value !== "" &&
                        ((searchItems[searchItem].label !== "都道府県" &&
                            searchItems[searchItem].value !== "") ||
                            (searchItems[searchItem].label === "都道府県" &&
                                searchItems[searchItem].value.length > 0)) && (
                            <Paper
                                elevation={3}
                                sx={{ mb: 1 }}
                                key={searchItems[searchItem].label}
                            >
                                {searchItems[searchItem].label}&#058;&emsp;
                                {searchItems[searchItem].label !==
                                "都道府県" ? (
                                    <Chip
                                        label={searchItems[searchItem].value}
                                        onDelete={() =>
                                            handleDelete(
                                                searchItem,
                                                searchItems[searchItem]
                                            )
                                        }
                                    />
                                ) : (
                                    <>
                                        {searchItems[searchItem].value.map(
                                            (v) => (
                                                <Chip
                                                    key={v}
                                                    label={
                                                        prefectures.find(
                                                            (item) =>
                                                                item.id === v
                                                        ).name
                                                    }
                                                    onDelete={() =>
                                                        handleTagDelete(
                                                            searchItem,
                                                            v
                                                        )
                                                    }
                                                    sx={{ mr: 1 }}
                                                />
                                            )
                                        )}
                                    </>
                                )}
                            </Paper>
                        )
                )}
            </Box>
            <Button
                variant="outlined"
                color="error"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={handleDeleteAll}
            >
                クリア
            </Button>
            <MembersIndex />
        </>
    );
}

MemberIndex.getLayout = (page) => <Layout>{page}</Layout>;
