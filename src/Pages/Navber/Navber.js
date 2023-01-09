import React, { useContext } from 'react';
import { Button, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';
const Navber = () => {
    const { user,  ligninOut} = useContext(AuthProvider)

    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home"> Lawyer  </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
               
            </Nav>
            <Nav>
          
             
                <Link className='text-decoration-none me-2 text-white' to = '/'> Home</Link>
                <Link className='text-decoration-none me-2 text-white' to='/blog'> Blog</Link>
               {
                  user?.email?  <>
                  <Link className='text-decoration-none me-2 text-white' to = '/addreview'> My review</Link>
                  <Link className='text-decoration-none me-2 text-white ' to = '/addservice'> AddService </Link>
                 
     
                   <Button onClick={ligninOut} variant="light" className='w-20% mt-2'>LogOut</Button>
                  </>
                  :
                <>      
                <Link className='text-decoration-none me-2 text-white ' to = '/login'> Login</Link>
                      
                  </>
              
               }

        
              
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Navber;