import  { useEffect } from 'react';

const PrivateHook = (title) => {
  
    useEffect(()=>{
           
        document.title = `${title} - Lawyer`

    },[title])
};

export default PrivateHook;