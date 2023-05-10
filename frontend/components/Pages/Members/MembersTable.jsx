import { useState } from "react";
import Link from "next/link";

import Checkbox from "@mui/material/Checkbox";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

function createData(name, a, email, c, d, e, f, g) {
    return { name, a, email, c, d, e, f, g };
}

const rows = [
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar1@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar2@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar3@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar4@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar5@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar6@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar7@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar8@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar9@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar10@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar11@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar12@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar13@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar14@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
    createData(
        "ラーズ・ヌートバー",
        "個人",
        "nootbaar15@websmart.co.jpnootbaar15@websmart.co.jpnootbaar15@websmart.co.jp",
        "0120-117-117",
        "千葉県",
        "2023年10月10日 10時00分",
        "タグ1",
        "グループ1"
    ),
];

export default function MembersTable() {
    const [selected, setSelected] = useState([]);

    const handleSelect = (event, email) => {
        const selectedIndex = selected.indexOf(email);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, email);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        setSelected(newSelected);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.email);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    return (
        <>
            <TableContainer sx={{ maxHeight: 500, minWidth: 1000, mb: 2 }}>
                <Table
                    sx={{ minWidth: 1300 }}
                    aria-label="simple table"
                    stickyHeader
                >
                    <TableHead sx={{ fontWeight: "bold" }}>
                        <TableRow>
                            <TableCell
                                padding="checkbox"
                                sx={{
                                    position: "sticky",
                                    left: 0,
                                    zIndex: 4,
                                }}
                            >
                                <Checkbox
                                    color="primary"
                                    indeterminate={
                                        selected.length > 0 &&
                                        selected.length < rows.length
                                    }
                                    checked={
                                        rows.length > 0 &&
                                        selected.length === rows.length
                                    }
                                    onChange={(event) =>
                                        handleSelectAllClick(event)
                                    }
                                />
                            </TableCell>
                            <TableCell
                                sx={{
                                    fontWeight: "bold",
                                    position: "sticky",
                                    left: 48,
                                    zIndex: 3,
                                }}
                            >
                                名前/法人・団体名
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                利用区分
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                メールアドレス
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                電話番号
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                都道府県
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                登録日
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                タグ
                            </TableCell>
                            <TableCell
                                align="right"
                                sx={{ fontWeight: "bold" }}
                            >
                                グループ
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            const isItemSelected =
                                selected.indexOf(row.email) !== -1;
                            return (
                                <TableRow
                                    key={row.email}
                                    selected={isItemSelected}
                                    sx={{
                                        "&:last-child td, &:last-child th": {
                                            border: 0,
                                        },
                                    }}
                                >
                                    <TableCell
                                        padding="checkbox"
                                        sx={{
                                            position: "sticky",
                                            left: 0,
                                            zIndex: 3,
                                            bgcolor: isItemSelected ? "rgba(237, 244, 251)" : "white.main",
                                        }}
                                    >
                                        <Checkbox
                                            color="primary"
                                            checked={isItemSelected}
                                            onChange={(event) =>
                                                handleSelect(event, row.email)
                                            }
                                        />
                                    </TableCell>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        sx={{
                                            position: "sticky",
                                            left: 48,
                                            zIndex: 2,
                                            bgcolor: isItemSelected ? "rgba(237, 244, 251)" : "white.main",
                                        }}
                                    >
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.a}</TableCell>
                                    <TableCell
                                        align="right"
                                        sx={{
                                            maxWidth: 170,
                                            whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis",
                                        }}
                                    >
                                        {row.email}
                                    </TableCell>
                                    <TableCell align="right">{row.c}</TableCell>
                                    <TableCell align="right">{row.d}</TableCell>
                                    <TableCell align="right">{row.e}</TableCell>
                                    <TableCell align="right">{row.f}</TableCell>
                                    <TableCell align="right">{row.g}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination
                count={10}
                color="primary"
                // onChange={(event, page) => {
                //     window.scrollTo(0, 0);
                // }}
                renderItem={(item) => (
                    <PaginationItem
                        component={Link}
                        href={`/members?page=${item.page}`}
                        // as={`/members/${item.page}`}
                        {...item}
                    />
                )}
            />
        </>
    );
}
