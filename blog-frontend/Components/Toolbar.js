import styles from '../styles/Toolbar.module.css'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'


export const Toolbar = () => {
    const {data: session} = useSession();
    console.log("SESSION",session);
    return (
        <div className={styles.main}>
            <div>
                {session && (<button onClick={() => signOut()}>Sign out</button>)}
            </div>
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