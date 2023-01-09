import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ImUser } from "react-icons/im";
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';
import toast from 'react-hot-toast';
import PrivateHook from '../../PrivateHook/PrivateHook';


const DetailService = () => {
  const catagories = useLoaderData([])

  PrivateHook('detail service')

  const { user } = useContext(AuthProvider)

  const { _id, name, img, Price, discripe } = catagories


  const handlarSumited = event => {

    event.preventDefault();

    const form = event.target
    const message = form.message.value;
    const email = user?.email || 'usrester';
    const name = user?.displayName || 'unUser';
    const photoURL = user?.photoURL || 'unUser';
    const reviews = {

      service: _id,
      message,
      email,
      name,
      photoURL

    }



    fetch('https://server-site-11.vercel.app/reviews', {

      method: 'POST',

      headers: {
        'content-type': 'application/json'
      },

      body: JSON.stringify(reviews)
    })

      .then(res => res.json())

      .then(data => {

        if (data.acknowledged) {

          toast.success(' your review send the database', data)
          form.reset()
        }
      })
  }

  return (
    <Container>
      <Row className='mt-5 '>
        <Col>

          <Card className="text-wrap  p-5">

            <Card.Text>

              <img style={{ height: '300px' }} className='w-100 ' src={img} alt=' ' />
            </Card.Text>
            <Card.Title className='text-center'> {name} </Card.Title>
            <Card.Text className='fs-5 text-primary'>

              {discripe}

            </Card.Text>

            <p>
              Price : ${Price}
            </p>

          </Card>

          <div className='mt-5 mb-5 border border-3'>
            <h4 className='text-center mt-2'> Add Review </h4>


            <form onSubmit={handlarSumited} >
              <div className=' d-flex justify-content-center'>
                <input style={{ height: '70px' }} className=' w-75  my-5 py-2 mb-2 ps-2' type="text" name='message' placeholder="Write your Comment here" />
              </div>
              <p style={{ marginLeft: '150px', marginTop: '5px' }} >




                {
                  user?.email ? <Button as="input" type="submit" value="Submit" />

                    : <>

                      <Button variant="primary" >Submit</Button>

                    </>


                }


              </p>
            </form>




            <div className='d-flex bg-primary justify-content-between p-2 align-items-center rounded  my-5 w-50 mx-auto'>
              <span className='text-white'>

                {
                  user?.displayName
                }
              </span>

              <span>
                {
                  user?.email ?
                    <>
                      <Image

                        roundedCircle
                        style={{ width: '50px' }}
                        src={user?.photoURL}

                      >

                      </Image>
                    </>

                    : <ImUser className='  fs-3 text'></ImUser>

                }
              </span>
            </div>


          </div>





        </Col>
      </Row>
    </Container>
  );
};

export default DetailService;

//details