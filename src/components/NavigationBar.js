import {Navbar, Container, Nav, NavbarBrand} from "react-bootstrap"

const NavigationBar = () => {
    return(
        <div>
            
        <Navbar variant="dark">
            <Container>
                <NavbarBrand>WEBFilm</NavbarBrand>
                <Nav>     
                    <Nav.Link href="#trending" className="NavLink">TRENDING</Nav.Link>
                    <Nav.Link href="#movie" className="NavLink">MOVIES</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
            
        </div>
    )
}

export default NavigationBar