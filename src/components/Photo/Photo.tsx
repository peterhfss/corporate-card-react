import photoProfile from '../../assets/profile.jpg';
import styles from './Photo.module.scss';

const Photo = () => {
    return(
        <div>
            <img src={photoProfile} alt="Photo profile"  className={styles.imageContainer}/>
        </div>
    )
}

export default Photo;