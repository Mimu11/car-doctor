import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const location = useLocation();
    console.log(location.pathname)

    const { user, loading } = useContext(AuthContext);
    if (loading) {
        return <progress className="progress w-56"></progress>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login' replace></Navigate >
};

PrivateRoutes.propTypes = {

};

export default PrivateRoutes;