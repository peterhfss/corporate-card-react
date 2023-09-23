import { FaGithub , FaLinkedin} from 'react-icons/fa6';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footerContainer}>
            <ul className={styles.footerSocialMedia}>
                <li className={styles.footerSocialMediaItem}><FaGithub /></li>
                <li className={styles.footerSocialMediaItem}><FaLinkedin /></li>
            </ul>
        </footer>
    )
}

export default Footer;