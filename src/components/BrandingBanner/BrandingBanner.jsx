import Image    from "next/image";
import styles   from "./BrandingBanner.module.css";

const BrandingBanner = () => {
    return (
        <figure className={styles.BrandingBannerOuter}>
            <a href="">
                <Image src="/AgeasTextLogo.svg" className={styles.AgeasTextLogo} width={143} height={80} alt="Ageas Text Logo" />
            </a>
        </figure>
    );
};

export default BrandingBanner;