import styles from "../../styles/Home.module.css";
import Bigbox from "./Bigbox";
import Google from './Google';
import Wonoma from "./Wonoma";

export default function Reseñas() {
    return (
        <div className={styles.reseñas} id="reseñas">
            <h3 className={styles.titulo_reseñas}> Reseñas </h3>
            <br />
            <div className={styles.listadoreseñas} id="listadoreseñas">
                <Bigbox />
                <Google />
                <br /><br /><br />
                <Wonoma />
            </div>
        </div>
    )
}