
import styles from '../styles/Home.module.css'
import { Image } from 'react-bootstrap'
export default function Home() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        <div className="col-lg-8">
          <h1 className={`display-1 ${styles.title}`}>David Furby</h1>
          <p className={`${styles.desc}`}>Jag heter David Furby och är 23 år. Nyligen gjorde jag klart min utbildning i Java och
            webbutveckling på yrkeshögskolan i Mölndal, och söker just nu anställning. Jag har
            studerat på Campus Mölndal i två år, och har bland annat jobbat med Java, JavaScript,
            React, Vue, Native, PostgreSQL, Firebase, Spring Boot och MongoDB. På frågan om jag
            föredrar att jobba med frontend eller backend så svarar jag att jag tycker om att jobba
            med båda, men jag har mest erfarenhet av frontend. Under studietiden har jag även
            jobbat med ett startupföretag som heter Krogis, där jag har rollen att bygga deras
            frontend.
          </p>
          <p className={`${styles.desc}`}>
            Jag är en ödmjuk och engagerad person. När det kommer till samarbete och laganda är jag ofta den som ställer upp när andra behöver hjälp. Jag är också flexibel, både när de kommer till arbetsuppgifter och att inta olika roller i en grupp.

            Jag har höga ambitioner och arbetar fram till dess att jag slutfört min uppgift. Jag upplever mig själv som kreativ och får extra motivation i utmanande arbetsuppgifter där jag får möjlighet att experimentera med nya koncept. </p>
        </div>
        <div className={`${styles.imgContainer} col`}>
          <div className={styles.imgShadow}>
            <Image className={`${styles.img} img-fluid`} src="/Me.jpg" fluid />
            <div className="container">
              <div className={`${styles.profileContainer} row justify-content-center py-4`}>
                <p className="display-6">Profiler</p>
                <div className="col-auto" >
                  <a href="https://github.com/DavidFurby">
                    <Image className={`${styles.icon}`} alt="github" src="/Github.png" width={42} height={41.02} />
                  </a>
                </div>
                <div className="col-auto">
                  <a href="https://www.linkedin.com/in/david-furby-62a40b134/">
                    <Image className={`${styles.icon}`} alt="linkedIn" src="/LinkedIn.png" width={42} height={41.02} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
