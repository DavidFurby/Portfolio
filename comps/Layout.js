import Head from "next/Head"
import Footer from "./Footer";
import Navbar from "./Navbar";
const Layout = ({ children }) => {
    return (
    <div className="content">
        <Head>
            <title>Portfolio</title>
        </Head>
        <Navbar />
        {children}
        <Footer />
    </div>);
}

export default Layout;