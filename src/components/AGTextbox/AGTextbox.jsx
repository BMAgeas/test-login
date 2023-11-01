import styles from "./AGTextbox.module.css";

const AGTextbox = ({ FieldName, PlaceholderText = "", HelpLinkText = "", HelpLinkOnClickFunction = null }) => {
    return (
        <div className="mb-3">
            <p className={styles.TextAlignLeft}>
                <b>{FieldName}</b>
                <span className={styles.RightAlignedLink}><a onClick={HelpLinkOnClickFunction} className={styles.TextboxHelpLink}>{HelpLinkText}</a></span>
            </p>
            <input
                type={ FieldName.toUpperCase().includes("PASS") ? "password" : "text" }
                className={`form-control`}
                id={FieldName.replace(" ", "")}
                placeholder={PlaceholderText}
            />
        </div>
    );
};

export default AGTextbox;