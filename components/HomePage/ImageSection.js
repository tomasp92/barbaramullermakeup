import Image from "next/image"
import styles from '../../styles/Home.module.css'

export default function ImageSection() {
    return(
        <>
            <div id="home">
                <Image className={styles.homeImage} id="homeImage" src="/images/inicio.jpg" alt="imagen de pinceles, inicio de la pagina" layout='fill' objectFit='cover' />
            </div>

            <style jsx>{`
                #home {
                    width: 100%;
                    height: 60%;
                    top: 0;
                    left: 0;
                    right: 0;
                    position: absolute;
                }
                `}</style>
        </>
    )
}