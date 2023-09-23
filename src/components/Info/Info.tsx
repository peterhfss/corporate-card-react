import About from '../About/About';
import Button from '../Button/Button';
import Interests from '../Interests/Interests';
import styles from './Info.module.scss';

const Info = () => {
    return (
        <div className={styles.infoContainer}>
            <h4 className={styles.infoTextName}>Pedro Henrique Francelino</h4>
            <h5 className={styles.infoTextRole}>Frontend Developer</h5>
            <Button />
            <div className={styles.infoAboutInterests}>
                <About />
                <Interests />
            </div>
        </div>
    )
}

export default Info;