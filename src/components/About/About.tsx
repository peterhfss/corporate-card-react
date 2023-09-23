import styles from './About.module.scss';

const About = () => {
    return(
        <div className={styles.aboutContainer}>
            <h4 className={styles.aboutTitle}>About</h4>
            <p className={styles.aboutDescription}>I am a frontend developer and also have 
                an interest in backend and mobile.
                Always searching for new things to learn.</p>
        </div>

    )
}

export default About;