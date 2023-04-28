import Layout from "@/components/Layout/Layout";

export default function GroupIndex() {
  return (
    <>
        <p>グループ管理</p>
    </>
  )
}

GroupIndex.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
