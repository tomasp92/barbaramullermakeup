import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function NavigationMenu() {
    return (
        <>
            <nav className={styles.navMenu}>
                <ul id="menuDesplegable" className={styles.menuDesplegable}>
                    <li>
                        <Link href="/#" data-scroll scrollSmooth className={styles.indexelement}><a>Inicio</a></Link>
                    </li>
                    <li>
                        <Link id="acursos" href="/#NuestroEstudio" data-scroll scrollSmooth className={`${styles.indexelement} ${styles.acursos}`}><a>Nosotras</a></Link>
                    </li>
                    <li>
                        <Link href="productos" className={styles.indexelement}><a>Productos</a></Link>
                    </li>
                    <li>
                        <Link href="/#Contactame" className={styles.indexelement} data-scroll scrollSmooth><a>Contactame</a></Link>
                    </li>
                </ul>
            </nav>
            <style jsx>{`
                a{
                    padding: 5px 1rem;
                    text-decoration: none;
                    color: white
                    display: block;
                    color: #c7c7c7;
                    border-bottom:  5px solid transparent;
                    transition: all 400 ms ease;
                }
                a:hover{
                    border-bottom: 5px solid #c7c7c7;
                    background: 1f1f1f;
                  }
                  
            `}</style>
        </>
    )
}