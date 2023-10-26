import styles from "./LoginTextbox.module.css";

const LoginTextbox = ( {FieldName, PlaceholderText = "", HelpLinkText = ""} ) => {
    return (
        <div className="mb-3">
            <p className={styles.TextAlignLeft}>
                <b>{FieldName}</b>
                <span className={styles.RightAlignedLink}><a href="#" className={styles.TextboxHelpLink}>{HelpLinkText}</a></span>
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

export default LoginTextbox;