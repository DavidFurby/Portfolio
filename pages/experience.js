import styles from '../styles/experience.module.css'
import { Image } from 'react-bootstrap';
const experience = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <Image className={`${styles.img}`} alt="krogisExample" src="/KrogisExample.png" fluid />

                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <a href="https://svenskparfym-b8f20.web.app/">
                            <Image className={`${styles.img}`} alt="svenskParfymExample" src="/SvenskParfymExample.png"  fluid/>
                        </a>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <a href="https://yhkollen-bd838.firebaseapp.com/">
                            <Image className={`${styles.img}`} alt="yhKollenExample" src="/YH-KollenExample.png" fluid />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default experience;