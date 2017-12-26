import Header from '../components/header'

const styles = {
    layout: {
        margin: 20, padding: 20, border: '1px solid #ddd'
    }
}

const Layout = (props) => (
    <div style={ styles.layout }>
        <Header />
        { props.children }
    </div>
)

export default Layout