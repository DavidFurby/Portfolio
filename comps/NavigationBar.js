import Link from "next/link";
const NavigationBar = () => {
    return (
        <div>
            <nav className="navbar d-flex justify-content-end">
                <div className="nav">
                    <Link href="/">Om mig</Link>
                    <Link href="/experience">Erfarenheter</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
