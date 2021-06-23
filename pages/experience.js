import styles from '../styles/experience.module.css'

const experience = () => {
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                            <img className={`${styles.img} img-fluid`} alt="krogisExample"  src="/KrogisExample.png"  />
                      
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                            <a href="https://svenskparfym-b8f20.web.app/">
                            <img className={`${styles.img} img-fluid`}  alt="svenskParfymExample" src="/SvenskParfymExample.png"  />
                            </a>
                    </div>
                </div>
                <div className={styles.imgContainer}>
                    <div className={styles.imgShadow}>
                            <a href="https://yhkollen-bd838.firebaseapp.com/">
                            <img className={`${styles.img} img-fluid`}  alt="yhKollenExample" src="/YH-KollenExample.png"  />
                            </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default experience;