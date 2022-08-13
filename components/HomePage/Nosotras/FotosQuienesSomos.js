import Image from "next/image"
import styles from '../../../styles/Home.module.css'

export default function FotosQuienesSomos() {
    return (
        <div className={styles.texto} id="texto">
            <div className={styles.imagenesnosostras} id="imagenesnosostras">
                <div>
                    <Image src="/images/productos/otras.jpeg" width={250} height={180}/>
                </div>
                <div>
                    <Image src="/images/productos/charlaprevia.jpeg" width={250} height={180}/>
                </div>
                <div>
                <br />
                    <Image src="/images/productos/uñas.jpeg" width={250} height={250}/>
                </div>
                <div>
                    <Image src="/images/productos/automaquillaje2.jpeg" width={260} height={190}/>
                </div>
                <div>
                    <br />
                    <Image src="/images/productos/trabajando2.jpg" width={250} height={520}/>
                </div>
                <div>
                    <Image src="/images/productos/elementos.jpeg" width={250} height={260}/>
                    <Image src="/images/productos/trabajando.jpg" width={250} height={260}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}