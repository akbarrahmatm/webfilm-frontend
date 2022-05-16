import { Nav, Navbar, NavbarBrand } from "react-bootstrap"

const Footer = () => {
    return (
        <div>
            <Navbar className="bg-dark text-white" variant="dark">
                <p className="p-2 m-auto footerText">Copyright 2022 | Akbar Rahmat Mulyatama</p>
            </Navbar>
        </div>
    )
}

export default Footer