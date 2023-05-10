import Layout from "@/components/Layout/Admin/Layout";

export default function MembersNew() {
    return (
        <>
            <p>会員新規作成</p>
        </>
    );
}

MembersNew.getLayout = (page) => <Layout>{page}</Layout>;
