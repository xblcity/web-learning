import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import { navs } from "./config";

const NavBar: NextPage = () => {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <div className={styles.navbar}>
      <section className={styles.logoArea}>
        {navs?.map((nav) => (
          <Link key={nav?.label} href={nav?.value}>
            <a>{nav.label}</a>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default NavBar;
