import type { NextPage } from "next";
import NavBar from "components/NavBar";
import Footer from "../Footer";

const Layout: NextPage = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
