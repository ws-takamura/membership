import NextLink from "next/link";

import Layout from "@/components/Layout/Admin/Layout";

export default function GroupsNew() {
    return (
        <>
            <p>グループ新規作成</p>
            <NextLink href="/members/new">新規作成</NextLink>
        </>
    );
}

GroupsNew.getLayout = (page) => <Layout>{page}</Layout>;
