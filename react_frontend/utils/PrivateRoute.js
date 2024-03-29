import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext'; // Correct import path for AuthContext

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(AuthContext); // Destructure user from context value
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? ( // If user exists, render children
                    children
                ) : ( // Otherwise, redirect to login page with current location preserved
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
