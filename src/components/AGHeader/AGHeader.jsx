import Image    from "next/image";
import styles   from "./AGHeader.module.css";

const AGHeader = ({ LogoImageURL }) => {
    return (
        <figure className={styles.BrandingBannerOuter}>
            <a href="">
                <Image src={LogoImageURL} className={styles.AgeasTextLogo} width={143} height={80} alt="Ageas Text Logo" />
            </a>
        </figure>
    );
};

export default AGHeader;