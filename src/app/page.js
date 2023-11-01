import Image          from "next/image";
import styles         from "./page.module.css";
import AGHeader       from "@/components/AGHeader/AGHeader";
import AGFooter       from "@/components/AGFooter/AGFooter";
import LoginBox       from "@/components/LoginBox/LoginBox";
import AGModalBox     from "@/components/AGModalBox/AGModalBox";

export const metadata = {
	title:			"Login Page",
	description:	"Login Page for NextJS Learning!"
};

export default function Home() {
    return (
        <>
            <AGModalBox ModalElementID="ForgotPasswordModal" ModalBoxTitleText="Password Reset..." />

            <header><AGHeader LogoImageURL="/AgeasTextLogo.svg" /></header>
            <main className={styles.main}><LoginBox/></main>
            <footer><AGFooter/></footer>
        </>
    );
};