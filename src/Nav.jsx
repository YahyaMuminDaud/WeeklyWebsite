import styles from './Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>weekly.</a>
      <ul className={styles.links}>
        <li><a href="#how">How it works</a></li>
        <li><a href="#streak">The streak</a></li>
        <li><a href="#philosophy">Philosophy</a></li>
      </ul>
    </nav>
  )
}
