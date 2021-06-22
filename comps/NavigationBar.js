import { Navbar, Nav } from "react-bootstrap";
import Link from "next/Link";
const NavigationBar = () => {
    return (
        <div>
            <Navbar className="d-flex justify-content-end">
                <Nav>
                    <Link href="/">Om mig</Link>
                    <Link href="/experience">Erfarenheter</Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavigationBar;
