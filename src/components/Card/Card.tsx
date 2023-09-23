import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import Photo from '../Photo/Photo';
import styles from './Card.module.scss';

const Card = () => {
    return(
        <div className={styles.cardContainer}>
            <Photo />
            <Info />
            <Footer />
        </div>
    )
}

export default Card;