import styles	from "./page.module.css";
import AGFooter from "@/components/AGFooter/AGFooter";
import BMNavBar from "@/components/BMNavBar/BMNavBar";

export const metadata = {
	title:			"Store",
	description:	"CSS Grid & React State Practice!"
};

const Store = () => {
	return (
		<>
			<header><BMNavBar/></header>
			<main className={styles.main}>
				Products...
			</main>
			<footer><AGFooter/></footer>
		</>
	);
};

export default Store;