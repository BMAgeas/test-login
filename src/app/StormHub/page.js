import styles         	from "./page.module.css";
import AGHeader       	from "@/components/AGHeader/AGHeader";
import AGFooter       	from "@/components/AGFooter/AGFooter";
import StormAdviceItem	from "@/components/StormAdviceItem/StormAdviceItem";

export const metadata = {
	title:			"Storm Hub",
	description:	"FlexBox Practice!"
};

const StormHub = () => {
	return (
		<>
			<header><AGHeader LogoImageURL="/AgeasTextLogo.svg" /></header>
			<main className={styles.main}>

				<h1 className="PageHeadingText">PROTECTING YOUR HOME FROM A STORM</h1>
				<h5 className="PageSubHeadingText">With the increase in stormy weather in the UK, we're here to help you protect your home and offer support if your home is affected.</h5>

				<ul className={styles.StormAdviceItemsContainer}>

					<StormAdviceItem Text="Check exterior drains - Is rainwater flowing away?" />
					<StormAdviceItem Text="Check guttering for damage or debris - So water can flow away easily" />
					<StormAdviceItem Text="Check for cracks in brick work or render - It could allow water ingress" />
					<StormAdviceItem Text="Check for any leaks - In and around windows and doors" />
					<StormAdviceItem Text="Check the loft - For any hidden leaks" />
					<StormAdviceItem Text="Check outside drainage - Ensure areas don't breach damp course heights" />
					<StormAdviceItem Text="Check garden furniture - Make sure items are tied down and secure" />
					<StormAdviceItem Text="Tree safety - Check trees near your property are healthy" />
					<StormAdviceItem Text="Inspect flat roofs for damage or leaks - Flat roofs have a short lifespan" />
					<StormAdviceItem Text="Check tiles on roof - For loose or cracked tiles or slates" />
					<StormAdviceItem Text="Check mortar on chimney - Ensure it is in good condition and not degraded" />
					<StormAdviceItem Text="Check mortar on floor - Ensure it is in good condition and not degraded" />

				</ul>

			</main>
			<footer><AGFooter/></footer>
		</>
	);
};

export default StormHub;