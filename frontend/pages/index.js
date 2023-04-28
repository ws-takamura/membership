import Layout from "@/components/Layout/Layout";
import Button from "@mui/material/Button";

export default function Home() {
    return (
        <>
            <p>会員管理</p>
            <Button variant="contained" color="secondary">
                Success!
            </Button>
        </>
    );
}

Home.getLayout = (page) => (
  <Layout>
    {page}
  </Layout>
)
