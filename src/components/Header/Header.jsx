import styles from './Header.module.css'
import igniteLogo from '../../images/igniteLogo.svg'

function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo Ignite"/>
        </header>
    );
}

export default Header