import styles from '../styles/Toolbar.module.css'
import Link from 'next/link'

export const Toolbar = () => {
    return (
        <div className={styles.main}>
            <div>
                <Link href="/">
                <a>Home</a>
                </Link>
            </div>
            <div>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </div>
            <div>
                <Link href="https://github.com/vadymolh">
                    <a>Contact</a>
                </Link>
            </div>
        </div>
    );
}

export default Toolbar;