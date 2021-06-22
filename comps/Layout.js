import Footer from "./Footer";
import Navbar from "./NavigationBar";
const Layout = ({ children }) => {
    return (
        <div className="content">
         
                <Navbar />
                {children}
                < Footer />
        </div>);
}

export default Layout;