import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = null
    if (!user) {
        //navigate
        return <Navigate to='/login'></Navigate>
    }
    // else
    return (children);
};

export default PrivateRoute;