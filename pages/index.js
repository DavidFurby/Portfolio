
import styles from '../styles/Home.module.css'
import Image from "next/image"

export default function Home() {
  return (
    <div>
        <div className={styles.flexContainer}>
        <div>
        <h1 className={styles.title}>David Furby</h1>
        <p>Jag heter David Furby och är 23 år. Nyligen gjorde jag klart min utbildning i Java och
          webbutvecklings på yrkeshögskolan i Mölndal, och söker just nu anställning. Jag har
          studerat på Campus Mölndal i två år, och har bland annat jobbat med Java, JavaScript,
          React, Vue, Native, PostgreSQL, Firebase, Spring Boot och MongoDB. På frågan om jag
          föredrar att jobba med frontend eller backend så svarar jag att jag tycker om att jobba
          med båda, men jag har mest erfarenhet av frontend. Under studietiden har jag även
          jobbat med ett startupföretag som heter Krogis. Där jag har rollen att bygga deras
          frontend</p>
          </div>
          <Image src="/Me.jpg" width={417} height={637}/>
          </div>
          </div>
  )
}
