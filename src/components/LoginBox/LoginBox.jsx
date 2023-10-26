"use client";

import LoginTextbox from "../LoginTextbox/LoginTextbox";
import styles       from "./LoginBox.module.css";

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
                
                <LoginTextbox FieldName="Email address" PlaceholderText="example@hotmail.co.uk" HelpLinkText="Check if my email is registered" />
                <LoginTextbox FieldName="Password" HelpLinkText="Forgot Password" />
                <button id="LoginButton" className="btn btn-primary clicky-button mt-2 mb-2" onClick={LogCredentialsToConsole}>Log in</button>

                <div className="my-4"><strong>Please note:</strong> If you bought an Ageas policy from another company, such as a broker, please contact them.</div>
                <div className="my-4"><strong>Don’t have an online account yet?</strong><br/> It's easy to create one here</div>
                <button id="RegisterButton" className="btn btn-primary clicky-button" onClick={(e) => {console.log("#RegisterButton Clicked");}}>Register</button>
                
            </div>

        </div>
    );
};

export default LoginBox;

/*
    To do:
        DONE: Make it look like the AGEAS LOGIN PAGE
        DONE: console.log() the credentials out
        DONE: Watermark placeholders in Textboxes
        DONE: Forgot password link
        DONE: Header and Footer as re-usable components

        Upload to GitHub; send to M.
        Read about client vs server components.
*/