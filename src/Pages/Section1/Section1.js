import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';




import Card from 'react-bootstrap/Card';
const Section1 = () => {
    return (

       
        <Container>
            <Row className='mt-5 '>
                <Col >
                
                <Card className="text-wrap ">
         

            
        <img style={{height:'240px',width:'100%'}} className='w-50 mx-auto mt-3' src='https://miro.medium.com/max/828/1*1bko7wh4kpGP69ucVKBskw.webp' alt=' ' />
        <Card.Body className='text-center pb-4'>
          <Card.Title className='fs-2 '>Family Lawyer</Card.Title>
          <Card.Text className=' text-dark '>
          At FM Associates, a well renowned family law firm in Bangladesh we work to serve the best interest of our clients, by attending legal concerns towards an instrument that record analyze summerize organize debate and explain information that are illustrate non illustrate hardbound paperback jacketed non jacketed with forword introduction table of content index that are intended enlightenment enrichment enhanchment education of the human brain through the sensory route of vision, sometime touch...
        </Card.Text>

        

        <Button variant="info"> Read more ..</Button>

      
        
      </Card.Body>
        
         </Card>
         
                </Col>
            </Row>
        </Container>
         
            
            
    
      
  
    );
};

export default Section1;