import { MdEmail } from 'react-icons/md'
import styles from './Button.module.scss';

const Button = () => {
    return(
            <button className={styles.buttonContainer}><MdEmail />Email</button>
    )
}

export default Button;