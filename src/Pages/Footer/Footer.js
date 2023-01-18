import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGoogle, FaInstagram, FaTwitter, FaYoutube,  } from 'react-icons/fa';
import PrivateHook from '../../PrivateHook/PrivateHook';
import './Footer.css'
const Footer = () => {
    PrivateHook('footer')
    return (
        // <Container fluid>
        <Row>
         <Col className='mt-5'>
                <div style={{height:"100%" }}   className='bg-info  text-dark  ' >
                 
                 <div className='footer  pt-5 text-center my-3 d-flex flex-lg-row footer justify-content-evenly align-items-center'>
                   <span className='fs-5 text-black ' > 
                   <h2 className='fw-bold pb-4'>Follow Us</h2>
                   <FaGoogle />
                    <FaYoutube className='mx-3 '/>
                    <FaTwitter />
                    <FaInstagram className='mx-3 ' />
                   </span>
                   

               
               <span className=' fs-5'> 
               <h2 className='fw-bold mt-5'>Quick Links</h2>
                   <p >Information</p>
                   <p className='lh-1'>Pricing</p>
                   <p className='lh-1'>About us</p>
            
                 
                   </span>

                 <span>
                 <h2 className='fw-bold'>Get in Touch</h2>
                    <h5>Email: minnatulislam@gmail.com</h5>
                    <p>Phone: +8801759390115</p>
                 </span>
          
              </div>

              <h4 className='text-center pt-4 fs-5 '> ©Copyright minnatulislam86@gmail.com 2022 </h4>

              </div>

              
         
         </Col>
        </Row>
//  </Container>
    );
};

export default Footer;