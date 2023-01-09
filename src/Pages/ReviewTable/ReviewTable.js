import React, { useEffect, useState } from 'react';
import PrivateHook from '../../PrivateHook/PrivateHook';

const ReviewTable = ({ review, deletedReview }) => {

    const { _id, email, message, service, name, photoURL } = review;

    const [serviche, setServiche] = useState({})

    PrivateHook('addReview')

    //     console.log(serviche)

    useEffect(() => {

        fetch(`https://server-site-11.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setServiche(data))

    }, [service])


    return (

        <tr>
            <td>

                <button onClick={() => deletedReview(_id)} style={{ border: 'none', }} >X</button>
            </td>
            <td colSpan={0}> {

                serviche?.img &&
                <img className='rounded Circle' style={{ whidth: '60px', height: '50px' }} src={serviche.img} alt="Avatar Tailwind CSS Component" />

            } </td>


            <td colSpan={0}> {


                <img className='rounded Circle' style={{ whidth: '60px', height: '50px' }} src={photoURL} alt="Avatar Tailwind CSS Component" />

            } </td>

            <td colSpan={0}>{serviche.name}  </td>
            <td colSpan={0} >{message}</td>
            <td colSpan={1} >{name}</td>
            <td colSpan={2} >{email}</td>
        </tr>

    );
};

export default ReviewTable;