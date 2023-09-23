import styles from './Interests.module.scss';

const Interests = () => {
    return(
        <div className={styles.interestsContainer}>
            <h4 className={styles.interestsTitle}>Interests</h4>
            <p className={styles.interestsDescription}>Geek,gamer,pop culture,travel.
                Music,podcats and books.
                Movies and TV series.
                Game Development.</p>
        </div>

    )
}

export default Interests;