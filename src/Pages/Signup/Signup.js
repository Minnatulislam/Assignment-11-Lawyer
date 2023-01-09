import React, { useContext } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';


import PrivateHook from '../../PrivateHook/PrivateHook';
const Signup = () => {

  const { handlarSignup, UserProfile, loading } = useContext(AuthProvider)

  PrivateHook('signup')
  const handlarSummit = event => {

    event.preventDefault()

    const form = event.target;
    const name = form.name.value;
    const PhotoURL = form.PhotoURL.value;
    const email = form.email.value;
    const password = form.password.value;



    handlarSignup(email, password)
      .then((result) => {
        const user = result.user

        console.log(user)
        toast.success('successfully your Signup')
        handlarProfileUpdate(name, PhotoURL)
        form.reset()

        const presentUser = {

          email: user.email
        }

        fetch('https://server-site-11.vercel.app/jwt', {

          method: 'POST',
          headers: {

            'content-type': 'application/json'

          },

          body: JSON.stringify(presentUser)
        })

          .then(res => res.json())
          .then(data => {


            toast.success(' Create Token from signup page')

            localStorage.setItem('Token-best', data.token)


          })
      })

      .catch((error) => {

        console.error(error)
      })
  }

  const handlarProfileUpdate = (name, PhotoURL) => {

    const profile = {

      displayName: name,
      photoURL: PhotoURL
    }

    return UserProfile(profile)
  }

  if (loading) {

    return <div className='d-flex justify-content-center mt-5 ' > <Spinner animation="border" variant="primary" /></div>
  }

  return (
    <Container>

      <Row className='mt-5 '>
        <Col lg="8" sm="12 " className=' ms-5 w-50 border border-4  bg-white ' style={{ height: '450px' }} >
          <Form onSubmit={handlarSummit} >

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>PhotoURL</Form.Label>
              <Form.Control type="PhotoURL" name="PhotoURL" placeholder="Enter photoURL" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter photoURL" />
            </Form.Group>




            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" />

            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>


          </Form>

        </Col>

        <Col >
          <img className='ms-5 ' src='https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000' alt='' />
        </Col>
      </Row>

    </Container>
  );
};

export default Signup;