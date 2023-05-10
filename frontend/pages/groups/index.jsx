import NextLink from "next/link";
import Layout from "@/components/Layout/Admin/Layout";

export default function GroupIndex() {
    return (
        <>
            <p>グループ管理</p>
            <NextLink href="/groups/new">新規作成</NextLink>
        </>
    );
}

GroupIndex.getLayout = (page) => <Layout>{page}</Layout>;
