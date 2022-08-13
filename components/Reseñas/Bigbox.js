import styles from "../../styles/Home.module.css";
import Image from 'next/image';

export default function Bigbox(){
    return(
        <div className={styles.reseñasbigbox} id="reseñasbigbox">
                    <center>
                        <a href="https://www.bigbox.com.ar/regalos/mix/box-blend/barbara-muller-relax/"
                            target="_blank" rel="noreferrer">
                            <Image width={100} height={50} src="/images/reseñas/logo_bigbox.png" />
                        </a>
                    </center>
                    <div>
                        <a href="https://www.bigbox.com.ar/regalos/mix/box-blend/barbara-muller-relax/"
                            target="_blank" rel="noreferrer">
                            <Image width={400} height={130} src="/images/reseñas/reseñas_bigbox.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.bigbox.com.ar/regalos/mix/box-blend/barbara-muller-relax/"
                            target="_blank" rel="noreferrer">
                            <Image width={700} height={200} src="/images/reseñas/reseña_bigbox2.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.bigbox.com.ar/regalos/mix/box-blend/barbara-muller-relax/"
                            target="_blank" rel="noreferrer">
                            <Image width={700} height={350} src="/images/reseñas/reseña_bigbox1.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.bigbox.com.ar/regalos/mix/box-blend/barbara-muller-relax/"
                            target="_blank" rel="noreferrer">
                            <Image width={700} height={500} src="/images/reseñas/reseña_bigbox3.jpg" />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.bigbox.com.ar/regalos/bienestar/box-vitalite/barbara-muller-vitalite/"
                            target="_blank" rel="noreferrer">
                            <Image width={700} height={600} src="/images/reseñas/reseña_bigbox4.jpg" />
                        </a>
                    </div>
                </div>
    )
}