import Link from "next/Link"

const Navbar = () => {
    return (
        <nav>
            <Link href="/">
                <a>Om mig </a>
            </Link>
            <Link href="/experience">
                <a>Erfarenhet </a>
            </Link>
            <Link href="/education">
                <a>Utbildning </a>
            </Link>
        </nav>
    );
};

export default Navbar;
