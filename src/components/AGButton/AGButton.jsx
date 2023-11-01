import styles from "./AGButton.module.css";

const AGButton = ({ ButtonText, OnClickFunction = null }) => {
    return (
        <button className="btn btn-primary clicky-button mt-2 mb-2" onClick={OnClickFunction}>{ButtonText}</button>
    );
};

export default AGButton;