import { Image } from "react-bootstrap";
import styles from '../styles/experience.module.css'

const experience = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <div className="container text-center">
                            <Image className={styles.img} alt="krogisExample"  src="/KrogisExample.png" fluid />
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <div className="container text-center">
                            <Image className={styles.img} alt="svenskParfymExample" src="/SvenskParfymExample.png" fluid />
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <div className="container text-center">
                            <Image className={styles.img} alt="yhKollenExample" src="/YH-KollenExample.png" fluid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default experience;