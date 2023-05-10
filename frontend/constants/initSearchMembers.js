const initSearchMembers = {
    member_type: {
        label: "利用者",
        items: ["全て", "個人", "法人団体"],
        value: "",
        default: "",
    },
    name: {
        label: "名前/法人・団体名",
        items: [],
        value: "",
        default: "",
    },
    name_kana: {
        label: "フリガナ",
        items: [],
        value: "",
        default: "",
    },
    prefectures: {
        label: "都道府県",
        items: [],
        value: [],
        default: [],
    },
};

export default initSearchMembers;
