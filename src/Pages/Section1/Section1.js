import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';




import Card from 'react-bootstrap/Card';
const Section1 = () => {
    return (

       
        <Container>
            <Row className='mt-5 '>
                <Col >
                
                <Card className="text-wrap ">
         

            
        <img style={{height:'200px',width:'100%'}} className='w-50 mx-auto mt-3' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbPMQS9rE8Izl-_OOpao2WFxWPIq5qBH8N_RVAYRk6_w&s' alt=' ' />
        <Card.Body>
          <Card.Title className='text-center'>Family Lawyer</Card.Title>
          <Card.Text className='fs-5 text-primary'>
          At FM Associates, a well renowned family law firm in Bangladesh we work to serve the best interest of our clients, by attending legal concerns towards a ...
        </Card.Text>

  
        <Button variant="primary"> Read more ..</Button>
      </Card.Body>
        
         </Card>
         
                </Col>
            </Row>
        </Container>
         
            
            
    
      
  
    );
};

export default Section1;