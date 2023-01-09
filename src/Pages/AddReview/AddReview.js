import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';
import PrivateHook from '../../PrivateHook/PrivateHook';
import ReviewTable from '../ReviewTable/ReviewTable';

const AddReview = () => {
  const { user } = useContext(AuthProvider)
  const [reviews, setReviews] = useState()

  PrivateHook('addReview')
  console.log(reviews)
  useEffect(() => {

    fetch(`https://server-site-11.vercel.app/reviews?email=${user?.email}`)

      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user?.email])

  const deletedReview = id => {

    const sure = window.confirm('Are you sure delete sercies')


    if (sure) {

      fetch(`https://server-site-11.vercel.app/reviews/${id}`, {

        method: 'DELETE',



      })

        .then(res => res.json())

        .then(data => {
          console.log(data)

          if (data.deletedCount > 0) {


            toast.success('delete Successfully')

            const remaing = reviews.filter(rev => rev._id !== id)

            setReviews(remaing)
          }
        })
    }

  }



  return (
    <Container>
      <Row>
        <Col className='mt-5' style={{ height: '100%' }}>

          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Service img</th>
                <th>User img</th>
                <th>Service Name</th>
                <th>Review </th>
                <th> UserName </th>
                <th>Email Name</th>
              </tr>
            </thead>

            <tbody>



              {

                reviews?.map(review => <ReviewTable

                  key={review._id}

                  review={review}

                  deletedReview={deletedReview}

                > </ReviewTable>)
              }
            </tbody>
          </Table>





        </Col>
      </Row>
    </Container>
  );
};

export default AddReview;

