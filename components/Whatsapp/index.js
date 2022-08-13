import Image from "next/image";
import styles from '../../styles/Home.module.css'

export default function Whatsapp(){
  return(
    <div id="whatsapp" className={styles.whatsapp}>
        <i className="fab fa-whatsapp"></i>
        <a href="https://api.whatsapp.com/send?phone=+5491150575667&text=Hola%20Barbara!%20Quer%C3%ADa%20saber%20mas%20sobre%20tus%20productos%20y%20cursos!"
            target="_blank">
            <Image src="/images/redes/whatsapp.png" alt="link a whatsapp" width={65} height={65} />
        </a>
    </div>
  )
}