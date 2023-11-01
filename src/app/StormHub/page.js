import styles         from "./StormHub_page.module.css";
import AGHeader       from "@/components/AGHeader/AGHeader";
import AGFooter       from "@/components/AGFooter/AGFooter";

const StormHub = () => {
    return (
        <>
            <header><AGHeader LogoImageURL="/AgeasTextLogo.svg" /></header>
            <main className={styles.main}>
                Hi!
            </main>
            <footer><AGFooter/></footer>
        </>
    );
};

export default StormHub;