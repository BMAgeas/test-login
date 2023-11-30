"use client";

import {useState, useEffect}	from "react";
import styles					from "./LiveTextInput.module.scss";

const LiveTextInput = ({ InitialText }) => {

	const [Text, setText] = useState(InitialText);

	/* ↓ Executed on every re-render of the component (whenever a key is pressed) */
	useEffect(
		function () {
			document.title = (Text).length.toString();
		}
	);

	return (
		<div>
			<hr/>
			<input type="text" onChange={ e => setText(e.target.value) } value={Text} />
			<label style={{ padding : 10 }}>{Text}</label>
		</div>
	);

};

export default LiveTextInput;