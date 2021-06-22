import { Container, Col, Row, Image } from "react-bootstrap";
import styles from '../styles/experience.module.css'

const experience = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-between">
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <div className="container text-center">
                            <Image className="" src="/Krogis.png" fluid />
                            <Image className="w-50 mt-5" src="/KrogisExample.png" fluid />
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <div className="container text-center">
                            <Image className="" src="/Krogis.png" fluid />
                            <Image className="w-50 mt-5" src="/SvenskParfymExample.png" fluid />
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <div className="container text-center">
                            <Image className="" src="/Krogis.png" fluid />
                            <Image className="w-50 mt-5" src="/YH-KollenExample.png" fluid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default experience;