import Image    from "next/image";
import styles   from "./AgeasFooterBox.module.css";

const AgeasFooterBox = () => {
    return (
        <div className={styles.FooterSolidColourBox}>
            <div id="FooterLinks" className={`${styles.FooterLinksContainer} mb-4`}>
                <a href="#" className={styles.FooterLink}>Privacy Policy</a>
                |
                <a href="#" className={styles.FooterLink}>Policy Documents</a>
                |
                <a href="#" className={styles.FooterLink}>T&Cs</a>
            </div>
            <Image src="/PaymentLogos.png" width={120} height={40} alt="Payment Logos" className={styles.PaymentLogosImage} />
            <p>ageas is a trading name of Ageas Retail Limited (Company Reg. No. 1324965) and Ageas Insurance Limited (Company Reg. No. 354568). Registered in England and Wales. Registered office: Ageas House, Hampshire Corporate Park, Eastleigh, Hampshire, SO53 3YA. ageas car, home and van insurance is arranged and administered by Ageas Retail Limited and underwritten by Ageas Insurance Limited, who also provide the claims service. Ageas Retail Limited is authorised and regulated by the Financial Conduct Authority, Financial Services Register No. 312468. Ageas Insurance Limited is authorised by the Prudential Regulation Authority and regulated by the Financial Conduct Authority and the Prudential Regulation Authority, Financial Services Register No. 202039.</p>
        </div>
    );
};

export default AgeasFooterBox;