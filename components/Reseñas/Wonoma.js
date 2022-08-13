import styles from "../../styles/Home.module.css";
import Image from 'next/image';

export default function Wonoma() {
    return (
        <div className={styles.reseñaswonoma} id="reseñaswonoma">
            <a href="https://mobile.wonoma.com/?redirect=buscador&filter=barbara_muller#/centro/386"
                target="_blank" rel="noreferrer">
                <Image width={450} height={500} src="/images/reseñas/reseñas_wonoma.png" />
            </a>
        </div>
    )
}