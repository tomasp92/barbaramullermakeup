import Image from "next/image"
import styles from '../../../styles/Home.module.css'

export default function Redes() {
    return (
        <>
            <div className={styles.redesparent}>
                <h4>Seguinos en redes: </h4>
                <div className={styles.redes}>
                    <a href="https://www.instagram.com/barbaramullermakeup/" target="_blank" rel="noreferrer">
                        <Image className={styles.ig} width={50} height={50} id="ig" alt="hipervinculo a instagram" src="/images/redes/instagram.png" />
                    </a>
                    <a href="http://www.facebook.com/bebumuller" target="_blank" rel="noreferrer">
                        <Image className={styles.fb} width={70} height={70} id="fb" alt="hipervinculo a facebook" src="/images/redes/facebook.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/b%C3%A1rbara-m%C3%BCller-429987b2/" target="_blank" rel="noreferrer">
                        <Image className={styles.in} width={70} height={70} id="in" alt="hipervinculo a linkedin" src="/images/redes/linkedin.png" />
                    </a>
                </div>
                <div></div>
                <br />
            </div>
            <style jsx>{`
                a{
                    padding: 10px;
                }
            `}</style>
        </>
    )
}