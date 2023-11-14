import styles			from "./page.module.scss";
import BMNavBar 		from "@/components/BMNavBar/BMNavBar";
import AGFooter 		from "@/components/AGFooter/AGFooter";
import CounterButton	from "@/components/CounterButton/CounterButton";
import LiveTextInput	from "@/components/LiveTextInput/LiveTextInput";

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
				<LiveTextInput InitialText="← Name" />

			</main>
			<footer><AGFooter/></footer>
		</>
	);
};

export default ReactHooks;