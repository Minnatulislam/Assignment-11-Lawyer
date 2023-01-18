import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
const Carusol = () => {
    return (
        <Container>
        <Row>
          <Col>
          <Carousel className='py-5' >
      <Carousel.Item>
        <img
         style={{maxHeight:'500px'}}
          className="d-block  w-100"
          src="https://static.wixstatic.com/media/0eec1e_42b805f75e204a5da55ac234217707ce~mv2.jpg/v1/fill/w_925,h_616,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0eec1e_42b805f75e204a5da55ac234217707ce~mv2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>The Definition of Esquire</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{maxHeight:'500px'}}
          className="d-block   w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwdKABh26tp9j5SsGXMGfD2nJBbHMFo_Z9Eg&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Criminal Lawyer Job</h3>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{maxHeight:'500px'}}
          className="d-block w-100"
          src= "https://wset.com/resources/media/6ce1f723-794b-4ee5-ab16-162d33ad739c-medium16x9_GettyImages108348461.jpg?1605897320667"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Business Lawyer Job </h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

          </Col>
         
        </Row>
       </Container>
    );
};

export default Carusol;
// carusol