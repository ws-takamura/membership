import Layout from "@/components/Layout/Admin/Layout";

export default function TagIndex() {
    return (
        <>
            <p>タグ</p>
        </>
    );
}

TagIndex.getLayout = (page) => <Layout>{page}</Layout>;
