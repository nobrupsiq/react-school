import styles from './Header.module.css'
import Logo from '../assets/Logo.svg'

export function Header() {
  return (
    <>
      <header className={styles.container}>
        <img src={Logo} alt='Logo da aplicação' />
      </header>
    </>
  )
}