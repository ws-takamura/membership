import Layout from "@/components/Layout/Admin/Layout";

export default function MailsIndex() {
    return (
        <>
            <p>メール</p>
        </>
    );
}

MailsIndex.getLayout = (page) => <Layout>{page}</Layout>;
