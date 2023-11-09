import styles			from "./page.module.scss";
import BMNavBar 		from "@/components/BMNavBar/BMNavBar";
import AGFooter 		from "@/components/AGFooter/AGFooter";
import CounterButton	from "@/components/CounterButton/CounterButton";

export const metadata = {
	title:			"ReactHooks",
	description:	"React State Practice!"
};

const ReactHooks = () => {
	return (
		<>
			<header><BMNavBar/></header>
			<main className={styles.main}>
				
				<CounterButton/>

			</main>
			<footer><AGFooter/></footer>
		</>
	);
};

export default ReactHooks;