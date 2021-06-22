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
                            <p>Jag heter David Furby och är 23 år. Nyligen gjorde jag klart min utbildning i Java och
                                webbutvecklings på yrkeshögskolan i Mölndal, och söker just nu anställning. Jag har
                                studerat på Campus Mölndal i två år, och har bland annat jobbat med Java, JavaScript,
                                React, Vue, Native, PostgreSQL, Firebase, Spring Boot och MongoDB. Under studietiden har jag även jobbat med ett startupföretag som heter Krogis. Där jag har rollen att bygga deras
                                frontend. </p>
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <div className="container text-center">
                            <Image className="" src="/Krogis.png" fluid />
                        </div>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                        <div className="container text-center">
                            <Image className="" src="/Krogis.png" fluid />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default experience;