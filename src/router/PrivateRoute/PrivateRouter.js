import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../Contexts/ContextProvider/ContextProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation;

    if(loading){

      return <div className='d-flex justify-content-center mt-5 ' > <Spinner  animation="border" variant="success" /></div>
  }

 if(user?.email){

    return children;
 }
    
 return <Navigate to='/login' state={{ from : location }} replace />

 
};

export default PrivateRoute;