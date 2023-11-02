import styles	from "./StormAdviceItem.module.css";
import Image	from "next/image";

const StormAdviceItem = ({ Text  }) => {

	/*
		Text should contain a " - " to split the heading from the description.
	*/

	return (
		<li className={styles.StormAdviceItem}>
			<figure>
				<Image src={`/StormImages/Storm%20(${Math.floor(Math.random() * 10).toString()}).jpg`} alt="Advice!" width={0} height={0} sizes="100vw" style={{ width : "100%", height : "auto" }} className={styles.StormAdviceImage} />
				<figcaption>
					<h6 className={styles.AdviceItemHeading}><strong>{Text.split(" - ")[0]}</strong></h6>
					{Text.split(" - ")[1]}
				</figcaption>
			</figure>
		</li>
	);

};

export default StormAdviceItem;