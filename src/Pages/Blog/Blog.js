import React from 'react';
import PrivateHook from '../../PrivateHook/PrivateHook';

import Card from 'react-bootstrap/Card';
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
  
     PrivateHook('blog')

    return (
        
           <Container className='bg-light'>
               <Row> 
                <Col>
                
                <Card className='mt-5 ' style={{backgroundColor:" #ffb3ff", }}>
       
           <Card.Body>
          <Card.Title> 1. Difference between SQL and NoSQL ?</Card.Title>
          <Card.Text className='fs-5 text text-dark'>
          SQL is the programming language used to interface with relational databases.
           (Relational databases model data as records in rows and tables with logical 
           links between them). NoSQL is a class of DBMs that are non-relational and
            generally do not use SQL.
          </Card.Text>
         
        </Card.Body>
      </Card>


      <Card className='mt-5' style={{backgroundColor:" 	 #b3ffb3", }}>
       
       <Card.Body>
      <Card.Title> 2. What is JWT, and how does it work? </Card.Title>
      <Card.Text className='fs-5 text text-success'>
      JSON Web Token (JWT) is an open standard (RFC 7519) that defines a 
      compact and self-contained way for securely transmitting information
       between parties as a JSON object.
       This information can be verified and
        trusted because it is digitally signed.
      </Card.Text>
     
    </Card.Body>
  </Card>



  <Card className='mt-5' style={{backgroundColor:" #ffb3ff", }}>
       
       <Card.Body>
      <Card.Title> 3. What is the difference between javascript and NodeJS ?</Card.Title>
      <Card.Text  className='fs-5 text text-dark'>
      JavaScript is a simple programming language that
       can be used with any browser that has the JavaScript Engine installed. 
       Node. js, on the other hand,
       is an interpreter or execution environment for the JavaScript programming language. 
      </Card.Text>
     
    </Card.Body>
  </Card>



  <Card className='mt-5' style={{backgroundColor:" 	 #b3ffb3", }}>
       
       <Card.Body>
      <Card.Title> 4. How does NodeJS handle multiple requests at the same time ?</Card.Title>
      <Card.Text className='fs-5 text text-success'>
      How NodeJS handle multiple client requests? NodeJS
       receives multiple client requests and places them 
       into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS 
      has its own EventLoop which is an infinite loop that 
      receives requests and processes them. 
      </Card.Text>
     
    </Card.Body>
  </Card>
                </Col>
               </Row>
           </Container>
    );
};

export default Blog;