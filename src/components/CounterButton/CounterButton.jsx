"use client";

import {useState}	from "react";
import styles		from "./CounterButton.module.scss";

const CounterButton = () => {

	/*
		clickCount		→ The current state
		setClickCount	→ A function for updating the state
		0				→ The initial value
	*/
	const [clickCount, setClickCount] = useState(0);

	function UpdateClickCount() {
		setClickCount(prev => prev + 1);
	}

    return (
        <button onClick={UpdateClickCount} className={`${styles.CounterButton} my-2 px-4`}>Clicked {clickCount.toString()} time{(clickCount != 1) && "s"}</button>
    );

};

export default CounterButton;