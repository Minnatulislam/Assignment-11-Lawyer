import React, { useContext } from 'react';
import { ButtonGroup, Col, Container, Row, Spinner } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';
import PrivateHook from '../../PrivateHook/PrivateHook';
import toast from 'react-hot-toast';
const Login = () => {
const {UserLogin , handlarGoogle, loading} = useContext(AuthProvider)
const navigate = useNavigate();
const location = useLocation();



const  from = location.state?.from?.pathname || '/';

       PrivateHook('login')
    const handlarSummit = event =>{

        event.preventDefault( )
         
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password)

        UserLogin(email, password)
        .then((result)=>{
              const user = result.user;
              console.log(user)
             
             
              const presentUser = {

                  email: user.email
              }

            fetch('https://genius-car-server-olive.vercel.app/jwt',{

               method:'POST',
               headers:{

                 'content-type': 'application/json'

               },

               body:JSON.stringify(presentUser)
            })

              .then(res => res.json())
              .then(data => {

                       toast.success('LocalStorage set token')
                  

                   localStorage.setItem('Token-nest', data.token)

                   navigate( from , { replace : true });
              })
        })

        .catch((error)=>{
            console.error(error)
        })

     }


      const googleLogin = ()=>{

        handlarGoogle()
        .then((result)=>{
            const user = result.user
            console.log(user)

            const presentUser = {

              email: user.email
          }

        fetch('https://genius-car-server-olive.vercel.app/jwt',{

           method:'POST',
           headers:{

             'content-type': 'application/json'

           },

           body:JSON.stringify(presentUser)
        })

          .then(res => res.json())
          .then(data => {

                   toast.success('LocalStorage set token')
              

               localStorage.setItem('Token-nest', data.token)

              
          })
        })

        .catch((error)=>{
            console.error(error)
        })
      }

      if(loading){

        return <div className='d-flex justify-content-center mt-5 ' > <Spinner  animation="border" variant="success" /></div>
    }
    
    return (
        <Container>
                 
        <Row className='mt-5 '>
            <Col lg="8" sm="12 " className=' ms-5 w-50 border-none rounded  justify-content-center' style={{height:'350px',backgroundColor:" #ee986852 ", }} >
            <Form  onSubmit={handlarSummit} >

          <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email </Form.Label>
                 <Form.Control type="email" name="email" placeholder="Enter email" />
           </Form.Group>

     <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
     
     </Form.Group>
   <Button variant="info" type="submit">
     Submit
</Button>

   <Link className='mt-2 text-decoration-none text-dark' to='/signup' > <p > Create New Accout</p></Link>
  
           <ButtonGroup vertical>
                <Button onClick={googleLogin }  className='mb-2' variant="outline-info"> <FaGoogle />  Google with login </Button> 
            </ButtonGroup>
  
  </Form>
             
            </Col>

          <Col >
          <img className='ms-5' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK41jj0FILL2LW82D4AT0OytOnRKpku-ZHjdI-fLa3&s' alt=''/>
          </Col>
        </Row> 
                
</Container>
    );
};

export default Login;