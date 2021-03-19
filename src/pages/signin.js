import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '../components';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../constants/routes';

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const history = useHistory();

    // Firebase data from context
    const { firebase } = useContext(FirebaseContext);

    // Validate form inputs (email and password)
    const isInvalid = password === '' || email === '';

    const handleSignin = (event) => {
        event.preventDefault();

        // Firebase auth
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                // redirect to browse page
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmail('');
                setPassword('');
                setError(error.message);
            });
    };

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email Address"
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                        />

                        <Form.Input
                            placeholder="Password"
                            type="password"
                            value={password}
                            onChange={({ target }) => setPassword(target.value)}
                        />

                        <Form.Submit type="submit" disabled={isInvalid}>
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix?{' '}
                        <Form.Link to="/signup">Sign Up Now</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure
                        you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    );
}

export default Signin;
