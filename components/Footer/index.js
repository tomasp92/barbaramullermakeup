import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Footer(){
    return(
      <footer className={styles.footer} > 
        <div className={styles.misdatos} id="misdatos">
          <a href="https://www.linkedin.com/in/tomaspalau/" target="_blank" rel="noreferrer">
            Pagina web diseñada por Tomás Palau Posse{' '}
            <Image src="/images/redes/linkedin2.png" alt="linkedin" width={20} height={20} /></a>
        </div>
      </footer>
      )
}