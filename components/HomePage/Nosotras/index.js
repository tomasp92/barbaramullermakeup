import styles from '../../../styles/Home.module.css'
import FotosQuienesSomos from './FotosQuienesSomos';
import Reseñas from '../../Reseñas';

export default function Nosotras() {
    return(
        <div className={styles.seccion} id="Nosotras">
            <div>
                <h2>Nosotras</h2>
            </div>
            <div>
                <p>Bárbara Muller se formó en el estudio Lanusse-Matarazzo</p>
                <p>Desde ese entonces, sigue perfeccionándose con diferentes profesionales
                    y nutriéndose de las alumnas que asisten a sus cursos y seminarios.</p>
            </div>
            <div className={styles.QuienesSomos} id="QuienesSomos">
                <FotosQuienesSomos />
                <Reseñas />
            </div>
            
        </div>
    )
}
