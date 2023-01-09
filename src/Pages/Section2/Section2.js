import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Section2 = () => {
    return (
        
        <Container>
            <Row className='mt-5 pb-5 '  style={{backgroundColor:'lightGreen'}} >
                    <h3 className="text-center mb-2  w-50 mx-auto pb-3 "> Case Interview Prep ... </h3>
                <Col lg="8" sm="12 ">
        
                 <img style={{height:'200px'}}  className='w-100'  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNL9bzz2G78nqcbFQ1nkL-EUDlHz7E2wHnfE5yqXAQ5w&s' alt='' />

                </Col>

                <Col>
                     <h3>   Case Interview Prep </h3>
              <p className='fs-5  '> In a case interview, you'll need to identify possible causes of the client's problem and then ask questions and do analysis to identify the root cause. Once you ... </p>
                 </Col>
            </Row>
        </Container>
    );
};

export default Section2;