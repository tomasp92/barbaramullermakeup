import styles from '../../../styles/Home.module.css'

export default function GoogleMaps() {
    return (
        <div>
            <br />
            <center>
                <iframe
                    className={styles.iframe}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.4919901168937!2d-58.39852198533417!3d-34.59171866436927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca986afe2305%3A0x18cff186327da5b4!2sB%C3%A1rbara%20M%C3%BCller%20Make%20Up%20%26%20Piel!5e0!3m2!1ses-419!2sar!4v1618787988194!5m2!1ses-419!2sar"
                    allowFullScreen="" loading="lazy">
                </iframe>
            </center>
            <br />
        </div>
    )
}