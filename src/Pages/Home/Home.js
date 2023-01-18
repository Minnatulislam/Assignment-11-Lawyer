import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

import PrivateHook from '../../PrivateHook/PrivateHook';
import Cart from '../Cart/Cart';
import Carusol from '../Carusol/Carusol';
import { BiRightArrowAlt,  } from "react-icons/bi";
import Section1 from '../Section1/Section1';
import Section2 from '../Section2/Section2';
        
import './Home.css'


const Home = () => {
  
   const services = useLoaderData([])
//    console.log(services)

    PrivateHook('home')



    return (
             
        <Container>
            <Row>
                <Col>
                
                <div>

       <Carusol></Carusol>


  <div className='prarend flex-sm-column' style={{ 
       position:'relative', height:'100%', width:"100%" }}>
     
      {
         services.map(servise => <Cart 
         
             key={servise._id}

             servise={servise}
         > </Cart>)
      }
      
      
    
      
     </div>
  
   
        
        

     <Link className='d-flex justify-content-center text-decoration-none my-4 ' to='/services'>
     <Button style={{ width:'150px'  }}  variant="info">See All <BiRightArrowAlt/> </Button>
        
         </Link>

    <Section1></Section1>

     <Section2></Section2>
</div>
                
                </Col>
            </Row>
        </Container>
    );
};

export default Home;