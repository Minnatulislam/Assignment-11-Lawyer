import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGoogle, FaTwitter, FaYoutube,  } from 'react-icons/fa';
import PrivateHook from '../../PrivateHook/PrivateHook';
import './Footer.css'
const Footer = () => {
    PrivateHook('footer')
    return (
        <Container fluid>
        <Row>
         <Col className='mt-5 '>
                <div style={{height:"100%" }}   className='bg-black   text-light rounded ' >
                 
                
                

                 <div className='footer  pt-2 gap-5 text-center my-3 d-flex flex-lg-row footer   justify-content-center align-items-center'>
                   <span className=' ' > 
                    
                   <FaGoogle className='me-2 fs-3 text-primary '  />
                    <FaYoutube className='me-2 fs-3 text-primary'/>
                    <FaTwitter className=' fs-3 text-primary' />
                   </span>

               
               <span className='  '> 
                   <p>Information</p>
                   <p>Pricing</p>
                   <p>About us</p>
                   <p>Jobs</p>
                 
                   </span>

                 
          
              </div>

              <h4 className='text-center pt-3 pb-1'> ©Copyright minnatulislam86@gmail.com 2022 </h4>

              </div>

              
         
         </Col>
        </Row>
 </Container>
    );
};

export default Footer;