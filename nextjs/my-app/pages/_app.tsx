import "../styles/globals.css";
import type { NextPage } from "next";
import Layout from "../components/Layout";

interface IProps {
  Component: NextPage;
  pageProps: any;
}

function MyApp({ Component, pageProps }: IProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
