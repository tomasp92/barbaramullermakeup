import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

function Logo() {
    return(
        <div className={styles.logo}>
            <Link href='/#' data-scroll className={styles.indexelement}>
                <a>
                    <Image id="logo" src="/images/logo.png" alt="Logo" width={50} height={50} />
                </a>
            </Link>
        </div>
    )
}

export default Logo