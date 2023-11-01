import styles from "./AGShowModalButton.module.css";

const AGShowModalButton = ({ ButtonText, TargetModalID }) => {
    return (
        <button className="btn btn-primary clicky-button mt-2 mb-2" data-bs-toggle="modal" data-bs-target={`#${TargetModalID}`}>{ButtonText}</button>
    );
};

export default AGShowModalButton;