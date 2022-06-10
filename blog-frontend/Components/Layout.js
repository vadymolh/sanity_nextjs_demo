import Toolbar from './Toolbar';

const Layout = ({ children }) => {
    return (
        <>
        <Toolbar/>
            {children}
        </>
    )
}

export default Layout;