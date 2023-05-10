import Layout from "@/components/Layout/Admin/Layout";

export default function Home() {
    return (
        <>
            <p>トップ</p>
        </>
    );
}

Home.getLayout = (page) => <Layout>{page}</Layout>;
