import Image          from "next/image";
import styles         from "./page.module.css";
import BrandingBanner from "@/components/BrandingBanner/BrandingBanner";
import LoginBox       from "@/components/LoginBox/LoginBox";
import AgeasFooterBox from "@/components/AgeasFooterBox/AgeasFooterBox";

export default function Home() {
  return (
    <>
      <header>
          <BrandingBanner/>
      </header>
      <main className={styles.main}>
          <LoginBox/>
      </main>
      <footer>
        <AgeasFooterBox/>
      </footer>
    </>
  );
};