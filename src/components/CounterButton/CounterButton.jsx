import styles from "./CounterButton.module.scss";

const CounterButton = () => {
    return (
        <button className={`${styles.CounterButton} btn btn-primary clicky-button my-2 px-4`}>Clicked * time</button>
    );
};

export default CounterButton;