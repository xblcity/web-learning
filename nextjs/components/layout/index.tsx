import type { NextPage } from "next";
import { ReactNode } from "react";
import Header from "components/header";
import Footer from "components/footer";

interface IProps {
  children: ReactNode
}

const Layout: NextPage<IProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
