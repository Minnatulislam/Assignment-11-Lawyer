import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddReview from "../../Pages/AddReview/AddReview";
import AddService from "../../Pages/AddService.js/AddService";

import Blog from "../../Pages/Blog/Blog";
import DetailService from "../../Pages/DetailService/DetailService";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";
import Signup from "../../Pages/Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRouter";



export const router = createBrowserRouter([


  {
    path: '/', element: <Main> </Main>, children: [

      {
        path: '/', element: <Home></Home>,
        loader: () => fetch('https://server-site-11.vercel.app/service')
      },


      { path: '/login', element: <Login></Login> },

      { path: '/signup', element: <Signup></Signup> },
      { path: '/blog', element: <Blog></Blog> },
      { path: '/services', element: <Services></Services> },
      { path: '/addreview', element: <PrivateRoute> <AddReview></AddReview> </PrivateRoute> },



      {
        path: '/detailService/:id', element: <DetailService></DetailService>,
        loader: ({ params }) => fetch(`https://server-site-11.vercel.app/services/${params.id}`)
      },

      {
        path: '/addservice', element: <PrivateRoute><AddService> </AddService> </PrivateRoute>


      }]
  }


])
