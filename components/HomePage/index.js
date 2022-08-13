/* import Image from "next/image" */
import styles from '../../styles/Home.module.css'
import ImageSection from "./ImageSection"
import ProductosYServicios from './ProductosYServicios/index';
import Nosotras from './Nosotras/index';
import Contactame from './Contactame/index';

export default function HomePage(){
    return (
        <div id="content" className={styles.content}>
            <ImageSection />
            <div className={styles.mainContent}>
                <ProductosYServicios />
                <Nosotras />
                <Contactame />
                <br /> <br />
            </div>
        </div>
    )
}