// import React from 'react';
import { Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { Home, Browse, Signin, Signup } from './pages';

function App() {
    const user = {};
    return (
        <>
            <Switch>
                {/* Home Route */}
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.HOME}
                    exact
                >
                    <Home />
                </IsUserRedirect>

                {/* Browse */}
                <ProtectedRoute user={user} path={ROUTES.BROWSE}>
                    <Browse />
                </ProtectedRoute>

                {/* Signup */}
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.SIGN_UP}
                    exact
                >
                    <Signup />
                </IsUserRedirect>

                {/* Sign in */}
                <IsUserRedirect
                    user={user}
                    loggedInPath={ROUTES.BROWSE}
                    path={ROUTES.SIGN_IN}
                    exact
                >
                    <Signin />
                </IsUserRedirect>
            </Switch>
        </>
    );
}

export default App;
