import styles from '../../styles/Home.module.css'
import Carrito from './Carrito';
import Logo from './Logo';
import NavigationMenu from './NavigationMenu';

export function NavBar() {
    return (
        <div className={styles.navegador}>
            <Logo />
            <div className={styles.top}>
                <NavigationMenu />
            </div>
            <Carrito />
        </div>
    )
}