
import styles from '../styles/Home.module.css'
import Image from "next/image"
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  return (
    <Container >
      <Row>
        <Col>
          <h1 className={styles.title}>David Furby</h1>
          <p style={{ maxWidth: "60rem" }}>Jag heter David Furby och är 23 år. Nyligen gjorde jag klart min utbildning i Java och
            webbutvecklings på yrkeshögskolan i Mölndal, och söker just nu anställning. Jag har
            studerat på Campus Mölndal i två år, och har bland annat jobbat med Java, JavaScript,
            React, Vue, Native, PostgreSQL, Firebase, Spring Boot och MongoDB. Under studietiden har jag även jobbat med ett startupföretag som heter Krogis. Där jag har rollen att bygga deras
            frontend. </p>
        </Col>
        <Col className={styles.imgContainer}>
          <div className={styles.imgShadow}>
            <Image className={styles.img} src="/Me.jpg" width={417} height={637} />
          </div>
        </Col>
      </Row>

    </Container>
  )
}
