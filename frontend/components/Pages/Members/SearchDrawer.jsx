import prefectures from "@/constants/prefectures";
import initSearchMembers from "@/constants/initSearchMembers";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

const SearchDrawer = ({ open, toggleDrawer, searchItems, setSearchItems }) => {
    const handleChangeInput = (event, label) => {
        setSearchItems({
            ...searchItems,
            [label]: {
                ...searchItems[label],
                value: event.target.value,
            },
        });
    };

    const handleChangePrefecture = (event) => {
        setSearchItems({
            ...searchItems,
            prefectures: {
                ...searchItems.prefectures,
                value: [...event.target.value],
            },
        });
    };

    const handleDeleteAll = () => {
        setSearchItems(initSearchMembers);
    };

    return (
        <>
            <Drawer
                open={open}
                anchor="right"
                onClose={toggleDrawer(false)}
                style={{ zIndex: 1201 }}
            >
                <Box sx={{ p: 3 }}>
                    <Typography variant="h6" my={2}>
                        検索条件
                    </Typography>
                    <Divider />
                    <Typography variant="subtitle1" my={2}>
                        会員基本情報
                    </Typography>
                    <FormControl
                        sx={{
                            width: 350,
                        }}
                        fullWidth
                    >
                        {/* 利用者 */}
                        <FormLabel id="demo-radio-buttons-group-label">
                            {searchItems.member_type.label}
                        </FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            value={searchItems.member_type.value}
                            name="radio-buttons-group"
                            onChange={(event) =>
                                handleChangeInput(event, "member_type")
                            }
                            sx={{ mb: 2 }}
                        >
                            {searchItems.member_type.items.map((item) => (
                                <FormControlLabel
                                    value={item === "全て" ? "" : item}
                                    control={<Radio />}
                                    label={item}
                                    key={item}
                                />
                            ))}
                        </RadioGroup>

                        {/* 名前 */}
                        <TextField
                            label={searchItems.name.label}
                            variant="outlined"
                            onChange={(event) =>
                                handleChangeInput(event, "name")
                            }
                            value={searchItems.name.value}
                            sx={{ mb: 2 }}
                        />

                        {/* フリガナ */}
                        <TextField
                            label={searchItems.name_kana.label}
                            variant="outlined"
                            onChange={(event) =>
                                handleChangeInput(event, "name_kana")
                            }
                            value={searchItems.name_kana.value}
                            sx={{ mb: 2 }}
                        />

                        {/* 都道府県 */}
                        <TextField
                            id="outlined-select-currency"
                            select
                            label="都道府県"
                            value={searchItems.prefectures.value}
                            onChange={handleChangePrefecture}
                            SelectProps={{
                                multiple: true,
                            }}
                            sx={{ mb: 2 }}
                        >
                            {prefectures.map((prefecture) => (
                                <MenuItem
                                    key={prefecture.id}
                                    value={prefecture.id}
                                >
                                    {prefecture.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <Button
                            variant="contained"
                            color="error"
                            onClick={handleDeleteAll}
                            sx={{ mt: 4 }}
                        >
                            クリア
                        </Button>
                    </FormControl>
                </Box>
            </Drawer>
        </>
    );
};

export default SearchDrawer;
