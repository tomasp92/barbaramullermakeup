import { NavBar } from './../NavBar/index';
import Footer from './../Footer/index';
import styles from '../../styles/Home.module.css'
import Whatsapp from '../Whatsapp';
import Head from 'next/head'

export default function AppWrapper({ children }) {
    return (
        <>
            <Head>
                <title>Barbar Müller Make up y Piel</title>
                <meta name="description" content="¿Buscas una profesional  de la belleza, el maquillaje y la limpieza facial? Si vivís por San Isidro o Recoleta no busques más. Bárbara Muller Makeup!" />
                <link rel="icon" href="/images/logo.png" /> 
            </Head>
            <main className={styles.body}>
                <div className={styles.content}>
                    <NavBar />
                    <div className={styles.main}>
                        {children}
                    </div>
                        <Whatsapp />
                        <Footer />
                </div>
            </main>
        </>
    )
}