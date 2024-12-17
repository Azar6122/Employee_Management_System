import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import "./Header.css";


const Header =() =>{
    return(
        <>
            <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand to="/"><strong>Employee Management System</strong></Navbar.Brand>
                <Nav className='ml-auto'>
                <Nav.Link as={Link} to="/" className="Nav-link">Employees</Nav.Link>
                <Nav.Link as={Link} to="/employee" className="Nav-link">Post Employees</Nav.Link>
                </Nav>
            </Container>
            </Navbar>
        
        </>
    )
}

export default Header;