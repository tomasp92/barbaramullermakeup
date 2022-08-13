import styles from '../../../styles/Home.module.css'
import GoogleMaps from "./GoogleMaps"
import Redes from './Redes';

export default function Contactame() {
    return(
        <div className={styles.seccion} id="Contactame">
            <h2> Contactame </h2>
            <div className={styles.contactame}>
                <Redes />
                <GoogleMaps />
            </div>
        </div>
    )
}