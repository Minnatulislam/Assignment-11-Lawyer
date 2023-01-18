import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import PrivateHook from '../../PrivateHook/PrivateHook';
const ServiceCart = ({service}) => {

    const { _id, name, img, Price,discripe} = service

    PrivateHook('serviceCart')
    return (
        <Container>
        <Row>
          <Col className='mt-3 '>
        <Card style={{ width: '',height:'100%' , }}>
        <PhotoProvider>
        <PhotoView src={img} className="height-20px">
        <img src={img} style={{height:'200px', }}  alt="" />
      </PhotoView>
    </PhotoProvider>
      
      <Card.Body>
       <Card.Title> {name} </Card.Title>
        <Card.Text >
    
        {discripe?.length >100? discripe.slice(0,100) + '...'

     : discripe }

   </Card.Text>
    <p> Price : ${Price} </p>
       <Link  to={`/detailService/${_id}`}>  <Button variant="info" className= 'mb-0' >Details</Button></Link>
</Card.Body>
 </Card>
          </Col>
        </Row>
    </Container>
    );
};

export default ServiceCart;
