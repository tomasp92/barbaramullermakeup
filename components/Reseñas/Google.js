import styles from "../../styles/Home.module.css";
import Image from 'next/image';

export default function Google() {
    return (
        <div className={styles.reseñasgoogle} id="reseñasgoogle">
            <div>
                <center>
                    <a href="https://www.google.com/maps/place/B%C3%A1rbara+M%C3%BCller+Make+Up+%26+Piel/@-34.5917187,-58.398522,17z/data=!4m8!3m7!1s0x95bcca986afe2305:0x18cff186327da5b4!8m2!3d-34.5917231!4d-58.3963333!9m1!1b1!16s%2Fg%2F11fxcg4h4y?hl=es-419"
                        target="_blank" rel="noreferrer">
                        <Image width={170} height={50} src="/images/reseñas/logo_google.png" />
                    </a>
                </center>

            </div>
            <div className={styles.fotosreseñas}>
                <a href="https://www.google.com/maps/place/B%C3%A1rbara+M%C3%BCller+Make+Up+%26+Piel/@-34.5917187,-58.398522,17z/data=!4m8!3m7!1s0x95bcca986afe2305:0x18cff186327da5b4!8m2!3d-34.5917231!4d-58.3963333!9m1!1b1!16s%2Fg%2F11fxcg4h4y?hl=es-419"
                    target="_blank" rel="noreferrer">
                    <Image width={500} height={200} src="/images/reseñas/reseñas_google.png" />
                </a>
            </div>
            <br />
            <div className={styles.fotosreseñas}>
                <a href="https://goo.gl/maps/iy8hWWSUUF9Cn1GbA" target="_blank" rel="noreferrer">
                    <Image width={500} height={200} src="/images/reseñas/reseña_google1.jpg" />
                </a>
            </div>
            <div className={styles.fotosreseñas}>
                <a href="https://goo.gl/maps/V49S2qdqkH8tiAeS8" target="_blank" rel="noreferrer">
                    <Image width={450} height={170} src="/images/reseñas/reseña_google2.png" />
                </a>
            </div>
            <br />
            <div className={styles.fotosreseñas}>
                <a href="https://goo.gl/maps/V49S2qdqkH8tiAeS8" target="_blank" rel="noreferrer">
                    <Image width={450} height={170} src="/images/reseñas/reseña_google3.jpg" />
                </a>
            </div>
            <br />
            <div className={styles.fotosreseñas}>
                <a href="https://goo.gl/maps/ScpwbVBNWWaUySoEA" target="_blank" rel="noreferrer">
                    <Image width={450} height={170} src="/images/reseñas/reseña_google4.jpg" />
                </a>
            </div>
        </div>
    )

}