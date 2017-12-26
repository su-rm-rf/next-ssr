import Link from 'next/link'

const styles = {
    nav: {
        display: 'flex', justifyContent: 'space-around',
    }
}

const Header = () => (
    <nav style={ styles.nav }>
        <Link href="/">
            <a style={ styles.href }>Home</a>
        </Link>
        <Link href="/about">
            <a style={ styles.href }>About Page</a>
        </Link>
    </nav>
)

export default Header