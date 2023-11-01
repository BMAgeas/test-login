"use client";

import AGTextbox            from "../AGTextbox/AGTextbox";
import AGButton             from "../AGButton/AGButton";
import AGShowModalButton    from "../AGShowModalButton/AGShowModalButton";
import styles               from "./LoginBox.module.css";

const LogCredentialsToConsole = (e) => {
    console.table(
        {
            "Email address" : document.querySelector("#Emailaddress").value,
            "Password"      : document.querySelector("#Password").value
        }
    );
};

const LoginBox = () => {
    return (
        <div className={`${styles.OuterBox} card`}>

            <h5 className={`${styles.LoginBoxTopTitleBar} card-header py-3`}>Log in</h5>
            <div className={`${styles.PaddedCardBody} card-body`}>
            
                <h5 className={`${styles.LoginBoxTopText} card-subtitle my-2 pb-3`}>Welcome to your Ageas Online Account - where you can manage your policy, keep everything up to date and view your policy documents.</h5>
                
                <AGTextbox FieldName="Email address" PlaceholderText="example@hotmail.co.uk" HelpLinkText="Check if my email is registered" />
                <AGTextbox FieldName="Password" HelpLinkText="Forgot Password"  />
                <AGButton ButtonText="Log in" OnClickFunction={LogCredentialsToConsole} />

                <div className="my-4"><strong>Please note:</strong> If you bought an Ageas policy from another company, such as a broker, please contact them.</div>
                <div className="my-4"><strong>Don’t have an online account yet?</strong><br/>It's easy to create one here</div>
                <AGShowModalButton ButtonText="Register" TargetModalID="ForgotPasswordModal" />
                
            </div>

        </div>
    );
};

export default LoginBox;